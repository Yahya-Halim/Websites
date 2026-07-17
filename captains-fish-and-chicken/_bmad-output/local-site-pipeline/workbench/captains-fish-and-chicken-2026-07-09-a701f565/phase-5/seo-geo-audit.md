# SEO/GEO Audit

Artifact reportPath: _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-09-a701f565/phase-5/seo-geo-audit.md

Command: /aaron-marketing:seo-geo https://captains-fish-chicken.netlify.app --mode audit --full --tech --visibility

Audit target: the Phase 4 built output `dist/` (38 routes, artifactHash
74ac0805e884305f9514ca1376aec8935dae65a0b75ff0f9f8c418ac80dd2059) at
D:\website\captains-fish-and-chicken\dist, cross-checked against the live
origin https://captains-fish-chicken.netlify.app (which currently serves the
pre-fix 2026-07-08 deploy of the same 38-route matrix until Phase 7 deploys
this build). Vendored skill methodology from
packages/plugin/vendored/seo-geo-claude-skills (audit mode: on-page-seo-auditor,
content-quality-auditor, technical-seo-checker, site-structure-optimizer,
geo-content-optimizer, entity-optimizer), executed per the seo-geo-ai-validation
specialist procedure steps 5-12. Run date: 2026-07-09.

## Status

Status: ready_with_concerns

Zero blocking findings; `factory validate` exit 0
with all 6 gates passing; 6 non-blocking advisories remain (below). No fixture
identity flags: launch identity is REAL (domain
https://captains-fish-chicken.netlify.app, email captainsfishchicken@gmail.com,
GA4 G-7W35DKNK6Z) and no `.example` / placeholder-GA pattern appears anywhere
in dist/. Evidence labels: all findings below are Measured (direct inspection
of dist/ bytes or live HTTP responses) unless marked otherwise.

## Blocking Findings

None.

## Verified Clean Surface

No blocking findings anywhere. Specifically verified clean (Measured, all 38
pages):

- **Titles**: 38/38 pages have a `<title>`; all 38 unique; no duplicates.
- **Meta descriptions**: 38/38 present and unique.
- **Canonicals**: exactly one `<link rel="canonical">` per page (38/38), every
  one self-referencing on the live origin
  (`https://captains-fish-chicken.netlify.app<route>`); zero mismatches.
- **H1 discipline**: exactly one `<h1>` per page (38/38).
- **Structured data**: every page carries parseable JSON-LD (0 parse errors).
  Type rollup: Restaurant 38, WebSite 38, WebPage 37, BreadcrumbList 37,
  FAQPage 21, Menu 1 (/menu/), ContactPage 1 (/contact/). Required
  LocalBusiness-subtype fields present: name, address (street/city/region/zip),
  telephone, openingHoursSpecification, url, geo, priceRange, servesCuisine,
  sameAs (Facebook). No double-encoded `makesOffer`/`brand`. No fabricated
  `aggregateRating` (correct: review count is unverifiable, so schema carries
  no rating node).
- **NAP consistency**: exactly ONE distinct NAP tuple across all 38 Restaurant
  JSON-LD blocks — "Captains Fish and Chicken", +1-319-221-1040,
  1616 1st Ave NE, Cedar Rapids, IA 52402 — matching llms.txt and visible copy.
- **Internal-link health**: 38 distinct internal href targets crawled from all
  `<a href>` in dist/; 0 broken (every target resolves to a built route or
  existing asset).
- **Image alt text**: 138 `<img>` tags across dist/; 0 missing `alt`,
  0 empty `alt`.
- **Conversion affordance**: every page has at least one `tel:` call link.
- **Analytics**: real GA4 id G-7W35DKNK6Z present on all 38 pages; zero
  placeholder/reserved GA patterns (G-XXXXXXXXXX / G-EXAMPLE* / G-PROOF*).
- **Fixture identity**: zero `.example` domains/emails, zero fixture
  canonicals/JSON-LD URLs. Identity mode is REAL per the sealed Phase 3
  identity decision.
- **Review-claim integrity**: zero occurrences of the unverifiable "208
  reviews" count anywhere in dist/; review copy ships count-free as
  "4.4 stars on Google" with attribution (per the sealed omit-never-fabricate
  advisory).
- **Sitemap hygiene** (--tech): sitemap-index.xml + sitemap-0.xml present;
  38 URLs, 100% on the live origin, zero noindex/funnel paths (no /thank-you/).
- **robots.txt** (--tech): present, allows all crawlers, declares the sitemap
  and llms.txt. Live robots.txt is byte-identical to dist/robots.txt (Measured
  via live fetch + diff, 2026-07-09).
- **Live crawl surfaces** (--tech/--visibility): live origin serves HTTP 200
  for /, /robots.txt, /llms.txt, /sitemap-index.xml, /menu/, /contact/, /faq/
  (Measured 2026-07-09). Phase 4 had already sampled 6 routes at 200.
- **AI crawler access** (--visibility): robots.txt explicitly allow-lists
  GPTBot, ClaudeBot, PerplexityBot, and Google-Extended plus `User-agent: *`.
- **llms.txt structure** (--visibility): present (6,444 bytes, 8 sections):
  business summary, NAP, hours (with call-to-confirm caveat), domain, key
  facts, full priced menu (frozen 2026-07-07 owner paste), and a "Questions
  Answered" index mirroring the on-site FAQ coverage. Machine-readable
  facts.json also ships in dist/.
- **GEO patterns** (--visibility): FAQPage JSON-LD on 21/38 routes (all
  occasions, intent landings, neighborhoods, /faq/, /about/, /location/,
  /how-to-order/, /made-fresh-to-order/); entity-first NAP block on every
  page; topical clusters (menu hub -> 14 sections; occasions; intent landings)
  with >=2 cross-links per landing; disambiguation cluster
  /location/ -> /contact/ + /about/ + /faq/ intact.

## Advisory Findings

Non-blocking; none affects a factory gate. Ordered by impact:

1. **Open Graph / Twitter Card tags absent on all 38 pages** (Measured).
   No `og:title`, `og:description`, `og:url`, `og:type`, `og:image`, or
   `twitter:*` meta tags anywhere in dist/. Social shares and some chat-app
   link previews will fall back to title/description scraping without a
   chosen image. Not gated by factory validate; recommend adding an OG block
   (title/description/url/type + a hero image) in a future engine/template
   round.
2. **Structured hours omit Fri-Sat** (Measured). `openingHoursSpecification`
   in the Restaurant JSON-LD covers Mon-Thu 11:00-22:00 and Sun 11:00-20:00
   only, while the human-readable hours line (pages + llms.txt) reads
   "Mon-Thu 11am-10pm, Fri-Sat 11am-11pm, Sun 11am-8pm (please call to
   confirm)". Root cause is the source data model: business.json `hours` has
   only `weekday` (Mon-Thu) and `sunday` structured entries; the Fri-Sat
   claim exists only in `displayText`. A machine reading only the schema
   would infer the restaurant is closed Fri-Sat. NOT fixed this phase on
   purpose: hours are owner-UNCONFIRMED and the sealed Phase 3/4 constraint
   is "no hours claims added" — adding a structured Fri-Sat interval would
   fabricate an unconfirmed machine-readable claim without the caveat the
   visible copy carries. Resolve when the owner confirms hours (add the
   Fri-Sat interval then, or drop structured hours entirely).
3. **5 titles exceed 65 characters** (Measured; may truncate in SERPs):
   /occasions/office-and-party-catering/ (69), /catering-cedar-rapids/ (68),
   /open-late-cedar-rapids/ (67), /fried-chicken-and-wings-cedar-rapids/ (66),
   /menu/seafood/ (66). All remain keyword-front-loaded, so truncation cost
   is low.
4. **/menu/ meta description is 203 characters** (Measured) — will truncate
   around ~165 in SERPs; the clipped tail is the delivery-apps mention, not
   the primary intent. Cosmetic.
5. **Hours remain owner-unconfirmed** (User-provided constraint). Every
   surface correctly carries the "please call to confirm" caveat; keep the
   caveat until the owner confirms, then also resolve advisory 2.
6. **Dual visible phone formats** (Measured): tel: CTAs display
   "+1-319-221-1040" while body copy uses "(319) 221-1040". Same number,
   consistent E.164 in schema; purely a display-consistency nit.

Out of scope / not measured here (Estimated boundaries kept visible per
--tech rules): runtime Core Web Vitals / Lighthouse and crawl-budget stats
are explicitly NOT factory validate gates and were not measured against the
live origin (live still serves the pre-fix deploy; measuring it would audit
the wrong artifact). Route to local-launch-checklist after the Phase 7
deploy. No citation-observation proof is claimed for AI engines
(--visibility rule: readiness verified, observed citations not claimed).

## Fix Notes

- **Fix rounds this phase: 0.** `factory validate` passed on the first run
  (exit 0, 6/6 gates) and the audit surfaced zero blocking findings, so no
  fix-and-rerun cycle was required.
- The frozen surfaces were verified untouched: menu items/prices match the
  sealed 2026-07-07 owner paste (llms.txt menu block reproduced from it,
  including the owner's exact spellings "Mystic" and "Calypos"), and identity
  values (domain/email/GA4) are the sealed real identity.
- Advisories 1-4 and 6 are engine/template or copy-length improvements safe
  to take in a later round; advisory 2 and 5 are blocked on owner
  confirmation of hours and must NOT be "fixed" by inventing data.
