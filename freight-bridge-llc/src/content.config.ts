import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'zod';
import {
  businessSchema,
  siteSchema,
  mobileServiceCollections,
} from '@localevolve/local-biz-factory-engine/schemas';

const singletonJson = (fileName: string, entryId: string) => file(fileName, {
  parser: (text: string) => ({ [entryId]: JSON.parse(text) }),
});

const faqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

// Rich, hyper-local per-city content (anti-template / Information-Gain layer).
// Optional: only the Midwest moving-service cities carry it; freight-only
// cities fall back to data-driven content generated in the page template.
const localContentSchema = z.object({
  headline: z.string().optional(),
  intro: z.string().optional(),
  servicesOffered: z.record(z.string(), z.string()).optional(),
  localConnection: z.string().optional(),
  benefits: z.array(z.string()).optional().default([]),
  pricingGuide: z.string().optional(),
  faqs: z.array(faqItemSchema).optional().default([]),
});

const locationSchemaWithKeyTakeaway = mobileServiceCollections.locations.extend({
  keyTakeaway: z.string().optional(),
  localContent: localContentSchema.optional(),
});

// Rich service-page body content (process, what's included, owner voice) so
// money pages clear the depth bar instead of rendering hero + FAQ only.
const serviceBodySchema = z.object({
  lede: z.string().optional(),
  included: z.array(z.string()).optional().default([]),
  process: z.array(z.object({ title: z.string(), text: z.string() })).optional().default([]),
  detail: z.string().optional(),
  ownerNote: z.string().optional(),
});

const serviceSchemaWithBody = mobileServiceCollections.services.extend({
  body: serviceBodySchema.optional(),
});

export const collections = {
  business: defineCollection({
    loader: singletonJson('src/data/business.json', 'biz'),
    schema: businessSchema,
  }),
  site: defineCollection({
    loader: singletonJson('src/data/site.json', 'site'),
    schema: siteSchema,
  }),
  services: defineCollection({
    loader: file('src/data/services.json'),
    schema: serviceSchemaWithBody,
  }),
  locations: defineCollection({
    loader: file('src/data/locations.json'),
    schema: locationSchemaWithKeyTakeaway,
  }),
  blog: defineCollection({
    loader: glob({ pattern: '*.md', base: './src/content/blog' }),
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      pubDate: z.string(),
      readTime: z.string().optional(),
      author: z.string().optional(),
    }),
  }),
};
