# Phase 4 review — build-quality (run v2)

**Reviewer:** build-quality (independent read-only subagent; did NOT produce the build)
**Verdict:** PASS (16/16 criteria; zero blocking issues)
**Date:** 2026-07-08

## Verified
- routeMatch: 38/38 vs approved Phase 2 matrix — 0 missing, 0 extra (the new route-vs-matrix gate satisfied)
- New pages: open-late (10 caveat phrases, no hours in title), catering (all prices match menu.json,
  no invented items), location (one-location truth; SW = Pita Kabab, never a live Captains)
- Home: Gazette-ATTRIBUTED press quote; truth strip; links to all 3 new pages resolve; single h1;
  left-aligned h2s; no home-only filled bands (owner style rule holds)
- Truthfulness: zero violations (calamari absent; dine-in only as FAQ denials; no items beyond the
  owner paste — 'mashed' absent, mac-and-cheese only as the owner's Bites item; every hours render caveated)
- Links: 0 dangling, 0 slashless; 37 inbound pages to each new page
- FAQ: both disambiguation questions present
- Validate: fixture-only do-not-ship gate, ZERO advisories, all other gates silent
- Graph artifacts: llms.txt (NAP/cuisine/priced menu), Restaurant JSON-LD w/ servesCuisine+priceRange+hasMenu
  on 38/38, Speakable 38/38, Menu JSON-LD 87 priced items
- Marion facts: geographically plausible (Hwy 100 / 7th Ave corridor), no fabricated landmarks — guardrail satisfied

## Non-blocking weaknesses
1. JSON-LD openingHoursSpecification omits Fri-Sat vs visible copy — NOTE: this is the SEALED
   conservative-hours decision (Phase 0/2/3: owner has not confirmed the 11pm close; incomplete
   machine-readable hours beat incorrect ones; displayText carries the full caveated week).
   Resolves when the owner confirms hours.
2. Inbound links to new pages are mostly footer-driven; contextual in-body links thin — Phase 5/6
   polish candidate.
3. Home '4.4 stars — 208 reviews' is point-in-time without a date; will drift — verify at launch.
4. Identity fixtures ship throughout (intended; Phase 5 wall).
