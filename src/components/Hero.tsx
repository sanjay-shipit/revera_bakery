import { motion } from 'framer-motion'
import { images } from '../assets/images'
import { brand } from '../data/site'
import { Sparkle } from './ui/Sparkle'

const EASE = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-wine-deep text-cream"
    >
      {/* Background photograph with slow ken-burns */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: EASE }}
      >
        <img
          src={images.giftBoxes}
          alt="Revéra Bakehouse wine gift boxes tied with printed satin ribbon"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Wine wash for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-wine-deep/85 via-wine/55 to-wine-deep/92" />
      <div className="absolute inset-0 bg-wine-deep/25" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          className="flex items-center gap-3 text-blush"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
        >
          <Sparkle size={11} className="text-gold" />
          <span className="eyebrow">A little more Revéra · 100% Eggless</span>
          <Sparkle size={11} className="text-gold" />
        </motion.div>

        <motion.h1
          className="mt-7 font-display font-medium uppercase leading-[0.85] tracking-[0.06em] text-blush-soft"
          style={{ fontSize: 'var(--text-hero)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.55 }}
        >
          Revéra
        </motion.h1>

        <motion.p
          className="mt-3 text-[0.7rem] uppercase tracking-[0.5em] text-blush/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {brand.pronunciation}
        </motion.p>

        <motion.div
          className="mt-9 h-px w-32 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.1 }}
        />

        <motion.p
          className="mt-8 max-w-xl text-balance font-display text-2xl italic leading-relaxed text-cream/90 md:text-[1.7rem]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE, delay: 1.25 }}
        >
          Small-batch cookies &amp; cakes, boxed like a gift.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.45 }}
        >
          <a
            href="#pizookie"
            className="rounded-full bg-blush px-9 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-wine transition-all duration-500 hover:bg-cream"
          >
            Order the Pizookie
          </a>
          <a
            href="#signatures"
            className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-cream/90"
          >
            View signatures
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-blush/70"
        >
          <span className="text-[0.55rem] uppercase tracking-[0.4em]">Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
