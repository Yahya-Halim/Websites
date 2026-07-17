# SEO/GEO Audit — Captains Fish and Chicken

Command: /aaron-marketing:seo-geo dist/
Status: passed
Date: 2026-07-08 (re-audit after fixes; initial audit 2026-07-07 under repo 329ba8d gates)
Auditor: independent read-only subagent (vendored seo-geo methodology) + mechanical re-verification of fixes
Pages checked: 35 (all built routes)
JSON-LD blocks parsed: 158/158 (0 parse errors)

## Blocking Findings

None. (Both blockers found by the initial audit were fixed and mechanically re-verified — see Fix Notes.)

## Advisory Findings

- RESOLVED 2026-07-08: Business Knowledge Graph authored (src/graph: 14 menu + 6 occasions + 6 facts nodes, KNOW provenance from owner-confirmed data; factory graph-seed derived 92 Q&A nodes). Graph-mode wire now emits enriched llms.txt (6.5KB: NAP, hours, cuisine, price range, full priced menu) and llms-full.txt (19KB).
- RESOLVED 2026-07-08: graph-covered facts projection now emits servesCuisine ("Seafood, Fried Chicken, Soul Food"), priceRange ("$$", derived from owner-confirmed prices), and hasMenu -> /menu/ on the site-wide Restaurant JSON-LD. Speakable (SpeakableSpecification with real selectors .hero-copy h1 / .hero-subheading) added to the WebPage node on all 35 pages per local-schema-stack.
- Structured hours intentionally omit Friday/Saturday (owner has not confirmed the 11pm close); visible hours text carries the full week with a "please call to confirm" caveat. Resolve by owner confirmation, then extend structured hours.
- Identity fixtures (.example domain in canonicals/sitemap, G-XXXXXXXXXX) are declared launch-blocking placeholders owned by the factory-validate do-not-ship gate, not this audit; excluded per scope.

## Fix Notes

Initial audit (2026-07-07) found 2 blocking + 6 advisory findings. Fixes applied and re-verified:

1. BLOCKER — orphan page cluster (4 routes reachable only via sitemap: /fish-and-chicken-near-me/, /neighborhoods/marion-ia/, /neighborhoods/northeast-cedar-rapids/, /occasions/quick-lunch-takeout/).
   FIX: four footer links added site-wide (site.json). RE-VERIFIED: each route now has 34 inbound links from other pages.
2. BLOCKER — hours contradiction: JSON-LD openingHoursSpecification grouped Mon–Sat at 22:00 close while visible text/llms stated Fri–Sat 11pm.
   FIX: structured hours narrowed to confirmed-plausible windows only (Mon–Thu 11:00–22:00; Sun 11:00–20:00); Fri/Sat omitted from machine-readable hours until owner confirms (incomplete beats incorrect). RE-VERIFIED: dist JSON-LD emits exactly [Mon–Thu 22:00, Sun 20:00]; no machine-readable Fri/Sat claim remains.
3. ADVISORY — 12 over-length titles: 9 menu-section titles shortened to <= 65 chars (menu.json seo.title).
4. ADVISORY — duplicate + over-length home/contact meta description: home now carries a unique 151-char description and a local-entity title ("Captains Fish and Chicken — Fried Fish & Seafood Takeout, Cedar Rapids IA").
5. ADVISORY — thin descriptions on /menu/drinks/ and /menu/gizzards-and-livers/ expanded to 70+ chars.

Baseline strengths confirmed by the audit: unique titles on all 35 pages; self-matching trailing-slash canonicals; exactly one h1 per page with clean heading hierarchy; Restaurant + WebSite JSON-LD site-wide; BreadcrumbList on every non-home page; FAQPage on all FAQ-bearing pages; Menu schema with 87/87 priced MenuItems; all images carry alt text; NAP consistent site-wide; robots.txt allows GPTBot/ClaudeBot/PerplexityBot/Google-Extended and references the sitemap; sitemap covers exactly the 35 built routes; no fabricated claims (no dine-in assertion, no calamari, no second location).
