import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { localEvolveFactory } from '@localevolve/local-biz-factory-engine/astro';

const business = JSON.parse(
  readFileSync(new URL('./src/data/business.json', import.meta.url), 'utf8'),
);

// noindex funnel routes — excluded from sitemap*.xml (v1 explicit path denylist).
// These paths mirror the funnel route files; keep the two in sync.
const NOINDEX_PATHS = ['/thank-you/', '/request-estimate/', '/call-or-text-pop/'];

// Pure predicate over the full URL string (Astro @astrojs/sitemap `filter`
// receives the absolute URL; return true = include). A site with no funnel
// routes simply excludes nothing.
const sitemapFilter = (page) => !NOINDEX_PATHS.includes(new URL(page).pathname);

export default defineConfig({
  site: business.domain,
  trailingSlash: 'always',
  integrations: [
    localEvolveFactory({ archetype: 'restaurant' }),
    sitemap({ filter: sitemapFilter }),
  ],
});
