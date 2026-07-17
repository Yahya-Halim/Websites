# Phase 4 amendment 1 — hero webp fix after delta review

**Date:** 2026-07-07  |  **Actor:** operator (geekeys343@gmail.com)

The independent rebrand delta review (read-only) found ONE regression: the 4 wired
hero images shipped as .jpg, tripping do-not-ship-guards' hero modern-format rule
(webp/avif) on /, /occasions/family-dinner/, /occasions/game-day-wings/,
/occasions/office-and-party-catering/ — new failures beyond the intended identity
fixtures. Fix applied pre-amendment: heroes converted to webp via sharp, page srcs
repointed, rebuilt. factory validate now fails ONLY on the declared identity
fixtures again (ga-placeholder + reserved-example-tld). All other delta checks
passed (35 routes, 0 slashless links, 0 broken assets, CRO markers intact,
truthfulness clean, brand tokens shipped).
