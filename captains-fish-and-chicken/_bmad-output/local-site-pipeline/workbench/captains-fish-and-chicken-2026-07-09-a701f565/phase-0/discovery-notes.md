# Discovery Notes — Phase 0 (run captains-fish-and-chicken-2026-07-09-a701f565)

Sweep executed fresh on 2026-07-09 per probe-set.json. Owner statements sourced from the sealed engagement brief (`D:\website\captains-fish-and-chicken\brief.json`) — the orchestrator-authorized owner-declared statements channel. No live owner interview occurred in this run.

## Method

- Probe-guided WebSearch/WebFetch sweep across GBP mirrors, Yelp, TripAdvisor, DoorDash, Uber Eats, Postmates, Grubhub, Seamless, Facebook, KHAK press, Gazette (attempted), aggregator microsites (res-discover, Zmenu, Wheree, Wanderlog, WanderBoat, MenuPix), the owned Netlify site, and a Pita Kabab cross-check for the excluded SW address.
- Direct fetches to Yelp, TripAdvisor, DoorDash, Uber Eats, Zmenu, and Wheree returned HTTP 403 (bot walls); their status/details were captured from SERP snippets and mirrors instead, and recorded as such.

## Headline changes vs prior sweeps

1. **The business now has a live owned website**: https://captains-fish-chicken.netlify.app — launched 2026-07-08 by this engagement (v2 build, 38 routes), verified live by direct fetch on 2026-07-09. Content matches the owner's declarations: full priced menu, phone-first/call-only contact, caveated hours, attributed 4.4/208 Google citation, representational-photo disclaimers, logo placeholder.
2. **Owned site not yet in the SERP index** (expected — one day post-launch). GBP website-field update + GSC submission are the accelerators; both are owner residue items.
3. **Google mirror review count moved**: Wanderlog Google-mirror shows 4.4/192 vs the owner's 4.4/208 (2026-07-07). Rating value unchanged at 4.4. Treated as a stale-mirror discrepancy, non-blocking.
4. **Stale SW listings persist**: Yelp SW, Grubhub SW, WanderBoat still list Captains at 3100 6th St SW — now Pita Kabab (same owner, phone (319) 440-3709, pitakababcr.com). Never conflate; disambiguation content stands.

## Three-bucket split

- **Web-answered (unverified claims):** owner Ray Aqel; opened Oct 2024 in former Gutamex/Brick City Grill space; prior same-model restaurants in MN/IL/MI; aggregator-consistent hours; menu breadth incl. gizzards, perch, tilapia, cod, calamari, crab cakes; Facebook 100%-recommend/17 reviews; delivery on DoorDash/UberEats/Postmates/Grubhub/Seamless; 'health score 98' (origin unverified — excluded from site use).
- **Discrepancies needing owner action:** stale SW listings; res-discover official-site claim vs owned site; Google review-count drift; hours confirmation.
- **Owner-only residue:** hours confirmation, Gazette sides delta, logo file drop, GBP website field, custom-domain decision, SW-listing cleanup authorization, contact-policy reconfirmation.

## Truthfulness handling

- Owner statements from brief.json → `userConfirmedFacts` (declared owner inputs, not web claims).
- Press/aggregator claims → `unverifiedClaims` with sources.
- Hours stay owner-unconfirmed; call-to-confirm caveat stands.
- Nothing fabricated; empty slots left empty (no trust-grid padding, no invented offers/financing/SMS).

## Scope guards

- Single location in scope: 1616 1st Ave NE, Cedar Rapids, IA 52402.
- 3100 6th St SW excluded (Pita Kabab, same owner). SW-location phone 319-362-3114 from May-2025 press must never be used for the NE location; NE phone is (319) 221-1040.
- `buildOutputCreated` stays false — Phase 0 produces discovery evidence only; the live site was created by the archived v2 run, not by this phase.

## Work attribution

- **Prior worker (same run, earlier dispatch):** derived probe-set.json, ran the 23-source web-footprint sweep, filled web-footprint-findings.json, emitted owner-questionnaire.md, and wrote the sections above.
- **Artifact author (phase0-builder-v3, 2026-07-09):** verified the filled findings file for coherence (NAP, SW/NE phone separation, hours caveat, and owned-site status all internally consistent with brief.json — no spot re-sweep needed), authored phase-0-artifact.json from the sealed brief (owner statements → userConfirmedFacts) and the findings file (web claims → unverifiedClaims, discrepancies, residue → missingAnswers), and ran inspect-artifact until problems: [].
