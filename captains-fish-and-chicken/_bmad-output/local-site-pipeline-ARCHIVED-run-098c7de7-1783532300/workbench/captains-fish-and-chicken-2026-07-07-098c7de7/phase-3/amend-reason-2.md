# Phase 3 amendment 2 — conform to hardened design-evidence gates (repo update 329ba8d)

**Date:** 2026-07-07  |  **Actor:** operator (geekeys343@gmail.com)

Upstream update 064b90d -> 329ba8d hardened the Phase 3 design-evidence contract:
designSystem.designSystemPath must equal the packet's artifactEvidencePaths.designSystem
(runtime-relative), and the evidence file must literally contain the query, stack,
Generated Guidance, and Local-Business Adaptations sections (scaffold text rejected).

Changes:
1. design-system.md REWRITTEN to describe the implemented navy/gold system (it still
   carried the pre-amendment Captain Red text) — exact amended query + stack strings,
   full Generated Guidance (tokens/contrast/type/components as implemented), and
   Local-Business Adaptations (call-only, price pills, representational-imagery
   discipline, F14 hours honesty, single-location NAP, logo fallback, a11y floor).
2. designSystem.designSystemPath set to the runtime-relative evidence path.

No design, content, scope, or identity change — evidence conformance only.
