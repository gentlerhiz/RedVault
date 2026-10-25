# Contributing to RedVault

Thanks for helping improve RedVault! This guide covers how to get set up and how changes get merged.

## Getting Started

```bash
git clone https://github.com/gentlerhiz/RedVault.git
cd RedVault
npm install
cp .env.example .env.local
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Branches

- `main` is the production branch and deploys automatically.
- `dev` is the integration branch for work in progress.
- Create feature branches from `main` using a prefix that describes the change:
  - `feat/` for new features
  - `fix/` for bug fixes
  - `docs/` for documentation
  - `chore/` or `ci/` for tooling and maintenance

## Making a Change

1. Create a branch: `git switch -c feat/upload-progress`
2. Make your change and keep the commit focused on one thing.
3. Run the checks locally:
   ```bash
   npm run lint
   npm run build
   ```
4. Push and open a pull request against `main`.
5. CI runs lint and build on every PR. It must pass before merging.

## Code Style

- TypeScript everywhere; avoid `any` where a real type is possible.
- UI components live in `src/components/ui` (shadcn/ui). Build on them instead of adding new primitives.
- Use the `vault-*` Tailwind colors from `tailwind.config.ts` for brand colors.
- All API calls go through the services in `src/services/`.

## Reporting Bugs and Security Issues

- Bugs and feature requests: [open an issue](https://github.com/gentlerhiz/RedVault/issues/new/choose).
- Security vulnerabilities: follow [SECURITY.md](SECURITY.md) and **do not** open a public issue.
