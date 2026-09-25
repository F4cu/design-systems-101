import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Date the page's claims and sources were last checked for freshness.
				reviewed: z.coerce.date().optional(),
				// Months until the next review, set by the page's freshness risk tier.
				reviewIn: z.number().int().positive().optional(),
			}),
		}),
	}),
};
