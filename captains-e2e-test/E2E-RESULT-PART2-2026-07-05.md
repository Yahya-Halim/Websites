# Captains Fish and Chicken — E2E result, Part 2 (Phase 4 resumed + built)

**Status: Phase 4 BUILT and accepted. Run STOPPED at the build-quality review
gate (by instruction). Phases 5–7 out of scope for this test.**

Complements Part 1 (`E2E-RESULT-2026-07-05.md`, which paused the run at Phase 4
by the route-depth gate). This part records the resume after the F12 engine fix.

## What happened on resume
- **F12 fix verified end-to-end.** The engine now ships restaurant route
  templates (`menu/[slug]`, `occasions/[slug]`, `neighborhoods/[slug]`,
  `[slug]`, `menu/index`, `contact`) + `landings`/`neighborhoods` collections +
  optional `prices`. Confirmed present, re-scaffolded, and BUILT.
- **F13 surfaced and logged** (schema floor vs bare-bones business + the
  phase-ordering mismatch — engine needs `business.domain` at Phase 4, workflow
  schedules it at Phase 7). Recorded in `E2E-FINDINGS-captains-2026-07-05.md`
  (companion session authored the full entry + priority `0b`).
- **F13 resolved for this run with declared `.example` test fixtures**
  (`build/phase-4-fixture-decision.md`, Yahya-authorized): domain/email on the
  reserved `.example` TLD, `gaId` = `G-XXXXXXXXXX` (deliberate do-not-ship
  placeholder), `paymentAccepted` = "Cash and major cards" (owner-UNVERIFIED).
  Overtly synthetic; would fail the Phase 5 do-not-ship gate BY DESIGN.

## The real build
- `factory init restaurant` → re-scaffolded with the new route templates.
- Authored all 6 data files from the approved Phase 2 matrix
  (`business.json`, `site.json`, `menu.json` ×12, `occasions.json` ×6,
  `landings.json` ×10, `neighborhoods.json` ×1).
- `factory wire` → **exit 0**; validated business/site against the Zod schemas;
  emitted 6 SEO artifacts (business JSON-LD `@type: Restaurant`).
- `factory build` (astro) → **exit 0; 32 pages built in 2.88s**;
  `sitemap-index.xml` created. `dist/` verified: **32** `index.html` routes,
  matching the approved matrix exactly (home + /menu + /contact + 12 menu +
  6 occasions + 1 neighborhood + 10 landings).
- `complete-phase 4` → **accepted** (route-depth gate 25–500 now GREEN at 32).

## Build-copy constraints applied (from the independent page-matrix-depth review)
- **Dine-in CORRECTED at build time** (Phase 3 artifact was sealed): `/faq` and
  `/how-to-order` say "a dining room at the storefront, but counter-service and
  takeout-first" — no dine-in *service* claim.
- `/occasions/late-night` → "Open Late" with exact hours; no comparative claims.
- No menu prices (owner-unverified) → Menu JSON-LD correctly omitted.
- Call-only CTA site-wide; lead form dropped (`/contact` = phone + address +
  hours + map/directions); trust grid omitted (<6 real facts).
- Delivery apps named in prose, never as internal routes.

## Honest env notes (build enablement)
- Junctioned the repo's `node_modules` into `site/node_modules` so astro + the
  (unpublished, workspace) engine resolve for the offline build.
- Installed `@astrojs/sitemap@^3.7.2` into the repo `node_modules` with
  `--no-save` (the scaffold declares it as a dep; tracked files untouched;
  repo `package-lock.json` is already untracked). Removable with `npm prune`.

## Minor observation (candidate finding)
`hoursSchema` is 2-bucket (weekday + sunday). Captains' 3-window hours
(Mon–Thu / Fri–Sat / Sun) are lossy in the structured `openingHours`
(weekday=Mon–Thu, sunday=Sun; Fri–Sat's later close lives in `displayText`,
which is accurate). Flagged in `build/phase-4-build.json`.

## Final runner state
- `runId: captains-fish-and-chicken-2026-07-05-f333953f`
- `completedPhases: [0,1,2,3,4]` · `currentPhase: 4`
- Phase 4 artifact **sealed** (`build/phase-4-build.json`).
- **STOPPED at the build-quality review gate** — not recorded, by instruction.
  `verify` shows `review build-quality missing for phase 4` as the only Phase 4
  item; phases 5–7 pending and out of scope.
- Approvals for phases 0/2 expire 2026-07-12/13 (unchanged).

## Test verdict
The gated pipeline drove a clean-room restaurant site from discovery to a real
32-route static build. Both contract-vs-reality walls (F12 route capability,
F13 schema floor) were surfaced honestly and, once addressed, the build gate
passed on real engine output — no fabrication, no gate-softening. Phases 5–7
(validate / imagery / launch) remain untested by design.
