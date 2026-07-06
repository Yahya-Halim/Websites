# Google Business Profile Optimization — Summit Auto Group

_Produced with the **gbp-optimization** skill (configuration sub-capability — read-only audit; no changes pushed to a live profile). Source of truth: `src/data/business.json`._

> Menu-automation (Chrome bulk upload) is the skill's other, destructive sub-capability. It is **not** used here — it requires explicit consent to write to a live GBP, and is aimed at restaurants, not dealers.

## NAP — must match the site exactly
| Field | Value to set on GBP |
|---|---|
| Name | Summit Auto Group |
| Address | 4820 Federal Blvd, Denver, CO 80221 |
| Phone | (303) 555-0142 |
| Website | https://summitautogroup.example |

✅ These match the site header, footer, `/contact`, `llms.txt`, and the LocalBusiness JSON-LD. NAP consistency is the #1 local-ranking signal.

## Categories
- **Primary:** Used Car Dealer
- **Secondary:** Car Dealer · Auto Repair Shop · Car Finance and Loan Company

## Hours (from `business.json#hours`)
- Mon–Sat: 9:00 AM – 7:00 PM
- Sun: 10:00 AM – 5:00 PM
- Set special hours for US holidays before each holiday.

## Attributes to enable
- "Identifies as family-owned" · Online appointments · On-site services · In-store shopping
- Payments: Cash, Credit card, Financing · Wheelchair-accessible entrance & parking

## Services (mirror the site's `/services`)
- Service & Maintenance (all makes) · Trade-In Appraisal · Extended Warranties & Protection · In-house Financing

## Products / inventory
- Post current inventory highlights as GBP Products (link each to its `/inventory/{slug}` page).

## Photos (use the higgsfield outputs)
- Logo (512×512 square) · Cover (16:9 hero) · ≥ 10 lot & vehicle photos · Team photo (owner **Marcus Delgado** — must match the `founder` in schema).

## Posts cadence
- Weekly "What's New" post: a featured vehicle or financing offer, linking back to the site.

## Discrepancy checklist (fix before publishing)
| Check | Status |
|---|---|
| Name matches site | ✅ |
| Address matches site + schema | ✅ |
| Phone matches `tel:` links + schema | ✅ |
| Hours match `hours.displayText` | ✅ |
| Website URL = canonical domain | ✅ |
| Owner name matches schema `founder` | ⚠️ set on GBP → Marcus Delgado |
| Logo uploaded | ⚠️ pending logo export |

_Read-only per skill contract: apply these in the GBP dashboard yourself; the skill never writes to a live profile without explicit consent._
