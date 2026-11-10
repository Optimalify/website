// i18n core: Japanese is the default locale and lives unprefixed at `/`;
// English lives under `/en/`. Slugs are identical in both locales, so the
// counterpart of any page is the same path with `/en` added or removed.
export const locales = ['ja', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

/** BCP 47 tag used for <html lang>, hreflang and sitemap alternates. */
export const htmlLang: Record<Locale, string> = {ja: 'ja', en: 'en'};
/** Open Graph locale. */
export const ogLocale: Record<Locale, string> = {ja: 'ja_JP', en: 'en_US'};
/** Language names, written in their own language (for the switcher). */
export const localeName: Record<Locale, string> = {ja: '日本語', en: 'English'};

/** Root-level assets that exist once, not per locale. */
const SHARED_PREFIXES = ['/img/', '/favicon', '/sitemap', '/robots.txt', '/_astro/'];

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ja';
}

/** `/en/help/banner` → `/help/banner`; unprefixed paths are returned unchanged. */
export function stripLocale(pathname: string): string {
  if (pathname === '/en') return '/';
  return pathname.startsWith('/en/') ? pathname.slice(3) : pathname;
}

/**
 * Localise a site-absolute path (`/help/banner`, `/#faq`, `/blog`). Anything that
 * is not a site path (https://, mailto:, #hash) or is a shared asset passes through.
 */
export function withLocale(path: string, locale: Locale): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  if (SHARED_PREFIXES.some((p) => path.startsWith(p))) return path;
  const bare = stripLocale(path);
  if (locale === defaultLocale) return bare;
  return bare === '/' ? '/en/' : `/en${bare}`;
}

/** The same page in another locale: `/help/banner` ⇄ `/en/help/banner`. */
export function alternatePath(pathname: string, to: Locale): string {
  return withLocale(stripLocale(pathname), to);
}
