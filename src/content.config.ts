import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

// The Help Center. One Markdown file per article — the same file is rendered as
// HTML at /help/<slug> and served verbatim at /help/<slug>.md.
const help = defineCollection({
  loader: glob({pattern: '*.md', base: './src/content/help'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

export const collections = {help};
