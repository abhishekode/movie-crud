import { MongoResponse } from '@/constant/interfaces';
import { api, handleRequest, createAuthorizationHeader, createAuthorizationFormDataHeader } from "./index";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  phone: string;
  password: string;
}

// Define AdminAPI object with methods
export const UserAPI = {
    // Method to get all admins with pagination support
    getAll: () =>
      handleRequest(api.get('/admin', { ...createAuthorizationHeader() })),
  
    // Method to delete an admin by ID
    deleteById: (id: string) =>
      handleRequest(api.delete(`/admin/${id}`, createAuthorizationHeader())),
  
    // Method to login
    login: (loginData: LoginRequest) =>
      handleRequest(api.post('/users/login', loginData)),

    register: (registerData: RegisterRequest) =>
      handleRequest(api.post('/users/register', registerData)),
  
    // Method to update an admin
    updateById: (id: string, updateAdminData: { name: string; isActive: boolean }) =>
      handleRequest(api.patch(`/admin/${id}`, updateAdminData, createAuthorizationHeader())),
  };
  