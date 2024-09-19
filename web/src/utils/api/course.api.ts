import { MongoResponse } from '@/constant/interfaces';
import {
  AdminPopulateResponse,
  api,
  handleRequest,
  withAuthorization,
  withAuthorizationFormData,
} from './index';

export interface ICourse extends MongoResponse {
  title: string;
  description: string;
  featuredImage: string;
  isActive: boolean;
  slug: string;
  admin: AdminPopulateResponse;
}

export interface ICourseResponse {
  courses: ICourse[];
  count: number;
}

export interface CourseDto {
  title: string;
  description: string;
  featuredImage: File;
  isActive?: boolean;
}
export interface FilterCourseQuery {
  title?: string;
  isActive?: boolean;
  page?: number;
  size?: number;
}
const pathPrefix = 'courses';

export const CourseAPI = {
  addNew: (data: FormData) =>
    handleRequest(api.post(`/${pathPrefix}`, data, withAuthorizationFormData)),

  getAll: (query?: FilterCourseQuery) =>
    handleRequest(api.get(`/${pathPrefix}`, { params: query })),

  deleteById: (id: string) =>
    handleRequest(api.delete(`${pathPrefix}/${id}`, withAuthorization)),

  getOne: (slug: string) => handleRequest(api.get(`/${pathPrefix}/${slug}`)),

  updateById: (id: string, data: FormData) =>
    handleRequest(
      api.patch(`${pathPrefix}/${id}`, data, withAuthorizationFormData),
    ),
};
