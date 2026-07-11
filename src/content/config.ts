import { defineCollection, z } from 'astro:content';

const article = z.object({
  title: z.string().max(70),
  /* Balise <title> courte (<= 49c, le suffixe " | Agence Simple" ajoute 16c).
     Le H1 visible garde `title`. */
  seoTitle: z.string().max(50).optional(),
  description: z.string().min(120).max(165),
  publishedAt: z.string().transform((s) => new Date(s)),
  updatedAt: z.string().transform((s) => new Date(s)).optional(),
  author: z.string().default('Kenzy Gasmi'),
  cover: z.string(),
  coverAlt: z.string(),
  draft: z.boolean().default(false),
  keywords: z.array(z.string()).default([]),
  bucket: z.enum(['A', 'B', 'C', 'D']).optional(),
  schema: z.enum(['Article', 'HowTo']).default('Article'),
});

const blog = defineCollection({ type: 'content', schema: article });

const caseStudy = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(120).max(165),
    client: z.string(),
    sector: z.string(),
    publishedAt: z.string().transform((s) => new Date(s)),
    cover: z.string(),
    coverAlt: z.string(),
    duration: z.string(),
    results: z.array(z.object({ metric: z.string(), value: z.string() })),
    services: z.array(z.string()),
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(120).max(165),
    shortDesc: z.string(),
    icon: z.string().optional(),
    benefits: z.array(z.string()),
    keywords: z.array(z.string()),
    order: z.number().default(99),
  }),
});

export const collections = { blog, caseStudy, services };
