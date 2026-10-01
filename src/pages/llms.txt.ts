import type {APIRoute} from 'astro';
import {getCollection} from 'astro:content';
import {SITE} from '../config';
import {getPosts} from '../utils/blog';

/**
 * llms.txt — a machine-readable index of the Help Center, pointing at the raw
 * Markdown for each article. See https://llmstxt.org.
 */
export const GET: APIRoute = async () => {
  const articles = (await getCollection('help')).sort((a, b) => a.data.order - b.data.order);
  const docs = articles
    .filter((a) => a.id !== 'index')
    .map((a) => `- [${a.data.title}](${SITE.url}/help/${a.id}.md): ${a.data.description}`)
    .join('\n');

  const posts = (await getPosts())
    .map((p) => `- [${p.data.title}](${SITE.url}/blog/${p.id}): ${p.data.description}`)
    .join('\n');

  const body = `# ${SITE.name}

> ${SITE.description}

${SITE.name} is a Shopify app built on Customer Account UI Extensions. Merchants configure
blocks in the app admin, then place them on their customer account pages in Shopify's
customer account editor — no theme code. Every Help Center article below is available as
Markdown by appending \`.md\` to its URL.

## Help Center

${docs}

## Blog

${posts}

## Optional

- [Help Center index](${SITE.url}/help/index.md): all guides, and where each block appears
- [Home](${SITE.url}/): product overview and FAQ
- [Founding merchants](${SITE.url}/founding): the first 20 stores get Pro free for 6 months in exchange for a 15-minute feedback call
- Support: ${SITE.supportEmail}
`;

  return new Response(body, {
    headers: {'content-type': 'text/plain; charset=utf-8'},
  });
};
