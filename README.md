# Revera Bakery — Landing Page

A premium, editorial marketing site for **Revera Bakery**, art-directed around
the bakery's own photography. The aesthetic is *heritage patisserie meets
modern art book*: generous whitespace, oversized serif display type, hairline
gold detailing, and photography that carries the emotion.

## Status

- ✅ **Toolchain & design system** — scaffolded and building.
- ⏳ **Brand photography** — required to compose the full experience. Instagram
  cannot be reached from the build environment (the whole `instagram.com` /
  `cdninstagram.com` domain family is blocked at the network egress proxy), so
  the real images must be supplied via Google Drive, committed to the branch,
  or emailed. Drop them into [`src/assets/instagram/`](src/assets/instagram/).

## Stack

| Concern     | Choice                                    |
| ----------- | ----------------------------------------- |
| Framework   | React 18 + TypeScript                     |
| Build       | Vite 5                                     |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`)       |
| Animation   | Framer Motion                              |
| Smooth scroll | Lenis                                    |
| Fonts       | Cormorant Garamond + Jost (self-hosted via `@fontsource`) |

## Design system

Defined as tokens in [`src/index.css`](src/index.css):

- **Palette (proposal — re-tuned from the real feed):** warm ivory ground
  `--color-porcelain`, espresso ink `--color-ink`, deep emerald jewel tone
  `--color-emerald`, antique gold `--color-gold` (hairlines/accents only),
  warm terracotta tint `--color-terracotta`.
- **Type:** `--font-display` Cormorant Garamond for oversized editorial
  headlines; `--font-sans` Jost for body and wide-tracked uppercase labels
  (`.eyebrow`).
- **Motion:** slow luxe easing (`--ease-luxe`), full `prefers-reduced-motion`
  support.

## Planned sections

1. Hero — full-bleed image, ken-burns, staggered wordmark reveal, single CTA
2. Brand / Story — asymmetric editorial split + serif pull-quote
3. Signature Products — restrained grid, zoom-within-frame hover
4. Featured Collection — large full-bleed parallax showpiece
5. Gallery — offset masonry, "Follow on Instagram" link
6. Visit / Order — warm closing invitation with location + order CTA
7. Footer — wordmark, socials, contact

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # production build
npm run typecheck  # TypeScript check
```
