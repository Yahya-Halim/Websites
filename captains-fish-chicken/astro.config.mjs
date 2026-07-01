import { readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { localEvolveFactory } from '@localevolve/local-biz-factory-engine/astro';

const business = JSON.parse(
  readFileSync(new URL('./src/data/business.json', import.meta.url), 'utf8'),
);

// The engine integration hard-injects the "/" route to its own plain
// templates/shared/pages/index.astro. In dev that injected route wins over
// our branded file-based src/pages/index.astro (in build, ours wins) — so the
// home page renders unstyled in dev and the result is inconsistent.
//
// We wrap the engine integration and drop ONLY its "/" injection, letting our
// file-based home own "/" deterministically in both dev and build. Every other
// engine behaviour (data wiring, JSON-LD, aliases) is left untouched, so the
// wire-input contract is preserved.
const engine = localEvolveFactory({ archetype: 'restaurant' });
const originalSetup = engine.hooks['astro:config:setup'];
engine.hooks = {
  ...engine.hooks,
  'astro:config:setup': (options) =>
    originalSetup({
      ...options,
      injectRoute: (route) => {
        if (route?.pattern === '/') return;
        return options.injectRoute(route);
      },
    }),
};

export default defineConfig({
  site: business.domain,
  integrations: [engine, sitemap()],
});
