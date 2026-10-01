import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import {visit} from 'unist-util-visit';
import {listingUrl} from './src/config.ts';

/**
 * The Help Center articles are the *same* Markdown files we serve raw at
 * `/help/<slug>.md`, so their inter-article links are written relative
 * (`banner.md`) — which resolves correctly between the raw files. For the
 * rendered HTML pages those have to become site routes instead.
 */
function remarkRewriteHelpLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const m = /^([\w-]+)\.md(#[\w-]+)?$/.exec(node.url);
      if (!m) return;
      const [, slug, hash = ''] = m;
      node.url = slug === 'index' ? `/help/${hash}` : `/help/${slug}/${hash}`;
    });
  };
}

/**
 * Blog posts link to the App Store with `[text](install:listing)`; this swaps in
 * the UTM-tagged listing URL from src/config.ts so the URL is never typed twice.
 */
function remarkInstallLink() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      if (node.url === 'install:listing') node.url = listingUrl('blog');
    });
  };
}

/**
 * Wide Markdown tables must scroll inside their own box rather than pushing the
 * page sideways on a phone.
 */
function rehypeWrapTables() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'table' || !parent || index === null) return;
      if (parent.type === 'element' && parent.properties?.className?.includes?.('table-wrap')) return;
      parent.children[index] = {
        type: 'element',
        tagName: 'div',
        properties: {className: ['table-wrap']},
        children: [node],
      };
    });
  };
}

export default defineConfig({
  site: 'https://optimalify.org',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    remarkPlugins: [remarkRewriteHelpLinks, remarkInstallLink],
    rehypePlugins: [rehypeWrapTables],
    shikiConfig: {theme: 'github-light'},
  },
});
