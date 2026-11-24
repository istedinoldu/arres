import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      date: z.string(),
      locale: z.enum(['tr', 'en', 'ru', 'ar', 'fa']),
      coverImage: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

export const collections = { news };