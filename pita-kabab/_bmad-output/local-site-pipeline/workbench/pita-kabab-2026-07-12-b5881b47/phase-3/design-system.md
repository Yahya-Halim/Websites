# UI UX Pro Max Design System

Artifact designSystemPath: _bmad-output/local-site-pipeline/workbench/pita-kabab-2026-07-12-b5881b47/phase-3/design-system.md

Run: pita-kabab-2026-07-12-b5881b47 · Phase 3 DESIGN · Specialist: ui-ux-pro-max
Sealed inputs: Phase 2 pageMatrix (46 internal pages, 6 page families), pageMatrixStrategy, imageSlotPlan (32 slots), requiredCroBlocks (engine cro-contract mirror).

> **Amendment 1 (2026-07-12, actor Yahya).** Re-paletted from pomegranate red to **olive-green `#1B6E3E` + warm-gold `#E0A80D`** (fits a Palestinian Mediterranean restaurant; matches the Higgsfield brand mark generated this session) and **tightened layout density** to fix sparse-whitespace feedback (full-bleed green hero band, alternating pale-gold/white section bands, 32/48 section rhythm, 20/24 container padding). Sections below marked with cues from the original red build are annotated inline; the palette table, "Layout Density" subsection, and Phase 4 Build Notes carry the current values. Truthfulness floor, identity fixtures, page families, and 46/41 route counts are unchanged.

> **Amendment 2 — "Tatreez Modern — Palestinian carte" (2026-07-12, actor Yahya).** Owner direction: feel **more professional and rooted in the food region/culture** (specifically Palestinian/Levantine, not generic "Middle Eastern"). Synthesized from a 5-direction design-panel + a cultural-authenticity/truthfulness guard (winner "Tatreez modern", authenticity 9 / brand-fit 9). Changes: **typography** → editorial **Fraunces** serif display + **IBM Plex Sans** body + **IBM Plex Mono** eyebrows (retires Fredoka/Nunito); **deep-forest `#0F2A1E`** display headings + footer; **warm parchment `#F4EEE0`** menu-stock bands (replace pale-gold); a **Palestinian tatreez** motif — *najmet Beit Lahm* (Bethlehem eight-point star) + saw-tooth running stitch, inline SVG — as **gold-on-forest** saw-hems (hero, CTA banner, footer) and **olive** section dividers/ticks/eyebrow bullets; **Palestinian-kitchen copy**; a **printed-carte** menu-item layout (Fraunces dish names, italic descriptors, hairline rules, tabular prices — per-item photos kept). **Guard gates honored:** Arabic (*ahlan wa sahlan* anchor + Naskh dish names) ships **hidden** behind `enableArabic=false` until owner Ray Aqel verifies script/diacritics; owner menu spellings (foul, mfatakeh, kalaya, kabab/kabob, "Mediterranean Delight") **frozen verbatim**; **madder/sumac red dropped** (green+red+white flag-palette risk + madder-on-forest only 2.28:1); no fabricated tenure/awards/family-story. **Kept:** green+gold identity, green canvas `#F7F9F3`, kabab-skewer logo — a refinement, not a rebrand. All new contrast pairs re-verified WCAG AA (forest headings 14.45:1, eyebrow 5.92:1, footer text 13.03:1, gold-on-forest thread 7.13:1; gold on light stays decorative-only). This banner reflects the current build; amendment-1 palette entries below remain as history.

## Query

restaurant mediterranean palestinian counter-service family warm casual

Run via the vendored specialist CLI:

```
python .../ui-ux-pro-max/scripts/search.py "restaurant mediterranean palestinian counter-service family warm casual" --design-system -f markdown -p "Pita Kabab"
```

Supplemented with `--domain typography "warm friendly rounded restaurant food"`, `--domain landing "hero cta conversion local business restaurant"`, and `--stack astro "images performance static content collections"`.

## Stack

Astro static site built from the engine restaurant archetype templates (`packages/engine/templates/archetypes/restaurant`): shared `pages/index.astro` home, `pages/menu/index.astro` + `pages/menu/[slug].astro`, `pages/occasions/[slug].astro`, `pages/[slug].astro` root landings, `pages/neighborhoods/[slug].astro`, `pages/contact.astro`, driven by `menu.json` / `occasions.json` / `landings.json` / `neighborhoods.json` / `site.json` / `business.json` data collections. Styling is vanilla CSS custom properties (design tokens below) inside `.astro` components — static output, no client framework; images via `astro:assets` `<Image />`.

## Reference Style Guide

**Chosen guide: Duolingo (primary) blended with Shopify Polaris (structural alt)** — selected via the styleguide library's Archetype → Reference Style Guide matrix row "Restaurant — casual / family / QSR → Duolingo | Mailchimp · Polaris". The library's own worked example names this exact pairing: "family restaurant → Duolingo warmth + Polaris structure."

**Why it fits.** Pita Kabab is a family-owned (owner-confirm pending) Palestinian Mediterranean counter-service restaurant with a kids-meal value angle, catering occasions, and a phone-first order/call conversion model. Duolingo supplies the warm, rounded, appetite-forward energy that suits a casual family QSR without luxury pretension; Polaris supplies the calm commerce credibility (card-on-canvas layout, disciplined single-accent CTA, badge/banner patterns) that keeps 46 template-driven pages orderly and trustworthy. Apple HIG (upscale dining row) was rejected: this is a counter-service value restaurant, not fine dining, and serene restraint would mute the call/order CTAs the CRO contract requires.

**Cues borrowed from Duolingo (adapted, not cloned):**
- ONE dominant action color committed the way Duolingo commits to green — **amendment 1: olive-green `#1B6E3E`** (was pomegranate red), used ONLY for primary CTAs (Call, Order on DoorDash, Get Catering Quote), the hero band, and the sticky call bar. Everything else stays warm-neutral/gold so the CTA always pops.
- The signature 3D chunky pressable button: solid green fill + 4px darker bottom edge (`#14512E`) that collapses 2px on press (transform-only, no layout shift). This is the site's one signature component, phone-first and thumb-friendly.
- Two-role type pairing with a heavy rounded display face for short punchy headlines and a rounded sans for body (Fredoka + Nunito — see Typography; Feather Bold/DIN Round are proprietary, these are the closest open Google Fonts).
- Big radius language: 14px controls, 20px cards; pill badges for hours/offers ("Open till 9", "Kids meals $5.98" — offer badge conditional on owner confirmation).
- 8px spacing rhythm, generous padding, ≥48px tap targets, narrow single-column mobile reading stack.
- Exactly ONE celebratory micro-interaction: a subtle spring bounce on the primary CTA hover/press. No mascot, no confetti, no gamification — restraint keeps it adult.

**Cues borrowed from Polaris:**
- Card-on-canvas layout: white content cards on a warm off-white canvas with 1px hairline borders and whisper-soft shadows — reads as trustworthy commerce infrastructure across all 6 page families.
- Single primary CTA per view; secondary actions (directions, menu link) stay neutral/outline.
- Badge pattern for live trust signals ("Open now", "Family-owned" once owner-confirmed) and Banner pattern for holiday-hours/announcement slots.
- Token discipline: 4px-derived spacing/radius ramp, semantic color tokens, hairline borders over heavy strokes.
- Quick utilitarian motion (100–200ms ease) for functional transitions; the Duolingo bounce is reserved for the primary CTA only.

**Adaptation rule honored:** no competitor brand colors shipped — Duolingo green and Shopify green are approach references only. The amendment-1 olive-green `#1B6E3E` is a distinct, muted, culturally-grounded Mediterranean green (olive/herb, and the gold of grilled kabab and baklava), chosen to match the generated Higgsfield brand mark — not Duolingo's brighter `#58CC02`. The palette below stands alone (owner brand assets/rights unconfirmed; the generated mark is the harmonization anchor; the live pitakababcr.com look was referenced only as warm-tone inspiration, per sealed-evidence constraints).

## Generated Guidance

`--design-system` output (project "Pita Kabab"), with documented deviations:

- **Pattern:** Hero-Centric + Conversion — CTA above the fold; section order Hero → Features/Proof → CTA. Applied per page family in the build plan below.
- **Style:** Vibrant & Block-based — bold, energetic, block layout, high color contrast. Adopted in moderated form: bold color blocks for CTA banners and section bands, but Polaris card-on-canvas keeps large surfaces calm (full-saturation "candy" surfaces would tip a food brand into kids-app territory).
- **Colors (amendment 1: olive-green + warm-gold; verified WCAG AA):**

| Role | Token | Hex | Contrast notes |
|---|---|---|---|
| Primary / CTA | `--color-primary` | `#1B6E3E` | white text on it = **6.3:1** (AA/AAA) |
| Primary pressed edge | `--color-primary-edge` | `#14512E` | chunky-button underside |
| On primary | `--color-on-primary` | `#FFFFFF` | |
| Accent (eyebrows, badges, underlines) | `--color-accent` | `#E0A80D` | gold — **dark ink `#1C2B21` on it = 6.9:1**; white is NEVER placed on gold, gold is never text-on-white |
| On accent | `--color-on-accent` | `#1C2B21` | dark ink |
| Accent soft (eyebrow/badge fill) | `--color-accent-soft` | `#FBF3D6` | pale gold band; dark ink ≥8:1 |
| Hero band | `--color-hero-band` | `#1B6E3E` | full-bleed top band, white text 6.3:1 |
| Background canvas | `--color-background` | `#F7F9F3` | green-tinted warm white — ties canvas to the green mark; ink ≥13:1 |
| Surface (cards) | `--color-surface` | `#FFFFFF` | |
| Foreground / ink | `--color-foreground` | `#1C2B21` | deep green-black, ≥14:1 on surface |
| Muted ink | `--color-muted-foreground` | `#4C5A4E` | 7.4:1 on white (AA) |
| Border / hairline | `--color-border` | `#DCE6D2` | soft sage UI hairline |
| Success (open-now badge) | `--color-success` | `#15803D` | paired with icon+text, never color-alone |
| Destructive/error | `--color-destructive` | `#B91C1C` | forms; distinct from green CTA by context + icon |
| Focus ring | `--color-ring` | `#1D4ED8` | 3:1+ against canvas, green CTA, and gold |

- **Typography (deviation from generated pairing, documented):** the generator returned Caveat (handwritten script) + Quicksand. Rejected: a script face fails legibility and hierarchy at h1 scale on a conversion site and the specialist's own typography database flags Caveat for "personal blogs, invitations." Substituted the Duolingo-style two-role pairing from the same database ("Playful Creative" row, restaurant-warmed): **Fredoka (headings, 500/600)** — rounded, chunky, friendly — and **Nunito (body, 400/600/700)** at 16–18px body, line-height 1.55. Type scale: 14 / 16 / 18 / 20 / 24 / 32 / 40 / 52. Sentence case, short punchy headline strings. Self-host via Fontsource or `font-display: swap` Google Fonts import; preload only the two critical weights (Fredoka 600, Nunito 400).
- **Key effects (amendment 1 — tightened):** section rhythm **32px mobile / 48px desktop** (was 48/80 — the large gaps read as sparse), bold hover color-shift on links, 200–300ms transitions, scroll-reveal fades (opacity/transform only). No scroll-snap (deviation: interferes with long menu pages on mobile), no animated background patterns (LCP/CLS risk on image-heavy pages). See "Layout Density" below.

### Layout Density (Amendment 1)

The first build (red on cream, text-only pre-imagery) read as too empty — large white gaps between sections and an empty cream hero. Density fixes, none of which fabricate content:

- **Full-bleed green hero band** (`--color-hero-band`): white h1 + subhead + a short gold underline accent + the primary green CTA. Anchors the top instead of a bare cream block.
- **Alternating full-bleed section bands:** grouped sections sit on alternating white and pale-gold (`--color-accent-soft #FBF3D6`) bands that span the viewport width, so a long text page never shows an unbroken empty canvas. Cards stay `max-width:70rem` centered inside each band.
- **Gold small-caps eyebrows** introduce sections (e.g. "THE MENU", "CATERING") — adds hierarchy and vertical density without imagery.
- **Tighter rhythm & container:** 32/48 section gaps, 20px mobile / 24px desktop container padding, 70rem content max-width, 18px card radius, 16–20px card padding.
- **Imagery still fills the rest later (Phase 6).** These density moves are color/rhythm/hierarchy only; the 32 representational slots will occupy remaining space without any fake-photo shortcut now.
- **Anti-patterns flagged by the generator:** low-quality imagery (mitigated: representational-only slot plan with art direction below), outdated hours (mitigated: hours single-sourced from `business.json`, owner-confirm dependency recorded).
- **UX floor (specialist Quick Reference §1–§3, CRITICAL/HIGH):** WCAG AA contrast (4.5:1 text, 3:1 large/UI), visible 2px focus rings, ≥44px touch targets with 8px gaps, semantic input types on the lead form, `prefers-reduced-motion` drops the CTA bounce but keeps state feedback, mobile-first breakpoints 375/768/1024/1440, no horizontal scroll, `astro:assets` WebP/AVIF with declared dimensions (CLS < 0.1), lazy-load below-fold images, SVG icons only (Lucide, 1.5px stroke, no emoji icons).

## Local-Business Adaptations

- **Phone-first conversion chrome.** The `position:fixed` mobile call/text sticky bar is a layout singleton (mounted once in the shared layout): 56px + `env(safe-area-inset-bottom)`, primary green "Call" chunky button. The sms: "Text" half is owner-gated (no SMS capability evidenced for (319) 440-3709) — the bar is designed with a single-CTA variant as default and a dual-CTA variant that activates only when the owner confirms SMS. Body reserves 72px bottom padding on mobile so content never hides behind the bar.
- **Dual CTA header/footer.** Header: logo + one green pill "Call" CTA (tel:). Footer: NAP block (confirmed address 3100 6th St SW, Cedar Rapids, IA 52404), tel: CTA, and the sms: link slot gated as above. The tel: number itself carries an owner-confirm dependency (canonical phone) — templates read it from `business.json`, never hardcode.
- **CRO block slots reserved (engine cro-block-presence gate):** hero with single h1 + exactly-3 value-prop strip (`site.valueProps` — OWNER COPY PENDING; slot reserved, gate fails until captured); ≥1 mid-page full-width CTA banner (green band with gold underline accent + white CTA button, tel: anchor + headline from `site.ctaBanner` — OWNER COPY PENDING) with the `home-cta-banner-bg` image behind a dark scrim keeping text ≥4.5:1; Why-Choose-Us trust grid (2-col mobile / 3-col desktop cards) conditional on ≥6 owner-confirmed facts — sections above/below are designed to stack cleanly so omission leaves no visual hole, never padded; lead form ≤6 fields (name, phone, date, party size, occasion, notes) conditional on `site.leadForm.endpoint` provisioning — visible labels, validate on blur, error below field with recovery text, 44px+ inputs, semantic input types; offer callout pill conditional on `site.offers` (sole candidate: kids $5.98 family-dinner offer, owner-confirm pending; empty slot is REMOVED per KG7).
- **Menu pages without prices.** Menu prices are owner-unverified: menu-category templates render item name + description rows with the price column omitted entirely (not blanked) until confirmation; JSON-LD menu markup ships only priced items once confirmed — omit-never-fabricate.
- **Neighborhood pages under the anti-doorway floor.** Same detail-kind visual template, but the design allocates distinct content blocks the schema data must fill: city-specific H1, ≥1 genuine local fact card, ≥2 local-proximity trust lines, ≥1 town-specific FAQ, labeled address line that keeps the HQ city (Cedar Rapids). One SHARED representational delivery image across all 8 towns — no fabricated per-town storefront photos.
- **Representational-imagery honesty.** Every one of the 32 image slots is representational-only: captions and alt text must not claim real-premises/staff/client-event depiction; craft-claim captions (charcoal, vertical-spit) and halal-adjacent imagery stay gated on owner confirmation exactly as the slot plan's `conditional` flags state.
- **Brand mark (amendment 1: generated).** A logo was generated this session via Higgsfield (logo-prompting formula): flat vector emblem, olive-green ring + gold text, olive-branch + kabab-skewer + pita icon, "CEDAR RAPIDS" arc. Four variants in `reference-photos/logo-candidates/`; **v2 selected** (solid green ring + gold text — highest contrast, legible at favicon size). Exported to `public/logo.png` and wired to `business.brand.logoFilename`; it sits on white/canvas headers without recoloring. The palette was chosen to match this mark, so no accent-token conflict remains. A generated brand mark is acceptable to ship (it is a designed mark, not a photo of the real premises); owner may confirm or replace before launch.
- **GEO/AI-answer surfaces.** Story/FAQ landings get an answer-first block pattern: question-as-h1 or h2, 2–3 sentence direct answer in larger body type (18px), then depth sections — designed so extractable answers sit above the first image.

## Phase 4 Build Notes

- **Page-matrix families → templates.** Build all 46 routes from the engine restaurant archetype data collections: 3 core (shared `index.astro` home, menu hub, contact), 7 menu-category from `menu.json`, 10 occasion from `occasions.json`, 18 root landings (search-intent/story/info/faq kinds) from `landings.json`, 8 neighborhood from `neighborhoods.json`. Apply the detail-kind CRO block set to menu/occasion/landing pages; contact adds NAP + conditional lead form; home carries the full home-kind set. Preserve the 5 owner-gated conditional pages (4 halal, 1 craft-claim) as data entries that ship only after confirmation.
- **Selected architecture.** Astro static output, zero client-side framework; implement tokens as CSS custom properties in a single `tokens.css` (values mirrored in `design-tokens.json` in this workbench); create the chunky-button, pill-badge, banner, card, and sticky-call-bar patterns as shared `.astro` components and reuse them across every family — do not restyle per page. Use `astro:assets` `<Image />` with explicit width/height for every slot; lazy-load everything below the fold; preload only the two critical font weights.
- **Layout density (amendment 1) — implement in the build:** wrap the hero in a full-bleed green band (`--color-hero-band`, white text, gold underline accent); give top-level home sections alternating full-bleed backgrounds (white ↔ `--color-accent-soft`) with a centered 70rem inner container; add gold small-caps eyebrows to section headings; set section rhythm to 32px mobile / 48px desktop and container padding to 20/24px in `Base.astro`'s global CSS (override the engine defaults in the project shadow). These are CSS-only in `tokens.css` + `Base.astro` — no template/data changes.
- **Asset handoff.** Map the 32 Phase 2 image slots to their pages via slotId; generate/collect representational images per the slot subjects, honor the 3 conditional slots' gating, produce the `og-default-share` 1200×630 image. **Brand logo is done:** the Higgsfield-generated `public/logo.png` (variant v2) is wired to `business.brand.logoFilename` and rendered by the engine Header; also emit `public/favicon` from the same mark. Owner may replace before launch. Icons: Lucide SVG set, 1.5px stroke, sized by token.
- **identityDecision / canonical metadata.** identityDecision is sealed as DECLARED FIXTURES (mode `fixture`): domain `https://pitakabab.example`, email `owner@pitakabab.example`, gaId `G-XXXXXXXXXX`, paymentAccepted `unknown`. Derive every canonical URL, sitemap entry, og:url, and JSON-LD `url`/`@id` in build metadata from the fixture domain until the owner-confirmed swap; omit `paymentAccepted` from JSON-LD entirely; wire GA4 against the placeholder id knowing the Phase 5 do-not-ship gate MUST flag all three fixtures — that gate firing is correct behavior, not a defect. Real candidates (pitakababcr.com / info@pitakababcr.com) are recorded in identity-decision.md with the swap path.
- **Owner-input dependencies to carry into build config:** `site.valueProps` (exactly 3), `site.ctaBanner` headline, `site.leadForm.endpoint`, canonical phone + SMS capability, ≥6 trust facts or grid omitted, menu prices, offer terms. Render conditional blocks from data presence — never placeholder-fill an unconfirmed slot.
