# RedVault - Secure Cloud Storage Frontend

[![CI](https://github.com/gentlerhiz/RedVault/actions/workflows/ci.yml/badge.svg)](https://github.com/gentlerhiz/RedVault/actions/workflows/ci.yml)

A modern cloud storage platform that focuses on security, speed, and simplicity.

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

- **Primary Color**: Red Vault (#B91C1C), with `vault-*` shades in `tailwind.config.ts`
- **Dark/Light Mode**: Fully supported
- **Responsive**: Mobile-first design
- **Animations**: Framer Motion throughout
- **Icons**: Lucide React

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_APP_URL` | Public URL of the app (`http://localhost:3000` locally) |
| `NEXT_PUBLIC_APP_NAME` | Display name, defaults to `RedVault` |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend REST API |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (`pk_test_...` for development) |
| `NEXT_PUBLIC_POSTHOG_KEY` | PostHog project key |
| `NEXT_PUBLIC_POSTHOG_HOST` | PostHog host, e.g. `https://app.posthog.com` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics measurement ID |

## 🧰 Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

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

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for setup, branch naming and the checks CI runs. To report a vulnerability, follow [SECURITY.md](SECURITY.md) instead of opening a public issue.

---

**Built with ❤️ for secure file storage**