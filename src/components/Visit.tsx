import { images } from '../assets/images'
import { brand } from '../data/site'
import { Reveal } from './ui/Reveal'
import { Sparkle } from './ui/Sparkle'

const channels = [
  {
    label: 'Order on Instagram',
    value: brand.instagramHandle,
    href: brand.instagram,
    primary: true,
  },
  {
    label: 'See the latest bakes',
    value: 'reverabakehouse',
    href: brand.instagram,
  },
]

export function Visit() {
  return (
    <section
      id="visit"
      className="grain relative overflow-hidden bg-wine-deep text-cream"
    >
      <div className="mx-auto grid max-w-[1300px] items-stretch gap-0 lg:grid-cols-2">
        {/* Image side */}
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-[640px]">
          <img
            src={images.kraftBags}
            alt="Revéra Bakehouse gift bags packed for collection"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-wine-deep/70 lg:bg-gradient-to-l" />
        </div>

        {/* Copy side */}
        <div className="flex flex-col justify-center px-6 py-20 md:px-14 lg:py-28">
          <Reveal>
            <div className="flex items-center gap-3 text-blush">
              <Sparkle size={12} className="text-gold" />
              <span className="eyebrow">Order &amp; Gift</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className="mt-6 font-display font-light leading-[0.98] text-blush-soft"
              style={{ fontSize: 'var(--text-display)' }}
            >
              A little more
              <span className="block italic">Revéra.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[1.02rem] leading-relaxed text-cream/85">
              Baked fresh to order and boxed like a gift. Reach us to place an
              order, arrange a gift, or ask about the day&apos;s bakes.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-10 space-y-px overflow-hidden rounded-[3px] border border-gold/20">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`group flex items-center justify-between gap-4 px-6 py-5 transition-colors duration-500 ${
                      c.primary
                        ? 'bg-blush text-wine hover:bg-cream'
                        : 'bg-wine/40 text-cream hover:bg-wine'
                    }`}
                  >
                    <span className="flex flex-col">
                      <span className="text-[0.6rem] uppercase tracking-[0.24em] opacity-70">
                        {c.label}
                      </span>
                      <span className="mt-1 font-display text-xl">{c.value}</span>
                    </span>
                    <span className="translate-x-0 text-lg transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
