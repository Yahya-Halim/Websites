import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import {
  businessSchema,
  siteSchema,
  restaurantCollections,
} from '@localevolve/local-biz-factory-engine/schemas';

const singletonJson = (fileName: string, entryId: string) => file(fileName, {
  parser: (text: string) => ({ [entryId]: JSON.parse(text) }),
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
    schema: restaurantCollections.menu,
  }),
  occasions: defineCollection({
    loader: file('src/data/occasions.json'),
    schema: restaurantCollections.occasions,
  }),
};
