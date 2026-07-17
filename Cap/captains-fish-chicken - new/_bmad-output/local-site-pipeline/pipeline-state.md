# Pipeline State — Captains Fish and Chicken

- runId: `captains-fish-and-chicken-2026-07-05-2dd57f72`
- Archetype: restaurant · Engine: local-biz-factory-engine (local `file:` build)
- Build: fresh from scratch, 2026-07-05. Data re-discovered from public web (no prior work copied).

## Phases (all 8 executed)

| # | Phase | Specialist | Artifact | Reviewer | Human gate |
|---|-------|-----------|----------|----------|-----------|
| 0 | DISCOVER | local-business-discovery | phase-0.json | — | Yahya → override |
| 1 | RESEARCH | keyword-research | phase-1.json | research-sufficiency ✓ | — |
| 2 | PLAN | location-matrix-planner | phase-2.json | page-matrix-depth ✓ | Yahya → override |
| 3 | DESIGN | local-ai-visibility | phase-3.json | — | — |
| 4 | BUILD | content-writer | phase-4.json | build-quality ✓ | — |
| 5 | VALIDATE | seo-geo-ai-validation | phase-5.json | validation-fix-review ✓ | Yahya → override |
| 6 | IMAGERY | higgsfield | phase-6.json | imagery-quality ✓ | Yahya → override |
| 7 | LAUNCH | local-launch-checklist | phase-7.json | launch-readiness ✓ | Yahya → override |

Artifacts + sha-hashed records + phase envelopes: `artifacts/`, `handoff/`. Reviews: `reviews/`.
Overrides: `overrides/` (audited, actor `operator-walkthrough`).

## Deliverable state

- `factory build`: PASS (`/` + sitemap).
- `factory validate`: 1 ship-blocker (GA4 placeholder — by design), + accepted advisories.
- `higgsfield-workflow verify`: ok (logo provided; 3 dish slots deferred for real photos).
- `local-site-workflow verify`: 5 Yahya approvals pending (advanced via audited override).

See `LAUNCH-BLOCKERS.md` for the go-live checklist.
