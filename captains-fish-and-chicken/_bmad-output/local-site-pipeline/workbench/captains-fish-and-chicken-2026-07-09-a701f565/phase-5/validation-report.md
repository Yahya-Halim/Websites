# Phase 5 Validation Report

Run: captains-fish-and-chicken-2026-07-09-a701f565 — Phase 5 (VALIDATE),
specialist seo-geo-ai-validation. Validation scope: the Phase 4 built output
(dist/, 38 routes, artifactHash
74ac0805e884305f9514ca1376aec8935dae65a0b75ff0f9f8c418ac80dd2059)
under the sealed REAL identity decision
(domain https://captains-fish-chicken.netlify.app, email
captainsfishchicken@gmail.com, GA4 G-7W35DKNK6Z). Date: 2026-07-09.

## validationRuns

Two runtime proof runs, both passed:

1. **factory-validate** — `npx factory validate` from the project root,
   exit code 0. 11 validators ran: all 6 blocking gates passed
   (schema-floor, route-completeness, cro-block-presence,
   do-not-ship-guards, sap-anti-doorway, graph-gate) plus all 5 advisory
   validators (has-generated-llms-txt, has-generated-robots-txt,
   no-todo-markers-in-artifacts, asset-references-exist, graph-presence).
   errorCount 0, warningCount 0. Full log:
   _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-09-a701f565/phase-5/factory-validate.log
2. **seo-geo-audit** — vendored `/aaron-marketing:seo-geo
   https://captains-fish-chicken.netlify.app --mode audit --full --tech
   --visibility` methodology executed against dist/ plus live-origin crawl
   surfaces.
   Status: ready_with_concerns — **Blocking Findings: None**; 6 advisories.
   Report:
   _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-09-a701f565/phase-5/seo-geo-audit.md

Key measured evidence: 38/38 routes built and validated; unique titles and
meta descriptions on 38/38; exactly one self-referencing live-origin
canonical per page; single h1 per page; JSON-LD on every page with 0 parse
errors (Restaurant 38, WebSite 38, WebPage 37, BreadcrumbList 37, FAQPage 21,
Menu 1, ContactPage 1); one consistent NAP tuple across all pages; 0 broken
internal links; 138 images with 0 missing alt; tel: CTA on every page; real
GA4 id on every page; zero fixture-identity flags; count-free review claim
verified; robots.txt with AI-crawler allow-list; well-formed llms.txt;
sitemap 38/38 on-origin with no funnel paths; live origin 200 on all sampled
crawl surfaces and live robots.txt byte-identical to dist.

## Failures

None. `failures: []` — no blocking validation failures, no unresolved launch
blockers, no fixture identity. Both gates-level validation (exit 0) and the
audit's Blocking Findings (None) are clean.

## Fix Rounds

0 fix rounds. Validation passed on the first run; no diagnose-fix-rebuild
cycle was needed. Frozen surfaces (menu items/prices from the 2026-07-07
owner paste; sealed identity values) were verified untouched.

## Remaining Advisories

Six non-blocking advisories (detail and rationale in seo-geo-audit.md):

1. Open Graph / Twitter Card meta tags absent on all 38 pages (social/link
   previews degrade; not a factory gate; future template round).
2. Structured openingHoursSpecification omits the Fri-Sat interval that the
   caveated display text claims (source business.json hours model gap);
   deliberately NOT fixed — hours are owner-unconfirmed and the sealed
   constraint forbids adding hours claims. Resolve on owner confirmation.
3. Five titles are 66-69 characters and may truncate in SERPs.
4. /menu/ meta description is 203 characters and will truncate.
5. Hours remain owner-unconfirmed; every surface correctly keeps the
   "please call to confirm" caveat.
6. Dual visible phone display formats (+1-319-221-1040 in tel CTAs vs
   (319) 221-1040 in copy); same number, schema consistent.

Runtime CWV/Lighthouse is out of scope for factory validate and was not
measured (live origin still serves the pre-fix deploy until Phase 7);
route to local-launch-checklist post-deploy.
