import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { localEvolveFactory } from '@localevolve/local-biz-factory-engine/astro';

const business = JSON.parse(
  readFileSync(new URL('./src/data/business.json', import.meta.url), 'utf8'),
);

export default defineConfig({
  site: business.domain,
  integrations: [localEvolveFactory({ archetype: 'mobile-service' }), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@engine/components/Header.astro': fileURLToPath(
          new URL('./src/components/Header.astro', import.meta.url),
        ),
        '@engine/layouts/Base.astro': fileURLToPath(
          new URL('./src/layouts/Base.astro', import.meta.url),
        ),
      },
    },
  },
});
