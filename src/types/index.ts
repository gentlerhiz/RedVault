// User types
export interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: UserRole;
  storageUsed: number;
  storageLimit: number;
  referralCode: string;
  referredBy: string | null;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
}

// Subscription types
export enum SubscriptionPlan {
  BASIC = "BASIC",
  PRO = "PRO",
  BUSINESS = "BUSINESS",
}

export enum SubscriptionStatus {
  ACTIVE = "ACTIVE",
  CANCELED = "CANCELED",
  PAST_DUE = "PAST_DUE",
  TRIALING = "TRIALING",
  INCOMPLETE = "INCOMPLETE",
}

export interface Subscription {
  id: string;
  userId: string;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  cancelAtPeriodEnd: boolean;
  trialEnd: string | null;
  createdAt: string;
  updatedAt: string;
}

// File types
export interface File {
  id: string;
  userId: string;
  name: string;
  mimeType: string;
  size: number;
  url: string;
  folderId: string | null;
  isPublic: boolean;
  downloadCount: number;
  lastAccessedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Folder {
  id: string;
  userId: string;
  name: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
}

// Referral types
export interface Referral {
  id: string;
  referrerId: string;
  referredUserId: string;
  discountApplied: boolean;
  createdAt: string;
}

// Plan configuration
export interface PlanFeatures {
  name: string;
  price: number;
  storage: number; // in GB
  features: string[];
  popular?: boolean;
}

export const SUBSCRIPTION_PLANS: Record<SubscriptionPlan, PlanFeatures> = {
  [SubscriptionPlan.BASIC]: {
    name: "Basic",
    price: 9.99,
    storage: 100,
    features: [
      "100 GB Storage",
      "File Encryption",
      "Email Support",
      "Mobile App Access",
      "File Sharing",
    ],
  },
  [SubscriptionPlan.PRO]: {
    name: "Pro",
    price: 19.99,
    storage: 500,
    features: [
      "500 GB Storage",
      "File Encryption",
      "Priority Support",
      "Advanced File Preview",
      "File Sharing & Collaboration",
      "Version History",
    ],
    popular: true,
  },
  [SubscriptionPlan.BUSINESS]: {
    name: "Business",
    price: 49.99,
    storage: 2000,
    features: [
      "2 TB Storage",
      "File Encryption",
      "24/7 Priority Support",
      "Advanced Analytics",
      "Team Collaboration",
      "Version History",
      "Custom Branding",
      "API Access",
    ],
  },
};

// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// Auth types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
  referralCode?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// File operation types
export interface FileUploadResponse {
  fileId: string;
  name: string;
  size: number;
  url: string;
}

export interface StorageStats {
  used: number;
  limit: number;
  percentage: number;
  filesCount: number;
}

// Admin types
export interface AdminStats {
  totalUsers: number;
  totalFiles: number;
  totalStorage: number;
  activeSubscriptions: number;
  revenue: number;
}
