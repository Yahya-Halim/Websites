# SEO/GEO Audit

Artifact reportPath: _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-08-c0033522/phase-5/seo-geo-audit.md

Command: /aaron-marketing:seo-geo dist/ --mode audit --full --tech --visibility
Status: passed
Date: 2026-07-08 (post-identity build: real domain captains-fish-chicken.netlify.app, GA4 G-7W35DKNK6Z)
Auditor: independent read-only subagent (vendored seo-geo methodology), 38/38 pages
Evidence: 173 ld+json blocks parsed, 0 errors; full menu-price reconciliation + 6 spot checks all exact

## Blocking Findings

None.

## Advisory Findings

- FIXED pre-seal: home <title> was 74 chars — shortened to 61 ("Captains Fish and Chicken — Fried Fish Takeout, Cedar Rapids").
- FIXED pre-seal: /contact/ meta description was 353 chars (inherited business.description) — replaced with a page-specific 161-char description; /menu/ was a thin 40 chars — replaced with a rich menu summary; both neighborhood descriptions trimmed 195 -> 153 chars.
- OPEN (deliberate): Restaurant openingHoursSpecification covers Mon-Thu + Sun only, omitting Fri-Sat — the sealed conservative-hours decision (owner has not confirmed the 11pm close; visible text + llms.txt carry the caveated full week). Add the Fri-Sat spec once the owner confirms hours.
- OPEN (launch item): the plain-text "Rated 4.4 on Google" claim (~20 pages) is correctly NOT expressed as aggregateRating schema; verify the live GBP figure at launch and keep it in sync over time.

## Fix Notes

Initial v2 audit (this run) found 0 blocking + 4 advisory findings on the 38-route build. Three
advisories fixed pre-seal (title + three description-length outliers) with a rebuild; factory
validate re-confirmed exit 0 after the fixes. The two remaining advisories are deliberate
(conservative structured hours pending owner confirmation) or launch-time hygiene (rating sync).

Audit baseline strengths: unique titles; self-canonical on the real domain with trailing slashes;
one h1/page; Restaurant JSON-LD with servesCuisine/priceRange/hasMenu + WebSite on 38/38;
BreadcrumbList on all non-home; resolvable Speakable selectors everywhere; FAQPage only where FAQs
render; Menu with 87/87 priced items matching src/data/menu.json exactly; no Review/aggregateRating
schema; llms.txt + llms-full.txt on the real domain with NAP, email, cuisine, and the priced menu;
robots.txt allows AI crawlers + references the sitemap; sitemap = exactly the 38 routes; zero
orphans, zero dangling links; calamari absent; dine-in only as FAQ denials; hours caveated
everywhere; SW address only as the Pita Kabab disambiguation; GA4 loads exactly once per page.
