import { galleryImages, brand } from '../data/site'
import { Reveal, Stagger } from './ui/Reveal'
import { Sparkle } from './ui/Sparkle'

function InstagramGlyph({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export function Gallery() {
  return (
    <section id="gallery" className="bg-cream px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <Reveal className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <div className="flex items-center justify-center gap-3 text-wine md:justify-start">
              <Sparkle size={12} className="text-gold" />
              <span className="eyebrow">From the feed</span>
            </div>
            <h2
              className="mt-5 font-display font-light leading-[1.02] text-ink"
              style={{ fontSize: 'var(--text-section)' }}
            >
              {brand.instagramHandle}
            </h2>
          </div>
          <a
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-wine/25 px-7 py-3 text-[0.68rem] uppercase tracking-[0.22em] text-wine transition-colors duration-500 hover:bg-wine hover:text-cream"
          >
            <InstagramGlyph className="h-4 w-4" />
            Follow on Instagram
          </a>
        </Reveal>

        <Stagger
          className="mt-14 columns-2 gap-3 md:columns-4 md:gap-4"
          gap={0.07}
        >
          {galleryImages.map((g, i) => (
            <Stagger.Item key={i} className="mb-3 break-inside-avoid md:mb-4">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noreferrer"
                className="frame group relative block overflow-hidden rounded-[2px] bg-cream-deep"
              >
                <img
                  src={g.src}
                  alt="Revéra Bakehouse"
                  loading="lazy"
                  className="w-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-wine/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <InstagramGlyph className="h-7 w-7 text-cream" />
                </div>
              </a>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
