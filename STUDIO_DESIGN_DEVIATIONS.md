# Studio Design Deviations

Divergences entre l'identité visuelle **Studio** (`studio-foundation-web`) et le **design system portfolio** (`@arianeguay/design-system`).

Ce fichier est la référence pour toutes les sessions Claude Code futures. Chaque déviation est un ajout ou un override local — aucun composant DS n'est modifié.

---

## 1. Wordmark

| | Portfolio | Studio |
|---|---|---|
| Composant | `.t-wordmark` (Fraunces serif) | `.t-wordmark-studio` (Ubuntu Bold) |
| Markup | `Ariane Guay.` (point final) | `studio:` (colon terra) |
| Casse | Initiales majuscules | Tout minuscule |
| Ponctuation accent | `.` en ink | `:` en `--color-terra` |

**Fichiers :**
- Classe CSS : `design-system/src/styles/typography.css` → `.t-wordmark-studio`
- Composant : `src/components/system/Wordmark.tsx`

**Règle sémantique :** Le `:` est une clé YAML — `studio:` *est* littéralement une déclaration de configuration. Le wordmark est du texte HTML, pas une image, pour rester accessible et modifiable via CSS.

---

## 2. Textures

| | Portfolio | Studio |
|---|---|---|
| Famille | Textures organiques (courbes, formes) | Dot grid géométrique uniquement |
| Variantes | Multiples (hero, section, projects…) | `base` (opacity 0.14) + `strong` (opacity 0.18) |
| Fond | Clair et sombre | **Sombre uniquement** (`--color-dark`) |
| Implémentation | `<img src="/assets/texture-*.svg" />` | SVG inline `<pattern>` via `<TextureGrid />` |

**Fichier :** `src/components/system/TextureGrid.tsx`

**Règle d'emploi :**
- `variant="base"` → toutes les sections sombres par défaut
- `variant="strong"` → hero principal et opening `/mission` uniquement
- Jamais sur fond cream/paper — le contraste cream/dark fait le travail visuel

---

## 3. Dominante dark

| | Portfolio | Studio |
|---|---|---|
| Fond par défaut | `bg-cream` (#f5efe4) | `bg-dark` (#2a2018) |
| Alternance sections | Sombre en exception | Clair en respiration |
| Layout wrapper | Neutre | `bg-dark` avec flex column min-height 100vh |

**Fichier :** `src/app/[locale]/layout.tsx`

---

## 4. Header / Footer

Le portfolio n'a pas de header/footer — Studio introduit les deux comme composants locaux.

**Header :**
- Sticky, fond `--color-dark`, border-bottom `--color-dark-rule`
- Wordmark `studio:` à gauche (20px)
- Nav : Mission · Install · Contribute · GitHub ↗
- LangSwitch EN/FR à droite

**Footer :**
- Fond `--color-dark`
- Pas de wordmark Fraunces — volontaire (pas de reprise du style portfolio)
- Texte : "Studio is a project of the Ariane Guay Foundation."
- Liens : AGPL-3.0 · GitHub ↗ · Contact

**Fichiers :** `src/components/system/Header.tsx`, `src/components/system/Footer.tsx`

---

## 5. Favicon

| | Portfolio | Studio |
|---|---|---|
| Forme | — | `s:` (s minuscule + colon terra) sur fond dark |
| Format | — | SVG (vectoriel, supporte dark mode navigateur) |

**Fichier :** `src/app/icon.svg`

---

## 6. OG Image

- Fond `--color-dark` (#2a2018)
- Wordmark `studio:` à 84px
- Tagline : "A kernel. An opinion."
- URL : studio-foundation.org
- Texture dot grid `strong` en background
- Générée via Next.js `ImageResponse` (edge runtime)

**Fichier :** `src/app/opengraph-image.tsx`

---

## 7. Règle `t-accent-serif`

Sur le site Studio, `.t-accent-serif` (Fraunces italique) est utilisé au **maximum 1 fois par page**. Préférer `.t-accent` (terra simple) pour les accents fréquents. L'identité visuelle Studio s'exprime via Ubuntu Bold + colon terra — Fraunces est réservé aux moments de respiration éditoriale rare.

---

## 8. Metadata / titre

| | Portfolio | Studio |
|---|---|---|
| Title default | `Ariane Guay — …` | `studio: — Agentic pipeline runtime` |
| Template | `%s · Ariane Guay` | `%s · studio:` |
| Tagline OG | — | "A kernel. An opinion." |
