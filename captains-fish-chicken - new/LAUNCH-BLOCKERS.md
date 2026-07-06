# Launch Blockers — Captains Fish and Chicken

Status: **NOT READY TO LAUNCH** — build + validation are clean except the items below.
The site builds (`/` + sitemap), renders real content, and emits valid Restaurant JSON-LD.

## Hard blockers (must resolve before go-live)

1. **GA4 measurement id** — `src/data/business.json` → `analytics.gaId` is `G-XXXXXXXXXX`
   (placeholder). This is the ONE failing `factory validate` gate (do-not-ship). Replace with the
   owner's real `G-XXXXXXXX` id.
2. **Domain** — `business.json` → `domain` is `https://captainsfishandchicken.com` (assumed, not
   confirmed registered). Confirm the real domain; it drives canonical URLs + sitemap `site`.
3. **Menu prices** — all prices in `src/data/menu.json` are from Yelp/delivery aggregators and are
   typically marked up vs in-store. Owner must confirm the real in-store prices before publishing.
4. **Official email** — `business.json` → `email` is `hello@captainsfishandchicken.com` (guessed).
   Replace with the real inbox.

## Soft / pre-launch confirmations

5. **Hours edge case** — real Fri/Sat close is 11pm, but the engine's 2-block hours schema caps the
   weekday block; schema currently says Mon–Sat close 10pm (conservative). `displayText` shows the
   accurate hours. Confirm and, if needed, accept the schema approximation.
6. **Real photos** — hero is prompted but not generated (no Higgsfield credentials this session);
   catfish / wings / family-spread are `blocked-awaiting-photos`. Collect real owner photos, drop
   into `reference-photos/`, run `higgsfield-workflow intake` → `generate` → `picker` → `export`.
7. **Payment methods** — `paymentAccepted` is a common-set guess ("Cash, Visa, Mastercard, Debit");
   confirm.
8. **Second location** — `3100 6th St SW` is intentionally OUT OF SCOPE for this site (captured as
   `ownerAlsoOwns`). Confirm whether a second site / location page is wanted later.
9. **Reviews** — no numeric rating/review count captured, so no `aggregateRating` schema is emitted
   (correct — never fabricate). Pull real Google/Yelp numbers to add it.
10. **Lead form** — omitted (no real endpoint). Wire a catering/large-order form endpoint if desired.

## Governance (audit trail)

- Yahya approval gates (phases 0, 2, 5, 6, 7) were advanced via **audited override**
  (`operator-walkthrough`) because no human signer was present. Real Yahya approval is still
  required before launch. See `_bmad-output/local-site-pipeline/override-reason.md` and the
  override records under `_bmad-output/local-site-pipeline/overrides/`.
- Independent reviewer verdicts (research-sufficiency, page-matrix-depth, build-quality,
  validation-fix-review, imagery-quality, launch-readiness) ARE recorded per phase.
