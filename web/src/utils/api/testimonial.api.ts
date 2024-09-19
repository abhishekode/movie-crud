import { MongoResponse } from '@/constant/interfaces';
import {
  AdminPopulateResponse,
  api,
  handleRequest,
  withAuthorization,
} from './index';

export interface TestimonialsDto {
  name: string;
  comments: string;
  isActive?: boolean;
  rating: number;
  featuredImage: File;
}
export interface FilterTestimonialQuery {
  question?: string;
  isActive?: boolean;
  page?: number;
  size?: number;
}
export interface ITestimonial extends MongoResponse {
  name: string;
  comments: string;
  isActive: boolean;
  rating: number;
  admin: AdminPopulateResponse;
}

export interface ITestimonialResponse {
    testimonials: ITestimonial[];
    count: number;
  }
const pathPrefix = 'testimonials';

export const TestimonialsAPI = {
  addNew: (data: FormData) =>
    handleRequest(api.post(`/${pathPrefix}`, data, withAuthorization)),

  getAll: (query?: FilterTestimonialQuery) =>
    handleRequest(api.get(`/${pathPrefix}`, { params: query })),

  deleteById: (id: string) =>
    handleRequest(api.delete(`${pathPrefix}/${id}`, withAuthorization)),

  getOne: (id: string) => handleRequest(api.get(`/${pathPrefix}/${id}`)),

  updateById: (id: string, data: Partial<TestimonialsDto>) =>
    handleRequest(api.patch(`${pathPrefix}/${id}`, data, withAuthorization)),
};
