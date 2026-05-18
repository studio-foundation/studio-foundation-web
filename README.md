# studio-foundation-web

The public website for [studio-foundation.org](https://studio-foundation.org).

## Stack

- **Next.js 16** — App Router, React Server Components, TypeScript
- **next-intl** — EN (default, `/`) and FR (`/fr/`)
- **@arianeguay/design-system** — shared design system (tokens, components)
- **pnpm** — package manager
- **Vercel** — deployment target

## Working locally

```bash
git clone https://github.com/studio-foundation/studio-foundation-web.git
cd studio-foundation-web
pnpm install
pnpm dev   # http://localhost:3000
```

`@arianeguay/design-system` resolves from the published package on GitHub Packages. You need a `GITHUB_TOKEN` with `read:packages` scope:

```bash
export GITHUB_TOKEN=ghp_...
pnpm install
```

> **Local workspace setup** — If you have both repos checked out as siblings (e.g. inside a shared parent workspace), you can optionally add `resolveAlias` in `next.config.ts` to point Turbopack at the design-system source directly and see changes without republishing. This is a local dev convenience, not a requirement.

## Commands

```bash
pnpm dev      # development server
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # ESLint
```

## i18n

Default locale is EN (no URL prefix). French is at `/fr/`. Switch via the `LangSwitch` component in the header.

## Component sandbox

Visit `/_dev` in dev mode to test all design system components. **Delete before merging to main.**
