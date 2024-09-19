import { MongoResponse } from '@/constant/interfaces';
import {
  AdminPopulateResponse,
  api,
  handleRequest,
  withAuthorization,
} from './index';

interface FAQsDto {
  question: string;
  answer: string;
  isActive?: boolean;
}
export interface FilterFaqQuery {
  question?: string;
  isActive?: boolean;
  page?: number;
  size?: number;
}

export interface IFaqs extends MongoResponse {
  question: string;
  answer: string;
  isActive: boolean;
  admin: AdminPopulateResponse;
}

export interface IFaqsResponse {
  faqs: IFaqs[];
  count: number;
}
const pathPrefix = 'faqs';

export const FaqsAPI = {
  addNew: (data: FAQsDto) =>
    handleRequest(api.post(`/${pathPrefix}`, data, withAuthorization)),

  getAll: (query?: FilterFaqQuery) =>
    handleRequest(api.get(`/${pathPrefix}`, { params: query })),

  deleteById: (id: string) =>
    handleRequest(api.delete(`${pathPrefix}/${id}`, withAuthorization)),

  getOne: (id: string) => handleRequest(api.get(`/${pathPrefix}/${id}`)),

  updateById: (id: string, data: Partial<FAQsDto>) =>
    handleRequest(api.patch(`${pathPrefix}/${id}`, data, withAuthorization)),
};
