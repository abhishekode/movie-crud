import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	Delete,
	UseGuards,
	Request,
	Query,
	UseInterceptors,
	UploadedFile,
	Put,
} from '@nestjs/common';
import { MoviesService } from './movie.service';
import {
	CreateMovieDto,
	FilterMovieQuery,
	UpdateMovieDto,
} from './dto/create-movie.dto';
import {
	ApiBearerAuth,
	ApiConsumes,
	ApiResponse,
	ApiTags,
} from '@nestjs/swagger';
import {
	BadRequestResponse,
	NotFoundResponse,
} from 'src/constants/common.swagger';
import { Roles } from 'src/auth/roles.decorator';
import { UserRole } from 'src/constants/common.interface';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { convertStringToObjectId } from 'src/utils/commonMethods';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('movies')
@ApiTags('movies')
@ApiResponse({
	status: 404,
	description: 'Not Found',
	type: NotFoundResponse,
})
@ApiResponse({
	status: 400,
	description: 'Bad Request',
	type: BadRequestResponse,
})
export class MovieController {
	constructor(private readonly moviesService: MoviesService) {}

	@Post()
	@ApiBearerAuth()
	@Roles(UserRole.Client, UserRole.Admin)
	@UseGuards(AuthGuard, RolesGuard)
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FileInterceptor('poster'))
	create(
		@Body() createMovieDto: CreateMovieDto,
		@Request() req,
		@UploadedFile() file: Express.Multer.File
	) {
		const admin = req.user.id;
		return this.moviesService.create(createMovieDto, admin, file);
	}

	@Get()
	@ApiBearerAuth()
	@Roles(UserRole.Client, UserRole.Admin)
	@UseGuards(AuthGuard, RolesGuard)
	findAll(@Query() query: FilterMovieQuery) {
		const { page, size } = query;
		return this.moviesService.findAll(query, page, size);
	}

	@Get(':id')
	@ApiBearerAuth()
	@Roles(UserRole.Client, UserRole.Admin)
	@UseGuards(AuthGuard, RolesGuard)
	findOne(@Param('id') id: string) {
		const movieId = convertStringToObjectId(id);
		return this.moviesService.findOne(movieId);
	}

	@Put(':id')
	@ApiBearerAuth()
	@Roles(UserRole.Client, UserRole.Admin)
	@UseGuards(AuthGuard, RolesGuard)
	@ApiConsumes('multipart/form-data')
	@UseInterceptors(FileInterceptor('poster'))
	update(
		@Param('id') id: string,
		@Body() updateMovieDto: UpdateMovieDto,
		@UploadedFile() file: Express.Multer.File
	) {
		const movieId = convertStringToObjectId(id);
		return this.moviesService.update(movieId, updateMovieDto, file);
	}

	@Delete(':id')
	@ApiBearerAuth()
	@Roles(UserRole.Client, UserRole.Admin)
	@UseGuards(AuthGuard, RolesGuard)
	remove(@Param('id') id: string) {
		const movieId = convertStringToObjectId(id);
		return this.moviesService.remove(movieId);
	}
}
