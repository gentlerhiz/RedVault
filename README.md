# RedVault - Secure Cloud Storage Frontend

## 🎯 Project Overview

RedVault is a modern, secure cloud storage SaaS application frontend built with Next.js 14, TypeScript, and TailwindCSS. This is a **frontend-only** application that connects to a separate backend API.

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Animations**: Framer Motion
- **API Communication**: Axios + React Query
- **Form Handling**: React Hook Form + Zod
- **File Upload**: React Dropzone
- **Analytics**: PostHog
- **Icons**: Lucide React

## ✅ What's Built (UI/UX Complete)

### Landing Page ✨
- **Hero Section**: Animated hero with gradient background, CTA buttons, feature highlights
- **Features Section**: 6 feature cards with beautiful icons and descriptions
- **Pricing Section**: 3 pricing tiers with feature comparison
- **Testimonials Section**: Customer reviews with 5-star ratings
- **CTA Section**: Final conversion section with trust badges

### Core Components
- **Navbar**: Responsive navigation with mobile menu, theme toggle, user dropdown
- **Footer**: Multi-column footer with social links
- **File Card**: Beautiful file cards with hover effects
- **Storage Bar**: Visual storage usage indicator
- **Theme Toggle**: Dark/Light mode switcher

### API Service Layer
Complete API integration ready for backend:
- Auth (login, signup, password reset)
- File operations (upload, download, delete)
- Subscriptions (checkout, billing portal)
- Admin panel (user management, stats)
- Referral system

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/              # Next.js pages
├── components/       # React components
│   ├── landing/     # Landing page sections
│   └── ui/          # shadcn/ui components
├── services/        # API service layer
├── types/           # TypeScript definitions
└── lib/             # Utilities
```

## 🎨 Design System

- **Primary Color**: Red Vault (#DC2626)
- **Dark/Light Mode**: Fully supported
- **Responsive**: Mobile-first design
- **Animations**: Framer Motion throughout
- **Icons**: Lucide React

## 🔧 Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
NEXT_PUBLIC_POSTHOG_KEY=phc_...
```

## 📝 Next Steps

Build these pages using the same beautiful design system:
1. Authentication pages (Login, Signup, Reset Password)
2. Dashboard (File management, Upload, Search)
3. File Preview (PDF, Image, Video viewer)
4. Billing (Plan management, Payment history)
5. Settings (Profile, Security, Preferences)
6. Admin Panel (User management, Analytics)
7. Legal Pages (Privacy, Terms, Refund)

## 🌐 Backend Integration

The frontend expects a REST API with these endpoints:
- `POST /api/auth/login`
- `POST /api/files/upload`
- `GET /api/subscriptions/current`
- See `src/services/` for complete API contract

---

**Built with ❤️ for secure file storage**
A modern cloud storage platform that focuses on security, speed, and simplicity.

Addedd from local