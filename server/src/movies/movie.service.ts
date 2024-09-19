import { Injectable, NotFoundException } from "@nestjs/common";
import type {
  CreateMovieDto,
  FilterMovieQuery,
  UpdateMovieDto,
} from "./dto/create-movie.dto";
import { InjectModel } from "@nestjs/mongoose";
import type { FilterQuery, Types } from "mongoose";
import { Model } from "mongoose";
import type { IMovie } from "./movie.schema";
import { getPaginationOptions, sendResponse } from "src/utils/commonMethods";
import { CloudinaryService } from "src/utils/cloudinary";

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel("Movie")
    private readonly movieModel: Model<IMovie>,
    private cloudinaryService: CloudinaryService
  ) {}

  private async getMovieById(movieId: Types.ObjectId) {
    const movie = this.movieModel
      .findById(movieId)
      .populate("author", "email name");
    if (!movie) {
      throw new NotFoundException("Movie not found!");
    }
    return movie;
  }

  async create(
    createMovieDto: CreateMovieDto,
    admin: Types.ObjectId,
    file: Express.Multer.File
  ) {
    let poster = "";

    if (file?.originalname) {
      const images = await this.cloudinaryService.uploadImage(file, "poster");
      poster = images.url;
    }
    const newMovie = new this.movieModel({
      ...createMovieDto,
      poster,
      author: admin,
    });
    await newMovie.save();
    const data = sendResponse({
      status: true,
      result: newMovie,
      message: "Movie created successfully",
    });
    return data;
  }

  async findAll(query: FilterMovieQuery, page = 1, size = 10) {
    const filter = this.filterMovies(query);
    const { skip, limit } = getPaginationOptions(page, size);
    const [movies, count] = await Promise.all([
      this.movieModel
        .find(filter)
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 })
        .populate("author", "email name"),
      this.movieModel.countDocuments(filter),
    ]);

    const data = sendResponse({
      status: true,
      result: { movies, count },
      message: "Movies fetched successfully",
    });
    return data;
  }

  async findOne(id: Types.ObjectId) {
    const movie = await this.getMovieById(id);

    const data = sendResponse({
      status: true,
      result: movie,
      message: "movie fetched successfully",
    });
    return data;
  }

  async update(
    id: Types.ObjectId,
    updateDto: UpdateMovieDto,
    file: Express.Multer.File
  ) {
    const movie = await this.getMovieById(id);
    let poster = "";

    if (file?.originalname) {
      const images = await this.cloudinaryService.uploadImage(file, "poster");
      poster = images.url;
      movie.poster = poster;
    }
    Object.assign(movie, updateDto);
    await movie.save();

    const data = sendResponse({
      status: true,
      result: movie,
      message: "movie update successfully",
    });
    return data;
  }

  async remove(id: Types.ObjectId) {
    await this.getMovieById(id);
    await this.movieModel.findByIdAndDelete(id);

    const data = sendResponse({
      status: true,
      message: "movie updated successfully",
    });
    return data;
  }

  private filterMovies(filter: FilterMovieQuery): FilterQuery<IMovie> {
    const query: FilterQuery<IMovie> = {};

    if (filter.title !== undefined) {
      query.title = { $regex: filter.title, $options: "i" };
    }

    if (filter.isActive) {
      query.isActive = filter.isActive;
    }
    if (filter.publishing_year) {
      query.publishing_year = { $gte: filter.publishing_year };
    }

    return query;
  }
}
