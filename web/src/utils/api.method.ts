import { baseUrl, apiEndpoints } from './api';
import { LoginPayload, RegisterPayload } from './api.payload';

export const getAllBlogs = async () => {
  const response = await fetch(`${baseUrl}${apiEndpoints.blogs}`);
  return response.json();
};

export const getBlogById = async (id: string) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.getBlog(id)}`);
  return response.json();
};

export const addBlog = async (blog: any) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.addBlog}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });
  return response.json();
};

export const deleteBlog = async (id: string) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.deleteBlog(id)}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const updateBlog = async (id: string, blog: any) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.updateBlog(id)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(blog),
  });
  return response.json();
};

export const getAllCategories = async () => {
  const response = await fetch(`${baseUrl}${apiEndpoints.getCategory}`);
  return response.json();
};

export const getCategoryById = async (id: string) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.getCategoryById(id)}`);
  return response.json();
};

export const addCategory = async (category: any) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.addCategory}`, {
    method: 'POST',
    body: category,
  });
  return response.json();
};

export const deleteCategory = async (id: string) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.deleteCategory(id)}`, {
    method: 'DELETE',
  });
  return response.json();
};

export const updateCategory = async (id: string, category: any) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.updateCategory(id)}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  });
  return response.json();
};



export const loginUser = async (credentials: LoginPayload) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.userLogin}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });
  return response.json();
};

export const registerUser = async (userData: RegisterPayload) => {
  const response = await fetch(`${baseUrl}${apiEndpoints.userRegister}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  return response.json();
};

