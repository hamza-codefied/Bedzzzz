import apiClient from './api-client';
import type { LoginPayload, SignupPayload, AuthResponse } from '../types';

export const authService = {
  signup: async (payload: SignupPayload): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/signup', payload);
    return response.data;
  },

  login: async (payload: LoginPayload): Promise<AuthResponse> => {
    const response = await apiClient.post('/auth/login', payload);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
};
