import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      year: z.number(),
      cover: image(),
      gallery: z.array(image()).optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(0),
      publishedAt: z.date(),
    }),
});

export const collections = { projects };
