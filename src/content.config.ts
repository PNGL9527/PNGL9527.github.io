import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { allowedTechsEnum } from '@/types/collections.ts';

type Achievement = string | Achievement[];
const AchievementSchema: z.ZodType<Achievement> = z.lazy(() =>
  z.union([z.string(), z.array(AchievementSchema)]),
);

// eslint-disable-next-line import/prefer-default-export
export const collections = {
  project: defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/project' }),

    // ✅ IMPORTANT: image() comes from this function parameter
    schema: ({ image }) =>
      z.object({
        draft: z.boolean().default(false),
        hasContainerized: z.boolean().optional(),
        title: z.string(),
        description: z.string(),

        type: z.enum(['Research', 'Product', 'Service', 'Strategy', 'Prototype']).optional(),

        link: z
          .object({
            url: z.string().optional(),
            sourceCodeUrl: z.string().optional(),
          })
          .optional(),

        // ✅ Now image() is defined
        thumbnail: z.string().optional(),
        thumbnailAlt: z.string().optional(),

        video: z.array(z.object({ src: z.string(), type: z.string() })).optional(),
        tech: z.array(allowedTechsEnum).default([]),
        tags: z.array(z.string()).default([]),
        

        context: z.string().optional(),
        role: z.string().optional(),
        highlights: z
          .array(
            z.union([
              z.string(),
              z.object({
                title: z.string().optional(),
                text: z.string().optional(),
                items: z.array(z.string()).optional(),
              }),
            ]),
          )
          .default([]),


        themeColor: z.string().min(4).max(9).regex(/^#/).default('#fff'),
        publishDate: z.coerce.date(),

        caseUrl: z.string().url().optional(),
        externalUrl: z.string().url().optional(),
      }),
  }),

  faq: defineCollection({
    loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/faq' }),
    schema: z.object({
      title: z.string(),
    }),
  }),

  resume: defineCollection({
    loader: glob({ pattern: '**/[^_]*.json', base: './src/content/resume' }),
    schema: z.object({
      personalInfo: z.object({
        name: z.string(),
        role: z.string(),
        description: z.string(),
        socialLinks: z.array(
          z.object({
            name: z.string(),
            icon: z.string(),
            url: z.string(),
          }),
        ),
      }),
      workExperience: z.array(
        z.object({
          title: z.string(),
          company: z.object({
            name: z.string(),
            link: z.string(),
          }),
          time: z.string(),
          achievements: z.array(AchievementSchema),
          techs: z.array(z.string()),
        }),
      ),
      achievements: z.array(
        z.object({
          title: z.string(),
          subtitle: z.string(),
          url: z.string(),
        }),
      ),
      education: z.array(
        z.object({
          title: z.string(),
          time: z.string(),
          description: z.string(),
        }),
      ),
      skills: z.array(
        z.object({
          developments: z.array(z.string()),
        }),
      ),
      links: z.array(
        z.object({
          mySite: z.array(
            z.object({
              title: z.string(),
              link: z.string(),
            }),
          ),
        }),
      ),
    }),
  }),
};
