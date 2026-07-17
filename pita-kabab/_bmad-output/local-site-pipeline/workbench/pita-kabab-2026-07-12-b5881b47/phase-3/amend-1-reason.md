# Phase 3 Amendment 1 — Reason

Run: pita-kabab-2026-07-12-b5881b47
Phase: 3 DESIGN
Actor: Yahya (engagement owner)
Date: 2026-07-12
Specialist: ui-ux-pro-max

## Why

Engagement-owner design direction delivered in chat after the first Phase 4 build
preview:

1. **Re-palette to green + yellow/gold.** The sealed design used pomegranate red
   `#DC2626`. The owner directed an olive-green + warm-gold scheme. This also fits
   a Palestinian Mediterranean restaurant far better (olive, herb, the gold of
   grilled kabab and baklava) and matches the brand mark generated this session.
2. **Reduce whitespace / tighten layout.** The red/cream text-only build (pre-imagery)
   read as too sparse — large empty white stretches between sections and an empty
   cream hero.
3. **Brand logo now exists.** Generated via Higgsfield (logo-prompting formula),
   4 variants, v2 selected — so the previously owner-pending `brand-logo` slot is
   now filled (owner-confirm/replace still allowed before launch).

## What changed (scope)

- `designSystem.palette` → olive-green `#1B6E3E` primary (white text 6.3:1),
  gold `#E0A80D` accent used only with dark ink (6.9:1), green-tinted canvas
  `#F7F9F3`, sage borders. All WCAG AA re-verified.
- Layout density: full-bleed green hero band, alternating pale-gold/white section
  bands, gold small-caps eyebrows, section rhythm 32/48 (was 48/80), container
  padding 20/24, 70rem max-width, 18px card radius.
- CRO CTA banner recolored green + gold; sticky bar and header CTA green.
- `assetNeeds.brandLogo` → generated Higgsfield mark (v2), exported to
  `public/logo.png`, wired to `business.brand.logoFilename`.
- Image art direction re-toned to the green/gold canvas.
- `design-tokens.json` and `design-system.md` updated in lockstep; amendment
  annotated inline in both.

## What did NOT change

identityDecision fixtures (pitakabab.example / owner@pitakabab.example /
G-XXXXXXXXXX, paymentAccepted unknown), the six page families, the 46/41 route
counts, the omit-never-fabricate truthfulness floor, and all owner-input
dependencies (value props, lead-form endpoint, prices, halal/craft gating).

## Downstream

Phase 4 was not yet sealed (it was blocked on the 5 conditional-route parity
issue), so this amendment invalidates no sealed downstream approval or review.
Phase 4 build will be re-run against the amended tokens.
