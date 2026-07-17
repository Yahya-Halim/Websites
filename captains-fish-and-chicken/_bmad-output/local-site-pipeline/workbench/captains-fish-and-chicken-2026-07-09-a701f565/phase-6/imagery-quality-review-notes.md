# Phase 6 — Imagery-Quality Gate Review Notes

- Run: captains-fish-and-chicken-2026-07-09-a701f565
- Phase: 6 (IMAGERY, specialist: higgsfield, mode: parity-re-verification-no-regeneration)
- Reviewer role: reviewer / imagery-quality (fresh read-only sub-agent)
- Reviewed at: 2026-07-10
- **Verdict: PASS** (with one non-blocking provenance advisory for the orchestrator)

## Seal / integrity verification

| Target | Expected (capsule/artifact-declared) | Computed on disk | Result |
|---|---|---|---|
| Sealed Phase 6 artifact | `d2e25f43b7d528b737b78aa668e7fe12b2692ae8c6f0a03073e1eccd8f97b656` | `d2e25f43b7d528b737b78aa668e7fe12b2692ae8c6f0a03073e1eccd8f97b656` | MATCH |
| Manifest `scripts/image-prompts.json` | `7f9009e67d6062a0b9ec83816388aa37d0ed33f1181e8e51b54f71a3d02f0259` (artifact-declared) | `7f9009e6...02f0259` | MATCH |
| Selections `scripts/selections.json` | `303e4cd9ef3eb058d02ce2f2b316d484615f2dea9f67d1c150f587b9033390a7` (artifact-declared) | `303e4cd9...3390a7` | MATCH |
| Phase-6 packet | `a4de314169e880c30330d2fe19e6ed1967c06017ab33022e4ae0785442c704cc` (capsule allowedInputs + orchestrator) | `9c9b2ed04d505ac3e08e56292268e5c62425d926b507da15b15484ac7dacee47` | **MISMATCH (advisory)** |
| Review capsule | `0f7c62e4c573157970eba8646d5ddb309846f0e4f82f77800ceac4387d2a9673` (orchestrator-supplied) | `7c2a8a1e539152f15b7659536e9046e50399506ff9563f62a8c7488699b5a81a` | **MISMATCH (advisory)** |

The load-bearing seal — the Phase 6 artifact named in the capsule — verifies exactly, as do the artifact's own internal references to the manifest and selections files. Both hashers (POSIX `sha256sum` and PowerShell `Get-FileHash`) agree, so the packet/capsule mismatch is not a tooling quirk. See advisory A1 below. None of the imagery-quality findings in this review depend on the packet's evidence bundle; every criterion was re-derived from primary sources (manifest, selections, `dist/`, `public/`, `src/data/menu.json`, and a live read-only `higgsfield-workflow verify`).

## Per-criterion results

### (a) Manifest / selections / exports consistency — PASS
- Manifest `images`: **94** slots = **87 menu-item + 7 marketing**; `required:true` count = **1** (`brand-logo`); all 94 `reference_status = generate-from-scratch`; 0 slots missing `output_file`. Matches artifact counts.
- Selections: **94** entries, all `kind = variant`; **0** missing `source`, **0** missing `provenance`. Sample source under `output/images/generated/<slot-id>/`, provenance `higgsfield-mcp:nano_banana_pro:r1`.
- Slot-id alignment: every manifest id has exactly one selection; 0 manifest slots without a selection; 0 selections without a manifest slot.
- Exports on disk: all **94** `output_file` targets exist under `public/` (UTF-8-aware `System.IO.File::Exists` check; 0 missing). NOTE: a naive Windows-PowerShell 5.1 `Test-Path` initially false-flagged the two em-dash combo-dinner filenames (`combo-dinner-—-your-choice-of-{two,three}-items.jpg`); `ls -b` confirmed the bytes `\200\224` (UTF-8 U+2014 EM DASH) present on disk — both files exist.
- Spot-check of 10 named assets — all EXIST: `home-hero.jpg` (354 KB), `videos/beach-loop.mp4` (6.24 MiB), `hero/beach-loop-a.webp` poster (61 KB), `og/og-social.jpg` (194 KB), `hero/open-late.webp` (25 KB), `hero/catering-party-pans.jpg` + `.webp`, `logo.png` (1.73 MB placeholder), `hero/family-dinner.webp`, `hero/game-day-wings.webp`.

### (b) Wiring / dist sweep — PASS
Independent `dist/` sweep (Node, UTF-8) over the built site reproduced the artifact's `assetReferenceSweep` and `modernFormatGate` exactly:
- Pages scanned: **38** (matches).
- Unique image/video refs: **94**; broken refs: **0** (every `<img src>`, `srcset`, `<video src>`, `poster`, `<source src>` resolves to a file in `dist/` or `public/`).
- `<img>` tags: **138**; missing/empty alt: **0** (138/138 carry non-empty alt text).
- Hero references: all **5** are `.webp` (`beach-loop-a`, `catering-party-pans`, `family-dinner`, `game-day-wings`, `open-late`); non-modern hero refs: **0**. Modern-format do-not-ship gate satisfied.

### (c) Representational honesty (truthfulness floor) — PASS
- "Photos are representational" note present on all **14** menu category pages (plus catering, home, open-late; 17 dist pages mention "representational").
- Every menu-item `<img>` alt ends with `(representational image)` (verified on `menu/seafood`).
- No generated image is presented as a real photo of the premises; manifest `blocker_notes` explicitly label each render "REPRESENTATIONAL generated image — not a photo of the actual Captains dish."
- Brand logo (`public/logo.png`) is an acknowledged raster placeholder pending owner file drop — surfaced as a non-blocking follow-up (not silent), drop-in swap with no route impact.

### (d) verificationReport structure — PASS
- `verificationReport.status = pass`, `ok = true`.
- Both `uiChecks` present and passing: `desktop-ui-check` (status pass) and `mobile-ui-check` (status pass, sticky tel: call bar singleton).
- `unresolvedIssues` array is **EMPTY**. (Three items in `acknowledgedNonBlockingAdvisories` — OG meta tags absent, logo placeholder, runtime CWV out of scope — are correctly routed forward, not silently dropped.)

### (e) No fabrication vs frozen menu — PASS
- Frozen menu `src/data/menu.json` = **87** items across 14 categories.
- Manifest menu-item renders = **87**, and per-category counts match the frozen menu **1:1**: seafood 14, whole-wings 7, party-wings 6, boneless-chicken-bites 5, chicken-leg-and-thigh 6, chicken-tenders 4, shrimp 5, gizzards-and-livers 2, fish-family-deals 7, family-meals-and-combos 3, sides 17, kids-meals 3, desserts 5, drinks 3.
- No off-menu imagery: id scan for calamari/squid/lobster/oyster/scallop returned none. Every render maps to a real menu item.

## Independent tool confirmations
- `node higgsfield-workflow.mjs verify --project D:/website/captains-fish-and-chicken` → `{ ok:true, problems:[], deferred:{ slots:[], pages:[] } }` — matches the artifact's `higgsfieldWorkflowVerify` block.

## Advisories (non-blocking)
- **A1 — Packet & capsule on-disk hashes do not match declared provenance.** The phase-6 packet hashes to `9c9b2ed0…dacee47` on disk but the capsule's `allowedInputs` (and the orchestrator brief) declare `a4de3141…c704cc`; the review capsule hashes to `7c2a8a1e…b5a81a` but the orchestrator declares `0f7c62e4…d2a9673`. Confirmed by two independent hashers. This does NOT affect the imagery-quality verdict — the sealed Phase 6 artifact (the review target) verifies, and every gate finding was re-derived from primary sources rather than from packet evidence. Recommend the orchestrator reconcile the packet/capsule provenance chain (e.g. re-seal or re-record hashes) before final gate close, so the input-plumbing manifest is internally consistent. The report's `packetHash`/`capsuleHash` fields carry the contract-declared values per the return contract; the computed on-disk values are recorded in the report `verification` array for transparency.
- **A2 — OG/Twitter meta tags absent site-wide** (Phase 5 advisory; `og-social.jpg` exists on disk). Not an imagery blocker; route to a future template round.
- **A3 — Runtime CWV/Lighthouse** out of scope for static imagery verification; route to `local-launch-checklist` after the Phase 7 deploy.

## Conclusion
All five imagery-quality gate criteria (a–e) are satisfied and independently reproduced. The sealed Phase 6 artifact verifies. Verdict: **PASS**, with advisory A1 flagged for orchestrator reconciliation of packet/capsule provenance (non-blocking for the imagery gate).
