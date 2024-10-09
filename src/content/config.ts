import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    color: z.string().optional(),
  }),
});

const project = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number(),
    color: z.string().optional(),
    speed: z.number().optional(),
    showGallery: z.boolean().optional(),
    offsetAmount: z.number().optional(),
  }),
});

export const collections = { blog, project };
