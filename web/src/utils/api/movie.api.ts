import { MongoResponse } from "@/constant/interfaces";
import {
  AdminPopulateResponse,
  api,
  handleRequest,
  createAuthorizationHeader,
  createAuthorizationFormDataHeader,
} from "./index";

export interface MovieDto {
  title: string;
  featuredImage: File;
  isActive?: boolean;
	publishing_year: number;
	poster: File;
}
export interface FilterMovieQuery {
  title?: string;
  isActive?: boolean;
  page?: number;
  size?: number;
}
export interface IMovie extends MongoResponse {
  title: string;
  featuredImage: File;
  isActive?: boolean;
	publishing_year: number;
	poster: string;
  author: AdminPopulateResponse;
}

export interface IMovieResponse {
  movies: IMovie[];
  count: number;
}
const pathPrefix = "movies";

export const MovieAPI = {
  addNew: (data: FormData) =>
    handleRequest(
      api.post(`/${pathPrefix}`, data, createAuthorizationFormDataHeader())
    ),

  getAll: (query?: FilterMovieQuery) =>
    handleRequest(
      api.get(`/${pathPrefix}`, {
        params: query,
        ...createAuthorizationHeader(),
      })
    ),

  deleteById: (id: string) =>
    handleRequest(
      api.delete(`${pathPrefix}/${id}`, createAuthorizationHeader())
    ),

  getOne: (id: string) => handleRequest(api.get(`/${pathPrefix}/${id}`, createAuthorizationHeader())),

  updateById: (id: string, data: FormData) =>
    handleRequest(
      api.put(
        `${pathPrefix}/${id}`,
        data,
        createAuthorizationFormDataHeader()
      )
    ),
};
