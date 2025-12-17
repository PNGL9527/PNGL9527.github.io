import { defineCollection, z } from 'astro:content';

const project = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      draft: z.boolean().default(false),

      tech: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),

      context: z.string().optional(),
      role: z.string().optional(),
      highlights: z.array(z.string()).default([]),

      thumbnail: image().optional(),
      thumbnailAlt: z.string().optional(),

      caseUrl: z.string().url().optional(),
      externalUrl: z.string().url().optional(),
    }),
});

export const collections = { project };
