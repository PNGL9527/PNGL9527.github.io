import { defineCollection, z } from 'astro:content';

const project = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(), // 1-sentence overview
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),

    // Keep the field name "tech" to avoid refactoring the Work page logic,
    // but use it as "tags" (methods/themes) in content.
    tech: z.array(z.string()).default([]),

    // Optional research-friendly metadata (used on cards if present)
    context: z.string().optional(), // e.g., "PhD research / Industry internship / Thesis project"
    role: z.string().optional(),    // e.g., "Design researcher, UX researcher"
    highlights: z.array(z.string()).default([]), // 2–4 bullet highlights

    thumbnail: z
      .object({
        src: z.string(),
        alt: z.string().default('Project thumbnail'),
      })
      .optional(),

    // Primary case link (e.g., Notion long-form case)
    caseUrl: z.string().url().optional(),

    // Optional external page (e.g., lab page, publication landing page)
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { project };
