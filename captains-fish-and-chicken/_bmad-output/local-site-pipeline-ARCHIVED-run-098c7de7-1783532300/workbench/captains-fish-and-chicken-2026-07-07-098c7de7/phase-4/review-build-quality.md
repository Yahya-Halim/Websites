# Phase 4 review — build-quality

**Reviewer:** build-quality (independent subagent; strictly READ-ONLY; did NOT produce the build)
**Verdict:** PASS
**Date:** 2026-07-07
**Run:** captains-fish-and-chicken-2026-07-07-098c7de7

## Verified (all pass)
1. dist/ route count == 35, exactly matching the Phase 2 matrix (home, menu index + 14 sections,
   6 occasions, 10 landings, 2 neighborhoods, contact).
2. Menu JSON-LD emitted on /menu/ with hasMenuSection + 87 MenuItem entries, each with an Offer,
   priceCurrency USD, numeric price.
3. Truthfulness clean: calamari ABSENT; NewBo ABSENT; 3100 / 6th St SW ABSENT (dist + src);
   dine-in FAQs correctly state takeout/delivery/catering-only; every hours display carries the
   "(please call to confirm)" caveat.
4. Zero dangling internal cross-links (all 39 distinct hrefs resolve to built routes).
5. Occasions each 5-6 FAQs + 5-6 cross-links; /faq renders 9 FAQs.
6. Neighborhood facts genuine (Coe College, I-380, Mound View, Wellington Heights, Hwy 100/7th Ave
   to Marion ~5 mi/10 min).
7. factory validate (read-only): ONLY blocking gate is do-not-ship-guards, populated entirely by the
   declared identity fixtures (G-XXXXXXXXXX + .example) — EXPECTED per owner deferral.
   route-completeness / schema-floor / cro-block-presence / sap-anti-doorway / graph-gate all pass.
8. NAP consistent site-wide: (319) 221-1040, 1616 1st Ave NE on all 35 routes + llms.txt.

## Non-blocking weaknesses
- public/logo.svg missing (advisory; Phase 6 imagery fills it).
- No Business Knowledge Graph (advisory; legacy mode).
- F14 hours seam: business.json structured hours use the 2-bucket schema (Mon-Sat close 22:00) and
  cannot represent the 3-window week (Fri-Sat 11pm); hours.displayText carries the accurate text
  by design and every render is caveated "please call to confirm." Cosmetic, documented.

## Blocking issues
Only the EXPECTED identity-fixture do-not-ship gate (not a build defect; resolves at Phase 7 swap).

## Independence
Reviewer ran strictly read-only (Read/Grep/ls/find + read-only factory validate); wrote no files,
ran no state-mutating commands, recorded no runner state.
