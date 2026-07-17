# Identity decision — run v2 (Phase 3)

**Mode:** fixture (declared test values)
**Date:** 2026-07-08
**Decided by:** owner/operator (carried decision from 2026-07-07, reconfirmed in run-v2 brief)

The owner directed that real domain, business email, and GA4 collection be DEFERRED until the
build is complete. Build proceeds on overtly-synthetic reserved fixtures:
- domain: https://captains-fish-and-chicken.example (reserved .example TLD)
- email: hello@captains-fish-and-chicken.example
- gaId: G-XXXXXXXXXX (placeholder the do-not-ship gate is designed to flag)

The Phase 5 do-not-ship gate MUST flag these — that is the gate working. Real values swap in at
launch (business.json + regenerated canonicals/sitemap), after which factory validate must exit 0
before Phase 5 seals. paymentAccepted is UNKNOWN — omitted from JSON-LD (omit-never-fabricate).
No real-looking fabricated values exist anywhere in the build.
