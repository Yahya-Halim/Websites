# Phase 3 Amendment 2 — Reason

Run: pita-kabab-2026-07-12-b5881b47
Phase: 3 DESIGN
Actor: Yahya (engagement owner)
Date: 2026-07-12
Specialist: ui-ux-pro-max

## Why

Engagement-owner direction: make the site feel **more professional and based on
the food region and cultures** (specifically Palestinian/Levantine, not generic
"Middle Eastern").

## Process

Ran a design-direction workflow: 5 independent directions (Levantine editorial,
Tatreez modern, Old Jerusalem stone & arch, Contemporary Mediterranean bistro,
Levantine souk warmth) → a design judge + a cultural-authenticity/truthfulness
guard → one synthesized implementation spec. Winner: **Tatreez modern**
(authenticity 9, brand-fit 9), grafting the Levantine-editorial typography and
parchment stock. Every guard fix folded in.

## What changed (scope)

- **Typography:** Fraunces (editorial serif display) + IBM Plex Sans (body) +
  IBM Plex Mono (tracked eyebrows) + IBM Plex Sans Arabic (draft/gated).
  Retires Fredoka + Nunito. Google Fonts css2 URL validated 200.
- **Palette additions:** --color-forest #0F2A1E (headings, footer, hero hem),
  --color-parchment #F4EEE0 (menu-stock bands, replaces pale-gold),
  --color-linen #F1ECDE, --color-stitch #2F6B43 (tatreez on light). Green + gold
  + green canvas kept. Madder/sumac red DEFERRED (owner-gated).
- **Motif:** Palestinian tatreez (najmet Beit Lahm star + saw-tooth), inline SVG
  component. Gold-on-forest saw-hems (hero, CTA banner, footer top); olive star
  dividers + h2 ticks + eyebrow bullets on light. Structural, aria-hidden.
- **Copy:** "a Palestinian kitchen in Cedar Rapids", "Palestinian kitchen ·
  Cedar Rapids" tag, warmer section headings — all owner-sourced/truthful.
- **Menu:** printed-carte rows (Fraunces dish names, italic descriptors, hairline
  rules, tabular prices). Per-item photos kept (owner requested them).
- **Footer:** project-shadow Footer for readable light text on forest (the engine
  Footer's scoped #6b6b6b/#222 fail on the dark ground).

## Guard gates honored

- Arabic (ahlan wa sahlan anchor + Naskh dish names) ships HIDDEN behind
  `enableArabic=false` until owner Ray Aqel verifies script/diacritics.
- Owner menu spellings frozen verbatim (foul, mfatakeh, kalaya, kabab/kabob,
  "Mediterranean Delight").
- Madder/sumac red dropped (green+red+white flag-palette risk + 2.28:1 on forest).
- No fabricated tenure/awards/family-story; only owner-published claims shipped.

## What did NOT change

identityDecision fixtures, page families, route count (41 built / 46 planned),
omit-never-fabricate truthfulness floor, CRO slots, and the green+gold + kabab
logo identity.

## Downstream

Phase 4 remains unsealed (still blocked on the 5 conditional routes + Phase 5
identity fixtures); this amendment invalidates no sealed downstream approval.
Phase 4 build already rebuilt against the amended tokens (41 routes, exit 0).
