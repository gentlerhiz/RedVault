import apiClient, { handleApiError } from './api';
import { LoginRequest, SignupRequest, AuthResponse, User, ApiResponse } from '@/types';

export const authService = {
  // Login
  async login(credentials: LoginRequest): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/login', credentials);
      if (response.data.data) {
        localStorage.setItem('auth_token', response.data.data.token);
      }
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Signup
  async signup(data: SignupRequest): Promise<AuthResponse> {
    try {
      const response = await apiClient.post<ApiResponse<AuthResponse>>('/auth/signup', data);
      if (response.data.data) {
        localStorage.setItem('auth_token', response.data.data.token);
      }
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Logout
  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
      localStorage.removeItem('auth_token');
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get current user
  async getCurrentUser(): Promise<User> {
    try {
      const response = await apiClient.get<ApiResponse<User>>('/auth/me');
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Verify email
  async verifyEmail(token: string): Promise<void> {
    try {
      await apiClient.post('/auth/verify-email', { token });
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Forgot password
  async forgotPassword(email: string): Promise<void> {
    try {
      await apiClient.post('/auth/forgot-password', { email });
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Reset password
  async resetPassword(token: string, password: string): Promise<void> {
    try {
      await apiClient.post('/auth/reset-password', { token, password });
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Google OAuth login
  getGoogleAuthUrl(): string {
    return `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  },
};
