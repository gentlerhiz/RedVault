import apiClient, { handleApiError } from './api';
import { Subscription, SubscriptionPlan, ApiResponse } from '@/types';

export const subscriptionService = {
  // Get current subscription
  async getCurrentSubscription(): Promise<Subscription | null> {
    try {
      const response = await apiClient.get<ApiResponse<Subscription>>('/subscriptions/current');
      return response.data.data || null;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create checkout session
  async createCheckoutSession(plan: SubscriptionPlan, referralCode?: string): Promise<{ url: string }> {
    try {
      const response = await apiClient.post<ApiResponse<{ url: string }>>(
        '/subscriptions/checkout',
        { plan, referralCode }
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create billing portal session
  async createBillingPortalSession(): Promise<{ url: string }> {
    try {
      const response = await apiClient.post<ApiResponse<{ url: string }>>(
        '/subscriptions/billing-portal'
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Cancel subscription
  async cancelSubscription(): Promise<Subscription> {
    try {
      const response = await apiClient.post<ApiResponse<Subscription>>(
        '/subscriptions/cancel'
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Reactivate subscription
  async reactivateSubscription(): Promise<Subscription> {
    try {
      const response = await apiClient.post<ApiResponse<Subscription>>(
        '/subscriptions/reactivate'
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};
