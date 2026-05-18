# studio-foundation-web

Site public de [studio-foundation.org](https://studio-foundation.org).

Next.js 16.2.6 · React 19 · TypeScript 5 (strict) · next-intl 4.12 · @arianeguay/design-system

---

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 App Router |
| i18n | next-intl 4 — locales `en` (default) + `fr` |
| Design system | `@arianeguay/design-system` (workspace `../design-system`) |
| Styling | CSS custom properties via DS + CSS Modules locaux si besoin |
| Package manager | pnpm (workspace monorepo) |
| Runtime | Node.js, déployé sur Vercel |

---

## Routing

Routes sous `src/app/[locale]/`. Middleware next-intl dans `src/proxy.ts`.

- **EN** — sans préfixe : `/`, `/mission`, `/charter`, `/install`, `/contribute`
- **FR** — avec préfixe : `/fr`, `/fr/mission`, `/fr/charter`, etc.
- `localeDetection: false` — jamais de redirect basé sur `Accept-Language`

Source unique pour la navigation : `src/lib/nav.ts` — `NAV_KEYS`, `NAV_HREFS`, `GITHUB_URL`. Ne pas hardcoder des chemins ailleurs.

---

## Design system

Ce repo **consomme** `@arianeguay/design-system` — ne pas y dupliquer les composants.

### Import des styles globaux
```ts
// src/app/layout.tsx
import '@arianeguay/design-system/styles';
```

### Import des composants
```tsx
import { Button, Tag, WarmSection, PageHero, SectionHeader, RichText, YamlPreview, YamlPreviewDark, Y, FadeIn } from '@arianeguay/design-system';
```

### Résolution en workspace (next.config.ts)
`transpilePackages + resolveAlias` redirige Turbopack vers le source TypeScript du DS pour que les CSS modules soient gérés nativement. Ne pas supprimer ces deux options.

### Composants locaux (`src/components/system/`)
Seuls les composants **spécifiques à Studio Foundation Web** vivent ici :
- `LangSwitch.tsx` — switcher EN/FR client component

Tout le reste vient du package partagé.

---

## i18n

Fichiers : `messages/en.json` et `messages/fr.json`.

- `useTranslations()` et `useLocale()` fonctionnent en Server et Client Components — appeler directement dans le composant, pas de prop-drilling
- HTML dans les traductions → clés fractionnées (`title_start` / `title_accent` / `title_end`), pas de markup inline
- `t.raw('key')` + `<RichText>` si la chaîne contient du HTML

---

## Déviations visuelles Studio (STU-328)

À cette étape (STU-327), l'identité visuelle est celle du portfolio brut — **aucune déviation**. Les surcharges visuelles Studio (wordmark `[Studio.]`, dominante dark, textures grid) sont gérées dans STU-328 via overrides de tokens CSS.

---

## Sandbox de développement

`src/app/_dev/page.tsx` — page temporaire pour tester les composants DS. **À supprimer avant merge vers main.**

---

## Do Not

- Copier des composants depuis `@arianeguay/design-system` en local — les importer depuis le package
- Hardcoder des couleurs hex — tout passe par les tokens du DS
- Utiliser `dangerouslySetInnerHTML` hors de `<RichText>`
- Hardcoder des chemins de navigation — utiliser `src/lib/nav.ts`
- Supprimer `transpilePackages` ou `resolveAlias` de `next.config.ts` — les CSS modules du DS ne fonctionneraient plus
