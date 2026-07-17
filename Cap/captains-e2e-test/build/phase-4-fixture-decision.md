# Phase 4 fixture-value decision (Yahya-authorized) — 2026-07-05

**These are DECLARED TEST-RUN FIXTURE VALUES, not real owner data.** They exist
only to unblock the Phase 4 build so the newly-shipped restaurant route
templates (F12 fix) can be exercised. They use the engine's own internal-proof
convention: the reserved `.example` TLD — overtly synthetic, making no
real-world claim. Pending real owner data (which does not exist yet — see F13).

| Field | Fixture value | Status |
|---|---|---|
| `business.domain` | `https://captainsfishandchicken.example` | Synthetic — owner has NO domain. `.example` reserved TLD. |
| `business.email` | `owner@captainsfishandchicken.example` | Synthetic — owner has NO business email. |
| `business.analytics.gaId` | `G-XXXXXXXXXX` | DELIBERATE do-not-ship placeholder (matches the `G-X+` reject pattern). Parses the base schema so wire/build proceed; the Phase 5 `do-not-ship-guards` gate WILL block it by design. |
| `business.paymentAccepted` | `Cash and major cards` | Owner-UNVERIFIED test fixture — treat like the delivery-app menu prices: NOT an owner-confirmed fact. |

**Boundary:** these must NEVER be presented as real, and would (correctly) fail
the Phase 5 do-not-ship gate. This run stops at the Phase 4 build-quality review
gate; phases 5–7 are out of scope.

**Also real (not fixtures) — derived from confirmed facts, so authored normally:**
`mapsUrl` / `directionsUrl` point at the REAL address (1616 1st Ave NE) via
Google Maps; `sameAs` uses the REAL Facebook page. Only domain/email/gaId/payment
are synthetic.

See F13 in `D:/plugin/localevolve-factory/E2E-FINDINGS-captains-2026-07-05.md`.
