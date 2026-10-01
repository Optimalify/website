import {getCollection, type CollectionEntry} from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts are excluded everywhere (index, feed, sitemap). */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
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

export function readingMinutes(body: string): number {
  return Math.max(1, Math.round(wordCount(body) / 220));
}

/**
 * Pulls Q&A pairs out of the post's `## FAQ` section (`### Question` + answer
 * paragraphs) so the JSON-LD can never drift from what the page shows.
 */
export function extractFaq(body: string): {q: string; a: string}[] {
  const section = /^##\s+(?:FAQ|Frequently asked questions)\s*$([\s\S]*?)(?=^##\s|(?![\s\S]))/im.exec(body);
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
