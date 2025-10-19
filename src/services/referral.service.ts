import apiClient, { handleApiError } from './api';
import { Referral, ApiResponse } from '@/types';

export const referralService = {
  // Get user's referrals
  async getReferrals(): Promise<Referral[]> {
    try {
      const response = await apiClient.get<ApiResponse<Referral[]>>('/referrals');
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Validate referral code
  async validateReferralCode(code: string): Promise<{ valid: boolean }> {
    try {
      const response = await apiClient.post<ApiResponse<{ valid: boolean }>>(
        '/referrals/validate',
        { code }
      );
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get referral stats
  async getReferralStats(): Promise<{
    totalReferrals: number;
    discountEarned: number;
  }> {
    try {
      const response = await apiClient.get<
        ApiResponse<{ totalReferrals: number; discountEarned: number }>
      >('/referrals/stats');
      return response.data.data!;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },
};
