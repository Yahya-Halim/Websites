# Discovery Report — Captains Fish and Chicken

**Skill:** `local-business-discovery` (Phase 0 intake)
**Project:** `captains-fish-chicken` (archetype: `restaurant`)
**Date:** 2026-06-30
**Status:** ⚠️ Partial — high-confidence facts corrected; several fields awaiting owner confirmation (see [questionnaire](02-client-questionnaire.md))

---

## 1. Method

This was a **validate-and-enrich** pass: the project was scaffolded with a pre-filled
`src/data/business.json`, so discovery cross-referenced every field against live web
sources rather than starting from a blank slate.

**Sources consulted**

| Source | Used for |
| --- | --- |
| Yelp (1616 1st Ave NE listing) | NAP, phone, category, hours |
| Tripadvisor (listing — *unclaimed*) | Address (ZIP+4), phone, cuisine |
| KHAK 98.1 local news feature | Owner, opening date, real menu, building history |
| Facebook (official page) | Social profile, branding |
| UberEats / DoorDash / Grubhub / Postmates | Online ordering, second-location signal |
| Existing `src/data/*.json` | Baseline data to validate |

---

## 2. Confirmed identity (NAP)

| Field | Value | Confidence |
| --- | --- | --- |
| Name | **Captains Fish and Chicken** (legal: *Captains Fish and Chicken, Inc.*) | ✅ High |
| Address | **1616 1st Ave NE, Cedar Rapids, IA 52402-5431** | ✅ High |
| Phone | **(319) 221-1040** | ✅ High (Yelp + Tripadvisor + Facebook post) |
| Category | American · Seafood · Soul Food · Fast Food | ✅ High |
| Owner / operator | **Ray Aqel** — opened & sold this same restaurant model in MN, IL, MI; first Iowa location | ✅ High (KHAK) |
| Opened | **Soft opening late October 2024** | ✅ High (KHAK) |
| Building | Former *Gutamex Restaurant Elenita* / *Brick City Grill* space | ✅ High |

---

## 3. Discrepancies caught & corrected

The scaffolded `business.json` contained **placeholder/fabricated data that had already
propagated into the generated `localbusiness.jsonld` schema and `public/llms-full.txt`** —
i.e. AI search engines and Google were being fed wrong facts. Corrected in this pass:

| Field | ❌ Was (scaffold) | ✅ Now (verified) | Why it mattered |
| --- | --- | --- | --- |
| `phone` | `319-555-0147` | `(319) 221-1040` | `555-01xx` is a **fake/reserved** number. A live site citing it = lost orders + broken NAP consistency. |
| `yearEstablished` | `2018` | `2024` | Off by 6 years. Opened Oct 2024. |
| `copyrightYears` | `2018-2026` | `2024-2026` | Follows founding year. |
| `hours.sunday` | opens `12:00`, closes `21:00` | opens `11:00`, closes `20:00` | Sunday was wrong both ends. |
| `hours.displayText` | `Mon-Sat 11am-10pm, Sun 12pm-9pm` | `Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 11am–8pm` | Missed the **Fri–Sat 11pm** late close entirely. |

> ⚠️ **Schema limitation on hours:** the engine's `hours` block only models a single
> `weekday` range + `sunday`. The structured `weekday.closes` is held at `22:00`; the
> Fri–Sat 11pm extension lives only in `displayText`. Confirm hours with the owner before
> launch — they were not officially posted at opening, so aggregator data is the only source.

---

## 4. Services (menu) — accuracy flag

The current `src/data/menu.json` looks **partially templated**. The real menu (per the KHAK
feature and Yelp) is broader and differs on specifics:

| Real menu (verified) | In current `menu.json`? |
| --- | --- |
| Perch, Tilapia, **Catfish**, Cod, Calamari, Crab cakes, **Shrimp** | Partial — has catfish/shrimp; **missing** perch, tilapia, cod, calamari, crab cakes |
| Fried chicken, Tenders, Bone-in & **boneless** wings, **Gizzards** | Mostly present |
| Sides: Okra, Hush puppies, Onion rings, Breaded mushrooms, Fries | **Missing** okra, hush puppies, onion rings, mushrooms |
| Popular: Cheese curds, Chocolate cake | **Missing** |
| "Whiting", "Coleslaw", "Bread & Butter" (in current data) | **Unverified** — may be invented |

**Recommendation:** treat the menu as *unconfirmed*. Prices in particular should not ship
until the owner verifies them — fabricated prices are the highest-risk content on the site.

---

## 5. Service area

Single storefront, dine-in + pickup. Delivery is fulfilled through third-party platforms
(**UberEats, DoorDash, Grubhub, Postmates**), so the effective delivery radius is whatever
those platforms cover around 1616 1st Ave NE — not an owner-defined zone. No additional
service-area pages needed.

---

## 6. ⚠️ Open question — a possible SECOND location

Listings exist for a **second Cedar Rapids address: 3100 6th St SW, 52404, phone (319) 362-3114**
(Yelp #2, Grubhub). It is unclear whether this is:

- a genuine **second location** of the same business,
- an **older/duplicate** listing, or
- an **unrelated** business with the same name.

The current site is built **entirely around 1616 1st Ave NE**. This needs an explicit
owner answer before launch — see questionnaire Q-LOC-2.

---

## 7. Brand assets

| Asset | Status |
| --- | --- |
| Logo | ✅ Present — `public/logo.png` (nautical "shark captain" theme); but 1.77 MB — **should be compressed** before launch |
| Colors | Navy `#0B1F3A` / gold `#F5B51E` / blue `#1C74D9` — plausible, **confirm vs. real signage** |
| Photos | None gathered — real food/storefront photos recommended for E-E-A-T |

---

## 8. Remaining gaps → questionnaire

These fields are **unverified placeholders** and are the subject of
[`02-client-questionnaire.md`](02-client-questionnaire.md):

- `email` — `info@captainsfishandchicken.com` (assumed, not confirmed)
- `slogan` — "Hooked on Flavor" (invented — confirm or replace)
- `tagline` / `description` — confirm wording & "family-owned" claim
- `paymentAccepted` — assumed "Cash, Visa, Mastercard, Apple Pay"
- `geo` lat/long — approximate (currently downtown-CR coordinates, not the exact storefront)
- `analytics.gaId` — still `G-XXXXXXXXXX` placeholder
- `sameAs` DoorDash URL — differs from the one in `site.json`; verify correct store link
- Hours (full-week confirmation, incl. Fri–Sat late close)
- Menu items & **prices** (section 4)
- Second location (section 6)

---

## 9. Action required after sign-off

Once the questionnaire answers come back and `business.json` is finalized, **re-run the
engine** so the corrections flow into the generated artifacts (which still need to be
regenerated even though the source is now fixed):

```
/factory wire      # regenerate localbusiness.jsonld, llms.txt, etc. from corrected data
/factory build     # rebuild the site
```

> Until a re-wire happens, `src/content/_generated/localbusiness.jsonld` and
> `public/llms-full.txt` still contain the **old fake phone and 2018 founding date**.
