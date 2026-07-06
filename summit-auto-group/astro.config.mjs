import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { localEvolveFactory } from '@localevolve/local-biz-factory-engine/astro';

const business = JSON.parse(
  readFileSync(new URL('./src/data/business.json', import.meta.url), 'utf8'),
);

export default defineConfig({
  site: business.domain,
  integrations: [localEvolveFactory({ archetype: 'auto-dealer' }), sitemap()],
});
