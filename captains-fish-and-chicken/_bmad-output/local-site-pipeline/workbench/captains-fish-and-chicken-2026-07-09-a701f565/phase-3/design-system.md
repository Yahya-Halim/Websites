# UI UX Pro Max Design System — Captains Fish and Chicken

Artifact designSystemPath: _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-09-a701f565/phase-3/design-system.md

Run context: re-run over a launched site (live at https://captains-fish-chicken.netlify.app since 2026-07-08). This design system documents the EXISTING live brand implementation and binds Phase 4 to it; the generated guidance below is recorded as the specialist tool's output and adapted — not blindly adopted — where the sealed owner brand overrides it.

## Query

local restaurant takeout fried fish chicken seafood counter-service warm trustworthy

Commands run (UI UX Pro Max, vendored at packages/plugin/vendored/ui-ux-pro-max-skill):

```
python scripts/search.py "local restaurant takeout fried fish chicken seafood counter-service warm trustworthy" --design-system -f markdown -p "Captains Fish and Chicken"
python scripts/search.py "layout hydration images performance" --stack astro -n 6
python scripts/search.py "sticky call bar mobile touch target accessibility contrast" --domain ux -n 5
```

## Stack

astro — Astro 6 static output, restaurant archetype, trailingSlash "always". Stack guidance pulled with `--stack astro` (islands architecture, astro:assets image optimization, lazy-loading below the fold, .astro components for static markup — this site ships zero client JS islands; every page is static).

## Generated Guidance

`--design-system` output for the query above (project "Captains Fish and Chicken"):

- Pattern: **Hero-Centric + Conversion** — CTA above the fold; section order Hero > Features > CTA.
- Style: **Vibrant & Block-based** — bold, energetic, block layout, high color contrast; light/dark full support; ensure WCAG.
- Generated color palette: appetizing-red family — primary #DC2626, secondary #F87171, accent #A16207 (WCAG-adjusted warm gold), background #FEF2F2, foreground #450A0A, muted #F0EDF1, border #FECACA.
- Typography pairing: **Playfair Display SC** (headings) + **Karla** (body) — restaurant/culinary/hospitality mood, Google Fonts import provided.
- Key effects: large sections (48px+ gaps), bold hover color shift, large display type (32px+), 200-300ms transitions.
- Anti-patterns flagged: low-quality imagery; outdated hours.
- Pre-delivery checklist: no emoji icons (SVG only), cursor-pointer on clickables, 150-300ms hover transitions, 4.5:1 text contrast, visible focus states, prefers-reduced-motion respected, responsive at 375/768/1024/1440.

Supplementary `--stack astro` guidance: use islands architecture only where interactivity exists (severity high); optimize images via astro:assets `<Image />`; preload critical assets; `loading="lazy"` below the fold; keep static content in .astro components.

Supplementary `--domain ux` guidance (sticky call bar): minimum 44x44px touch targets (severity high); minimum 8px gap between adjacent targets; 4.5:1 text contrast (#333-on-white class of pairings); larger touch targets on mobile.

## Local-Business Adaptations

The sealed owner brand and the live implementation override parts of the generated guidance. Deviations and adoptions, with reasons:

1. **Palette: generated red REJECTED — owner brand lock.** The site launched 2026-07-08 with the owner-supplied shark-captain logo palette, implemented as CSS custom properties in `src/layouts/Base.astro`. Live tokens (source of truth):
   - navy-900 `#0B1E33` (deep navy — ink, shadows base)
   - navy-700 `#123253` (structural navy — headings, shell)
   - navy-600 `#1a4470`
   - blue-500 `#2D74B5` (steel blue — links)
   - gold-500 `#F5B301` (conversion gold — CTAs, price pills; `--accent-color` consumed by engine components), hover gold-600 `#DF9F00`
   - steel-100 `#E8EEF4`, steel-200 `#D5DFE9` (card borders)
   - cloud `#F7FAFC` (page background), white `#FFFFFF` (cards)
   - ink `#0B1E33`, ink-soft `#3C4F66` (body copy)
   Re-theming a one-day-indexed launched site to the generated red would break brand continuity with the owner logo, GBP imagery, and the 94-asset render library. Token export + SHA-256 recorded in figma-handoff.md and design-tokens.json.
2. **Typography: generated Playfair/Karla pairing RECORDED, NOT ADOPTED.** The live site uses the system-ui stack (weight-800 navy headings, clamp() fluid sizes, 1.6 body line-height) — zero webfont payload, no FOIT, strong LCP on the video-hero home page. The pairing stays available as a future owner-approved enhancement only.
3. **Pattern: Hero-Centric + Conversion ADOPTED.** Matches the sealed Phase 2 home CRO block order (hero + single call CTA + value props > signature dishes > price band > mid-page CTA > occasions > how-to-order > hours/location).
4. **OWNER STYLE RULE (sealed this run): the home page must match the interior pages' visual language.** Left-aligned h2s, 2.5rem section rhythm, white cards with steel-200 borders + radius-md + shadow-sm on the cloud background. Navy stays confined to the shared shell (header, footer, sticky call bar); gold appears only on CTAs and price pills. No home-only filled color bands and no centered headings. The generated "Vibrant & Block-based" style is therefore softened to the existing card-on-cloud system — block rhythm yes, duotone color bands no.
5. **Call-only conversion (sealed Phase 0 owner decision).** Sticky mobile call bar (tel:) mounted once in the Base layout — never per page; no lead form (no endpoint exists), no SMS (no number exists). Gold pill CTAs with navy-900 text satisfy the 4.5:1-class contrast intent (gold-on-white fails, so gold is always a filled button carrying dark navy text, never gold text).
6. **Accessibility carried from generated checklist:** 44px minimum touch targets on the call bar and CTAs, visible focus states, SVG icons only, prefers-reduced-motion honored — the home video hero ships a poster + reduced-motion static fallback.
7. **Imagery honesty:** the 87 menu-item renders are representational (per sealed Phase 2 image slot plan) and pages note this; anti-pattern "low-quality imagery" is met with the existing curated library; anti-pattern "outdated hours" is met with the caveated-hours rule (aggregator hours + call-to-confirm line, owner never confirmed hours).
8. **Logo:** owner shark-captain emblem; raster placeholder currently live at `public/logo.png`, owner file drop pending — swap on delivery, no route impact.

## Phase 4 Build Notes

Concrete build handoff — generate routes and content exactly against the sealed Phase 2 matrix and this design system:

1. **Page families (approved 38-route matrix — route parity is a HARD constraint; zero deltas vs the live route set):** 1 home + 1 menu hub + 14 menu-section pages + 6 occasion pages + 8 search-intent landings + 4 info/faq/story landings + 1 location truth-assertion page + 2 neighborhood pages + 1 contact. Build every route with trailing slashes; external ordering links are CTAs, never pages. Apply the cross-link plan (occasions >=4 cross-links, intent landings >=2; catering intent <-> catering occasion; /location/ -> /contact/ + /about/ + /faq/).
2. **Selected architecture:** Astro 6 static, restaurant archetype, trailingSlash "always". Use project-local Base/Header/Footer/Hero components with RELATIVE imports — the `@engine` alias hardpoints into the engine package, so component shadows only work via explicit relative paths (`../components/Header.astro`); Analytics and StickyCallBar keep their `@engine` imports inside the Base layout. Preserve `src/layouts/Base.astro` as the styling root; do not fork tokens into per-page styles.
3. **Design tokens:** use the CSS custom properties in `src/layouts/Base.astro` (exported with hash to `design-tokens.json` in this phase-3 workbench). Apply the owner style rule: interior visual language everywhere including home (left-aligned h2s, 2.5rem rhythm, white steel-200-bordered cards with radius-md + shadow-sm on cloud); navy shell-only; gold CTAs/price-pills-only.
4. **Asset handoff:** reuse the existing 94-slot asset library (87 menu-item renders + occasion/marketing heroes + og image + logo) — Phase 6 re-verifies rather than regenerates. Home hero is the owner-approved beach-loop.mp4 video with webp poster keyframe and a reduced-motion static fallback. Keep the raster logo placeholder at public/logo.png until the owner file drop lands. Include representational-photo notes on menu pages.
5. **CRO blocks per kind (sealed Phase 2 requiredCroBlocks):** layout singleton sticky mobile call bar (tel:, call-only, mounted once); home = hero + single call CTA + 3 value props, signature dish cards, owner-price favorites band, mid-page CTA banner, occasion cards, how-to-order steps + delivery CTAs, hours+location block (caveated hours); menu pages = priced item cards with Menu JSON-LD + call CTA + order-online external CTAs; occasions = hero + call CTA, >=1 featured menu item, >=5 FAQ, >=4 cross-links; intent/info/faq/story landings = hero + call CTA, body, FAQ where relevant, >=2 cross-links; neighborhoods = single city-specific H1, >=1 genuine local fact, >=2 proximity trust lines, >=1 town FAQ, >=400 chars unique body, per-city title/meta, NAP keeps HQ city; contact = NAP + map + caveated hours + directions + call CTA. Documented exceptions (owner call-only decision, sealed): lead form OMITTED site-wide, dual CTA reduced to single tel: CTA, trust content as "why choose us" copy not a 6-fact grid, offer/financing blocks OMITTED.
6. **Copy advisories to carry into authored copy:** Chicago Grill framing is returning-not-new; the LJS 1st Ave SE closure dates to June 2014 — never frame it as recent; never claim "#1 on Yelp" or any list position (Estimated evidence only); Pita Kabab is mentioned for disambiguation only (same owner, SW location became Pita Kabab in 2025); verify the GBP review count before citing one (owner-cited 208 on 2026-07-07 vs Wanderlog mirror 192 on 2026-07-09) or cite the attributed dated owner figure without implying currency; hours stay caveated with a call-to-confirm line; the 4 small menu sections (kids-meals, desserts, drinks, gizzards-and-livers) need unique non-boilerplate copy.
7. **Identity / canonical metadata (identityDecision, mode real):** canonical origin https://captains-fish-chicken.netlify.app; GA4 G-7W35DKNK6Z wired via the engine Analytics component; business email captainsfishchicken@gmail.com; all owner-supplied, live since 2026-07-08. Payment policy UNKNOWN — do not fabricate payment claims in copy or schema. Preserve canonical URL generation from the Base layout and per-page titles/descriptions from the approved matrix.
