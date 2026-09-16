import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Product } from '../data/site'
import { brand } from '../data/site'
import { Sparkle } from './ui/Sparkle'

const EASE = [0.22, 1, 0.36, 1] as const

export function ProductDetailModal({
  product,
  onClose,
  onBuy,
}: {
  product: Product | null
  onClose: () => void
  onBuy: (product: Product) => void
}) {
  const closeRef = useRef<HTMLButtonElement>(null)

  // Escape to close + body scroll lock while open.
  useEffect(() => {
    if (!product) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [product, onClose])

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: EASE }}
        >
          {/* Backdrop */}
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute inset-0 bg-wine-deep/70 backdrop-blur-sm"
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative z-10 grid max-h-[92vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-t-[6px] bg-cream shadow-[0_40px_120px_-30px_rgba(31,10,15,0.7)] sm:mx-6 sm:rounded-[4px] md:grid-cols-2"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden bg-cream-deep sm:h-72 md:h-auto">
              <img
                src={product.detailImage ?? product.image}
                alt={product.name}
                className="h-full w-full object-cover"
                style={{
                  objectPosition:
                    product.detailObjectPosition ??
                    product.objectPosition ??
                    'center',
                }}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col overflow-y-auto px-7 py-8 md:px-10 md:py-12">
              <div className="flex items-center gap-3 text-wine">
                <Sparkle size={11} className="text-gold" />
                <span className="eyebrow">{product.tag}</span>
              </div>

              <h2
                id="product-modal-title"
                className="mt-4 font-display text-4xl font-light leading-[1.02] text-ink md:text-5xl"
              >
                {product.name}
              </h2>

              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft">
                {product.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-3 text-[0.9rem] text-ink"
                  >
                    <span className="h-px w-5 bg-gold" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.62rem] uppercase tracking-[0.24em] text-ink-soft">
                {product.eggless && <span>100% Eggless</span>}
                <span>Made fresh to order</span>
              </div>

              <div className="mt-auto pt-8">
                <button
                  type="button"
                  onClick={() => onBuy(product)}
                  className="w-full rounded-full bg-wine px-8 py-4 text-[0.7rem] uppercase tracking-[0.22em] text-cream transition-colors duration-500 hover:bg-claret"
                >
                  Buy
                </button>
                <a
                  href={brand.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-4 inline-block text-[0.66rem] uppercase tracking-[0.2em] text-wine"
                >
                  Or order on Instagram
                </a>
              </div>
            </div>

            {/* Close */}
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-cream/80 text-ink backdrop-blur transition-colors duration-300 hover:bg-cream md:bg-cream/70"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M2 2l12 12M14 2L2 14"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
