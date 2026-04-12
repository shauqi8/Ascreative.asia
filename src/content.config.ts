import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const servicesCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string().optional(),
    features: z.array(z.string()).optional(),
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    client: z.string(),
    description: z.string(),
    image: z.string().optional(),
    details: z.string().optional(),
  }),
});

export const collections = {
  'services': servicesCollection,
  'portfolio': portfolioCollection,
};
