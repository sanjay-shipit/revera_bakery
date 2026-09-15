# Brand photography

These are Revéra Bakehouse's **own Instagram photographs** — the primary visual
source for the site. The design is composed around them rather than stock
imagery.

## How they're wired in

Files here are given original Instagram filenames. They are mapped to
**semantic names** in [`../images.ts`](../images.ts) (e.g. `pizookieHero`,
`giftBoxes`, `doughMacro`), and each section imports from there. To swap a
photo, either replace the file and keep the import path, or point the semantic
key in `images.ts` at a new file.

## Notes on the current set

- Several product shots are the brand's **marketing-caption** images (with text
  baked into the photo, e.g. "500g of pure indulgence"). They read as authentic
  to the feed, but **clean, text-free product photos** would make the Signatures
  grid look even more editorial — drop them in and update `images.ts`.
- No official **logo SVG** was provided, so the wordmark is faithfully typeset
  in Cormorant Garamond (see `../../components/ui/Wordmark.tsx`). Add the real
  logo file here and swap it into that component when available.

## Colour sampling

The palette tokens in `src/index.css` (`--color-*`) were sampled from this
photography: claret wine, blush rose, warm cream, antique gold, terracotta.
