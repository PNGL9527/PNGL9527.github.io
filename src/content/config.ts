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

      // Use Astro Content Collections image() helper (returns ImageMetadata)
      // Frontmatter example:
      // thumbnail: ../../assets/projects/co-driving-pleasure/cover.jpg
      // thumbnailAlt: Cover image for co-driving pleasure
      thumbnail: image().optional(),
      thumbnailAlt: z.string().optional(),

      caseUrl: z.string().url().optional(),
      externalUrl: z.string().url().optional(),
    }),
});

export const collections = { project };
