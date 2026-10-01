import rss from '@astrojs/rss';
import type {APIContext} from 'astro';
import {SITE} from '../config';
import {getPosts} from '../utils/blog';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: `${SITE.name} blog`,
    description: 'Practical guides for Shopify merchants on customer account pages.',
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: `/blog/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: '<language>en</language>',
  });
}
