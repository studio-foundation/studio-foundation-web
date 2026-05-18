# studio-foundation-web

The public website for [studio-foundation.org](https://studio-foundation.org).

## Stack

- **Next.js 16** — App Router, React Server Components, TypeScript
- **next-intl** — EN (default, `/`) and FR (`/fr/`)
- **@arianeguay/design-system** — shared design system (tokens, components)
- **pnpm** — package manager (monorepo workspace)
- **Vercel** — deployment target

## Working locally

### From the monorepo workspace (recommended)

Clone the workspace and all repos are available together:

```bash
git clone https://github.com/arianeguay/workspace.git
cd workspace
pnpm install
cd studio-foundation
pnpm dev   # http://localhost:3000
```

Working from the workspace lets you modify `@arianeguay/design-system` and see changes instantly — no need to publish a new package version. Turbopack is configured to read the design-system source directly via `resolveAlias`.

### Standalone

```bash
git clone https://github.com/studio-foundation/studio-foundation-web.git
cd studio-foundation-web
pnpm install
pnpm dev   # http://localhost:3000
```

In standalone mode the design-system resolves from the published package on GitHub Packages. You need a `GITHUB_TOKEN` with `read:packages` scope in your environment:

```bash
export GITHUB_TOKEN=ghp_...
pnpm install
```

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
