import { useEffect } from 'react'
import Lenis from 'lenis'
import { motion } from 'framer-motion'

/**
 * Scaffold entry point.
 * The design system (palette, type, motion) is wired up here. Full editorial
 * sections are added once the brand's real Instagram photography is available
 * — imagery slots live in `src/assets/instagram/` (see README).
 */
export default function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReduced) return

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <main className="min-h-dvh bg-porcelain text-ink">
      <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 text-center">
        <motion.p
          className="eyebrow text-gold"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          House of Refined Patisserie
        </motion.p>

        <motion.h1
          className="mt-6 font-display font-light leading-[0.9] tracking-tight"
          style={{ fontSize: 'var(--text-hero)' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          Revera
        </motion.h1>

        <motion.div
          className="rule-gold mt-8 w-40"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        />

        <motion.p
          className="mt-8 max-w-md font-display text-xl italic text-ink-soft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Design system ready. Awaiting the brand's photography to compose
          the full experience.
        </motion.p>
      </section>
    </main>
  )
}
