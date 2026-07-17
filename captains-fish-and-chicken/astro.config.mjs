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

// The engine integration unconditionally injectRoute()s the shared home at '/'.
// This project owns its home (src/pages/index.astro — the fish-market re-theme),
// so the two collide: Astro warns "a static route cannot be defined more than
// once" and resolves it nondeterministically (the project home wins the
// production build, but `astro dev` served the engine's default). Wrap the
// engine integration to DROP only its '/' injection while keeping its vite
// aliases (@engine/*), so dev and build both serve the project home.
function engineWithoutInjectedHome(opts) {
  const base = localEvolveFactory(opts);
  const originalSetup = base.hooks['astro:config:setup'];
  return {
    ...base,
    hooks: {
      ...base.hooks,
      'astro:config:setup': (setupOpts) => originalSetup({
        ...setupOpts,
        injectRoute: (route) => {
          if (route?.pattern === '/') return; // project owns the home route
          return setupOpts.injectRoute(route);
        },
      }),
    },
  };
}

export default defineConfig({
  site: business.domain,
  trailingSlash: 'always',
  integrations: [
    engineWithoutInjectedHome({ archetype: 'restaurant' }),
    sitemap({ filter: sitemapFilter }),
  ],
});
