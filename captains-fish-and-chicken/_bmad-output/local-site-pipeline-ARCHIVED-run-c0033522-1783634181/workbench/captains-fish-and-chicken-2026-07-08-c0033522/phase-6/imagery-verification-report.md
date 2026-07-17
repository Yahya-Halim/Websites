# Phase 6 imagery verification — run v2 (pre-staged work product)

Date: 2026-07-08
Status: passed
Runner state: Phase 6 not yet preparable (Phase 5 identity wall); this evidence is the completed
Phase 6 work product, pre-staged for immediate sealing once Phases 5-6 unlock.

## Manifest / selections / exports
- scripts/image-prompts.json: 94 slots (93 carried from the archived run — menu unchanged, library
  REUSED per approved Phase 2 imageSlotPlan — plus NEW open-late-hero added this run)
- scripts/selections.json: 94/94 slots selected (kind: variant; provenance higgsfield-mcp:nano_banana_pro)
- Exports: 94/94 output files present on disk (0 missing), incl. NEW public/images/hero/open-late.webp
  (1600x900 webp q85 from output/images/generated/open-late-hero/nano_banana_pro-r1-0.png)
- higgsfield-workflow verify: ok=true, problems=[], deferred slots/pages=[]

## New render this run
- open-late-hero: flat-2D night scene (captain-hat chicken + takeout bag, navy building, gold lantern
  glow, crescent moon) — brand-palette consistent; wired as the /open-late-cedar-rapids/ hero via the
  new LANDING_HERO_IMAGES map in src/pages/[slug].astro; catering landing reuses the party-pans hero.
- 2 credits; representational-imagery discipline held ("(representational image)" alt).

## UI checks (Phase 6 contract: passing desktop + mobile, zero unresolved issues)
- desktop: PASS — /open-late-cedar-rapids/ hero loads (webp, alt correct), single h1, no horizontal
  overflow; home renders 8 sections, video hero present, 0 broken images
- mobile (375x812): PASS — sticky call bar fixed+visible, header static (CTA delegated to sticky bar
  per design), single h1, 0 broken images, no horizontal overflow
- unresolvedIssues: NONE

## Honesty notes
- All generated imagery is representational; never presented as photos of the actual premises/dishes.
- public/logo.png remains the generated placeholder — owner shark-captain file drop still pending.
- Real owner photography still invited to replace representational renders.
