# Keyword & Competitor Research — Captains Fish and Chicken

**Skills:** `keyword-research` + `competitor-analysis` (localevolve-factory vendored seo-geo-claude-skills)
**Project:** `captains-fish-chicken` (archetype: `restaurant`)
**Date:** 2026-07-01
**Method:** 14+ live SERPs (WebSearch) + competitor site fetches, run 2026-07-01. No paid SEO tool (Ahrefs/Semrush) connected — **all volume/difficulty figures are ESTIMATES** calibrated to the ~230k Cedar Rapids MSA and observed SERP composition. SERP compositions and competitor facts are **OBSERVED** unless tagged estimated. Two independent research passes cross-corroborated the headline findings.

---

## Executive Summary

- **The market has no SEO-capable competitor.** Not one local fried-fish/chicken restaurant's own website ranks organically for ANY non-brand query in Cedar Rapids. Every money SERP is directories (Yelp, Restaurant Guru, Restaurantji, Tripadvisor), chain location pages (KFC, Popeyes, LJS), or local media (KHAK, The Gazette). A properly structured Captains site enters an empty field.
- **Captains is already the AI-cited category leader.** AI-generated answers for "best fried fish in cedar rapids" and "best fried catfish" name Captains **first**; it's the only category-native (fish-and-chicken concept) entity cited in listicles at all. Harold's and Chicago Grill are absent from every listicle.
- **But the brand SERP is leaking.** On the navigational query "captains fish and chicken", captainsfishandchicken.com appears **nowhere** — Yelp, Facebook, delivery apps, and a scraper site (`captains-fish-and-chicken.res-discover.com`, plus `wheree.com`) capture 100% of brand demand. Highest-priority fix.
- **The second location isn't on the site.** 3100 6th St SW (52404) is confirmed real (Gazette + KHAK coverage) but appears nowhere in `src/data/` or pages. Two locations = two GBPs = doubled local-pack coverage; the site needs location pages for both.
- ~32 target keywords identified across 6 clusters; top opportunities are near-zero-competition dish terms (catfish, perch, gizzards) plus the seasonal Lent fish-fry surge that no restaurant currently owns.

---

## Part 1 — Keyword Research

### 1.1 Keyword table

Volume = est. monthly searches, Cedar Rapids metro. Difficulty = est. 1–100 for a real local site with an optimized Google Business Profile. Intent: T=transactional, C=commercial, I=informational, N=navigational. GEO = AI-answer potential.

| # | Keyword | Est. vol/mo | Est. diff | Intent | GEO | SERP evidence |
|---|---|---|---|---|---|---|
| 1 | captains fish and chicken | 150–400 | 5 | N | Med | OBSERVED: brand SERP owned by Yelp, Facebook, Grubhub, UberEats, DoorDash, Apple Maps, res-discover.com scraper — own site absent |
| 2 | fish and chicken cedar rapids | 50–150 | 10 | T | High | OBSERVED: Captains fills ~9/10 results via third parties — easiest #1 win |
| 3 | fried fish cedar rapids | 50–150 | 20 | C/T | High | OBSERVED: Yelp, Restaurant Guru, YellowPages; Captains named in Yelp top list |
| 4 | best fried fish in cedar rapids | 30–100 | 20 | C | **High** | OBSERVED: AI summary listed Captains first among locals; pure directory SERP |
| 5 | fried fish near me (local pack) | 200–500 metro | 25 (GBP) | T | High | OBSERVED (proxy): won via GBP/local pack, not organic |
| 6 | fried catfish cedar rapids | 30–80 | 15 | T | High | OBSERVED: Yelp lists + KHAK article about Captains; no competitor site ranks |
| 7 | best fried catfish cedar rapids | 20–60 | 15 | C | **High** | OBSERVED: AI answer called Captains "a leading choice" |
| 8 | who has the best catfish in cedar rapids | 10–40 | 15 | C | **High** | INFERRED from #7 SERP; AI-answerable list query |
| 9 | catfish cedar rapids (bare) | 100–250 | — | Mixed | Low | OBSERVED: SERP is fishing/angling (Iowa DNR, catfish1.com, Fishbrain) — **anti-target**, wrong intent |
| 10 | fried perch cedar rapids | 10–30 | 10 | T | High | OBSERVED: only Harold's + Captains named; near-empty SERP |
| 11 | fried perch near me | 20–60 metro | 15 (GBP) | T | Med | INFERRED from #10; GBP play |
| 12 | chicken gizzards cedar rapids / near me | 10–50 | 10 | T | Med | OBSERVED: 3-player SERP (Harold's, Chicago Grill, Captains); KHAK article #1 |
| 13 | fried chicken cedar rapids | 200–500 | 40 | T | High | OBSERVED: KFC/Krispy Krunchy/Chester's + Yelp/Tripadvisor; chain-heavy |
| 14 | best fried chicken cedar rapids | 50–150 | 30 | C | **High** | OBSERVED: Yelp lists rank; Popeyes/Mulligan's named, closed Vivian's still cited first, Captains absent — gap to close |
| 15 | where to get fried chicken in cedar rapids | 20–60 | 25 | C | **High** | INFERRED from #13/#14 result set |
| 16 | chicken wings cedar rapids | 100–300 | 35 | T | High | OBSERVED: It's Just Wings/Wingstop pages, UberEats, Yelp, Restaurantji; Captains absent |
| 17 | best wings cedar rapids | 30–100 | 30 | C | **High** | INFERRED from #16 (Yelp/Restaurantji lists dominate) |
| 18 | boneless wings cedar rapids | 10–40 | 25 | T | Med | INFERRED from #16; chain-heavy |
| 19 | chicken tenders cedar rapids | 50–150 | 35 | T | Med | OBSERVED: new competitor Chicken Royale (Mar 2026) + media + chains; Captains named weakly (#10) |
| 20 | seafood restaurant cedar rapids | 200–500 | 40 | C | High | OBSERVED: Tripadvisor/Restaurant Guru/Yelp/Stacker; boil-style competitors; Captains absent |
| 21 | soul food cedar rapids | 100–250 | 25 | C/T | **High** | OBSERVED: Facebook/Yelp/UberEats pages; Captains named in AI best-of; Vivian's closed = market gap |
| 22 | best soul food cedar rapids | 30–100 | 25 | C | **High** | OBSERVED: Captains + Sugapeach named; directory-only SERP |
| 23 | fish fry cedar rapids | 100–300 (Lent peak) / 30–80 off | 25 | C/T | High | OBSERVED: church + KHAK Lent roundup + Eagles club + Yelp — no restaurant site ranks |
| 24 | friday fish fry cedar rapids | 50–150 (seasonal) | 25 | T | High | OBSERVED: Yelp Friday-fish-fry lists; bar-grills (Odie's, Stinky's, Teddys) named |
| 25 | fish fry near me lent | 100–300 metro (Feb–Apr) | 20 | T | High | OBSERVED: KHAK annual "Lent Fish Fries" roundup is the key local ranking asset |
| 26 | all you can eat fish fry cedar rapids | 30–80 (seasonal) | 30 | T | Med | OBSERVED: Yelp AYCE list + Eagles/Bluff Lake — skip unless Captains offers AYCE |
| 27 | family meal deals cedar rapids | 20–60 | 30 | T | Med | OBSERVED (Marion variant): only chain pages rank; no local independent |
| 28 | fried chicken marion iowa | 20–60 | 25 | T | Med | OBSERVED: only KFC Marion + Pizza Ranch — thin SERP, service-area mention can capture |
| 29 | fish and chicken near me | 100–300 metro | 15 (GBP) | T | Med | INFERRED from #2 dominance; GBP proximity play from 2 locations |
| 30 | hush puppies cedar rapids / near me | <10–20 | 5 | T | Low | ESTIMATED (not searched): near-zero competition; menu-page capture |
| 31 | fried shrimp cedar rapids | 10–40 | 20 | T | Med | ESTIMATED (not searched): likely directory-dominated like other dish terms |
| 32 | crab cakes / calamari cedar rapids | 10–30 each | 30 | C | Low | ESTIMATED (not searched): sit-down seafood restaurants compete |

**Anti-target (observed):** bare "catfish cedar rapids" — the SERP is fishing/angling content (Iowa DNR, angler forums, Fishbrain). Always use "fried catfish" / "catfish dinner" / "catfish restaurant" modifiers. Expect summer noise in Search Console from unmodified fish terms.

### 1.2 Top keyword opportunities

**Quick Wins (low difficulty, high value)**

| Keyword | Est. vol | Est. diff | Why |
|---|---|---|---|
| captains fish and chicken (brand) | 150–400 | 5 | Own site absent from own brand SERP; scraper (res-discover.com) monetizing it. Fix = indexation + Restaurant schema + correct titles. |
| fish and chicken cedar rapids | 50–150 | 10 | Captains already fills ~9/10 results via third parties; owned site takes #1 near-instantly. |
| fried catfish cedar rapids (+ "best") | 50–140 | 15 | AI answers already crown Captains; SERP is Yelp lists + one KHAK article. Dedicated catfish section converts this to owned ranking + AI citation. |
| fried perch cedar rapids | 10–30 | 10 | Two-restaurant SERP (Harold's, Captains). Perch differentiates vs. every chain. |
| gizzards cedar rapids / near me | 10–50 | 10 | 3-player niche, loyal repeat customers, Captains already named. Menu H2 + GBP menu item. |

**Growth Keywords (medium difficulty, higher volume)**

| Keyword | Est. vol | Est. diff | Why |
|---|---|---|---|
| fish fry cedar rapids (+ friday/lent) | 250–750 in season | 20–25 | No restaurant site ranks — churches/bars/KHAK own it. Evergreen page + KHAK roundup inclusion by late Jan. |
| soul food cedar rapids (+ best) | 130–350 | 25 | Vivian's (category pioneer) closed; Captains already AI-cited. Add GBP category + on-page copy. |
| chicken wings cedar rapids | 100–300 | 35 | Highest-volume winnable dish term; organic is chain/directory but local pack is open. |
| fried chicken cedar rapids | 200–500 | 40 | Chain-dominated; win via local pack + "best of" GEO content rather than head-on organic. |
| seafood restaurant cedar rapids | 200–500 | 40 | Partial fit — capture via GBP secondary category + home copy, not a dedicated page. |

**GEO Opportunities (AI-citation potential)**

| Query | Type | AI status | Recommended format |
|---|---|---|---|
| best fried fish in cedar rapids | List | **Captains cited FIRST already** | FAQ block + 40-word direct answer on home; keep review velocity |
| best fried catfish cedar rapids | List | Captains = "leading choice" | Catfish page with price/prep specifics AI can quote |
| best soul food cedar rapids | List | Captains + Sugapeach named | "Soul food" in GBP categories + about-page copy |
| best fried chicken cedar rapids | List | Closed Vivian's still cited first — dead entity to displace | Fried-chicken menu page + FAQ answer |
| who has the best catfish / where to get fried chicken | Question | Open | Q&A-format content, one direct answer per question |

### 1.3 Topic clusters → page mapping

| Cluster | Keywords | Target page |
|---|---|---|
| **A. Brand + core "fish and chicken"** | #1, #2, #29, #3 | Home (+ Restaurant schema, GBP links) |
| **B. Fried fish & seafood dishes** | #4–#11, #30–#32 | Menu: Fish & Seafood category — one H2 per species with price |
| **C. Fried chicken, wings, gizzards** | #12–#19 | Menu: Chicken category |
| **D. Locations & service area** | near-me queries, #28, NE/SW-side searches | **Two location pages** (1616 1st Ave NE · 3100 6th St SW) + Marion/Hiawatha mentions; each mapped to its GBP. ⚠️ 3100 6th St SW is currently absent from site data entirely. |
| **E. Fish fry / occasions** | #23–#27 | "Fish Fry in Cedar Rapids" occasion page (evergreen, refreshed each Lent) + family-meals section on `occasions.astro` |
| **F. GEO / question content** | #4, #7, #8, #14, #15, #17, #22 | FAQ blocks + short citable answer posts |

---

## Part 2 — Competitor Analysis

### 2.1 Competitive landscape

Market-structure notes (all observed): no JJ Fish & Chicken or Sharks Fish & Chicken exists in Cedar Rapids; Church's has no verifiable location; Vivian's Soul Food closed Dec 2022 but still occupies "best fried chicken / soul food" SERPs and AI citations as a dead entity.

| # | Competitor | Area | Type | Website | Menu overlap | Reviews (approx) | SEO posture |
|---|---|---|---|---|---|---|---|
| 1 | **Chicago Grill (Chicken & Fish)** | 824 6th St SW — same street as Captains SW | **Direct** | chicagogrillcr.com (Squarespace) | High: catfish $12.99, gizzards, wings | Yelp ~17; Restaurantji ~170 | Real domain but thin: image-only menu, no schema, address typo; 3 name variants dilute its entity |
| 2 | **Harold's Chicken #75** | 4330 16th Ave SW (opened Feb 2025) | **Direct** — closest concept analog | haroldschicken75.com — **SSL broken, unreachable** | Very high: chicken, fish, shrimp, gizzards, okra | Low; no rating surfaced | Effectively invisible: broken site, FB + delivery apps only; open to 2 AM Sat (late-night niche) |
| 3 | I'm Soul Hungry | 1632 1st Ave NW | Partial direct (soul/BBQ, wings) | none — FB only | Medium | Restaurantji ~35 | Directory-only outside Maps |
| 4 | **SugaPeach Chicken & Fish Fry** | North Liberty (~25 min) | Direct cuisine, adjacent market | Free Wix subdomain | Very high: catfish, cod, fried chicken, hush puppies | 4.5★ / ~1,300 aggregated | Strongest brand + reviews in the Corridor, weak owned SEO; outside CR pack radius |
| 5 | Juicy Crab Island | 1323 1st Ave SE (~0.4 mi from Captains NE) | Indirect (boil + soul food) | none — FB | Low-med | Low | Invisible outside Maps/news |
| 6 | Crab House Seafood Boil & Bar | 2360 Edgewood Rd SW | Indirect (Cajun boil) | crabhousecr.com | Low | Yelp ~17 | Own domain gets it cited in seafood roundups |
| 7 | Long John Silver's | 2630 Williams Blvd SW | **Direct chain** | ljsilvers.com location page | High (batter fish; no catfish/gizzards) | Yelp ~20 | Corporate SEO; reopened Oct 2024 after fire, 4+ local news stories |
| 8 | Popeyes (×2) | Blairs Ferry NE + E Ave NW | Direct chain | popeyes.com | High | Yelp 60 + 36 | Full corporate stack + ezCater catering |
| 9 | Raising Cane's | 230 Collins Rd NE | Direct chain (tenders only) | corporate | Medium — zero fish | High traffic (est.) | Corporate locations hub |
| 10 | KFC (×3) | incl. 1341 First Ave SE, blocks from Captains NE | Direct chain | corporate | Med-high | Tiny Yelp counts (~12) | Corporate pages, weak local reviews |

Also present: Champs Chicken (gas-station franchise, corporate page ranks for "best fried chicken"), Chicken Royale (new tenders concept, Mar 2026, SE side), bar-grill fish fries (Odie's, Stinky's, Teddys), church fish fries (St. Patrick, Eagles).

### 2.2 Weaknesses to exploit (evidence-backed)

1. **Nobody in the category owns an SEO-capable website.** Chicago Grill = thin Squarespace, no menu text or schema (fetched); Harold's = broken SSL (fetched twice); SugaPeach = free Wix subdomain; I'm Soul Hungry / Juicy Crab Island = Facebook-only. A structured site with real menu pages + schema enters an empty field.
2. **Dead entity squatting the SERPs:** Vivian's (closed 2022) is still cited first for "best fried chicken/soul food" — searchers and AI hit dead ends; fresh structured content displaces stale entities.
3. **"Best catfish" SERP polluted with angling content** — no restaurant ranks at all; one dedicated catfish page can own it.
4. **Chicago Grill's entity is split across 3 name variants** (Yelp/Tripadvisor/DoorDash) — weak map-pack consolidation vs. Captains' consistent NAP.
5. **Harold's is unreachable online** — its brand searches are interceptable with comparison/"alternative" content.
6. **Gizzards/okra queries have zero local content** — only delivery-app category pages and Walmart rank.
7. **No restaurant targets Lent/Friday fish fry** — KHAK's roundup lists churches and bars only.

### 2.3 Strengths to learn from

- **SugaPeach:** review volume (~1,300) + named-owner community story drives dominance despite bad tech → mirror with Ray Aqel's multi-state operator story (E-E-A-T bio on About page).
- **Long John Silver's:** reopening generated 4+ local news stories → Cedar Rapids media (KHAK, Gazette, KRNA, CBS2) eagerly covers restaurant milestones. Captains already has 3 KHAK + 2 Gazette pieces — keep feeding this channel (new menu items, anniversaries, milestones); local media ranks instantly here.
- **Harold's:** late-night hours (to 2 AM Sat) capture an underserved daypart Captains doesn't cover.
- **Popeyes:** ezCater/catering listings reach B2B queries no local independent touches.
- **Crab House:** even a modest owned domain earns roundup citations.

### 2.4 Competitive keyword gaps (no local restaurant's own site ranks — all observed)

| Query | Who ranks instead |
|---|---|
| fried fish restaurant cedar rapids | Yelp, YellowPages, Restaurant Guru, Tripadvisor, KHAK |
| fish and chicken cedar rapids | Captains' own third-party pages only |
| best catfish cedar rapids | Fishing/angling content + Yelp — zero restaurants |
| soul food cedar rapids | Facebook pages, Yelp, closed Vivian's |
| best fried chicken cedar rapids | Yelp lists, KHAK listicle (naming closed Vivian's), Champs corporate |
| chicken gizzards cedar rapids | DoorDash/Postmates category pages, Walmart |
| friday / lent fish fry cedar rapids | Yelp lists + KHAK church/bar roundup |
| seafood boil cedar rapids | Yelp + crabhousecr.com (only owned domain present) |

**Scraper alert (observed):** `captains-fish-and-chicken.res-discover.com` and `wheree.com` currently monetize Captains' brand queries. Site launch with canonical NAP + Restaurant schema + GBP website link reclaims these.

### 2.5 AI/GEO citation check

Entities currently named by AI summaries & listicles for "best fried fish/catfish/chicken" queries (observed): **Captains** (top catfish pick; only category-native entity cited), Black Sheep Social Club, Emil's Hideaway, Daisy's Garage, Blind Pig, Sacred Cow (fried fish — mostly bars); Odie's, Stinky's, Teddys, Miss Katie's (Friday fish fry); Vivian's (closed, still cited), Born to Fry, Champs, Popeyes, Mulligan's (fried chicken). Harold's and Chicago Grill appear in **zero** listicles — Captains' citation lead over its direct rivals is already established; the job is to reinforce it with citable on-site facts and review velocity.

---

## Part 3 — Content Calendar Recommendations

| Priority | Item | Target keyword(s) | Type | Est. effort | When |
|---|---|---|---|---|---|
| P0 | Launch site indexed w/ Restaurant schema, correct titles, GBP website links (both locations) | brand + #2 | Technical | Small | Immediately |
| P0 | **Add 3100 6th St SW to site data + build 2 location pages** | near-me, SW/NE-side, #28, #29 | Pages | Medium | Immediately |
| P1 | Menu category pages with one H2 + price per dish (catfish, perch, tilapia, cod, shrimp, wings, gizzards, hush puppies) | #4–#19, #30 | Content | Medium | Launch |
| P1 | FAQ block with direct 40-word answers ("best fried fish in Cedar Rapids?", "who has the best catfish?") | GEO cluster F | Content | Small | Launch |
| P2 | About/story page: Ray Aqel multi-state operator narrative (E-E-A-T) | brand, soul food | Content | Small | Launch +2 wks |
| P2 | "Fish Fry in Cedar Rapids" evergreen occasion page | #23–#25 | Page | Medium | **Live by late Jan 2027** (Lent starts Feb 10, 2027) |
| P2 | Pitch KHAK/Hoopla for 2027 Lent fish-fry roundup inclusion (warm contact — 3 prior articles) | #25 | Outreach | Small | Jan 2027 |
| P3 | Wings + family-pack promo (GBP posts + occasions page) | #16–#18, #27 | Promo/content | Small | Late Jan (Super Bowl) |
| P3 | "Soul food" GBP secondary category + home copy mention | #21, #22 | GBP/on-page | Small | Launch |
| P3 | Catering/ezCater listing (B2B gap Popeyes exploits) | catering cedar rapids | Listing | Small | Post-launch |

## Seasonal notes

- **Lent 2027: Feb 10 – Mar 25.** Fish-fry queries spike mid-Feb→early Apr; KHAK publishes its roundup annually — page + pitch must be live by **late January**.
- **Friday fish fry** is year-round Midwest behavior (dedicated Yelp lists exist) — promote continuously.
- **Super Bowl (early Feb):** wings spike; Captains currently invisible on wings SERPs.
- **Summer:** bare fish terms skew toward angling — judge Search Console by modified terms only.

## Next Steps

1. **Wire the second location** into `business.json`/site data and re-run `/factory wire` + `/factory build` so both NAPs, schema, and llms.txt reflect two stores — prerequisite for the location-page cluster.
2. **Ship the menu-page keyword mapping** (cluster B/C) — the dish-level quick wins (catfish, perch, gizzards) are the fastest owned rankings in this market.
3. **Claim the brand SERP**: index the site, submit to Search Console, link it from both GBPs, Yelp, and Facebook to displace the res-discover/wheree scrapers.

---

*Sources: Yelp (fried fish / Friday fish fry / soul food / both Captains listings), Restaurant Guru, Restaurantji, Tripadvisor, KHAK (Captains ×3, Lent roundups 2025+2026, Chicken Royale), The Gazette (Captains 2nd location, Harold's, Juicy Crab Island, Vivian's closure), Corridor Business (LJS), chicagogrillcr.com, crabhousecr.com, champschicken.com, corporate locators (KFC, Cane's, Popeyes, LJS), St. Patrick fish fry page, Iowa DNR. Full URL list preserved in the research transcripts.*
