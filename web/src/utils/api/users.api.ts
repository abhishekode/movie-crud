import { MongoResponse } from '@/constant/interfaces';
import { api, handleRequest, withAuthorization } from "./index";

export interface LoginRequest {
  email: string;
  password: string;
}

// Define AdminAPI object with methods
export const UserAPI = {
    // Method to get all admins with pagination support
    getAll: () =>
      handleRequest(api.get('/admin', { ...withAuthorization })),
  
    // Method to delete an admin by ID
    deleteById: (id: string) =>
      handleRequest(api.delete(`/admin/${id}`, withAuthorization)),
  
    // Method to login
    login: (loginData: LoginRequest) =>
      handleRequest(api.post('/users/login', loginData)),
  
    // Method to update an admin
    updateById: (id: string, updateAdminData: { name: string; isActive: boolean }) =>
      handleRequest(api.patch(`/admin/${id}`, updateAdminData, withAuthorization)),
  };
  