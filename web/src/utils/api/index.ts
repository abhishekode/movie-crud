import { server_url } from '@/config';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setCookie,getCookie } from "cookies-next";


const API_BASE_URL = `http://localhost:3001/api/v1`;

export const api = axios.create({
  baseURL: API_BASE_URL,
});
const getToken = () => {
  const admin = JSON.parse(getCookie('user') || '{}');
  return admin.token;
};

export const createAuthorizationHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const createAuthorizationFormDataHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'multipart/form-data',
  },
});


export const handleRequest = async (request: Promise<any>) => {
  try {
    const response = await request;
    return response.data;
  } catch (error: any) {
    throw error.response ? error.response.data : error.message;
  }
};

export interface AdminPopulateResponse {
  _id: string;
  email: string;
  name: string;
}
