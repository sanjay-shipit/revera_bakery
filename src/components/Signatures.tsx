import { products } from '../data/site'
import { Reveal, Stagger } from './ui/Reveal'
import { Sparkle } from './ui/Sparkle'

export function Signatures() {
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

        <Stagger className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <Stagger.Item key={p.name}>
              <article className="group">
                <div className="frame relative aspect-[4/5] overflow-hidden rounded-[2px] bg-cream-deep shadow-[0_24px_48px_-32px_rgba(71,19,30,0.55)]">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: p.objectPosition ?? 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-deep/45 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                </div>

                <div className="mt-5">
                  <span className="text-[0.6rem] uppercase tracking-[0.26em] text-terracotta">
                    {p.tag}
                  </span>
                  <h3 className="mt-2 font-display text-[1.7rem] leading-tight text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-soft">
                    {p.description}
                  </p>
                </div>
              </article>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
