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
  name: string
  tag: string
  description: string
  image: string
  objectPosition?: string
}

export const products: Product[] = [
  {
    name: 'The Pizookie',
    tag: 'Signature · 500g',
    description:
      'A deep-dish cookie with crisp edges and a molten, gooey centre. Made to share — or not.',
    image: images.pizookieIndulgence,
    objectPosition: 'center 60%',
  },
  {
    name: 'Dark Chocolate Sea Salt',
    tag: 'Cookie',
    description:
      'Rich and chewy, pooled with dark chocolate and finished with flaky sea salt.',
    image: images.darkChocSeaSalt,
    objectPosition: 'center 55%',
  },
  {
    name: 'Biscoff Noir',
    tag: 'Cookie',
    description:
      'A dark cocoa cookie folded with molten Biscoff — dark chocolate meets caramelised spice.',
    image: images.biscoffNoir,
    objectPosition: 'center 70%',
  },
  {
    name: 'Butter Cake',
    tag: 'Cake',
    description:
      'Soft, buttery and loaded with dark & milk chocolate chunks. So fluffy it melts in the mouth.',
    image: images.butterCakeFluffy,
    objectPosition: 'center 62%',
  },
]

// Object-position tuned per image so the square crop keeps the subject centred.
export const galleryImages: { src: string; position?: string }[] = [
  { src: images.giftBoxes, position: 'center 55%' },
  { src: images.cookieBoxesTop },
  { src: images.kraftBags, position: 'center 40%' },
  { src: images.madeToShare, position: 'center 65%' },
  { src: images.cookieSleeveHand, position: 'center 45%' },
  { src: images.pizookieBoxesTop },
  { src: images.doughMacro },
  { src: images.brandPlate },
]
