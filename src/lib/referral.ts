import crypto from 'crypto';

export function generateReferralCode(): string {
  return crypto.randomBytes(4).toString('hex').toUpperCase();
}

export function calculateReferralDiscount(basePrice: number): number {
  const REFERRAL_DISCOUNT_PERCENTAGE = 0.05; // 5%
  return basePrice * (1 - REFERRAL_DISCOUNT_PERCENTAGE);
}

export function validateReferralCode(code: string): boolean {
  return /^[A-Z0-9]{8}$/.test(code);
}
