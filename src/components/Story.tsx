import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { images } from '../assets/images'
import { Reveal } from './ui/Reveal'
import { Sparkle } from './ui/Sparkle'

export function Story() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['8%', '-8%'])

  return (
    <section
      id="story"
      ref={ref}
      className="relative overflow-hidden bg-cream px-6 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto grid max-w-[1300px] items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-24">
        {/* Imagery — offset editorial pair */}
        <div className="relative order-2 h-[440px] sm:h-[560px] lg:order-1 lg:h-[680px]">
          <motion.div
            style={{ y: y1 }}
            className="frame absolute left-0 top-0 h-[64%] w-[68%] overflow-hidden rounded-[2px] shadow-[0_30px_60px_-30px_rgba(71,19,30,0.5)]"
          >
            <img
              src={images.doughMacro}
              alt="Cookie dough heaped with dark chocolate callets"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="frame absolute bottom-0 right-0 h-[58%] w-[58%] overflow-hidden rounded-[2px] border-[6px] border-cream shadow-[0_30px_60px_-30px_rgba(71,19,30,0.55)]"
          >
            <img
              src={images.pizookieMolds}
              alt="Freshly baked pizookies resting in stainless ring moulds"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="pointer-events-none absolute -left-3 top-[58%] hidden text-gold lg:block">
            <Sparkle size={20} />
          </div>
        </div>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <div className="flex items-center gap-3 text-wine">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">The Revéra Way</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className="mt-7 font-display font-light leading-[1.02] text-ink"
              style={{ fontSize: 'var(--text-section)' }}
            >
              Made to share.
              <span className="block italic text-wine">(or not.)</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 max-w-lg space-y-5 text-[1.02rem] leading-relaxed text-ink-soft">
              <p>
                Revéra Bakehouse begins with a simple belief — that an everyday
                indulgence deserves to feel like an occasion. Every pizookie,
                cookie and cake is baked in small batches, by hand, and finished
                the moment it is ordered.
              </p>
              <p>
                Everything is{' '}
                <span className="text-ink">100% eggless</span> — crisp edges,
                gooey centres, real chocolate — then wrapped in our signature
                wine boxes and satin ribbon, ready to be gifted or kept entirely
                to yourself.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <dl className="mt-10 flex gap-10">
              {[
                ['100%', 'Eggless'],
                ['Small', 'Batch'],
                ['Made', 'to order'],
              ].map(([big, small]) => (
                <div key={small}>
                  <dt className="font-display text-3xl text-wine md:text-4xl">
                    {big}
                  </dt>
                  <dd className="mt-1 text-[0.62rem] uppercase tracking-[0.24em] text-ink-soft">
                    {small}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
