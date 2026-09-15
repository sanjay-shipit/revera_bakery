import { brand } from '../../data/site'

/**
 * Typeset wordmark that mirrors the packaging lockup: an elegant high-contrast
 * serif set in wide caps ("REVÉRA") above spaced "BAKEHOUSE".
 * Swap for the official logo SVG in `src/assets/` when available.
 */
export function Wordmark({
  className = '',
  subtitle = true,
  as: Tag = 'span',
}: {
  className?: string
  subtitle?: boolean
  as?: 'span' | 'h1' | 'div'
}) {
  return (
    <Tag className={`inline-flex flex-col items-center leading-none ${className}`}>
      <span className="font-display font-medium uppercase tracking-[0.14em]">
        Revéra
      </span>
      {subtitle && (
        <span
          className="font-sans uppercase tracking-[0.5em] text-[0.42em] font-normal opacity-85"
          style={{ marginTop: '0.35em' }}
        >
          Bakehouse
        </span>
      )}
      <span className="sr-only">{brand.full}</span>
    </Tag>
  )
}
