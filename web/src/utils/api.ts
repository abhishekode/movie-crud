const serverUrl = 'http://localhost:3005';
export const baseUrl = `${serverUrl}/api/v1`;

export const blogApi = {
  blogs: '/blogs',
  getBlog: (id: string) => `/blog/${id}`,
  addBlog: '/blogs',
  deleteBlog: (id: string) => `/blog/${id}`,
  updateBlog: (id: string) => `/blog/${id}`,
};

export const userApi = {
  userLogin: '/user/login',
  userRegister: '/user/register',
  user: '/user',
  getUserById: (id: string) => `/user/${id}`,
};

export const categoryApi = {
  getCategory: '/category',
  getCategoryById: (id: string) => `/category/${id}`,
  addCategory: '/category',
  deleteCategory: (id: string) => `/category/${id}`,
  updateCategory: (id: string) => `/category/${id}`,
};


export const apiEndpoints = {
  ...blogApi,
  ...userApi,
  ...categoryApi,
};