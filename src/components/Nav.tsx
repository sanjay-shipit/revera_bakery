import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { nav, brand } from '../data/site'
import { Logo } from './ui/Logo'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          solid
            ? 'bg-cream/92 backdrop-blur-md text-ink shadow-[0_1px_0_rgba(42,21,24,0.08)]'
            : 'bg-transparent text-cream'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <a
            href="#top"
            aria-label={brand.full}
            className={`shrink-0 transition-colors duration-500 ${
              solid ? 'text-wine' : 'text-cream'
            }`}
          >
            <Logo className="w-[132px] md:w-[156px]" />
          </a>

          <nav className="hidden items-center gap-9 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.7rem] uppercase tracking-[0.24em]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#visit"
              className={`hidden rounded-full border px-6 py-2.5 text-[0.68rem] uppercase tracking-[0.22em] transition-colors duration-500 md:inline-block ${
                solid
                  ? 'border-wine/30 text-wine hover:bg-wine hover:text-cream'
                  : 'border-cream/40 text-cream hover:bg-cream hover:text-wine'
              }`}
            >
              Order now
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] lg:hidden"
            >
              <span
                className={`h-px w-6 bg-current transition-all duration-300 ${
                  open ? 'translate-y-[6px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-6 bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-px w-6 bg-current transition-all duration-300 ${
                  open ? '-translate-y-[6px] -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-wine text-cream lg:hidden"
          >
            {nav.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.6 }}
                className="font-display text-4xl"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#visit"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + nav.length * 0.07, duration: 0.6 }}
              className="mt-4 rounded-full border border-gold/60 px-8 py-3 text-xs uppercase tracking-[0.24em] text-gold-soft"
            >
              Order now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
