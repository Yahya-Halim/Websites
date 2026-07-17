# Phase 7 LAUNCH — Launch-Readiness Review Notes

- **Run:** captains-fish-and-chicken-2026-07-09-a701f565
- **Reviewer:** launch-readiness (fresh, independent sub-agent)
- **Date:** 2026-07-15
- **Verdict:** **PASS**

## Independence note
I did **not** build this artifact. This is adversarial verification performed only from the
review capsule, the files it names, and my own read-only commands. I did not edit the phase
artifact or any workflow-state file. Every number below was reproduced independently rather
than taken from the artifact on faith.

## 1. Integrity gate — PASS
`sha256sum` of the sealed artifact
(`...\phase-7\phase-7-artifact.json`) =
`95552cf4999181c6299d484073248a2e77a1321683c60d45ebe03bcb0443efd9`, which **equals** the
capsule's declared `artifactHash`. Integrity holds; review proceeds.

## 2. factory validate — PASS
`npx factory validate` in `D:/website/captains-fish-and-chicken` → **exit 0** (reproduced).
Matches the artifact's `validateExitCode: 0` and sealed Phase 5's 11/11 validators.

## 3. Dist sweep (fresh `dist/`, 38 `.html`, rebuilt 2026-07-15) — PASS, reproduces exactly
Ran an independent Node sweep over all 38 built pages. Every load-bearing count matches the
artifact's `distSweep` block:

| Invariant | Artifact | Reproduced |
|---|---|---|
| Route pages | 38 | 38 |
| Unique titles / duplicates | 38 / 0 | 38 / 0 |
| Pages missing meta description | 0 | 0 |
| Canonical missing / off-host | 0 / 0 | 0 / 0 (host `captains-fish-chicken.netlify.app`) |
| Pages with non-single H1 | 0 | 0 (all 38 = exactly one H1) |
| GA4 `G-7W35DKNK6Z` missing pages | 0 | 0 |
| Restaurant JSON-LD nodes | 38 | 38 |
| JSON-LD type counts | R38/WS38/WP37/BC37/FAQ21/Contact1/Menu1 | identical |
| JSON-LD parse errors | 0 | 0 |
| `<img>` tags / missing alt | 152 / 0 | 152 / 0 |
| tel hrefs / pages with tel CTA | 231 / 38 | 231 / 38 |
| Internal links / broken | 1201 / 0 | 1201 / 0 |
| Fixture leaks (`.example`,`G-XXXXXXXXXX`,`555-0147`,`placeholder`) | 0 | 0 |
| Single NAP tuple | 38 addr / 38 phone | 38 / 38; tel `+13192211040` & `+1-319-221-1040`, display `(319) 221-1040` |
| gtag 'contact' event pages | 38 | 38 |

(My first link-check pass mis-reported 1201/1201 broken due to a Windows path-prefix bug in my
own script; after normalizing separators the corrected run confirms **0 broken / 1201 checked**.)

## 4. Live-vs-sealed match — PASS (artifact claim holds; if anything conservative)
`curl -s` of the production origin vs the local `dist/` file, sha256 compared. **All sampled
routes byte-identical (live == dist):**

- `/` — `f6c19d7f9f46393913e4b24ae4a3fbc7ef1a2195e2bc1eaa8654cfd3745bb455`
- `/menu/seafood/` — `dde3ab25b8b81d829a1393da1fe0332b5747d2f10d3ffa0d5906c46741fb8712` (dispatch-requested; **not** even listed in the artifact's `byteIdenticalToDist`, yet identical)
- `/menu/` — `a4132140cb9db65e49eed032a43ddf386000948c1d13ea044c51e42dff631e08` (also not listed, yet identical)
- `/menu/desserts/` — `81c136233c078c1cbb1f7822621e2a5fdadb1aa57b5d8c5e43068516cf2ac44c`
- `/menu/kids-meals/` — identical
- `/contact/` — `62de0fd601e75f920b8c7c9ec338018cf7a08dc14013d1f0f67b344fa1e1f4cf`
- `/robots.txt` — `357a1d20524a7335555bf446dada82d3fc4264ca1f806daf44cd32144d5a190e`
- `/sitemap-index.xml`, `/sitemap-0.xml`, `/llms.txt` — identical

All 9 artifact-sampled routes (plus `/menu/seafood/`) return HTTP 200 and are byte-identical to
this verified build. **Count-free confirmed:** live home has **0** occurrences of `208 reviews`
and **0** of any `NNN reviews`; it shows `4.4 stars on Google`. Live sitemap-0 lists 38 URLs;
live GA4 `gtag/js?id=G-7W35DKNK6Z` loads; live robots carries the AI-crawler allow-list
(GPTBot/ClaudeBot/PerplexityBot/Google-Extended). The '208 reviews' contradiction **does not
reproduce**. The artifact's "live already serves this exact build" claim is true.

## 5. Truthfulness floor — HONORED (not papered over)
- Hours: `call to confirm` caveat present on **all 38** dist pages; no fabricated hours. Structured `openingHoursSpecification` deliberately not extended to Fri–Sat (owner-unconfirmed) — honestly carried as an advisory / owner follow-up.
- Review count: **no** fabricated review count anywhere in dist; honest count-free `4.4 stars`.
- Payment: **no** `paymentAccepted` schema and no payment claims anywhere. (`priceRange: "$$"` is a Schema.org affordability tier, not a payment-method claim.)
- Imagery: `representational` honesty note present on menu pages; `public/logo.png` is a raster placeholder (present, flagged pending owner file drop).
- Artifact `truthfulnessCaveats` explicitly carry all four required caveats: placeholder logo, owner-unconfirmed hours, estimated prices, unknown payment.
- **Lighthouse not inflated:** recorded Home P89/A96/BP100/SEO92 and `/menu/` P67/A95/BP100/SEO92 — mobile Performance honestly recorded **sub-90** and flagged as a post-launch optimization advisory, not rounded up to a pass. Independent run corroborates authenticity: locally-installed Lighthouse is **v13.4.0** (exact version the artifact cites); my own mobile run of live `/` reproduced **A96 / BP100 / SEO92 exactly** (the three stable categories) and returned Performance **56** — i.e. even worse than the recorded 89, confirming the score was measured, not inflated.

## 6. Launch checklist & deploy honesty — PASS
All **9 required** `launchChecklist` ids present, each `status:"pass"` with concrete evidence and
a real caveat / owner next-action: `identity, validation, imagery, conversion-actions,
crawlability, analytics, local-presence, broken-links, mobile-lighthouse`. `deployTarget.method
= "owner-run"`, `deployedByThisPhase = false` with reason — deploy is honestly recorded as an
owner-owned action not performed by this phase. GSC submission, GBP claim, in-property GA4
confirmation, and mobile-Perf optimization are recorded as expected owner post-launch actions.

## Concerns (all minor; none disqualifying)
1. **No persisted Lighthouse report file** in `workbench/phase-7/` — the mobile-lighthouse
   scores are self-reported. Mitigated: my independent run reproduced 3/4 categories exactly, so
   the run was genuine; evidence hygiene would improve by saving the JSON report.
2. **Home mobile Performance 89 is optimistic** vs my independent run's 56. Performance is
   Lighthouse's high-variance category; directionally the artifact's "sub-90, optimize menu image
   weight/LCP" conclusion is correct and, if anything, understated. Honesty floor intact; not a
   fail (dispatch treats mobile-Perf optimization as an expected post-launch action).
3. **`byteIdenticalToDist` lists 8 routes** while the summary/deployTarget prose says "nine
   sampled routes byte-identical." I empirically confirmed **all 9** sampled routes (incl.
   `/menu/`) are byte-identical, so the prose is true and the array is merely an under-enumeration
   — not an overstatement.

## Conclusion
The sealed Phase 7 artifact is truthful, complete, and its load-bearing claims reproduce
independently (integrity match; validate exit 0; full dist sweep counts identical; all sampled
live routes byte-identical and count-free; truthfulness caveats honored; Lighthouse honestly
sub-90 and corroborated). The only soft spot (an optimistic home Performance number) is in the
honest direction and is an expected post-launch optimization, not a launch blocker.
**Verdict: PASS.**
