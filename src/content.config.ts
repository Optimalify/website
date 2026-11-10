import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

// The Help Center. One Markdown file per article per locale (help/ja/<slug>.md,
// help/en/<slug>.md) — the same file is rendered as HTML at /help/<slug> (ja) or
// /en/help/<slug> and served verbatim at the same path + `.md`.
const help = defineCollection({
  loader: glob({pattern: '{ja,en}/*.md', base: './src/content/help'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
  }),
});

// The blog. One Markdown file per post at src/content/blog/<slug>.md, rendered at
// /blog/<slug>, listed at /blog and in /rss.xml. An `## FAQ` section whose
// questions are `###` headings also becomes FAQPage JSON-LD (src/utils/blog.ts).
const blog = defineCollection({
  loader: glob({pattern: '{ja,en}/*.md', base: './src/content/blog'}),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1),
    draft: z.boolean().default(false),
  }),
});

export const collections = {help, blog};
