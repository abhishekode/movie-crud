import { MongoResponse } from '@/constant/interfaces';
import { api, handleRequest, withAuthorization } from './index';

export interface BasicInfoContact {
  phone: string[];
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  whatsappNumber: string;
  address: string[];
}
export interface IBasicDetails extends MongoResponse {
  instituteName: string;
  description: string;
  owner?: string;
  contact: BasicInfoContact;
  openingHours: IOpeningHours;
}
export interface IOpeningHours {
  monday: { start: string; end: string };
  tuesday: { start: string; end: string };
  wednesday: { start: string; end: string };
  thursday: { start: string; end: string };
  friday: { start: string; end: string };
  saturday: { start: string; end: string };
  sunday: { start: string; end: string };
}

export interface CreateBasicDetailDto {
  instituteName: string;
  description: string;
  contact: BasicInfoContact;
  openingHours: IOpeningHours;
}

const pathPrefix = 'basic-details';

export const BasicDetailsAPI = {
  addNew: (data: CreateBasicDetailDto) =>
    handleRequest(api.post(`/${pathPrefix}`, data, withAuthorization)),

  getOne: () => handleRequest(api.get(`/${pathPrefix}`, withAuthorization)),

  updateById: (id: string, data: Partial<CreateBasicDetailDto>) =>
    handleRequest(api.patch(`${pathPrefix}/${id}`, data, withAuthorization)),
};
