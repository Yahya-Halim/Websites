# Launch Checklist — Summit Auto Group

_Produced with the **local-launch-checklist** skill (Phase 7). Pre-deploy items are verified now against `dist/`; live-site items run once the domain is pointed at the host._

## Pre-deploy — verified against the current build ✅
| Item | Result |
|---|---|
| 20 pages build cleanly | ✅ `factory build` → 20 pages, exit 0 |
| `factory validate` advisory checks | ✅ exit 0 |
| JSON-LD on every page | ✅ 101 blocks total, avg 5/page, all parse |
| LocalBusiness (AutoDealer) on every page | ✅ 20/20 |
| NAP consistency (name + phone) | ✅ 20/20 pages |
| `<title>` + meta description + canonical | ✅ 20/20 pages |
| Internal-link health | ✅ 0 broken links |
| `sitemap-index.xml` / `sitemap-0.xml` | ✅ all 20 URLs listed |
| `robots.txt` allows AI crawlers | ✅ GPTBot, ClaudeBot, PerplexityBot, Google-Extended |
| `llms.txt` + `llms-full.txt` present | ✅ NAP, hours, domain, page index |

## Live-site — run after deploy (host `dist/`)
- [ ] **DNS/host:** publish `dist/` to Netlify/Vercel/Cloudflare Pages; point `summitautogroup.example` at it.
- [ ] **Google Search Console:** verify domain, submit `https://summitautogroup.example/sitemap-index.xml`, check crawl errors.
- [ ] **GA4:** confirm `G-SUMMIT2009` fires on all pages; set conversions for click-to-call, get-directions, and financing CTA.
- [ ] **Google Business Profile:** claim/verify; confirm NAP + hours + categories + photos (see `gbp-optimization.md`).
- [ ] **Lighthouse:** run on home + one inventory page; target ≥ 90 on Performance / A11y / Best Practices / SEO.
- [ ] **Broken-link sweep (live):** re-crawl the deployed site for 4xx/5xx.
- [ ] **Real assets:** replace photo placeholders with higgsfield exports; add `alt` text; export `logo.svg` to `public/`.
- [ ] **Local citations:** confirm NAP matches on Yelp, Bing Places, Apple Business Connect.

## Known follow-ups before client handoff
1. Logo + vehicle/hero photography (prompts ready in `logo-prompt.md` / `image-prompts.md`).
2. Swap the `.example` domain for the real registered domain (update `business.json#domain`, re-wire, re-build — canonicals/sitemap/schema all regenerate).
3. Fill in real VINs, prices, and mileage from the DMS feed.
