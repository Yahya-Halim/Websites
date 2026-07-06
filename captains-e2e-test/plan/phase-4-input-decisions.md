# Phase 4 input decisions (Yahya-authorized) — 2026-07-05

Resolutions for the carried Phase 2/3 blockers + the Phase 4 specialist gap. These are engagement-owner decisions, applied at Phase 4 build and re-affirmed at the Phase 5 Yahya approval as knowing accepted omissions.

## 1. CSB-lead-form -> DROP THE FORM (documented exception)
- Home + Contact ship WITHOUT a lead form: contact surface = phone + map + hours + directions.
- The cro-block-presence "lead form" requirement on home/contact is **waived by Yahya** for this build (no external endpoint, no business email).
- At Phase 5 validation the missing form is expected to surface as a remaining advisory; Yahya's Phase 5 approval knowingly accepts it. NOT hidden, NOT a gate workaround — an authorized, logged omission.
- Reversible: if an https form endpoint + email are provided later, the form block plugs back in.

## 2. CSB-dual-cta -> ACCEPT CALL-ONLY (documented exception)
- Site-wide CTA = Call (tel:+13192211040) + phone-ahead. The "Text us" / SMS affordance is REMOVED (phone is voice-only).
- The dual-CTA text-affordance requirement is waived by Yahya. Reversible if an SMS-capable number is provided.

## 3. Phase 4 specialist mapping -> vendored seo-content-writer
- Phase 4 contract specialist id `content-writer` has no first-party skill.
- Mapped to: `packages/plugin/vendored/seo-geo-claude-skills/build/seo-content-writer/SKILL.md`.
- I will read that SKILL and follow its procedure before generating Phase 4 content (read-before-act).

## Still open (unchanged)
- Trust grid: omitted-and-logged (<6 real facts) — already an allowed omission.
- Prices: none authoritative -> menu ships without prices.
- Press-sourced menu additions (liver, mashed potatoes, mac & cheese): shown only if owner confirms.

## Binding build-copy constraints (from the independent page-matrix-depth companion review)
Source: `plan/phase-2-review-page-matrix-depth-companion.md` (independent reviewer, verbatim, PASS). BINDING on Phase 4 build copy.

1. **Dine-in — BUILD-TIME CORRECTION REQUIRED.** LoopNet proves the PROPERTY has a dining room, NOT that Captains operates dine-in service. Owner said counter-service, takeout-dominant, did not confirm dine-in. Copy on /order, /faq, and everywhere must NOT claim "dine-in" as a service without owner confirmation. Permitted phrasing: "seating / dining room at the property; takeout-first." **The Phase 3 artifact FAQ line "dine-in (dining room exists)" is SEALED (write-once) and wrong as phrased — it MUST be corrected AT BUILD TIME to the permitted phrasing; the sealed wording must not reach shipped copy.**
2. **/occasions/late-night.** Reframe as "open late" with exact hours (Mon-Thu to 10pm, Fri-Sat to 11pm). No comparative claims ("latest on the NE side") without verification.
3. **Review-sourced menu claims.** "Generous portions", "hand-breaded" rest on 1 Yelp review + press. Attribute ("a Yelp reviewer notes...") or soften — do NOT state as house facts.
4. **Blockers.** CSB-lead-form + CSB-dual-cta rulings (form dropped, call-only) accepted and recorded; input gaps, not plan defects.
