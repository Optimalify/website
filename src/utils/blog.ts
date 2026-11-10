import {getCollection, type CollectionEntry} from 'astro:content';
import type {Locale} from '../i18n';

export type Post = CollectionEntry<'blog'>;

/** Collection ids are `<locale>/<slug>`; the glob loader turns `<locale>/index` into just `<locale>`. */
export const slugOf = (id: string) => (id.includes('/') ? id.slice(id.indexOf('/') + 1) : 'index');
const inLocale = (id: string, locale: Locale) => id === locale || id.startsWith(`${locale}/`);

/** Published posts of one locale, newest first. Drafts are excluded everywhere (index, feed, sitemap). */
export async function getPosts(locale: Locale): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft && inLocale(p.id, locale));
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export type HelpArticle = CollectionEntry<'help'>;

/** Help Center articles of one locale by `order`. `index` is the Help Center home. */
export async function getHelp(locale: Locale): Promise<HelpArticle[]> {
  const articles = await getCollection('help', (a) => inLocale(a.id, locale));
  return articles.sort((a, b) => a.data.order - b.data.order);
}

/** Markdown → plain text, enough for word counts and JSON-LD answers. */
function plain(md: string): string {
  return md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#|]/g, ' ')
    .replace(/^\s*[-+]\s+/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function wordCount(body: string): number {
  const text = plain(body);
  return text ? text.split(' ').length : 0;
}

/** English: ~220 words/min. Japanese has no spaces: ~500 characters/min. */
export function readingMinutes(body: string, locale: Locale = 'en'): number {
  if (locale === 'ja') return Math.max(1, Math.round(plain(body).replace(/\s/g, '').length / 500));
  return Math.max(1, Math.round(wordCount(body) / 220));
}

/**
 * Pulls Q&A pairs out of the post's `## FAQ` section (`### Question` + answer
 * paragraphs) so the JSON-LD can never drift from what the page shows.
 */
export function extractFaq(body: string): {q: string; a: string}[] {
  const section = /^##\s+(?:FAQ|Frequently asked questions|よくある質問)\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im.exec(body);
  if (!section) return [];
  return section[1]
    .split(/^###\s+/m)
    .slice(1)
    .map((chunk) => {
      const [q, ...rest] = chunk.split('\n');
      return {q: plain(q), a: plain(rest.join('\n'))};
    })
    .filter((x) => x.q && x.a);
}
