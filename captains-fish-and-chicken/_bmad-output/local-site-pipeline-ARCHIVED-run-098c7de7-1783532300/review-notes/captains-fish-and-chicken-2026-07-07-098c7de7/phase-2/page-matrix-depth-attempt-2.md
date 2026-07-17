# Phase 2 review — page-matrix-depth

**Reviewer:** page-matrix-depth (independent subagent; did NOT produce the artifact)
**Verdict:** PASS
**Date:** 2026-07-07
**Run:** captains-fish-and-chicken-2026-07-07-098c7de7
**Route count verified:** 35 internal (in the 25-500 band; externalCount 0)

## Independence caveat
Independent reviewer. Verified route count by directly counting pageMatrix entries;
cross-checked every menu-section slug against menu-confirmed.json; confirmed all six
restaurant route templates physically exist under
packages/engine/templates/archetypes/restaurant/src/pages/; validated schema floors
against packages/engine/src/schemas/archetypes/restaurant.ts. Could not field-verify
Cedar Rapids geography beyond the pipeline's own Phase-1 entity list.

## Criteria (all pass; one weak on neighborhood facts)
1. Route count 25-500, all internal, no tel:/http in matrix — PASS
2. Named restaurant depth strategy (menu x occasion x intent + folded neighborhood ring) — PASS
3. Menu-category pages map 1:1 to owner-confirmed menu; only documented merge — PASS
4. Occasions + intent landings grounded in confirmed offerings + Phase 1 pillars — PASS
5. Buildability: every kind has a template + can meet its schema floor — PASS
6. Single-location scope; 3100 6th St SW absent; no multi-town SAP — PASS
7. Call-only correct for restaurant archetype (auto-dealer CRO gate does not bind) — PASS
8. Fold decisions sound (thin neighborhoods, unconfirmed-hours occasion) — PASS
9. Neighborhood local facts genuine — WEAK (see fixes below)

## Reviewer-flagged nits — FIXED PRE-SEAL (write-once discipline)
1. NE Cedar Rapids note claimed proximity to 'NewBo' — geographically wrong (NewBo is
   SE/downtown, not the 1st Ave NE corridor). CORRECTED to Mound View / Wellington
   Heights + downtown + I-380 (matches Phase 1 entity data).
2. /occasions/seafood-feast referenced 'calamari' — NOT on the owner-confirmed menu
   (calamari appears only in aggregator/Phase-1 prose). REMOVED; note now explicitly
   excludes calamari.

## Carried to Phase 4 (authoring constraints)
- NEVER feature calamari as a menu item (not owner-confirmed).
- Neighborhood localFacts must use Mound View / Wellington Heights / I-380 / real
  drive-times; fold either neighborhood page if genuine facts fail.
- /faq and /how-to-order must not assert unconfirmed hours.
- 6 occasions each need >=5 real FAQs + >=4 cross-links — watch content-thinning.

## Blocking issues
None.
