# Identity Decision — Captains Fish and Chicken

## Real Values
None yet. The business has NO dedicated domain, no confirmed business email, and no
GA4 measurement ID. Owner directed (2026-07-07): do not collect these until the whole
build is complete; real values are swapped in at Phase 7 launch.

## Declared Fixtures (mode: fixture)
Explicitly declared, overtly-synthetic, gate-trippable placeholders:
- **domain:** `https://captains-fish-and-chicken.example` (reserved .example TLD)
- **email:** `hello@captains-fish-and-chicken.example` (reserved .example TLD)
- **gaId:** `G-XXXXXXXXXX` (placeholder)
- **paymentAccepted:** `unknown` (GBP lists NFC/mobile payments but owner has not confirmed;
  `paymentAccepted` is omitted from JSON-LD while unknown — never asserted)

## Consequence (intended)
The Phase 5 do-not-ship gate MUST flag these fixtures. That is the gate working, not a
failure. The site builds and validates structurally but is NOT launch-ready until the
owner provides the real domain, email, and GA4 id at Phase 7.
