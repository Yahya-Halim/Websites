# Phase 2 approval notes — page matrix

**Actor:** Yahya
**Run:** captains-fish-and-chicken-2026-07-05-f333953f
**Artifact approved:** plan/phase-2-page-matrix.json
**Date:** 2026-07-05

## What is approved
The page matrix and strategy: 32 internal pages across 6 restaurant families (core, menu-category, search-intent, occasion, neighborhood, story), fold decisions, CRO-block map, and image-slot plan. Approved to proceed to Phase 3 (DESIGN).

## CONDITIONAL — unresolved blockers carried forward (NOT cleared by this approval)
This approval does NOT resolve the conversion-surface blockers. They remain OPEN action-items that MUST be decided before the Phase 4 build gate:

- **CSB-lead-form (blocking at build):** Home + Contact require a lead form -> external https endpoint. None exists. These pages WILL FAIL the cro-block-presence gate at Phase 4/5 until the owner provides a Web3Forms (or similar) endpoint + business email, OR Yahya records an explicit exception to drop the form (contact = phone/map only).
- **CSB-dual-cta (gate risk):** No SMS number -> dual-CTA degrades to call-only. Accept call-only (documented) or provide an SMS-capable number before build.
- **CSB-trust-grid:** Omitted per the <6-facts rule. No action (allowed).

Design may proceed without these; the build gate cannot. They will be re-surfaced before Phase 4 and are the subject of the 4->5 preflight.
