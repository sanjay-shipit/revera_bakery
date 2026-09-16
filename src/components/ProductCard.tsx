import type { Product } from '../data/site'

/**
 * Presentational product card. Holds no commerce logic — it raises intent via
 * `onBuy` / `onViewDetails` so the checkout implementation (Shopify later) can
 * change without touching this component.
 */
export function ProductCard({
  product,
  onBuy,
  onViewDetails,
}: {
  product: Product
  onBuy: (product: Product) => void
  onViewDetails: (product: Product) => void
}) {
  return (
    <article className="group flex h-full flex-col">
      <button
        type="button"
        onClick={() => onViewDetails(product)}
        aria-label={`View details for ${product.name}`}
        className="frame relative block aspect-[4/5] overflow-hidden rounded-[2px] bg-cream-deep shadow-[0_24px_48px_-32px_rgba(71,19,30,0.55)]"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: product.objectPosition ?? 'center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      </button>

      <div className="mt-5 flex flex-1 flex-col">
        <span className="text-[0.6rem] uppercase tracking-[0.26em] text-terracotta">
          {product.tag}
        </span>
        <h3 className="mt-2 font-display text-[1.7rem] leading-tight text-ink">
          {product.name}
        </h3>
        <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
          {product.description}
        </p>

        {/* Actions — pinned to the bottom so cards align */}
        <div className="mt-5 grid grid-cols-2 gap-2.5 pt-1 sm:mt-auto">
          <button
            type="button"
            onClick={() => onBuy(product)}
            className="rounded-full bg-wine px-4 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-cream transition-colors duration-500 hover:bg-claret"
          >
            Buy
          </button>
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="rounded-full border border-wine/30 px-4 py-3 text-[0.62rem] uppercase tracking-[0.16em] text-wine transition-colors duration-500 hover:bg-wine hover:text-cream"
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  )
}
