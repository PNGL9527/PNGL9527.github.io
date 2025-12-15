import { defineCollection, z } from 'astro:content';

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),

    tech: z.array(z.string()).default([]),

    thumbnail: z.object({
      src: z.string(),
      alt: z.string().default('Project thumbnail'),
    }).optional(),

    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { project };
