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
| `src/pages/index.astro` | The landing page — all of its copy is in the file |
| `src/content/help/*.md` | **The Help Center. Source of truth for the KB.** |
| `src/pages/help/[slug].astro` | Renders one article as HTML at `/help/<slug>` |
| `src/pages/help/[slug].md.ts` | Serves the *same file* verbatim at `/help/<slug>.md` |
| `src/pages/llms.txt.ts` | `/llms.txt` — machine-readable index of the KB |
| `src/components/AccountMock.astro` | The customer-account mockups, rebuilt in HTML |
| `src/config.ts` | Domain, support email, App Store URL |

### The Help Center is Markdown, twice

Every article is served two ways from one file:

- `https://optimalify.org/help/banner` — rendered page
- `https://optimalify.org/help/banner.md` — the raw Markdown

Because both come from `src/content/help/banner.md`, they can't drift. Inter-article links
are written **relative** (`[Banner](banner.md)`) so they resolve correctly between the raw
`.md` files; a remark plugin in `astro.config.mjs` rewrites them to `/help/banner` for the
rendered pages. Keep writing them that way.

Adding an article: drop a `.md` file in `src/content/help/` with `title`, `description` and
`order` frontmatter. It appears in the sidebar, the `.md` route, `llms.txt` and the sitemap
automatically.

## When the App Store listing goes live

Set `appStoreUrl` in `src/config.ts`. Every "Get early access" CTA becomes "Add to Shopify"
and points at the listing.

## Deploying

Push to `main`. `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

`public/CNAME` pins the custom domain — don't delete it, Pages resets the domain without it.
DNS lives at Squarespace (the registrar); the apex A records point at GitHub Pages while
`MX`/`TXT` stay on Google Workspace so `@optimalify.org` mail keeps working.
