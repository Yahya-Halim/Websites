# Phase 2 PLAN — Pita Kabab page matrix (run pita-kabab-2026-07-12-b5881b47)

Specialist: location-matrix-planner (restaurant/single-location mode).
Named strategy: **Restaurant Page-Family Matrix v1** — occasion / menu-category / search-intent / neighborhood / story families plus a fixed core (home, menu hub, contact). No service x location SAP model: this is a single-location restaurant, so restaurant-native families replace SAP as the depth model.

## Seam note (runner vs specialist skill)

The specialist SKILL.md's When-NOT-to-use says to skip single-location businesses; the runner rules for this engagement mandate restaurant page families for a single-location restaurant (the skill itself carves out "restaurants in restaurant/single-location mode"). The runner wins where they conflict; this seam is documented here and in the artifact. Slug convention follows the engine's fixed restaurant route kinds — no `/{location}/{service}` pattern applies.

## Route-kind mapping (engine restaurant archetype)

Route count is a direct function of data entries. Templates verified in
`packages/engine/templates/archetypes/restaurant/`:

| Route kind | Template | Data collection | Planned entries |
|---|---|---|---|
| home | shared `pages/index.astro` | site/business singletons | 1 |
| menu hub | `pages/menu/index.astro` | menu.json (aggregate) | 1 |
| menu category | `pages/menu/[slug].astro` | menu.json | 7 |
| occasion | `pages/occasions/[slug].astro` | occasions.json | 10 |
| root landing | `pages/[slug].astro` | landings.json (kinds: intent/story/info/faq) | 18 |
| neighborhood | `pages/neighborhoods/[slug].astro` | neighborhoods.json | 8 |
| contact | `pages/contact.astro` | site/business singletons | 1 |

Total planned internal pages: **46** (41 unconditional + 5 conditional). Floor 25 holds even if every conditional page drops. Ceiling 500 untouched. Phase 1 sizing guidance (~45-55 core pages) satisfied.

Reserved root-landing slugs avoided: `menu`, `contact`, `occasions`, `neighborhoods`.

## Page matrix by family

### Core (3)
| Path | Target intent | Evidence basis |
|---|---|---|
| `/` | mediterranean restaurant cedar rapids (quick-win head term) | Phase 1: pitakababcr.com already top-3 observed; aggregator-only SERP |
| `/menu` | menu hub; also carries gyro intent (folded battle page) | Phase 1: gyro entrenched (Gyro Hut est. 2006) — target via menu, not a dedicated page |
| `/contact` | NAP, hours, parking, lead form | Phase 0 confirmed address; hours single-sourced (owner confirm) |

### Menu-category (7) — real menu sections only (pitakababcr.com/menu, 2026-07-12)
`/menu/sandwiches-wraps`, `/menu/bowls`, `/menu/platters`, `/menu/mediterranean-delight`, `/menu/wings`, `/menu/kids-meals`, `/menu/desserts`.
Prices are owner-unverified aggregate ranges — the engine schema keeps `prices` optional; omit until owner confirms (KG7 omit-never-fabricate; menu JSON-LD emission requires priced items).

### Occasion (10; 2 conditional)
| Path | Basis | Flags |
|---|---|---|
| `/occasions/catering` | already #1-observed organic for "mediterranean catering cedar rapids" | catering terms (50% deposit, 10-person min, 200+ guests) owner-confirm before republishing |
| `/occasions/wedding-catering` | ezCater/The Knot aggregator-only SERP | terms dependency |
| `/occasions/corporate-catering` | Phase 1 growth cluster; office-lunch demand | terms dependency |
| `/occasions/graduation-party-catering` | Phase 1 cluster | terms dependency |
| `/occasions/iftar-catering` | zero restaurant content on CR iftar SERP; Mother Mosque/Islamic Center/MAS anchors; publish ~1 month pre-Ramadan | **CONDITIONAL: halal certification owner-unverified** |
| `/occasions/family-dinner` | existing /family-dinner/ page + kids $5.98 offer | offer terms owner-confirm; legacy-URL redirect if replace-mode |
| `/occasions/lunch` | counter service + Kirkwood/airport corridor lunch demand (Estimated) | none |
| `/occasions/game-day-catering` | wings menu family + Phase 1 game-day cluster | none |
| `/occasions/vegetarian-mediterranean` | falafel/hummus vegetarian items evidenced; skill-listed buying moment | none |
| `/occasions/halal-catering` | "halal catering cedar rapids" — no dedicated local page found | **CONDITIONAL: halal certification owner-unverified** |

Occasion schema minima to author in Phase 4: >=1 featured item, >=5 FAQs, >=4 crossLinks, seo, schemaTypes — an occasion that cannot meet these folds by omitting the data entry.

### Search-intent root landings (10; 1 conditional)
| Path | Tier | Basis |
|---|---|---|
| `/middle-eastern-restaurant-cedar-rapids` | quick-win | Yelp mideastern category exists; aggregator-only |
| `/palestinian-restaurant-cedar-rapids` | quick-win | zero competing claimants across 16 SERPs |
| `/shawarma-cedar-rapids` | quick-win | only 2 listed CR shawarma competitors, no sit-down specialist |
| `/kabob-cedar-rapids` | quick-win | brand-name match; defend and consolidate |
| `/falafel-cedar-rapids` | quick-win | no falafel-specialist page found |
| `/hummus-cedar-rapids` | growth | no dedicated local page found |
| `/baklava-cedar-rapids` | growth | only Vytyl (market deli) surfaces |
| `/chicken-over-rice-cedar-rapids` | growth | no CR-proper page; preempt Halal Guys entry |
| `/halal-restaurant-cedar-rapids` | growth | directories dominate; zero CR-proper Mediterranean specialist listed. **CONDITIONAL: halal owner-unverified** |
| `/best-mediterranean-food-cedar-rapids` | geo | community question observed verbatim (Facebook group); AI answers synthesize from aggregators |

### Story / info / GEO landings (8; 2 conditional)
| Path | Kind | Basis |
|---|---|---|
| `/shawarma-vs-gyro` | info | AI-answer-friendly comparison; pairs with craft differentiators |
| `/what-is-palestinian-food` | info | uncontested TOFU/GEO angle |
| `/halal-heritage-of-cedar-rapids` | story | Mother Mosque (1934), first national Muslim cemetery (1948), Islamic Center (1971), Midamar (1974). **CONDITIONAL: restaurant halal tie-in owner-unverified** |
| `/how-we-cook-charcoal-shawarma` | story | charcoal grill + vertical-spit + scratch prep. **CONDITIONAL: craft claims owner-unverified** |
| `/first-visit-ordering-guide` | info | Phase 1 pillar cluster; counter-service explainer |
| `/how-to-order` | info | existing /order/ parity; DoorDash = external CTA; ordering strategy owner-gated |
| `/about` | story (AboutPage) | family-owned/Ray Aqel/generational recipes all owner-unverified — ship confirmed facts only |
| `/faq` | faq (FAQPage) | GEO answer surface; halal FAQ items gated |

### Neighborhood (8) — sized conservatively; local-pack never observed
| Path | Basis |
|---|---|
| `/neighborhoods/near-eastern-iowa-airport` | near-CID aggregator pages have no Mediterranean sit-down; same 6th St SW corridor (District 23 corroborates) |
| `/neighborhoods/near-kirkwood-community-college` | near-pages exist; only Gyro Hut 2.0 adjacent; student/staff lunch (Estimated) |
| `/neighborhoods/sw-cedar-rapids` | home quadrant; no other Mediterranean/halal restaurant in SW; Midamar same quadrant |
| `/neighborhoods/downtown-cedar-rapids` | district anchors (the-district.org) |
| `/neighborhoods/marion` | uncontested per Phase 1 |
| `/neighborhoods/fairfax` | uncontested; nearest SW-side suburb |
| `/neighborhoods/ely` | uncontested per Phase 1 |
| `/neighborhoods/swisher` | uncontested per Phase 1 |

Anti-thin floor is encoded in the engine's neighborhood schema (>=1 localFact, >=2 proximityTrustLines, >=1 townFaq): any town whose real facts cannot be captured at Phase 4 folds by omitting its data entry — plan-time fold and build-time fold agree. Local-pack rankings were never observed (Phase 1 evidence gap), so near-me claims stay competitor-absence-based and this family stays at 8, not the full 14-suburb ring.

## Folded pages (13)

| Candidate | Folds into | Named reason |
|---|---|---|
| `/gyro-cedar-rapids` | `/menu/sandwiches-wraps` + `/menu` | Gyro Hut entrenched since 2006 (58 Yelp reviews); Phase 1: target via menu page, not a battle page |
| `/chicken-shawarma-cedar-rapids` | `/shawarma-cedar-rapids` | near-duplicate risk vs sibling (<0.70 similarity unattainable with distinct honest content) |
| `/mediterranean-restaurant-cedar-rapids` | `/` (home) | home already targets the head term; separate page would cannibalize |
| `/family-dinner-deals-cedar-rapids` | `/occasions/family-dinner` | same intent, one page |
| `/occasions/holiday-catering` | `/occasions/catering` | no distinct SERP or demand evidence captured; thin |
| `/occasions/late-dinner` | `/` hours + `/menu` | skill-suggested moment but zero demand evidence captured |
| `/neighborhoods/hiawatha` | `/neighborhoods/marion` + occasions catering | Pita'z holds Hiawatha (on-site incumbent); missing uncontested angle |
| `/neighborhoods/czech-village-newbo` | `/neighborhoods/downtown-cedar-rapids` | Pita'z on-site at NewBo City Market; Phase 1 says prioritize uncontested quadrants |
| `/neighborhoods/kingston-village` | `/neighborhoods/downtown-cedar-rapids` | district-map existence only; no competitor-gap or fact evidence — thin |
| `/neighborhoods/westdale-area` | `/neighborhoods/sw-cedar-rapids` | Westdale quadrant conflict unresolved across sources (Phase 1 gap) — do not assert until verified |
| `/neighborhoods/robins` | `/neighborhoods/marion` | no captured town facts (misses localFacts/proximity/townFaq minima); conservative near-me sizing |
| `/neighborhoods/walford` | `/neighborhoods/fairfax` | no captured town facts; conservative near-me sizing |
| `/neighborhoods/atkins` | `/neighborhoods/fairfax` | no captured town facts; conservative near-me sizing |

## External CTAs (never pages)

DoorDash store 41564223 (order CTA), `tel:` (319) 440-3709 (owner-confirm pending), `sms:` (owner-gated), Google Maps directions, Facebook page. None appear in pageMatrix.

## Required CRO blocks (mirrors engine cro-contract; downstream gate: cro-block-presence)

- Site-wide singleton: `position: fixed` mobile call/text sticky bar, mounted once in the layout; dual CTA in header/footer. Call CTA on every page — phone unverified until owner confirms (dependency). `sms:` half of the dual CTA is owner-gated (no SMS capability evidenced); omit-or-gate until confirmed.
- **home `/`**: hero with single h1 + 3-value-prop strip (`site.valueProps` — OWNER INPUT PENDING, gate fails until captured), dual CTA, >=1 mid-page CTA banner (`site.ctaBanner` — OWNER INPUT PENDING), Why-Choose-Us trust grid >=6 REAL facts (all 8 candidates currently owner-unverified — omit grid if <6 confirmed; never pad), lead form <=6 fields (CONDITIONAL on external `site.leadForm.endpoint` — none exists yet).
- **contact `/contact`**: lead form (same endpoint condition) + dual CTA + sticky bar + NAP.
- **menu hub, menu categories, occasions, root landings, neighborhoods** (detail kinds): hero + dual CTA + sticky bar + trust grid (grid conditional on >=6 confirmed facts, else omitted site-wide).
- **offer callout**: only if `site.offers` non-empty — kids $5.98 family-dinner offer is the sole candidate, owner-confirm pending. **financing block**: no providers — omitted.
- **neighborhood anti-doorway quota** (restaurant seam of the SAP quota): single city-specific H1, >=1 genuine local fact, >=2 proximity trust lines, >=1 town FAQ, >=400 chars unique local content, <0.70 trigram similarity vs siblings, per-city title/meta, labeled address stays the HQ city (3100 6th St SW, Cedar Rapids), zero placeholders.

## Image slot plan (Phase 6 Higgsfield) — 32 slots

Representational imagery only; every slot is labeled representational; no fabricated real-premises/staff/actual-dish-photo claims; no halal badges or certification marks unless owner-confirmed. Slots: home hero, home CTA-banner background, menu hub hero, 7 menu-category heroes, 10 occasion heroes (iftar + halal-catering conditional), 6 dish-landing heroes, 4 story/guide illustrations (charcoal process conditional), 1 shared neighborhood catering-delivery image, OG default share image, brand logo (owner asset or logo-prompting workflow — dependency).

## Owner/Yahya gates referenced

Owner checklist: `..\phase-0\owner-questionnaire.md` (17 items). Pages/blocks gated on it: halal family (certifying body), value props + CTA banner copy, lead-form endpoint, SMS capability, canonical phone, catering terms, offer declaration, craft-claim confirmations, ordering strategy, domain replace-vs-coexist (drives legacy-URL redirects for /catering/, /family-dinner/, /order/).
After sealing: Yahya approval required + page-matrix-depth review (capsule gatesAfterCompletion). Reviewer notes travel by --notes-file.
