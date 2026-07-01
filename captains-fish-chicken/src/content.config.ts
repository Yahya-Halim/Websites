import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
import {
  businessSchema,
  siteSchema,
  restaurantCollections,
} from '@localevolve/local-biz-factory-engine/schemas';

const singletonJson = (fileName: string, entryId: string) => file(fileName, {
  parser: (text: string) => ({ [entryId]: JSON.parse(text) }),
});

// Extend the engine's menu schema with optional per-item imagery. The engine's
// item schema strips unknown keys, so we add `image`/`imageAlt` explicitly to
// keep them available to our custom menu page. Everything else is inherited
// from the engine schema unchanged, preserving the wire-input contract.
const menuSchemaWithImages = restaurantCollections.menu.extend({
  items: z
    .array(
      restaurantCollections.menu.shape.items.element.extend({
        image: z.string().optional(),
        imageAlt: z.string().optional(),
      }),
    )
    .min(1),
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
  menu: defineCollection({
    loader: file('src/data/menu.json'),
    schema: menuSchemaWithImages,
  }),
  occasions: defineCollection({
    loader: file('src/data/occasions.json'),
    schema: restaurantCollections.occasions,
  }),
};
