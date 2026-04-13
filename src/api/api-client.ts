import axios from 'axios';

const apiClient = axios.create({
  // baseURL: 'http://localhost:3000',
  baseURL: 'https://bedzzz.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to add the auth token if available
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;
