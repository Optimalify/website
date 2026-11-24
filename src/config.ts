// Single place for the facts that change when the app goes public.
export const SITE = {
  name: 'Optimalify',
  domain: 'optimalify.org',
  url: 'https://optimalify.org',
  tagline: 'Meet customers where they sign in',
  description:
    'Optimalify adds announcement banners, profile fields, trust badges, payment icons and support ' +
    "contact links to your Shopify customer account pages — no theme code.",
  supportEmail: 'mia@optimalify.org',
  // The live Shopify App Store listing. The ONLY place this URL is written —
  // every install link on the site goes through `listingUrl()` below.
  appStoreUrl: 'https://apps.shopify.com/optimalify-customer-account',
} as const;

// Pricing facts as shown on the live listing. Keep these in step with it.
export const PLANS = {
  free: {blocks: 1},
  pro: {monthly: '4.99', yearly: '49.99', yearlySaving: '17%', trialDays: 14},
} as const;

/** Where a visitor clicked install from. Becomes `utm_medium`. */
export type Surface = 'blog' | 'landing' | 'founding' | 'demo';

/**
 * The App Store listing URL tagged for a surface of this site, e.g.
 * `…/optimalify-customer-account?utm_source=optimalify.org&utm_medium=blog&utm_campaign=organic`.
 */
export function listingUrl(medium: Surface): string {
  const url = new URL(SITE.appStoreUrl);
  url.searchParams.set('utm_source', SITE.domain);
  url.searchParams.set('utm_medium', medium);
  url.searchParams.set('utm_campaign', 'organic');
  return url.href;
}

export const installLabel = 'Add to Shopify';

/** mailto: link for the Founding merchants offer — subject and body template pre-filled. */
export function foundingMailtoFor(locale: 'ja' | 'en'): string {
  const subject = locale === 'ja' ? 'Founding merchant（ファウンディングマーチャント参加希望）' : 'Founding merchant';
  const body =
    locale === 'ja'
      ? ['ストアのURL: ', '最初に使いたいブロック（お知らせバナー、プロフィール項目、信頼バッジ、決済アイコン、お問い合わせ先など）: ', '']
      : ['Store URL: ', 'What I would use first (Announcement banner, Profile fields, Trust badges, Payment icons, Support contact): ', ''];
  return `mailto:${SITE.supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body.join('\n'))}`;
}
export const foundingMailto = foundingMailtoFor('en');
