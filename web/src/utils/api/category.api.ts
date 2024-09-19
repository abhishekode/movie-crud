import { MongoResponse } from '@/constant/interfaces';
import {
  api,
  handleRequest,
  withAuthorization,
  withAuthorizationFormData,
} from './index';

export interface ICategoryResponse extends MongoResponse {
  name: string;
  categoryImage: string;
}
export interface CreateCategoryDto {
  name: string;
  categoryImage: File;
}

const pathPrefix = 'category';

export const CategoryAPI = {
  addNew: (data: FormData) =>
    handleRequest(api.post(`/${pathPrefix}`, data, withAuthorizationFormData)),

  getAll: () => handleRequest(api.get(`/${pathPrefix}`)),
  getOne: (id: string) => handleRequest(api.get(`/${pathPrefix}/${id}`)),

  updateById: (id: string, data: FormData) =>
    handleRequest(
      api.put(`${pathPrefix}/${id}`, data, withAuthorizationFormData),
    ),
  deleteById: (id: string) =>
    handleRequest(api.delete(`${pathPrefix}/${id}`, withAuthorization)),
};
