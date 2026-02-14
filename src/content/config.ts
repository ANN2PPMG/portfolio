import { z, defineCollection } from 'astro:content';

const pksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = {
  '3-pks-proekt': pksCollection
};
