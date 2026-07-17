# Phase 3 amendment — brand palette + logo superseded by owner asset

**Date:** 2026-07-07
**Actor:** operator (geekeys343@gmail.com)

The owner/operator supplied the REAL brand logo (shark-captain emblem: deep navy,
gold, steel/white) after Phase 3 sealed with the exploratory "Captain Red + Fry
Gold" palette. Per the owner's directive ("use this logo style, add it to the nav,
make everything match the logo palette"), the design system is amended:

- Palette: navy #123253 / #0B1E33 primary structure, gold #F5B301 conversion accent,
  ocean blue #2D74B5, steel #E8EEF4, cloud #F7FAFC (replaces #C1272D/#F4A62A).
- Logo: owner-supplied raster emblem at public/logo.png (replaces the generated
  ship-wheel mark; recraft vector model was plan-gated 403).
- Modern UI pass applied via the project shadow channel: token-rich Base layout,
  sticky navy header with logo + gold pill CTA (mobile: static header, CTA delegated
  to the sticky call bar), navy footer with columns, image-overlay heroes, card-grid
  menu items. Empirical note: @engine component aliases do NOT honor src/ shadows —
  project pages now import the project-local Base/Hero relatively.
- site.ctaPrimary (tel:) added — enables the mobile sticky call bar; call-only
  contract preserved (no SMS, no lead form).

No content, scope, identity, or truthfulness change. Identity fixtures unchanged
(still deferred to launch per owner decision).
