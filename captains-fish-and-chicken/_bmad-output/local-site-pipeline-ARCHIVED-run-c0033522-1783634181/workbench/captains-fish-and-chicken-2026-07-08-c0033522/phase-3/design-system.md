# UI UX Pro Max Design System

Artifact designSystemPath: _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-08-c0033522/phase-3/design-system.md

Run v2 (2026-07-08, plugin 92aeaae). Consumes packet.inputEvidence.phase2 (38-route matrix,
hash e4753185d6ffb1b42282eebdde719bbfcc394eb62c5e556451d2d2aacb8fab89). The design system
below is the owner-logo-derived navy/gold system, proven in the archived run and re-authored
here as the v2 design source of truth (owner style rule: home matches interior pages).

## Query

modern nautical navy + gold fast-casual fish & chicken takeout — derived from the owner-supplied Captains shark-captain logo; sticky navy nav, gold conversion CTAs, image-overlay heroes, card-grid menu; home page visually identical in language to interior pages (left-aligned h2s, white steel-bordered cards, navy shell-only, gold CTAs-only)

## Stack

Astro 6 static SSG + LocalEvolve restaurant archetype + engine-floor Base.astro layout + shared components + vanilla CSS custom-property design tokens

## Generated Guidance

**Product type:** local restaurant / food-ordering marketing site — photography-forward, price-forward, ONE dominant conversion action per view (call to order).

**Style:** modern flat + nautical. Navy structure, single warm gold conversion accent. No glassmorphism/neumorphism. Imagery carries appetite; icons never emoji.

**Color tokens** (CSS custom properties in the project Base layout; all body text >= 4.5:1):
- --navy-900 #0B1E33 (darkest structure, footer, text-on-gold), --navy-700 #123253 (header, headings, primary navy), --navy-600 #1A4470 (hover), --blue-500 #2D74B5 (links)
- --gold-500 #F5B301 (THE conversion color: CTAs + price pills), --gold-600 #DF9F00 (hover)
- --steel-100 #E8EEF4 / --steel-200 #D5DFE9 (surfaces/borders), --cloud #F7FAFC (page bg), --ink #0B1E33 / --ink-soft #3C4F66 (text)
- --accent-color aliases --gold-500 so engine components inherit the brand.
- Contrast: white on navy-700 ~10:1; navy-900 on gold-500 ~8:1 (gold buttons always carry navy text).

**Typography:** system stack (system-ui/Segoe UI/Roboto), headings 800 weight, -0.015em tracking, h1 clamp(2rem,5vw,3rem), body 16px/1.6. Zero webfont dependency.

**Shape/depth:** radius 0.5/0.75/1rem + 999px pills; two shadows (--shadow-sm/--shadow-md); hover = translateY(-2px) + shadow-md.

**Components:** sticky navy header (logo + wordmark + pill nav + compact gold call CTA; mobile = static header, CTA delegated to the gold sticky call bar singleton); overlay hero (navy gradient 55->78% over image, white copy, single h1, CRO markers preserved; video-background variant with poster + reduced-motion fallback); menu item cards (white, 4:3 image, navy name, gold price pill); signature/occasion cards (hover lift); navy-900 footer (NAP/hours/explore columns, gold headings); FAQ dt/dd cards; pill cross-link chips.

## Local-Business Adaptations

- **Call-only conversion** (Phase 0 sealed owner decision): no lead form, no SMS anywhere; conversion = tel: CTA + external ordering CTAs (DoorDash/Uber Eats/Grubhub) rendered as CTAs, never pages.
- **Owner-confirmed prices** as gold pills + Menu JSON-LD; the Gazette-reported sides additions stay OUT of menu data until the owner confirms (Phase 2 hold).
- **Representational imagery discipline:** generated food/hero images carry "(representational image)" alt text + a visible "Photos are representational." note; heroes ship webp (do-not-ship modern-format rule); REUSE the archived run's 93-asset library (menu unchanged).
- **Hours honesty (F14):** structured hours stay conservative (Mon-Thu 11-22 + Sun 11-20 only; Fri/Sat omitted until owner confirms); displayText carries the full week with "please call to confirm"; NO uncaveated hours in any title tag (reviewer guardrail — especially /open-late-cedar-rapids).
- **Single-location truth:** 1616 1st Ave NE only; /location page + FAQ disambiguation state the SW address is now Pita Kabab (same owner); site copy never cites SW as a live Captains.
- **Plan-wide calamari ban** (reviewer guardrail): calamari is not on the owner menu; never appears in any copy.
- **Marion facts guardrail:** Phase 4 must independently substantiate Marion localFacts or the page folds.
- **Accessibility floor:** contrast >= 4.5:1, visible focus, 44px targets, single h1 per page (hero owns it), sequential headings, alt text everywhere.

## Phase 4 Build Notes

1. **Routes:** build EXACTLY the 38 approved Phase 2 routes (packet.inputEvidence.phase2.pageMatrix; hash e4753185...). Phase 4's routesGenerated must match this set — the new route-vs-matrix gate rejects drift. Families: home / menu hub + 14 sections / 6 occasions / 8 intent landings (incl. NEW open-late + catering) / 4 info-faq-story landings / NEW /location truth page / 2 neighborhoods / contact.
2. **Selected architecture:** Astro 6 static + restaurant archetype; project-local Base.astro + Header/Footer/Hero (relative imports — the @engine alias does NOT honor shadows); data collections business/site/menu/occasions/landings/neighborhoods; Business Knowledge Graph at src/graph (menu/occasions/facts nodes, KNOW provenance) + factory graph-seed for Q&A, so wire runs graph-mode (enriched llms.txt + servesCuisine/priceRange/hasMenu projection).
3. **Asset handoff:** reuse public/images/** (87 menu renders keyed by the manifest slugify convention — menu/[slug].astro's itemImageSlug must match scripts/image-prompts.json), hero webps, beach-loop video + poster, og asset; logo.png placeholder until the owner file drop. New pages: /catering-cedar-rapids reuses the catering hero; /open-late-cedar-rapids ships text-hero (or a new representational render at Phase 6); /location ships text + map links, no imagery required.
4. **Identity/canonical metadata:** identityDecision mode=real (amended 2026-07-08) — domain https://captains-fish-chicken.netlify.app, email captainsfishchicken@gmail.com, gaId G-7W35DKNK6Z. All seo.canonical values use the real domain + trailing slash. paymentAccepted unknown -> omitted from JSON-LD. factory validate exits 0.
5. **Data authoring constraints:** menu.json = owner paste exactly (sides delta held); occasions >=5 FAQs + >=4 cross-links + real featuredItems; landings kind intent/info/faq/story with >=2 cross-links; neighborhoods must clear localFacts/proximity/townFaq floors or fold; every internal href carries a trailing slash (trailingSlash: 'always'); Speakable selectors .hero-copy h1 / .hero-subheading on every WebPage block.
