import rss from '@astrojs/rss';
import type {APIContext} from 'astro';
import {SITE} from '../config';
import {getPosts, slugOf} from '../utils/blog';
import {withLocale} from '../i18n';
import {ui} from '../i18n/ui';

export async function GET(context: APIContext) {
  const t = ui['ja'];
  const posts = await getPosts('ja');
  return rss({
    title: t.blog.feedTitle,
    description: t.blog.feedDescription,
    site: context.site ?? SITE.url,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: withLocale(`/blog/${slugOf(p.id)}/`, 'ja'),
      categories: p.data.tags,
    })),
    customData: '<language>ja</language>',
  });
}
