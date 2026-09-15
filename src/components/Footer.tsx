import { brand, nav } from '../data/site'
import { Wordmark } from './ui/Wordmark'
import { Sparkle } from './ui/Sparkle'

export function Footer() {
  return (
    <footer
      className="bg-wine text-cream"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto max-w-[1300px] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <Wordmark className="text-[2.4rem] text-blush-soft md:text-[3rem]" />
          <div className="flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/50" />
            <Sparkle size={12} />
            <span className="h-px w-8 bg-gold/50" />
          </div>
          <p className="max-w-xs font-display text-lg italic text-cream/80">
            {brand.tagline}
          </p>
        </div>

        <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-[0.66rem] uppercase tracking-[0.24em] text-cream/80"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-12 h-px w-full bg-cream/15" />

        <div className="mt-8 flex flex-col items-center justify-between gap-5 text-[0.68rem] tracking-[0.12em] text-cream/60 md:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              className="link-underline uppercase tracking-[0.2em]"
            >
              {brand.instagramHandle}
            </a>
            <span className="tracking-[0.2em]">{brand.pronunciation}</span>
          </div>
          <p className="uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} {brand.full} · 100% Eggless
          </p>
        </div>
      </div>
    </footer>
  )
}
