# Design — studio-foundation-web

Ce repo utilise le design system partagé `@arianeguay/design-system` sans déviation visuelle à ce stade (STU-327). Les tokens, composants, et règles de base sont documentés dans [`design-system/DESIGN.md`](../design-system/DESIGN.md).

Ce fichier documente les **spécificités de Studio Foundation Web** — ce qui diffère ou s'ajoute par rapport au DS de base.

---

## Identité visuelle (état actuel — STU-327)

À cette étape, le site utilise l'identité **portfolio brut** :
- Palette cream/terracotta/mustard standard
- Typographie Ubuntu (titres) + Inter (corps) + JetBrains Mono (labels)
- Dark mode auto via `prefers-color-scheme`

Les déviations visuelles Studio sont planifiées dans **STU-328** :
- Wordmark `[Studio.]` en Fraunces
- Dominante dark (palette inversée, fond sombre par défaut)
- Textures grid (dot grid SVG en background)
- Header/footer Studio spécifiques

---

## i18n — EN par défaut, FR en `/fr/`

Contrairement au portfolio (FR par défaut), Studio Foundation Web a l'anglais comme locale par défaut — le projet est open source international.

```
/           → EN (default)
/fr/        → FR
```

Le `LangSwitch` local gère la bascule — il est client component car il lit `usePathname()`.

---

## Routes et navigation

5 routes principales définies dans `src/lib/nav.ts` :

| Route | Contenu |
|---|---|
| `/` | Homepage — hero + pitch Studio |
| `/mission` | Mission et valeurs de Studio Foundation |
| `/charter` | Charte de contribution |
| `/install` | Guide d'installation (`studio` CLI) |
| `/contribute` | Guide de contribution |

Lien externe : `GITHUB_URL = 'https://github.com/studio-foundation/studio'`

---

## Règles de contenu Studio

- Le contenu technique (YAML previews, code blocks) doit être **représentatif** — jamais décoratif
- Les exemples YAML montrent de vrais contrats ou pipelines Studio
- Terminologie exacte : **pipeline**, **stage**, **contract**, **RALPH loop**, **agent** — ne pas paraphraser
- Ton : ouvert, technique, direct — pas de marketing vague
