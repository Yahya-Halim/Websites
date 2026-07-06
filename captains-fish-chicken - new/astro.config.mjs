import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Custom build: the engine `localEvolveFactory` integration was intentionally
// removed. It injects a single `/` route + engine-owned components, which cannot
// deliver the custom UI, navbar logo, or the multi-hundred marketing-page set
// this site needs. We keep the factory DATA + `factory wire` artifacts
// (LocalBusiness/Restaurant JSON-LD, llms.txt, robots.txt) and render everything
// through our own src/layouts + src/components + src/pages.

const business = JSON.parse(
  readFileSync(new URL('./src/data/business.json', import.meta.url), 'utf8'),
);

export default defineConfig({
  site: business.domain,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
