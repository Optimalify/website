# optimalify.org

Marketing site + Help Center for **Optimalify**, the Shopify customer-account blocks app.
Astro, static output, deployed to GitHub Pages on every push to `main`.

## Run it

```bash
nvm use 22        # Astro 5 wants Node ^18.17 || ^20.3 || >=22
npm install
npm run dev       # http://localhost:4321
npm run build     # → dist/
npm run preview   # serve dist/
```

## Where things live

| Path | What |
|---|---|
| `src/i18n/` | Locale helpers (`index.ts`), shared UI strings (`ui.ts`), page copy (`home.ts`, `pages.ts`) — **ja and en side by side** |
| `src/templates/` | The page templates (Home, Founding, Demo, BlogIndex, BlogPost, HelpArticle); they take a `locale` prop |
| `src/pages/**` | Japanese routes at `/…`; `src/pages/en/**` is the English twin — thin wrappers around the templates |
| `src/content/help/{ja,en}/*.md` | **The Help Center. Source of truth for the KB**, one file per article per locale |
| `src/pages/help/[slug].astro` | Renders one article as HTML at `/help/<slug>` (`/en/help/<slug>` for English) |
| `src/pages/help/[slug].md.ts` | Serves the *same file* verbatim at `/help/<slug>.md` (`/en/help/<slug>.md`) |
| `src/pages/llms.txt.ts` | `/llms.txt` (ja) and `/en/llms.txt` — machine-readable index of the KB |
| `src/components/AccountMock.astro` | The customer-account mockups, rebuilt in HTML |
| `src/config.ts` | Domain, support email, App Store URL + UTM helper, pricing facts |
| `src/content/blog/{ja,en}/*.md` | Blog posts |

### Languages

Japanese is the default locale and lives **unprefixed** (`/`, `/help/banner`, `/blog/…`, `/rss.xml`);
English lives under **`/en/`**. Slugs are identical in both, so the counterpart of any page is the
same path with `/en` added or removed (`alternatePath()` in `src/i18n/index.ts`).

- Every page carries `hreflang` `ja` / `en` / `x-default` (= ja), `<html lang>`, `og:locale`, and a
  language switcher in the header. The sitemap has per-URL alternates (`@astrojs/sitemap` `i18n`).
- **Old English URLs are not redirected**: GitHub Pages cannot send a 301, so `/help/banner` etc. now
  serve the Japanese article and the English one is at `/en/help/banner`. Visitors whose browser is
  not Japanese get a dismissible "View in English" bar (no forced redirect, so crawlers and shared
  links keep their URL).
- Adding an article/post: add the file in **both** `ja/` and `en/` with the same name. Site copy
  lives in `src/i18n/*.ts`; change both locales together.
- Blog FAQ: the section heading is `## FAQ` in English and `## よくある質問` in Japanese.

### The Help Center is Markdown, twice

Every article is served two ways from one file per locale:

- `https://optimalify.org/help/banner` — rendered page (Japanese; English at `/en/help/banner`)
- `https://optimalify.org/help/banner.md` — the raw Markdown (English at `/en/help/banner.md`)

Because both come from `src/content/help/ja/banner.md`, they can't drift. Inter-article links
are written **relative** (`[Banner](banner.md)`) so they resolve correctly between the raw
`.md` files; a remark plugin in `astro.config.mjs` rewrites them to `/help/banner` for the
rendered pages. Keep writing them that way.

Adding an article: drop a `.md` file in `src/content/help/ja/` and `src/content/help/en/` with `title`, `description` and
`order` frontmatter. It appears in the sidebar, the `.md` route, `llms.txt` and the sitemap
automatically.

## The blog

Posts are Markdown files in `src/content/blog/{ja,en}/` with `title`, `description`, `date` and `tags`
frontmatter (`updated` and `draft` are optional). They render at `/blog/<slug>`, are listed at
`/blog` and in `/rss.xml`, and are in the sitemap and `llms.txt`.

- **FAQ:** a `## FAQ` section whose questions are `###` headings also emits `FAQPage` JSON-LD.
- **Install CTA:** link to the App Store with `[text](install:listing)`. The URL (and its UTM
  parameters) comes from `src/config.ts`; never paste the listing URL into a post.
- **Help Center links:** absolute, e.g. `[Banner](/help/banner)`; other posts as `/blog/<slug>`.
- **Platform facts:** cite the Shopify page you checked in a `## Sources` section, and leave out
  anything you cannot verify.

## The App Store listing

`SITE.appStoreUrl` in `src/config.ts` is the one place the listing URL lives. Build install links
with `listingUrl('blog' | 'landing' | 'founding')`, which adds
`utm_source=optimalify.org&utm_medium=<surface>&utm_campaign=organic`. Pricing facts shown on the
site come from `PLANS` in the same file; keep them in step with the listing.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

`public/CNAME` pins the custom domain — don't delete it, Pages resets the domain without it.
DNS lives at Squarespace (the registrar); the apex A records point at GitHub Pages while
`MX`/`TXT` stay on Google Workspace so `@optimalify.org` mail keeps working.
