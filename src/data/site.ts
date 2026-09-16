import { images } from '../assets/images'

/**
 * Site content for Revéra Bakehouse.
 * Product names and descriptions are drawn from the brand's own Instagram
 * captions. Fields marked TODO need confirmation from the owner (they were
 * not fully legible / present in the reference).
 */

export const brand = {
  name: 'Revéra',
  full: 'Revéra Bakehouse',
  pronunciation: 'reh · VAY · rah',
  tagline: 'A little more Revéra.',
  instagram: 'https://www.instagram.com/reverabakehouse/',
  instagramHandle: '@reverabakehouse',
  // Primary order channel until a phone number is confirmed.
  orderHref: 'https://www.instagram.com/reverabakehouse/',
  // TODO(owner): a phone number (~+91 88519 31150) is printed on the packaging
  // but was not confirmed, so it is intentionally left off the live site.
  // Restore `phone` / `phoneHref` / `whatsappHref` here once verified.
  phone: '',
  // TODO(owner): city / full address & opening hours were not in the reference.
  city: '',
}

export const nav = [
  { label: 'Signatures', href: '#signatures' },
  { label: 'The Pizookie', href: '#pizookie' },
  { label: 'Craft', href: '#story' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Order', href: '#visit' },
]

export type Product = {
  id: string
  name: string
  tag: string
  description: string
  /** Card image */
  image: string
  /** Optional second image shown in the detail view */
  detailImage?: string
  objectPosition?: string
  detailObjectPosition?: string
  /** Short factual highlights drawn from the brand's own captions */
  highlights: string[]
  eggless?: boolean
  /** Price is not published yet — left undefined until confirmed. */
  price?: string
}

export const products: Product[] = [
  {
    id: 'pizookie',
    name: 'The Pizookie',
    tag: 'Signature · 500g',
    description:
      'A deep-dish cookie with crisp edges and a molten, gooey centre. Made to share — or not.',
    image: images.pizookieBoxesTop,
    detailImage: images.pizookieMoldsCraft,
    objectPosition: 'center 50%',
    detailObjectPosition: 'center 55%',
    highlights: [
      '500g deep-dish',
      'Crisp edges, gooey centre',
      'Made to share (or not)',
    ],
    eggless: true,
  },
  {
    id: 'dark-chocolate-sea-salt',
    name: 'Dark Chocolate Sea Salt',
    tag: 'Cookie',
    description:
      'Rich and chewy, pooled with dark chocolate and finished with flaky sea salt.',
    image: images.seaSaltPlate,
    detailImage: images.seaSaltLogobox,
    objectPosition: 'center 62%',
    detailObjectPosition: 'center 55%',
    highlights: ['Rich & chewy', 'Pooled dark chocolate', 'Finished with sea salt'],
    eggless: true,
  },
  {
    id: 'biscoff-noir',
    name: 'Biscoff Noir',
    tag: 'Cookie',
    description:
      'A dark cocoa cookie folded with molten Biscoff — dark chocolate meets caramelised spice.',
    image: images.biscoffPlate,
    detailImage: images.biscoffBox,
    objectPosition: 'center 60%',
    detailObjectPosition: 'center 40%',
    highlights: ['Dark cocoa cookie', 'Molten Biscoff centre', 'Topped with a Biscoff biscuit'],
    eggless: true,
  },
  {
    id: 'butter-cake',
    name: 'Butter Cake',
    tag: 'Cake',
    description:
      'Soft, buttery and loaded with dark & milk chocolate chunks. So fluffy it melts in the mouth.',
    image: images.butterCakeBox,
    detailImage: images.butterCakeServer,
    objectPosition: 'center 55%',
    detailObjectPosition: 'center 45%',
    highlights: ['Soft & buttery', 'Dark & milk chocolate chunks', 'Melts in the mouth'],
    eggless: true,
  },
]

// "From the feed" — mixes studio packaging shots, craft moments and the
// brand's own captioned Instagram posts (which belong here, in the feed).
export const galleryImages: { src: string; position?: string }[] = [
  { src: images.seaSaltLogobox, position: 'center 45%' },
  { src: images.madeToShare, position: 'center 45%' },
  { src: images.biscoffBox, position: 'center 40%' },
  { src: images.pizookieMoldsCraft, position: 'center 50%' },
  { src: images.butterCakeServer, position: 'center 45%' },
  { src: images.biscoffNoir, position: 'center 45%' },
  { src: images.pizookieMoldsTray, position: 'center 45%' },
  { src: images.brandPlate },
]
