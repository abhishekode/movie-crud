import { server_url } from '@/config';
import axios from 'axios';
import { toast } from 'react-toastify';

// const API_BASE_URL = `${server_url}/api/v1`;
const API_BASE_URL = `https://api.crystalpathshala.com/api/v1`;

export const api = axios.create({
  baseURL: API_BASE_URL,
});

const getToken = () => {
  const admin = localStorage.getItem('admin');
  if (admin) {
    const adminObject: any = JSON.parse(admin);
    if (adminObject && adminObject.token) {
      return adminObject.token;
    }
  }
  toast.error('Invalid Admin Token provided');
  return null;
};

export const withAuthorization = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGI5ZGIyNTdjM2FhZjM4MDU4OTE1YSIsImVtYWlsIjoiaWNyeXN0YWwucGF0aHNoYWxhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxOTA0NzA3NywiZXhwIjoxNzIxNjM5MDc3fQ.L6PYqvSXyghbT9wnpc7TMAgMoF-oykXK9GNjcl2dPso`,
  },
};

export const withAuthorizationFormData = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NGI5ZGIyNTdjM2FhZjM4MDU4OTE1YSIsImVtYWlsIjoiaWNyeXN0YWwucGF0aHNoYWxhQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxOTA0NzA3NywiZXhwIjoxNzIxNjM5MDc3fQ.L6PYqvSXyghbT9wnpc7TMAgMoF-oykXK9GNjcl2dPso`,
    'Content-Type': 'multipart/form-data',
  },
};

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
