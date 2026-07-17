# Phase 2 page-matrix-depth review — Pita Kabab (run pita-kabab-2026-07-12-b5881b47)

Reviewer: page-matrix-depth (independent review sub-agent, dispatched 2026-07-12)
Artifact reviewed: `D:\website\pita-kabab\_bmad-output\local-site-pipeline\workbench\pita-kabab-2026-07-12-b5881b47\phase-2\phase-2-artifact.json`
Artifact sha256: `519c968e28ade4378f21bb0093f55a9aeaa0d6a275e8dde249cfc19df8dcc1f6` (verified against capsule, state.json, and the sealed envelope `artifacts\pita-kabab-2026-07-12-b5881b47\phase-2.json`)

## Verdict: PASS

The Phase 2 matrix clears every criterion of the page-matrix-depth gate. No blocking findings. Two accuracy caveats recorded for downstream phases (see Weaknesses); neither invalidates the plan.

## Integrity verification

- Sealed artifact file hash matches the capsule's `artifactHash` exactly (`519c968e…dcc1f6`).
- Packet hash verifies under the engine's canonical scheme (`delegation.mjs` `packetHash`: sha256 of compact JSON + `\n` with the `delegation` stanza excluded) = `083aebed…3d1d0b` — matches capsule. The raw file hash differs only because the runner appends the delegation summary after hashing; this is by design, not tampering.
- Review capsule stable-hash = `b7e39821…829678`, matching the report scaffold's `capsuleHash`.
- Phase 0 (`53d094d0…0af10`) and Phase 1 (`23c0fa87…bd1f47`) workbench artifacts match the sealed hashes in `state.json`; spot-checks below run against the sealed record only.

## Gate criteria

### 1. 25–500 pages with a NAMED strategy, restaurant families used — PASS
46 internal pages (41 unconditional + 5 owner-gated conditional) under the named model **"Restaurant Page-Family Matrix v1"**. All five restaurant families present: menu-category (7), occasion (10), search-intent (10), neighborhood (8), story/info/GEO (8), plus fixed core (3). Family counts sum to 46 as claimed; the 41-page floor holds if every conditional page drops, so owner gating can never breach the 25-page minimum. Matches sealed Phase 1 sizing guidance (~45–55 core pages) without inflating toward the ceiling.

### 2. Evidence grounding in sealed Phase 0/1 — PASS
Spot-checked 12 pages (exceeds the 5-page minimum) against the sealed Phase 1 `keywordEntityFindings` and Phase 0 facts:

- `/occasions/catering` — Phase 1: "already #1-observed organic; O's Grill/Julia's Kitchen/Zest + ezCater/The Knot; not observed on ezCater". Faithful.
- `/palestinian-restaurant-cedar-rapids` — Phase 1: zero competing claimants across 16 SERPs; cuisine-identity claims owner-unverified. Faithful, and the artifact carries the owner-confirm dependency.
- `/shawarma-cedar-rapids` — Phase 1: Restaurant Guru lists only 2 CR shawarma restaurants; grocery deli + non-specialist. Faithful; near-duplicate sibling folded.
- `/occasions/iftar-catering` — Phase 1: iftar SERP is prayer-time calculators only; Mother Mosque/Islamic Center/MAS anchors; seasonal window. Faithful; halal-gated (more conservative than Phase 1 requires — good).
- `/halal-restaurant-cedar-rapids` — Phase 1: directory-dominated, zero CR-proper Mediterranean specialist listed, GATED on halal confirmation. Faithful, conditional=true.
- `/neighborhoods/near-eastern-iowa-airport` — Phase 1: aggregator near-CID pages with no Mediterranean sit-down; District 23 corroborates corridor; distance honestly deferred to build. Faithful.
- `/neighborhoods/marion|fairfax|ely|swisher` — Phase 1: "no Mediterranean player holds Marion/Fairfax/Ely/Swisher". Faithful.
- `/best-mediterranean-food-cedar-rapids` — Phase 1: Facebook community question observed verbatim; aggregator-synthesized AI answers. Faithful; honest-guide framing, no fabricated rankings.
- `/how-we-cook-charcoal-shawarma` — Phase 0/1: charcoal/spit/scratch claims explicitly unverified; page is craft-claim-gated. Faithful.
- `/halal-heritage-of-cedar-rapids` — Phase 1 entity dates (Mother Mosque 1934, cemetery 1948, Islamic Center 1971, Midamar 1974) all present in the sealed record; halal-gated positioning. Faithful.
- `/menu/*` (7 categories) — exactly the 7 real sections in Phase 0's owner-site capture (sandwiches, bowls, platters, Mediterranean Delight, wings, kids, desserts) with matching price ranges, all flagged owner-unverified/omit-until-confirmed.
- `/occasions/vegetarian-mediterranean` — falafel/hummus vegetarian items confirmed in the Phase 0 evidence file (web-footprint-findings.json: sandwiches incl. falafel; Mediterranean Delight incl. hummus/foul).

No page brief invents facts. Halal (5 pages), craft claims, phone, SMS, hours, prices, catering terms, offer terms, owner name, yearEstablished, and parking are all flagged unverified/owner-gated exactly as the sealed record demands. "Estimated" labels (lunch corridor demand, Kirkwood student demand) are carried forward honestly, not upgraded to facts.

### 3. Anti-doorway on neighborhood/near-me pages — PASS
Eight neighborhood pages, each with a distinct competitor-gap or anchor basis; every entry carries the fold-if-facts-missing dependency. Seven neighborhood candidates folded with credible, named reasons: Hiawatha (Pita'z on-site incumbent), Czech Village/NewBo (Pita'z at NewBo City Market), Kingston Village (district-map existence only), Westdale (unresolved quadrant conflict — Phase 1 evidence gap honored), Robins/Walford/Atkins (no captured town facts). Family deliberately held at 8 (not the 14-anchor ring) because local-pack rankings were never observed — the conservative sizing is explicitly tied to the Phase 1 evidence gap. The engine's neighborhood Zod schema (`restaurant.ts`: `localFacts.min(1)`, `proximityTrustLines.min(2)`, `townFaqs.min(1)`) makes plan-time folds and build-time folds agree, as the artifact claims.

### 4. External links never counted as pages — PASS
DoorDash (store 41564223), tel:, sms:, Google Maps, and Facebook appear only in `externalCtasNeverPages`; zero external entries in `pageMatrix`. `/how-to-order` explicitly notes the DoorDash link is a CTA, never a page.

### 5. Route-kind mapping consistent with the engine restaurant archetype — PASS
Verified against `packages\engine\templates\archetypes\restaurant\src\pages\` and `packages\engine\src\schemas\archetypes\restaurant.ts`:
- All 7 claimed route kinds exist as real templates: shared `pages/index.astro` (home), `menu/index.astro`, `menu/[slug].astro`, `occasions/[slug].astro`, root `[slug].astro`, `neighborhoods/[slug].astro`, `contact.astro`. (The 2026-07-05 F12 finding — restaurant archetype missing route templates — is fixed in the current engine.)
- Data collections match: menu.json (7) + occasions.json (10) + landings.json (18 = 10 intent + 8 story/info/faq) + neighborhoods.json (8) + 3 fixed routes = 46; route count is a pure function of data entries, keeping the Phase 4 route-completeness comparison exact.
- Reserved root-landing slugs (`menu`, `contact`, `occasions`, `neighborhoods`) avoided — matches `RESERVED_ROOT_LANDING_SLUGS` in the schema.
- Landing kinds used (intent/story/info/faq) and `schemaType` overrides (AboutPage, FAQPage) match the landing schema exactly. Occasion minima cited in the plan doc (featuredItems ≥1, faqs ≥5, crossLinks ≥4, schemaTypes ≥1) match `occasionSchema` exactly.
- Conditional pages clearly flagged (4 halal-gated + 1 craft-gated); floor 41 ≥ 25 if they drop.

### 6. requiredCroBlocks and imageSlotPlan — PASS (with caveat W1)
`requiredCroBlocks` is present, per-kind coherent (home/contact/detail/neighborhood), and every owner dependency is flagged (valueProps ×3, ctaBanner, leadForm.endpoint, canonical phone, SMS capability, ≥6 trust facts or omit, offer confirmation). Conditional blocks (offer callout, financing, sms CTA) handled with remove-never-placeholder discipline. `imageSlotPlan` has 32 slots, all representational-only, with halal/craft-conditional slots and the brand-logo owner dependency flagged.

### 7. Yahya/founder checklist — PASS
`ownerChecklistReference` names the Phase 0 owner-questionnaire (17 items), maps each gate to the pages/blocks it blocks, and names the post-seal gates (Yahya approval + this review) per the packet's `gatesAfterCompletion`.

## Strengths

- Evidence fidelity is exceptional: every spot-checked evidenceBasis traces to the sealed record verbatim, including the negative findings (absence evidence) and the evidence gaps.
- The fold list is a model of anti-doorway discipline — 13 candidates with named, checkable reasons, including folding the highest-volume dish term (gyro) rather than fighting an entrenched incumbent thin.
- Conditional-page architecture keeps owner gating from ever threatening the 25-page floor, and halal gating is applied more broadly than strictly required (iftar page), which is the right direction of error.
- Plan-time page count is designed to equal engine data entries one-for-one, making the Phase 4 route proof mechanical.

## Weaknesses (non-blocking)

- **W1 — CRO gate enforcement overstated for this archetype.** The artifact's contractNote (mirroring specialist SKILL.md wording) says "the cro-block-presence build gate fails any page missing a required block." In the current engine, `cro-contract.ts` registers only `auto-dealer`; `croContractFor('restaurant', …)` returns null and the `cro-block-presence` validator **skips with a pass** for restaurant builds (cro-block-validator.ts ~line 686). Likewise `sap-anti-doorway` runs only for auto-dealer. What IS machine-enforced for restaurant: the neighborhood/occasion/landing Zod schema minima and the archetype-agnostic C6 content-file rules (≥400-char substance floor, ≥0.70 near-duplicate). Consequence: the CRO block plan is enforced by Phase 4 discipline and the validation phase, not by the named build gate, until a restaurant CRO contract is registered in the engine. Downstream phases should not rely on the gate catching CRO omissions. Recommend registering a restaurant contract in `cro-contract.ts` (engine work, out of this run's scope).
- **W2 — Minor attribution imprecision.** Neighborhood dependencies bundle "≥400 chars unique content, <0.70 sibling similarity" under "anti-doorway schema minima". Those two thresholds live in the C6 content-file evaluator, not the neighborhood Zod schema (which owns the fact/proximity/FAQ minima). Substantively enforced; imprecisely attributed. No action needed beyond awareness at Phase 4.
- **W3 — Image slots don't cover every landing.** 8 pages (e.g., /middle-eastern-restaurant-cedar-rapids, /halal-restaurant-cedar-rapids, /best-mediterranean-food-cedar-rapids, /first-visit-ordering-guide, /how-to-order, /about, /faq, /contact) have no dedicated slot; the OG default covers sharing. Acceptable plan-level coverage; Phase 6 should confirm per-template hero expectations.

## Blocking findings

None.
