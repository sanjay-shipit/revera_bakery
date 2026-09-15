# Brand photography — drop-in folder

Revera's **real Instagram photographs** go here. This is the primary visual
source for the whole site; the design is composed around these images rather
than stock photography.

## How to add them

1. Export the images from Instagram (or share them via Google Drive / commit
   them to the branch) and place the files in this folder.
2. Use these role-based names so they slot straight into the layout — the
   exact extension (`.jpg` / `.webp` / `.png`) does not matter:

   | File name                | Where it is used                              | Ideal crop           |
   | ------------------------ | --------------------------------------------- | -------------------- |
   | `hero.jpg`               | Full-bleed hero background                     | Landscape / wide     |
   | `story.jpg`              | Brand / story editorial split                 | Portrait or square   |
   | `product-01.jpg` … `-06` | Signature products grid                       | Square (1:1)         |
   | `collection.jpg`         | Featured collection showpiece (large parallax)| Portrait / tall      |
   | `gallery-01.jpg` … `-08` | Instagram-style gallery                       | Mixed square/portrait|
   | `visit.jpg`              | Visit / order section                         | Landscape            |
   | `logo.svg` / `logo.png`  | Wordmark in header + footer                   | Transparent bg       |

3. Higher resolution is better (long edge ≥ 1600px for hero/collection).

## Colour sampling

Once the real photos are here, the palette tokens in `src/index.css`
(`--color-*`) are re-tuned by sampling the dominant/accent colours from the
actual photography, so the site's colour story matches the brand's feed.
