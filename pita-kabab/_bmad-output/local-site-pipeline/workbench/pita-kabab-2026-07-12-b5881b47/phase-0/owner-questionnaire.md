# Owner Questionnaire — Pita Kabab (Phase 0 Discovery)

Business: **Pita Kabab**, 3100 6th St SW, Cedar Rapids, IA 52404
Prepared: 2026-07-12 (web-footprint sweep completed the same day)
Purpose: everything below is either a web finding that needs your confirmation, a conflict between sources you must resolve, or a fact only you can supply. Nothing is published until you confirm it.

## Web Findings To Confirm

We found these on the public web. Please mark each **correct / incorrect (with the fix)**:

1. **Phone:** (319) 440-3709 — from pitakababcr.com (retrieved 2026-07-12).
2. **Email:** info@pitakababcr.com — from pitakababcr.com.
3. **Hours:** Mon–Tue 10 AM–10 PM, **Wed closed**, Thu–Sat 10 AM–10 PM, Sun 11 AM–8 PM — only your website states these; no second source could be checked.
4. **Cuisine & service model:** Mediterranean / Middle Eastern (Palestinian family recipes); counter service; dine-in, takeout, delivery via DoorDash, full-service catering.
5. **Menu families & price ranges** (from pitakababcr.com/menu/): sandwiches $6.99–$12.99, bowls $13.99–$15.99, platters $14.99–$29.99, Mediterranean Delight dishes (hummus, foul, mfatakeh, kalaya, chicken liver), wings, kids meals $5.98–$6.99, baklava $4.99. Are these current?
6. **Catering terms** (from pitakababcr.com/catering/): 10-person minimum, up to 200+ guests, 50% deposit, 24-hour notice for quick catering / 1 week for 50+ / 2 weeks for weddings & traditional feasts, delivery + setup in the Cedar Rapids metro. Confirm before we republish.
7. **Trust claims on your site:** family-owned; owner **Ray Aqel** (spelling?); halal-certified chicken and beef; charcoal-grilled kabobs; vertical-spit shawarma; hummus made fresh each morning; recipes passed down through generations. Confirm each as printed.
8. **Ratings presence:** Google shows ~4.9 (8 reviews); Yelp lists the business with 13 photos and early positive reviews (retrieved 2026-07-12). No action needed — awareness only.
9. **Facebook page:** facebook.com/p/Pita-Kabab-61587297356118 — is this yours? Your website does not link to it. Any Instagram account? (We found none.)

## Discrepancies To Resolve

1. **Old Captains listings still occupy your address.** Yelp, Grubhub, Seamless, TripAdvisor, and WanderBoat still list *Captains Fish and Chicken* at 3100 6th St SW with phone **(319) 362-3114**, while Pita Kabab sources use **(319) 440-3709**.
   - Which number rings at the location today?
   - As the owner of both businesses, will you close or relocate the stale Captains listings? (We can prepare the exact change-request list per platform.)
2. **Domain ownership vs. engagement brief.** The brief said no domain was supplied, but **pitakababcr.com** is live with a full site. Who registered/controls the domain, DNS, hosting, and the info@ mailbox — and should this engagement **replace, rebuild, or coexist with** that site?
3. **DoorDash name casing:** the store reads "Pita kabab" (lowercase k). Fix in the merchant portal?

## Owner-Only Residue

These cannot be answered from the web — the build is gated on several of them:

1. **Lead-form endpoint (REQUIRED to ship a lead form):** the generated site is static, so the form must post to an external service (e.g., a Web3Forms endpoint URL). Provide one or authorize us to provision it.
2. **Text/SMS number (REQUIRED for the dual call/text CTA):** can (319) 440-3709 receive texts? If not, is there an SMS-capable number? If none exists, the text CTA is omitted — we will not invent one.
3. **Exactly 3 hero value props + one mid-page banner headline, in your own words.** Example shape: "Halal, charcoal-grilled" / "Family recipes since ___" / "Ready in ~10 minutes". The home page fails its build gate until this copy exists — we cannot write it for you without your confirmation.
4. **Opening date of Pita Kabab at this address** (month/year) — needed for years-in-business.
5. **Halal certification:** which certifying body, and may we name it on the site?
6. **GA4 measurement ID** (G-XXXXXXXX) if one exists; otherwise authorize creating a property.
7. **Google Ads:** if you run ads, provide the conversion ID and the lead-form + tel-click conversion labels; if not, we ship GA4-only.
8. **Current promotions:** any dated, quantified offer (e.g., "$5 off family platter through 8/31")? None found — if none, the offers block is omitted.
9. **Financing partners:** any? (Catering deposits don't count.) If none, omitted.
10. **Lead-form dropdown options** (suggested: Catering inquiry / Large group order 10+ / General question) and **preferred contact channels** (call / text / email).
11. **Payment methods accepted** (cash, card, tap-to-pay, other).
12. **Brand assets:** logo files, brand colors, rights-cleared photos (food, interior, owner). May we reuse the photos already on pitakababcr.com and your Google listing?
13. **Ordering strategy to promote:** DoorDash-only today; your site says first-party online ordering is "coming soon" — what should the new site push?
14. **Google Business Profile:** is the Pita Kabab listing claimed and verified under your account?

## Unblock Path

| Blocked item | Unblocks when | Fallback if unavailable |
| --- | --- | --- |
| Lead form | Owner supplies/authorizes external form endpoint (e.g., Web3Forms) | Lead form does not ship; phone/email CTAs only |
| Text CTA (sms:) | Owner confirms an SMS-capable number | Secondary CTA falls back to tel: or is omitted |
| Value props + CTA banner | Owner supplies 3 value props + 1 banner line | Home/page kinds fail the CRO build gate — hard blocker for Phase 4 |
| Trust grid | Owner confirms ≥6 real trust facts (halal body, opening date, etc.) | Grid omitted; no filler facts will be invented |
| Offers block | Owner declares a real dated promotion | Omitted |
| Analytics | Owner provides GA4 id (and Ads config if any) | New GA4 property provisioned with owner consent; Ads omitted |
| NAP consistency | Owner resolves stale Captains listings + confirms canonical phone | Launch checklist flags local-presence risk |
| Domain/deploy target | Owner confirms control of pitakababcr.com and replace/coexist decision | Deploy to staging URL (e.g., Netlify) until resolved |

**How to return this:** annotate inline and send back to the LocalEvolve engagement owner, or answer by phone — we will transcribe into the sealed discovery record. Facts you do not confirm stay marked "unverified" and will not be published.
