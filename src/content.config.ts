import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

export const collections = {
	loader: glob({ pattern: '**/!(_)*.{md,mdx}', base: './src/blog' }),
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			date: z.date(),
			description: z.string().max(200),
		}),
	}),
};
