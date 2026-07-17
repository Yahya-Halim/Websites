# Optional Figma Handoff

Figma MCP / Code Connect are optional operator tools, not factory build requirements.

No live Figma file exists for this engagement. The deployed repo is the design source of truth: brand tokens live as CSS custom properties in `src/layouts/Base.astro` (launched 2026-07-08). This document records the repo-based design-token contract instead of a Figma sync.

## Design Reference

- fileUrl: none — no Figma file exists for this engagement
- nodeId: none
- mode: read-only

## Design Token Contract

- designTokenSource: type `repo`, path `src/layouts/Base.astro`, format `css-custom-properties`
- designTokenExportPath: `_bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-09-a701f565/phase-3/design-tokens.json`
- designTokenHash: `23452304c7e124f81929daca9cd46d42d2bfed8f0f23f9e04d35db8f7ac812d9` (SHA-256 of the export file above)
- Omit blank/null design-token fields from the sealed phase artifact when no handoff exists.

## Component Mapping References

- Base layout (styling root, global tokens, CTA/FAQ/related-chip styles): `src/layouts/Base.astro`
- Header (project-local shadow, relative import): `src/components/Header.astro`
- Footer (project-local shadow, relative import): `src/components/Footer.astro`
- Engine singletons consumed via `@engine` alias: Analytics, StickyCallBar (imported in Base layout)

## Sync Status

- figmaSyncStatus: `not-configured` — no Figma file or Code Connect setup exists; tokens are repo-sourced and exported with a verifiable hash above.

Only record pass, warning, not-run, or not-configured. Failed sync/export attempts must be fixed or omitted from the sealed artifact.

Do not paste access tokens, OAuth credentials, or private raw Figma file JSON into phase artifacts.
