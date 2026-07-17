# UI UX Pro Max Design System — Captains Fish and Chicken

Amended 2026-07-07: the owner supplied the real brand logo (shark-captain emblem),
superseding the exploratory Captain Red palette. This document describes the design
system AS IMPLEMENTED in the project (src/layouts/Base.astro tokens + component
shadows). Amendment record: phase-3 amendment 1 (amend-reason.md).

## Query

modern nautical navy + gold fast-casual fish & chicken takeout — derived from the owner-supplied Captains shark-captain logo; sticky navy nav, gold conversion CTAs, image-overlay heroes, card-grid menu

## Stack

Astro 6 static SSG + LocalEvolve restaurant archetype + engine-floor Base.astro layout + shared components + vanilla CSS custom-property design tokens

## Generated Guidance

**Product type:** local restaurant / food-ordering marketing site → photography-forward,
price-forward, one dominant conversion action per view (call to order).

**Style:** modern flat + nautical. High-contrast navy structure with a single warm gold
conversion accent. No glassmorphism/neumorphism (wrong for appetite + trust). Icons are
never emoji; imagery carries the appetite.

**Color system** (CSS custom properties in Base.astro; all body text >= 4.5:1):
- `--navy-900` **#0B1E33** — darkest structure, footer, text on gold
- `--navy-700` **#123253** — primary navy: header, headings, price band
- `--navy-600` **#1A4470** — hover state on navy surfaces
- `--blue-500` **#2D74B5** — ocean blue: links, secondary accents
- `--gold-500` **#F5B301** — THE conversion color: CTAs, price pills, footer headings
- `--gold-600` **#DF9F00** — gold hover
- `--steel-100` **#E8EEF4** / `--steel-200` **#D5DFE9** — porthole-steel surfaces, borders
- `--cloud` **#F7FAFC** — page background
- `--ink` **#0B1E33** / `--ink-soft` **#3C4F66** — text
- `--accent-color` aliases `--gold-500` so every engine component inherits the brand.

**Contrast decisions:** white on navy-700 ≈ 10:1; navy-900 on gold-500 ≈ 8:1 (gold
buttons always carry navy text, never white).

**Typography:** system stack (`system-ui, -apple-system, 'Segoe UI', Roboto`) — zero
webfont dependency; headings 800 weight, tight letter-spacing (-0.015em),
`clamp(2rem, 5vw, 3rem)` h1 scale; body 16px / 1.6.

**Shape & depth:** radius scale 0.5/0.75/1rem + 999px pills for CTAs and price tags;
two shadows only (`--shadow-sm`, `--shadow-md`); hover = translateY(-2px) + shadow-md.

**Components (as implemented):**
- Sticky navy header: logo + wordmark left, pill nav center, compact gold call CTA
  right; mobile = static header, CTA delegated to the sticky call bar.
- Sticky mobile call bar (engine singleton) restyled gold-on-navy via tokens.
- Hero: full-bleed image variant with navy gradient overlay (55→78%), white copy,
  gold CTA; text-only variant stays light. Single h1; CRO markers preserved.
- Menu item cards: white card, 4:3 image top, navy item name, gold price pill.
- Signature/occasion cards: image top, hover lift, navy label + soft blurb.
- Navy price band ("Local favorites"): navy-700 panel, white item pills, gold prices.
- How-to-order steps: numbered gold circles, white cards.
- Footer: navy-900, 3 columns (NAP / hours / explore), gold headings + phone.

## Local-Business Adaptations

- **Call-only conversion** (owner decision, Phase 0): no lead form, no SMS CTA
  anywhere; every conversion surface is the tel: call CTA or an external ordering
  platform (DoorDash / Uber Eats / Grubhub) rendered as CTAs, never pages.
- **Owner-confirmed prices** rendered as gold pills on menu cards and the home
  price band; Menu JSON-LD carries the same prices.
- **Representational imagery discipline:** all generated food/hero images carry
  "(representational image)" alt text and a visible "Photos are representational."
  note; heroes ship as webp (do-not-ship modern-format rule).
- **Hours honesty (F14):** hours.displayText carries the accurate 3-window week and
  every render appends "please call to confirm"; structured hours stay 2-bucket.
- **Single-location NAP:** 1616 1st Ave NE only; the 3100 6th St SW location never
  appears in copy, schema, or links.
- **Logo:** owner-supplied shark-captain emblem at public/logo.png (52px header
  render, drop-shadow); raster fallback documented (recraft vector model plan-gated).
- **Accessibility floor:** contrast >= 4.5:1, visible focus, 44px touch targets,
  sequential headings (hero owns the single h1), alt text on all imagery.

Artifact designSystemPath: _bmad-output/local-site-pipeline/workbench/captains-fish-and-chicken-2026-07-07-098c7de7/phase-3/design-system.md
