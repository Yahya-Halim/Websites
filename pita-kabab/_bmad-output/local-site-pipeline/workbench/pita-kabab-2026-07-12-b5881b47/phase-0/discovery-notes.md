# Discovery Notes — Pita Kabab (Phase 0, run pita-kabab-2026-07-12-b5881b47)

Date: 2026-07-12. Builder sub-agent working from the sealed capsule + phase packet only. No owner interview conducted in this dispatch (per capsule rules); all owner-facing items were routed to `owner-questionnaire.md` as residue.

## Method

1. Read the phase packet, capsule, specialist SKILL.md, and `D:\website\pita-kabab\brief.json` (seed facts: name + address owner-supplied; same owner as Captains Fish and Chicken; address formerly a Captains location).
2. Derived the probe set from the T1 site-schema contracts BEFORE searching (`probe-set.json`, 17 probes): NAP/hours, cuisine/service model, menu, prior-tenant disambiguation, brand assets, ≥6 trust facts, exactly-3 value props + CTA banner, offers, financing, lead-form endpoint + options + preferred contact, dual-CTA tel/sms, GA4/Ads, domain/email, payment policy, SAP/locations, identity fixtures.
3. Probe-guided sweep with WebSearch/WebFetch. Yelp and DoorDash block direct fetches (HTTP 403), so those were assessed from search snippets plus links published on the owner site. Facebook page content requires login. Bizapedia serves a security-check page.
4. All web-answered facts were bucketed as unverified claims; discrepancies preserve per-source values; residue went to the questionnaire. Omit-never-fabricate applied throughout (no offers, no SMS channel, no trust-grid filler, no invented domains/emails).

## Key surprises vs. the brief

- **A complete website already exists at `pitakababcr.com`** (home, menu, order, catering, contact, family-dinner, blog) even though the brief said no domain/phone/hours/menu had been supplied. Ownership/control of the domain and the replace-vs-coexist decision is now a top residue question.
- **Stale former-tenant footprint is substantial:** Yelp/Grubhub/Seamless/TripAdvisor/WanderBoat still list Captains Fish and Chicken at 3100 6th St SW with the old phone (319) 362-3114. The Captains engagement's disambiguation page (captains-fish-chicken.netlify.app) already anticipates this.
- The web corroborates the brief's cuisine guess: Mediterranean/Middle Eastern, specifically **Palestinian family recipes**; owner **Ray Aqel**; halal chicken/beef claim; counter service; DoorDash delivery; catering up to 200+.

## Per-source status (details in web-footprint-findings.json)

| Source | Status | Note |
| --- | --- | --- |
| Existing website pitakababcr.com | found | primary evidence source; no forms, no social links, no analytics visible |
| Google Business Profile / Maps | found (indirect) | 4.9 / 8 reviews per search snippet; claim status unknown |
| Yelp | found | listing "Updated May 2026", 13 photos, ~2 reviews; 403 on fetch |
| Facebook | found | business page + positive community-group posts; login-walled |
| Instagram | not-found | no business profile surfaced |
| DoorDash | found | store 41564223, linked from owner site /order/ |
| Uber Eats / Grubhub / Seamless / Slice / ChowNow | not-found | Grubhub+Seamless hold stale Captains listings at this address |
| TripAdvisor | not-found | stale Captains Inc page at this address |
| Gazette / KCRG press | not-found | Gazette "Pita'z" article is a DIFFERENT business — never cite it for Pita Kabab |
| Roadtrippers | found | directory listing |
| Bizapedia | found | "PITA KABAB INC" (IA) title only; body blocked |

## Trust-grid outlook (≥6 real facts required, else omit)

Candidates pending owner confirmation: family-owned; owner Ray Aqel; halal-certified chicken/beef (need certifying body); charcoal grill + vertical-spit shawarma; scratch/daily-fresh prep; Palestinian generational recipes; catering to 200+; free adjacent parking. Google 4.9 is real but only 8 reviews — usable only if attributed and dated. Enough raw material exists, but **every item is currently unverified**; the grid ships only after owner sign-off.

## Hard gaps that gate later phases

1. `site.leadForm.endpoint` — none exists; must be provisioned (external service only; static site).
2. `site.ctaSecondary` sms: — no evidence the business number takes texts.
3. `site.valueProps` (exactly 3) + `site.ctaBanner` — owner-authored copy required or the page kind fails the CRO gate.
4. `business.analytics` — no GA4/Ads info discoverable.
5. Brand assets & photo rights — nothing rights-cleared in hand.
6. `business.yearEstablished` — opening date unknown (post-May-2025 inferred, unverified).
7. Domain control + deploy-target decision for pitakababcr.com.

## Bucket counts

- Web-answered unverified claims: 15 findings (+2 corroborations of owner seed facts)
- Discrepancies preserved per-source: 5
- Owner-residue questions emitted: 17

## What was deliberately NOT done

- No owner interview (capsule forbids; questionnaire emitted instead).
- No canonical business-data file written and no build output (Phase 0 must not create build output; owner approval gate pending).
- No `complete-phase` (dispatch stop condition).
