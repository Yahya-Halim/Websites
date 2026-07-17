# Phase 2 Review — page-matrix-depth gate

- Run: captains-fish-and-chicken-2026-07-09-a701f565
- Reviewer: page-matrix-depth (fresh sub-agent, capsule-scoped)
- Date: 2026-07-09
- Artifact reviewed: D:\website\captains-fish-and-chicken\_bmad-output\local-site-pipeline\workbench\captains-fish-and-chicken-2026-07-09-a701f565\phase-2\phase-2-artifact.json
- Artifact sha256 (raw bytes): 2589da7ca284bde56ee19d9a02d01f5746ef70fb4746ceff2bb7473f8d0c5bb9 — MATCHES the capsule's sealed hash. Artifact was not edited.

## Verdict: PASS

## Integrity checks

| Input | Method | Expected | Result |
| --- | --- | --- | --- |
| Sealed phase-2 artifact | sha256 of raw file bytes | 2589da7ca284bde56ee19d9a02d01f5746ef70fb4746ceff2bb7473f8d0c5bb9 | MATCH |
| Phase-2 packet | engine stable-hash (JSON.stringify of packet minus `delegation` key, + `\n`) | 3b282720a468d5d572cb74e5cfeae170500e4d45a9b93ddd5a156a016904f49a | MATCH |
| Review capsule | engine stable-hash (JSON.stringify + `\n`) | 0268f7509c8f57ed901b7508f2afeae10de379213a2b4b95c02db0a40b2839ca | MATCH |

Note: raw-byte hashes of the packet/capsule files differ from the recorded values by design — the engine's `packetHash`/`stableHash` (packages/plugin/lib/local-site-workflow/delegation.mjs) hash the compact JSON serialization, and the packet's recorded hash excludes its own `delegation` block. Both recompute exactly.

## Gate criteria

1. **Route count 25–500 (expect 38): PASS.** pageMatrix contains exactly 38 entries: 1 home + 1 menu hub + 14 menu sections + 6 occasions + 8 search-intent landings + 4 info/faq/story landings + 1 location truth page + 2 neighborhoods + 1 contact. Family totals in pageMatrixStrategy sum to 38 and agree with minimumPageCountRationale.
2. **0 external pages: PASS.** No external URL appears as a matrix route. DoorDash/UberEats/Grubhub/Facebook links are carried in `orderingCtasNotPages` as CTAs only.
3. **Named strategy + page families: PASS.** `pageMatrixStrategy.model` names the model (restaurant single-location depth with live-site route parity); 8 page families enumerated with per-family counts; crossLinkPlan and sapNote present.
4. **Intent/depth justification (anti-thin / anti-doorway): PASS.** Every route is covered by a family-level justification tied to real data, and every risk-bearing route carries a route-level note (all 8 intent landings, both neighborhoods, location, faq, about, home review-stat advisory, sensitive menu sections). Menu sections are backed by the owner's real menu; occasions each carry featuredItems, 5–6 FAQs, and 5–6 cross-links in src/data/occasions.json, meeting the declared CRO floor (>=5 FAQ, >=4 cross-links). No doorway-pattern routes found; the sapNote correctly records that no SAP pages exist.
5. **Reserved restaurant slugs: PASS.** `/menu/`, `/contact/`, `/occasions/`, `/neighborhoods/` roots are used only by their own families. No root-level landing slug in src/data/landings.json collides with a reserved root.
6. **Trailing-slash form: PASS.** All 38 paths end in `/` (home is `/`); astro.config.mjs line 21 sets `trailingSlash: 'always'`.
7. **Parity with the LIVE 38-route site: PASS (verified by derivation).** Routes derived independently from project data: src/data/landings.json = 13 slugs, occasions.json = 6, neighborhoods.json = 2, menu.json = 14 sections, + fixed home / menu hub / contact = 38. All 38 derived routes match the matrix 1:1 (zero adds, zero removals, zero renames). Corroborated against the built output: dist/ contains exactly the same 38 index.html routes. Source route generators (src/pages: index, contact, [slug], menu/index, menu/[slug], occasions/[slug], neighborhoods/[slug]) produce no other routes. The parity rationale (URL stability for a domain one day into first indexing) is sound; matrix changes are annotation-level only.
8. **copyAdvisories carry Phase 1 findings: PASS.** All five named findings present: (a) Chicago Grill is RETURNING, never "new", no Center Point Rd location; (b) LJS 3801 1st Ave SE closed June 2014 — never framed as recent; (c) no "ranked #1 on Yelp"/list-position claims (Estimated only); (d) 3100 6th St SW is Pita Kabab — disambiguation-only, wrong phones barred; (e) review-count drift 4.4/208 (owner, 2026-07-07) vs 4.4/192 (Wanderlog mirror, 2026-07-09) flagged for Phase 4 GBP verification. Plus consistent extras: caveated hours, no keyword-volume claims, menu frozen to the 2026-07-07 owner paste.

## Depth honesty assessment

- **Neighborhood ring of 2 — defensible.** Both pages meet the anti-doorway floor in src/data/neighborhoods.json: northeast-cedar-rapids (978-char body, 2 localFacts, 2 proximityTrustLines, 2 townFaqs, 3 crossLinks) and marion-ia (955-char body, same counts). Facts are genuine (Mound View, Wellington Heights, Coe College, I-380; Marion ~5 mi via Hwy 100/7th Ave). The folds are the stronger signal: SW quadrant REJECTED as doorway risk (city-wide app delivery is not a local fact), Hiawatha/Robins folded for lacking town-fact minima despite Hiawatha being a named Phase 1 gap. This is honest restraint, not thinness.
- **Occasion pages — defensible.** All 6 map to real buying moments, carry owner-confirmed featured items, 5–6 FAQs, 5–6 cross-links. Late-night, halal, and vegetarian occasions correctly folded rather than fabricated.
- **Menu-section pages — backed by real data.** src/data/menu.json holds 87 items across the 14 sections, and all 87 carry prices (verified programmatically via each item's `prices` array). Section sizes: seafood 14, sides 17, whole-wings 7, fish-family-deals 7, party-wings 6, chicken-leg-and-thigh 6, boneless-chicken-bites 5, shrimp 5, desserts 5, chicken-tenders 4, family-meals-and-combos 3, kids-meals 3, drinks 3, gizzards-and-livers 2. The single-item section was already folded (captains-family-meal-deal into family-meals-and-combos).

## Advisories (non-blocking)

1. **Small menu sections.** Four sections have <=3 priced items (gizzards-and-livers 2; kids-meals, drinks, family-meals-and-combos 3 each). They are distinct real product categories on a live route set, so keeping them is right under the parity constraint — but Phase 4 must give these pages enough unique section copy/FAQ/cross-links to clear the downstream anti-thin gate rather than shipping item cards alone.
2. **Review-count drift.** Reaffirming the artifact's own advisory: no review COUNT may be cited anywhere until Phase 4 verifies live GBP; the 4.4 rating may be cited attributed and dated.
3. **Parity evidence basis.** Live-URL crawl was not performed (out of capsule scope). Parity is verified by independent derivation from project data plus the local dist build, which is the evidence basis the gate names. If the deployed site is ever suspected to have drifted from dist/, a Phase 4 route proof against the live URL closes that gap.

## Rationale

38/38 route parity with the launched site independently re-derived from data files and corroborated by the built output; all depth floors are met with genuine data (87 priced menu items, occasion FAQ/cross-link floors, neighborhood fact floors); reserved slugs and trailing-slash form respected; every Phase 1 copy hazard travels with the matrix. The matrix's central decision — annotation-only changes, zero route churn one day after first launch — is the correct SEO call and is honestly argued in the artifact.
