import apiClient, { handleApiError } from './api';
import { User, AdminStats, PaginatedResponse, Subscription, ApiResponse } from '@/types';

export const adminService = {
  // Get admin stats
  async getAdminStats(): Promise<AdminStats> {
    try {
      const response = await apiClient.get<ApiResponse<AdminStats>>('/admin/stats');
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get all users
  async getUsers(page = 1, limit = 20): Promise<PaginatedResponse<User>> {
    try {
      const response = await apiClient.get<ApiResponse<PaginatedResponse<User>>>('/admin/users', {
        params: { page, limit },
      });
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get user by ID
  async getUser(userId: string): Promise<User> {
    try {
      const response = await apiClient.get<ApiResponse<User>>(`/admin/users/${userId}`);
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update user
  async updateUser(userId: string, data: Partial<User>): Promise<User> {
    try {
      const response = await apiClient.patch<ApiResponse<User>>(`/admin/users/${userId}`, data);
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete user
  async deleteUser(userId: string): Promise<void> {
    try {
      await apiClient.delete(`/admin/users/${userId}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get all subscriptions
  async getSubscriptions(page = 1, limit = 20): Promise<PaginatedResponse<Subscription>> {
    try {
      const response = await apiClient.get<ApiResponse<PaginatedResponse<Subscription>>>(
        '/admin/subscriptions',
        { params: { page, limit } }
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};
