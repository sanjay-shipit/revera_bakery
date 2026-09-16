/**
 * Commerce seam for Revéra Bakehouse.
 * ---------------------------------------------------------------------------
 * This is the ONLY place the app talks to a checkout provider. Presentation
 * (ProductCard, ProductDetailModal) never imports a store SDK — it calls the
 * `onBuy(product)` prop, which the page wires to `handleBuy` below.
 *
 * Shopify is NOT integrated yet (no store, keys, domain or checkout). When the
 * store exists, replace the body of `checkoutProvider.buy` with the real
 * Shopify call (e.g. create a cart / redirect to the hosted checkout URL) and
 * add `shopifyVariantId` to the products in `data/site.ts`. Nothing else in the
 * UI has to change.
 */

export type PurchasableProduct = {
  id: string
  name: string
  price?: string
  /** Reserved for the Shopify phase — not used yet. */
  shopifyVariantId?: string
}

export type BuyResult = { status: 'placeholder' | 'ok'; message: string }

export interface CheckoutProvider {
  buy(product: PurchasableProduct): BuyResult
}

/**
 * Temporary provider used until the Shopify store is live. It performs NO
 * checkout and NO payment — it only records intent and returns a clearly
 * marked placeholder result the UI can surface.
 */
const placeholderProvider: CheckoutProvider = {
  buy(product) {
    // eslint-disable-next-line no-console
    console.info(
      '[commerce] Buy requested (Shopify not connected yet):',
      product.id,
      '—',
      product.name,
    )
    return {
      status: 'placeholder',
      message: 'Online checkout opens soon — message us on Instagram to order.',
    }
  },
}

/** Swap this for a Shopify-backed provider during the integration phase. */
export const checkoutProvider: CheckoutProvider = placeholderProvider

export function handleBuy(product: PurchasableProduct): BuyResult {
  return checkoutProvider.buy(product)
}
