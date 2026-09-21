import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { images } from '../assets/images'
import { brand } from '../data/site'
import { Reveal } from './ui/Reveal'
import { Sparkle } from './ui/Sparkle'

const SPECS = [
  ['500g', 'Deep dish'],
  ['Crisp', 'Edges'],
  ['Gooey', 'Centre'],
  ['100%', 'Eggless'],
]

export function FeaturedPizookie() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  const ghostY = useTransform(scrollYProgress, [0, 1], ['12%', '-12%'])

  return (
    <section
      id="pizookie"
      ref={ref}
      className="grain relative overflow-hidden bg-wine text-cream"
    >
      {/* oversized ghost word */}
      <motion.span
        style={{ y: ghostY }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-6 select-none font-display text-[26vw] font-medium leading-none text-wine-deep/50 md:top-10"
      >
        Signature
      </motion.span>

      <div className="relative mx-auto grid max-w-[1300px] items-center gap-12 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-2 lg:gap-20">
        {/* Copy */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <div className="flex items-center gap-3 text-blush">
              <Sparkle size={12} className="text-gold" />
              <span className="eyebrow">The Signature</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-6 font-display font-light leading-[0.95] text-blush-soft"
              style={{ fontSize: 'var(--text-display)' }}
            >
              The Pizookie
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-cream/85">
              Five hundred grams of pure indulgence — a deep-dish cookie with
              lacquered, crisp edges giving way to a warm, molten centre. Baked
              to order, served in its ring, and made to share.
            </p>
            <p className="mt-3 font-display text-2xl italic text-blush">
              (or not.)
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-gold/25 pt-8 sm:grid-cols-4">
              {SPECS.map(([big, small]) => (
                <div key={small}>
                  <dt className="font-display text-2xl text-cream">{big}</dt>
                  <dd className="mt-1 text-[0.58rem] uppercase tracking-[0.24em] text-blush/70">
                    {small}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <a
              href={brand.orderHref}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-block rounded-full bg-blush px-9 py-3.5 text-[0.72rem] uppercase tracking-[0.22em] text-wine transition-colors duration-500 hover:bg-cream"
            >
              Order the Pizookie
            </a>
          </Reveal>
        </div>

        {/* Image with parallax */}
        <div className="order-1 lg:order-2">
          <Reveal y={40}>
            <div className="frame relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-[2px] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
              <motion.img
                style={{ y: imgY, scale: 1.1, objectPosition: 'center 52%' }}
                src={images.pizookieGiftBox}
                alt="A whole Revéra pizookie plated beside its signature wine gift box and ribbon"
                className="h-full w-full object-cover"
              />
              <span className="pointer-events-none absolute right-4 top-4 text-gold-soft">
                <Sparkle size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
