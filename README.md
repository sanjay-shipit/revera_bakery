# Revéra Bakehouse — Landing Page

A premium, editorial marketing site for **Revéra Bakehouse** (*reh · VAY · rah*),
a small-batch, **100% eggless** cookie & cake house. It is art-directed entirely
around the brand's own Instagram photography — claret wine, blush rose, warm
cream and antique gold, with oversized serif display type, hairline gold
detailing and generous whitespace.

## Stack

| Concern       | Choice                                                    |
| ------------- | --------------------------------------------------------- |
| Framework     | React 18 + TypeScript                                     |
| Build         | Vite 5                                                    |
| Styling       | Tailwind CSS v4 (CSS-first `@theme`)                      |
| Animation     | Framer Motion                                             |
| Smooth scroll | Lenis                                                     |
| Fonts         | Cormorant Garamond + Jost (self-hosted via `@fontsource`) |

## Design system

Tokens live in [`src/index.css`](src/index.css), **sampled from the real feed**:

- **Palette:** `--color-wine` (claret, primary) · `--color-wine-deep` · `--color-claret`
  (ribbon) · `--color-blush` / `--color-blush-soft` (wordmark rose) ·
  `--color-cream` family (grounds) · `--color-gold` (hairlines/accents only) ·
  `--color-terracotta` (ceramic-rim warmth).
- **Type:** `--font-display` Cormorant Garamond for display; `--font-sans` Jost
  for body and wide-tracked uppercase labels (`.eyebrow`).
- **Motion:** slow luxe easing (`--ease-luxe`), scroll reveals, parallax,
  ken-burns, zoom-within-frame hovers, with full `prefers-reduced-motion` support.

## Sections

1. **Hero** — full-bleed wine stage, ken-burns, staggered wordmark reveal, CTAs
2. **Story** — editorial split, parallax craft photography, "Made to share (or not.)"
3. **Signatures** — The Pizookie · Dark Chocolate Sea Salt · Biscoff Noir · Butter Cake
4. **The Pizookie** — large parallax showpiece for the signature product
5. **Gallery** — masonry that reads like `@reverabakehouse`, links to Instagram
6. **Order & Gift** — warm closing invitation with order channels
7. **Footer** — wordmark, nav, socials, contact

## Content to confirm / add

Editable in [`src/data/site.ts`](src/data/site.ts):

- **Phone** `+91 88519 31150` was read off the packaging — please confirm digits.
- **City, address & opening hours** were not in the reference (`brand.city` is empty).
- **Official logo SVG** — the wordmark is currently typeset (see `Wordmark.tsx`).
- Some Signatures photos carry baked-in marketing text; clean product shots would
  elevate that grid (see `src/assets/instagram/README.md`).

## Development

```bash
npm install
npm run dev        # local dev server
npm run build      # production build (tsc + vite)
npm run typecheck  # TypeScript check
```
