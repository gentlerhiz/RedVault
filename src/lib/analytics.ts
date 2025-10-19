import posthog from 'posthog-js';

export const analytics = {
  track: (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture(event, properties);
    }
  },

  identify: (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.identify(userId, traits);
    }
  },

  reset: () => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.reset();
    }
  },
};

// Event types
export const AnalyticsEvents = {
  // Auth events
  SIGNUP: 'user_signup',
  LOGIN: 'user_login',
  LOGOUT: 'user_logout',
  EMAIL_VERIFIED: 'email_verified',

  // File events
  FILE_UPLOAD: 'file_upload',
  FILE_DOWNLOAD: 'file_download',
  FILE_DELETE: 'file_delete',
  FILE_SHARE: 'file_share',

  // Subscription events
  SUBSCRIPTION_CREATED: 'subscription_created',
  SUBSCRIPTION_UPDATED: 'subscription_updated',
  SUBSCRIPTION_CANCELED: 'subscription_canceled',
  TRIAL_STARTED: 'trial_started',

  // Referral events
  REFERRAL_CODE_SHARED: 'referral_code_shared',
  REFERRAL_SIGNUP: 'referral_signup',
  REFERRAL_DISCOUNT_APPLIED: 'referral_discount_applied',
};
