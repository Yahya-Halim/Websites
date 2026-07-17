# Identity Decision

Mode: **fixture** (declared test fixtures). The owner has NOT confirmed identity values; nothing web-sourced was promoted to real.

## Real Values

None adopted. Real candidates exist but are web-sourced and unconfirmed:

- Domain candidate: `pitakababcr.com` — live owner-branded site observed in Phase 0/1 evidence, but control of the domain (registrar access, DNS authority, replace-vs-coexist strategy) is unconfirmed.
- Email candidate: `info@pitakababcr.com` — published on the live site; ownership/monitoring unconfirmed.
- GA4: no measurement id exists yet; the property has not been provisioned.

Why not adopted: owner confirmation is pending and the owner questionnaire items covering canonical domain strategy, contact email, and analytics provisioning are still open. Promoting unconfirmed web-sourced values to `real` would violate the omit-never-fabricate rule and could wire canonical URLs, JSON-LD `url`/`@id`, and analytics to properties the engagement does not control.

## Declared Fixtures

Overtly synthetic, gate-trippable values, declared per the reserved-fixture convention:

- domain: `https://pitakabab.example`
- email: `owner@pitakabab.example`
- gaId: `G-XXXXXXXXXX`
- paymentAccepted: `unknown` — owner unconfirmed; `paymentAccepted` is OMITTED from JSON-LD entirely (no fabricated payment claims).

Canonical URLs in all Phase 4 build metadata (canonical link tags, sitemap, og:url, JSON-LD `url`/`@id`) derive from the fixture domain until swapped.

## Swap Path

When the owner confirms identity values (target: before or at Phase 5), replace the three fixtures with the confirmed real values in a single identity-swap pass: `identityDecision` mode flips to `real`, build metadata regenerates from the real domain, the confirmed email replaces the fixture in contact surfaces and schema, and the provisioned GA4 measurement id replaces `G-XXXXXXXXXX`. If `pitakababcr.com` control is confirmed, it is the leading domain candidate; the replace-vs-coexist decision also resolves the legacy-URL redirect dependencies recorded in Phase 2.

## Phase 5 Gate Expectation

The Phase 5 do-not-ship gate MUST flag these fixtures (`.example` domain/email and `G-XXXXXXXXXX`). That is the gate working as designed: it exists precisely to block a launch that still carries declared fixtures. Do not suppress, bypass, or pre-clear that gate — resolve it by completing the owner identity swap.
