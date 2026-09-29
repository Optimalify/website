// Single place for the facts that change when the app goes public.
export const SITE = {
  name: 'Optimalify',
  domain: 'optimalify.org',
  url: 'https://optimalify.org',
  tagline: 'Meet customers where they sign in',
  description:
    'Optimalify adds banners, profile capture, trust badges, payment icons and support ' +
    "links to your Shopify customer account pages — no theme code.",
  supportEmail: 'mia@optimalify.org',
  // Fill in once the App Store listing is public; until then every install CTA
  // falls back to the early-access mailto.
  appStoreUrl: 'https://apps.shopify.com/optimalify-customer-account',
} as const;

export const installHref = SITE.appStoreUrl
  ? SITE.appStoreUrl
  : `mailto:${SITE.supportEmail}?subject=Optimalify%20early%20access`;

export const installLabel = SITE.appStoreUrl ? 'Add to Shopify' : 'Get early access';
