import logoSvg from '../../assets/logo.svg?raw'
import { brand } from '../../data/site'

/**
 * The official REVÉRA BAKEHOUSE wordmark (client-supplied vector).
 * Inlined so it inherits `currentColor` — set the colour via a text-* class
 * and the width via the wrapper. Backgrounds were stripped from the source PDF.
 */
export function Logo({
  className = '',
  title = brand.full,
}: {
  className?: string
  title?: string
}) {
  return (
    <span
      role="img"
      aria-label={title}
      className={`logo inline-block ${className}`}
      dangerouslySetInnerHTML={{ __html: logoSvg }}
    />
  )
}
