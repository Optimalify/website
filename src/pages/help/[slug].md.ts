import type {APIRoute, GetStaticPaths} from 'astro';
import {getCollection} from 'astro:content';

/**
 * Every Help Center article is also served verbatim as Markdown at
 * `/help/<slug>.md` — the same file the site renders, so the two can't drift.
 * Inter-article links stay relative (`banner.md`), which resolves correctly
 * between these raw files as well as between the rendered pages.
 */
export const getStaticPaths = (async () => {
  const articles = await getCollection('help');
  return articles.map((entry) => ({params: {slug: entry.id}, props: {entry}}));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({props}) => {
  const {entry} = props as {entry: {body: string; data: {title: string}}};
  const body = `# ${entry.data.title}\n\n${entry.body.trim()}\n`;
  return new Response(body, {
    headers: {
      'content-type': 'text/markdown; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
};
