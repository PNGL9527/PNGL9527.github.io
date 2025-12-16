import { defineCollection, z } from 'astro:content';

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),

    // Keep existing "tech" constraints as-is in your project (enum-based).
    tech: z.array(z.string()).default([]),

    // ✅ New: research/method/theme tags (free strings)
    tags: z.array(z.string()).default([]),

    // Optional research-friendly metadata for cards/overview page
    context: z.string().optional(),
    role: z.string().optional(),
    highlights: z.array(z.string()).default([]),

    thumbnail: z
      .object({
        src: z.string(),
        alt: z.string().default('Project thumbnail'),
      })
      .optional(),

    // ✅ New: long-form case (e.g., Notion)
    caseUrl: z.string().url().optional(),

    // Existing
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { project };
