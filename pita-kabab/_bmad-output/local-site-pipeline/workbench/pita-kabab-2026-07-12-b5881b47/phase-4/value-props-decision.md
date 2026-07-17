# Value props & CTA banner — Phase 4 drafting decision

Run: pita-kabab-2026-07-12-b5881b47 · Phase 4 BUILD · 2026-07-12/13

The owner questionnaire item "exactly 3 hero value props + mid-page CTA banner headline
in your own words" (owner-questionnaire.md, item 8) has NOT been answered. Per the Phase 4
dispatch, the three value props and the banner line were DRAFTED from the owner's OWN
published statements captured in sealed Phase 0 evidence (web-footprint-findings.json,
phase-0-artifact.json) — never from third-party reviews. Every line below is
**owner-unconfirmed and requires owner sign-off before launch**.

## site.valueProps (exactly 3)

| # | Label | Sublabel | Sealed-evidence source | Status |
|---|-------|----------|------------------------|--------|
| 1 | "Palestinian family recipes" | "Shawarma, kabobs, falafel & mezze" | Owner site claim captured 2026-07-12: "Mediterranean / Middle Eastern restaurant serving Palestinian family recipes" (pitakababcr.com, Phase 0 finding `cuisine-service-model`); sublabel lists only captured menu families | OWNER-UNCONFIRMED — requires sign-off before launch |
| 2 | "Made fresh daily" | "Hummus and sides prepared every morning" | Owner site claim captured 2026-07-12: "hummus made fresh every morning, scratch cooking daily" (pitakababcr.com, Phase 0 finding `trust-facts`) | OWNER-UNCONFIRMED — requires sign-off before launch |
| 3 | "Catering for any gathering" | "Office lunches, parties & family dinners" | Owner site catering page captured 2026-07-12 (pitakababcr.com/catering/): full-service catering claim. Deliberately SOFTENED — the published terms (10-person min, 200+ capacity, 50% deposit, notice tiers) are owner-confirm-gated and are NOT republished anywhere in the build | OWNER-UNCONFIRMED — requires sign-off before launch |

## site.ctaBanner

- headline: "Order ahead from Pita Kabab"
- sublabel: "Call now and pick up at 3100 6th St SW, Cedar Rapids"
- Source: purely functional copy — the only facts used are the owner-confirmed address
  (brief.json) and the call channel evidenced by the owner site's tel: link. The owner
  site's "~10 minutes" ready-time claim was NOT used (unverified quantified claim).
- Status: OWNER-UNCONFIRMED wording — requires sign-off before launch (questionnaire item 8).

## Explicitly excluded from drafting

- Third-party review language (Yelp/Google/Facebook community posts) — never used as house facts.
- Halal claims (certifying body unnamed; owner-gated).
- Craft claims as fact (charcoal grill / vertical-spit / generational recipes) — value prop 1
  uses the owner's own "family recipes" phrasing without the generational/craft framing.
- Prices, offers ($5.98 kids offer), catering terms, SMS capability, parking claim.

## Swap path

When the owner answers questionnaire item 8, replace `site.valueProps` and `site.ctaBanner`
in `src/data/site.json` with the owner's own words and rebuild (route set is unaffected).
