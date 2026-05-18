# studio-foundation-web

The public website for [studio-foundation.org](https://studio-foundation.org).

## Stack

- **Next.js 16** — App Router, React Server Components, TypeScript
- **next-intl** — EN (default, `/`) and FR (`/fr/`)
- **pnpm** — package manager (monorepo workspace)
- **Vercel** — deployment target

## Design system

Ported from [arianeguay/portfolio](https://github.com/arianeguay/portfolio). Visual identity deviations (Studio wordmark, dark-dominant palette, grid textures) are applied in a separate issue.

## Getting started

```bash
pnpm install        # from workspace root, or inside this folder
pnpm dev            # http://localhost:3000
pnpm build          # production build
pnpm lint           # ESLint
```

## i18n

Default locale is EN (no URL prefix). French is at `/fr/`. Switch via the `LangSwitch` component in the header.

## Component sandbox

Visit `/_dev` in dev mode to test all system components. **Delete before merging to main.**
