# Phase 4 Build-Quality Review — captains-fish-and-chicken-2026-07-09-a701f565

- Reviewer: build-quality (fresh sub-agent, capsule-scoped)
- Date: 2026-07-09
- Sealed artifact reviewed: `_bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-09-a701f565/phase-4/phase-4-artifact.json`
- Artifact sha256 (raw bytes): `74ac0805e884305f9514ca1376aec8935dae65a0b75ff0f9f8c418ac80dd2059` — VERIFIED against capsule
- Packet stable-hash (packet minus `delegation`, compact JSON + `\n`): `c36db2815eaa89a6134d739844d08a5e81de13c1f5ada9f8ed0b70f316adb1f1` — VERIFIED
- Capsule stable-hash: `6a6776c9e6d0e81c4397551abb3a7ace4f90fa41bcff5f2109261cba68af3d98` — VERIFIED
- Independent rebuild: `npm run build` in `D:\website\captains-fish-and-chicken` — exit 0, 38 pages built, sitemap-index.xml emitted. The phase artifact was not edited.

## VERDICT: PASS

All nine gate criteria pass. Two non-blocking advisories recorded below.

## Per-criterion results

### a. Route parity — PASS
Fresh `npm run build`, then programmatic enumeration of every `dist/**/index.html` as a trailing-slash route: exactly 38 routes, zero missing and zero extra versus the approved Phase 2 38-route `pageMatrix` in the packet. The artifact's `routesGenerated` array (38 entries) is set-identical to both the matrix and the dist enumeration.

### b. Build result — PASS
`buildResult.status` is `"passed"`; `commandsRun` contains `"npm run build"` as a plain string. Independent rebuild reproduced success: 38 page(s) built (2.30s), no errors.

### c. Review-count fix — PASS
- `grep` of `src/` for `208`: zero matches. `dist/` matches for `208` occur only inside binary image bytes (webp/jpg), not copy.
- No `N reviews` / `N ratings` / `N diners` numeric-count string anywhere in dist HTML; no `aggregateRating` / `reviewCount` / `ratingValue` JSON-LD anywhere.
- `src/data/site.json` valueProp reads exactly `"4.4 stars on Google"` / `"Rated by Cedar Rapids diners on Google"`; both render on the built home page.
- `/faq/` rating copy is `"Rated 4.4 on Google."` — count-free. Every `4.4` mention in dist (15 distinct contexts) is attributed to Google.
- The stale Wanderlog figure `192` does not appear in dist HTML.

### d. Small-section copy + menu integrity — PASS
- `src/data/menu.json`: 14 sections, 87 items — counts match the packet contract exactly.
- The four small sections carry unique, item-specific, non-boilerplate descriptions (kids-meals: "Easy wins for the little ones…"; desserts: "Save room for a sweet finish…"; drinks: "Round out the order with a cold drink…"; gizzards-and-livers: "Old-school soul-food classics…"). All four render in the built pages.
- Owner-paste fidelity: compared item-by-item against the frozen 2026-07-07 owner paste (`_bmad-output/local-site-pipeline-ARCHIVED-run-098c7de7-1783532300/workbench/captains-fish-and-chicken-2026-07-07-098c7de7/phase-0/menu-confirmed.json`, provenance OWNER-CONFIRMED, 87 items across 15 paste categories). Every one of the 87 price values matches exactly (including Extra Sauce 0.50 and Wings side 2.45). The 15→14 category consolidation (Captain's Family Meal Deal + Combo Dinners → family-meals-and-combos) and item-name normalizations ("Party Wings" prefix, "Crab Cakes Meal (4 pcs)" → "Crab Cakes (4 pcs)", "Shrimp Basket (popcorn shrimp)" → "Shrimp Basket", "Kids" prefix) all predate this phase — verified by fetching six live menu pages (drinks, seafood, kids-meals, sides, whole-wings, party-wings) from the deployed 2026-07-08 origin: item names and prices are byte-identical between live (pre-fix) and this build. Only the section descriptions differ (live drinks still shows the old boilerplate "Cool it down."; dist carries the new copy) — proving this phase touched descriptions only.

### e. Copy hazard sweep — PASS
- calamari: zero occurrences in `src/` and in all dist HTML; no calamari asset files. (See advisory 1.)
- dine-in: the only matches are FAQ denials on `/about/` and `/faq/` — "We are a takeout, delivery, and catering kitchen…" — explicitly allowed.
- List-position claims: no `#1` / "number one" / "ranked" / "top-rated" claims (single regex hit was a CSS hex color `#123253`); zero Yelp mentions site-wide.
- Chicago Grill: zero mentions anywhere in dist — nothing framed "new".
- LJS / Long John Silver's: zero mentions in dist — no recency framing possible.
- Pita Kabab: every mention (location page, FAQ, about) is disambiguation-context only (same owner, different restaurant, SW spot became Pita Kabab in 2025).
- Hours: every one of the 38 pages that mentions hours carries a call-to-confirm caveat ("please call to confirm", "always call (319) 221-1040…"); `/open-late-cedar-rapids/` claims are qualified ("Most Cedar Rapids kitchens wind down early…", "posted to 10pm weeknights…Call to confirm") — no "latest open" claim.
- Representational labeling: all 14 menu-section pages carry the visible "Photos are representational." note plus "(representational image)" alt text on every generated item image; the menu hub renders no generated imagery (logo only); hero images on occasion/landing pages carry "(representational image)" alt labels.

### f. Identity — PASS
`src/data/business.json` carries domain `https://captains-fish-chicken.netlify.app`, email `captainsfishchicken@gmail.com`, and gaId `G-7W35DKNK6Z` exactly. All 38 dist pages have a canonical link on the real domain (zero off-domain canonicals) and the GA snippet (`googletagmanager.com/gtag/js?id=G-7W35DKNK6Z`). Sitemap URLs are on the real domain.

### g. Trailing-slash — PASS
All 40 distinct internal `href="/…"` values across dist are either asset files (css/js/images/xml) or trailing-slash routes; zero slash-less internal page links (nav, footer, cross-links, related chips all checked by the sweep).

### h. Hero image formats — PASS
Every `<img>` src inside `data-cro-block="hero"` sections across all 38 pages is `.webp` (5 distinct hero images + the home video poster `beach-loop-a.webp`). No jpg/png ships in any hero block. (`/contact/` has no hero block by design.)

### i. Design tokens — PASS
- `phase-3/design-tokens.json` raw sha256 = `23452304c7e124f81929daca9cd46d42d2bfed8f0f23f9e04d35db8f7ac812d9` — exact match to the artifact's `designTokenHash` and the sealed Phase 3 export.
- All 18 CSS custom properties in `src/layouts/Base.astro` match the token export bidirectionally (every color/radius/shadow value identical; no property missing from either side).
- `src/layouts/Base.astro` mtime is 2026-07-07 17:18 — it predates this run's Phase 4 work and was not modified this phase, consistent with the artifact's `designTokenPreservation` claim and `filesChanged` (site.json, menu.json only).

## Advisories (non-blocking)

1. **Packet note inaccuracy (calamari).** The packet's seafood-section note says "confirmed species only (catfish, perch, tilapia, cod, calamari, crab cakes per owner paste)", but the frozen owner paste (`menu-confirmed.json`) contains no calamari item, and neither does `src/data/menu.json`. Shipped copy contains zero calamari, so there is no hazard — but future phases should not "restore" calamari on the strength of that packet note.
2. **Live origin serves pre-fix content.** The deployed site still shows the old boilerplate section descriptions (and the artifact's own liveRouteProof notes this). Expected: the fixes ship at Phase 7 deploy. No action for this gate.

## Commands/evidence summary
- Hash verifications: raw sha256 (artifact, design-tokens.json, notes) via Get-FileHash/sha256sum; stable JSON hash (packet minus delegation, capsule) reproduced per `packages/plugin/lib/local-site-workflow/delegation.mjs`.
- `npm run build` (independent, exit 0, 38 pages).
- Node route-enumeration diff of dist vs packet matrix vs artifact routesGenerated.
- grep sweeps of src/ and dist/ for: 208, numeric review counts, aggregateRating/reviewCount, calamari, dine-in/seating, #1/ranked/Yelp, Chicago Grill, LJS/Long John, Pita Kabab, hours claims and caveats, representational labels, canonical/GA, internal href trailing slashes, hero img formats.
- Item/price diff vs owner paste (menu-confirmed.json) and live-vs-dist comparison of six menu pages fetched from https://captains-fish-chicken.netlify.app.

One-line rationale: exact 38-route parity, passing independent rebuild, both sealed advisories verifiably applied with menu items/prices untouched, all copy hazards clean, identity/tokens intact — PASS.
