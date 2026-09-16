import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products, type Product } from '../data/site'
import { handleBuy } from '../lib/commerce'
import { Reveal, Stagger } from './ui/Reveal'
import { Sparkle } from './ui/Sparkle'
import { ProductCard } from './ProductCard'
import { ProductDetailModal } from './ProductDetailModal'

/**
 * Products section (the brand's "Signatures"). Owns the selected-product state
 * for the detail modal and bridges card intent to the commerce seam. It never
 * imports a store SDK — purchase logic lives in `lib/commerce`.
 */
export function Signatures() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onBuy = useCallback((product: Product) => {
    const result = handleBuy(product)
    setToast(result.message)
    if (toastTimer.current) clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 4000)
  }, [])

  return (
    <section
      id="signatures"
      className="relative bg-cream-soft px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-wine">
            <Sparkle size={12} className="text-gold" />
            <span className="eyebrow">The Menu</span>
            <Sparkle size={12} className="text-gold" />
          </div>
          <h2
            className="mt-6 font-display font-light leading-[1.05] text-ink"
            style={{ fontSize: 'var(--text-section)' }}
          >
            Signatures
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[0.98rem] leading-relaxed text-ink-soft">
            A short, considered menu — each one baked in small batches and
            finished by hand.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid grid-cols-1 items-stretch gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Stagger.Item key={p.id} className="h-full">
              <ProductCard
                product={p}
                onBuy={onBuy}
                onViewDetails={setSelected}
              />
            </Stagger.Item>
          ))}
        </Stagger>
      </div>

      <ProductDetailModal
        product={selected}
        onClose={() => setSelected(null)}
        onBuy={onBuy}
      />

      {/* Clearly-marked placeholder feedback until Shopify checkout is connected */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 bottom-6 z-[70] mx-auto flex max-w-md items-center gap-3 rounded-full bg-wine px-6 py-3.5 text-center text-[0.72rem] tracking-[0.06em] text-blush shadow-[0_20px_50px_-20px_rgba(31,10,15,0.7)]"
            style={{
              width: 'fit-content',
              marginBottom: 'env(safe-area-inset-bottom, 0px)',
            }}
          >
            <Sparkle size={11} className="shrink-0 text-gold" />
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
