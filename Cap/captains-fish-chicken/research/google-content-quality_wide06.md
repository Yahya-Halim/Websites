## Facet: User Engagement & Behavioral Signals

### Key Findings

- **NavBoost is one of Google's strongest ranking signals**, confirmed by Google VP Pandu Nayak under oath during the 2023 DOJ antitrust trial. The system has been active since at least 2005 and processes click data over a 13-month rolling window to re-rank search results after initial retrieval [^1][^2].
- **The May 2024 Google API leak confirmed exact click signal names** in internal documentation: `goodClicks`, `badClicks`, `lastLongestClicks`, `unsquashedClicks`, and `unicornClicks`. These were documented in the `QualityNavboostCrapsCrapsData` module of the Content API Warehouse, which contained 14,014 attributes across 2,596 modules [^3][^4].
- **A `goodClick` is classified when a user clicks a result and does not quickly return to the SERP** — signaling satisfaction. A `badClick` occurs when users pogo-stick back to search results within seconds. The `lastLongestClick` identifies the result a user stayed on longest before ending their search session, representing the page that "won" the query [^5][^6].
- **Google does NOT use Google Analytics data for rankings** — confirmed by Gary Illyes and John Mueller. Instead, Google leverages Chrome browser data (63%+ global market share) and SERP click logs to measure user satisfaction at scale across all websites, regardless of analytics installation [^7][^8].
- **Chrome browser data feeds directly into ranking systems**. The 2024 leak revealed `chromeInTotal` and `chrome_trans_clicks` fields in quality modules, contradicting years of public denials from Googlers that Chrome data was used for ranking [^9][^10].
- **Core Web Vitals (LCP, INP, CLS) are confirmed ranking signals** since the June 2021 Page Experience update and remain foundational through 2026. Good thresholds: LCP ≤ 2.5s, INP ≤ 200ms, CLS < 0.1. Only ~48% of mobile sites pass all three, creating a competitive moat for compliant sites [^11][^12].
- **Pages passing all three Core Web Vitals have a 24% higher probability of ranking in the Top 3** compared to pages rated "Needs Improvement" [^13].
- **Dwell time correlates with rankings but is not a standalone named ranking factor**. Google's internal implementation is `lastLongestClicks` — session-level dwell time that measures which result ended the user's search journey. Correlation studies show a 0.84 correlation between dwell time and ranking position in client data [^14][^15].
- **Pogo-sticking is one of the strongest negative behavioral signals**. Pages with high pogo-stick rates accumulate `badClicks` through the CRAPS module (Click-Related Active Promotion Signals), which generates demotion signals. A site-wide pattern of pogo-sticking can trigger broader quality penalties through Panda-like site-level classifiers [^16][^17].
- **AI Overview citations are influenced by the same engagement signals**. Pages with high `badClicks` and poor user engagement are less likely to be selected as sources for AI Overviews/SGE. The implication: "If your pages get clicked and read, they get cited. If they get clicked and bounced, they get demoted" [^18][^19].
- **Google's search satisfaction measurement uses the CAS model** (Clicks, Attention and Satisfaction), developed by Google Research and published in 2016. This model jointly captures click behavior, user attention, and satisfaction — accounting for "good abandonments" where users find answers without clicking [^20].
- **Page Experience signals include**: Core Web Vitals, mobile-friendliness (ranking signal since 2015), HTTPS (ranking signal since 2014), and no intrusive interstitials (penalty since 2017). Safe Browsing was removed as a formal Page Experience ranking signal in August 2021 but remains flagged in Search Console [^21][^22].
- **Content quality and engagement signals now outweigh backlinks in algorithmic weight**. Recent analysis shows backlinks have dropped ~20% in relative importance while behavioral metrics have surged. Google's algorithm distills to two top-level signals: Quality (Q*) and Popularity (P*), with Popularity powered by Chrome visit data and NavBoost interaction signals [^23][^24].
- **The two-layer content structure (snippet lead + deep content) serves both LLM citation and user engagement**. The inverted pyramid approach — a 40-70 word direct answer at the top, followed by supporting evidence and deep analysis — maximizes AI extractability while providing the comprehensive content that earns `lastLongestClicks` and reduces pogo-sticking [^25][^26].
- **Click signals are stored per query, per document, per locale** — not globally. The same page can rank well for one query and poorly for a related one. There is no overall "site quality" click score that rescues a page with weak signals on its target query [^27].
- **NavBoost signals take 4+ months to show meaningful ranking movement** and stabilize over 8-12 months due to the 13-month retention window. Bad click patterns take equally long to fully wash out [^28].
- **AI Overviews reduce organic clicks by ~58%** for queries where they appear, but the remaining clicks are more intentional and may carry stronger signal weight in NavBoost's framework. The `lastLongestClick` becomes even more indicative of quality when users actively choose to click past an AI-generated answer [^29].

### Major Players & Sources

- **Google Pandu Nayak (VP of Search)**: Testified under oath in the DOJ antitrust trial (2023) that NavBoost is "one of Google's strongest ranking signals" and has used click data since ~2005 [^1].
- **Rand Fishkin (SparkToro)**: First to publicly analyze the May 2024 API leak, calling it "the most significant leak in Google's history." Published detailed breakdowns of NavBoost signals and their implications [^3].
- **Mike King (iPullRank)**: Published the technical deep-dive analysis of the leaked 14,014 attributes across 2,596 modules, confirming signal names and module structures [^4].
- **Erfan Azimi**: The SEO practitioner who discovered and shared the leaked Google Content Warehouse API documentation with Fishkin and King [^10].
- **Google Gary Illyes**: Publicly denied click-based ranking for years ("Dwell time, CTR, whatever Fishkin's new theory is, those are generally made up crap" — 2019). The internal CRAPS module name for processing click signals was revealed in the leak, creating ironic juxtaposition [^8][^24].
- **Google John Mueller**: Publicly stated Google doesn't use Google Analytics for rankings (2016) and denied Chrome data was used for ranking [^7][^9].
- **Google Alexander Grushetsky (VP)**: Internally wrote in 2019 that NavBoost was "likely more powerful than the rest of ranking combined" — the same year Illyes publicly dismissed click signals [^24].
- **Aleksandr Chuklin (Google Research Zurich)**: Lead author of the 2016 CAS (Clicks, Attention and Satisfaction) paper, Google's published framework for measuring search satisfaction without relying solely on clicks [^20].

### Trends & Signals

- **Behavioral signals are now the dominant ranking differentiator**. The 2024 leak confirmed Google's ranking distills to two signals: Quality (Q*) and Popularity (P*), with the latter directly powered by Chrome visit data and NavBoost user interactions [^24].
- **Engagement metrics > backlinks in relative weight**. Industry analysis shows backlinks have dropped ~20% in relative algorithmic importance while user engagement signals (click patterns, dwell time, session depth) have surged in weight [^23].
- **INP is the most commonly failed Core Web Vital in 2026**. About 43% of sites still fail INP at the 200ms threshold, making it the primary technical differentiator for page experience [^11].
- **AI Overview presence changes click signal quality**. With ~58% fewer clicks when AI Overviews appear, the remaining clicks are more deliberate — a user who clicks past an AI summary is sending a stronger satisfaction signal than a casual SERP click [^29].
- **Site-level authority is real and named**. The `siteAuthority` attribute in CompressedQualitySignals contradicts Google's public denials. It acts as a head start for new pages before they accumulate their own page-level click data [^18].
- **Topical cohesion feeds both traditional and AI ranking**. `siteFocusScore` and `siteRadius` measure how tightly a site clusters around a topic. Sites with tight topical cohesion produce passages that cluster more tightly in vector space, making them easier for AI retrieval systems to cite consistently [^18].
- **Two-layer content architecture is becoming the standard**. The inverted pyramid (direct answer + deep content) is now recommended by multiple SEO authorities for simultaneous optimization of featured snippets, AI Overviews, and user engagement signals that feed NavBoost [^25][^26].
- **Brand mentions correlate at 0.664 with AI visibility**, while backlinks only correlate at 0.218. Share of Model (SoM) — how frequently a brand appears in AI answers — is emerging as the new KPI for generative search [^30].
- **Click squashing prevents manipulation**. NavBoost uses statistical compression ("squashing") to prevent any single extreme signal from dominating, making CTR manipulation ineffective and fake clicks filterable [^24][^28].
- **Query-level signal independence**. Click signals are stored per query-document-locale combination, meaning engagement must be earned independently for each target keyword. A strong homepage doesn't rescue a weak product page on its specific query [^27].

### Controversies & Conflicting Claims

- **Google publicly denied click-based ranking for years while operating NavBoost since 2005**. Gary Illyes called click theories "generally made up crap" in 2019, while the internal CRAPS module (Click-Related Active Promotion Signals) processed those exact signals. The 2024 DOJ trial and API leak confirmed the disconnect between public communications and engineering reality [^8][^24].
- **Chrome data denial contradicted by leak**. Multiple Google representatives (Matt Cutts, John Mueller) denied Chrome data was used for ranking. The `chromeInTotal` and `chrome_trans_clicks` fields in the leaked Content API Warehouse directly contradict these statements [^9][^10].
- **Domain authority denial vs. `siteAuthority` field**. Google repeatedly denied using a domain-wide authority metric (Gary Illyes: "We don't really have overall domain authority" — 2016). The leak revealed `siteAuthority` as a persistent integer in CompressedQualitySignals, applied to new pages before they accumulate their own data [^18][^24].
- **Is dwell time a direct ranking factor?** Google publicly denies "dwell time" as a named direct signal. However, the `lastLongestClicks` field is the technical implementation of session-level dwell time, and correlation studies consistently show 0.8+ correlation with ranking position. The semantic distinction between "named signal" and "behavioral pattern used by ML systems" remains contested [^14][^15].
- **Safe Browsing status**. Google initially included Safe Browsing as a Page Experience signal, then removed it in August 2021, stating it was "outside of a website owner's control." It continues to be flagged in GSC but does not formally factor into rankings — creating confusion about its current role [^21][^22].
- **Google's official response to the leak**: "Some attributes are out of date or not used in ranking." This carefully worded non-denial has been interpreted by SEO analysts as acknowledging authenticity while disputing relevance — without specifying which attributes are active [^10].
- **CTR manipulation debate**. Some SEO experiments show temporary ranking boosts from artificial click generation, but Google's squashing and bot-filtering make these effects short-lived. The consensus: CTR manipulation is detectable, risky, and less effective than genuine user satisfaction improvement [^28].
- **Bounce rate vs. pogo-sticking confusion**. Google does not use bounce rate as a direct ranking factor (a single-page session with 10 minutes of reading is a "bounce" but positive engagement). Pogo-sticking — quick return to SERP — is the negative signal, but these are often conflated in SEO discourse [^15][^16].

### Recommended Deep-Dive Areas

- **NavBoost signal decay and recovery patterns**: How long does it take for a page with accumulated `badClicks` to recover after content improvements? The 13-month window suggests slow decay, but the exact mechanics of signal refresh and the role of "twiddler" post-ranking modules warrant deeper technical analysis. Critical for SEO strategy planning on underperforming pages [^1][^28].
- **Chrome data layer mechanics**: The `chromeInTotal` and `chrome_trans_clicks` fields suggest browser-level behavioral tracking beyond SERP clicks. How does off-SERP behavior (direct visits, repeat sessions, cross-device returns) compound with NavBoost signals? This could explain why brand-direct traffic correlates with ranking improvements [^9][^10].
- **AI Overview citation exclusion mechanisms**: How exactly do pages with high `badClicks` get excluded from AI citation pools? The relationship between traditional ranking signals and AI retrieval pipeline filtering is not fully documented. Understanding this would inform a unified SEO+GEO strategy [^18][^19].
- **Device-specific and geographic signal segmentation**: NavBoost stores signals per query, per document, per device, per geography. How do mobile engagement patterns differ from desktop in weighting? For local businesses, this could reveal why mobile Core Web Vitals and mobile UX are disproportionately important [^27].
- **The Firefly site-level quality system**: The `QualityCopiaFireflySiteSignal` model contains aggregated site-level signals that offer a holistic view of a website's quality, authority, and content production cadence. How does this interact with NavBoost page-level signals and Panda-like site-level demotions? [^17].
- **Two-layer content optimization at scale**: How to implement the inverted pyramid structure (snippet-optimized lead + deep engagement content) across hundreds of pages without creating thin, repetitive content that triggers Panda demotions? The balance between AI-extractable brevity and NavBoost-satisfying depth needs operational frameworks [^25][^26].
- **Engagement metric tipping points**: Correlation studies suggest ranking improvements accelerate once average dwell time exceeds 2-3 minutes, and that a 20% increase in session duration yields a 5% ranking boost. Are there specific thresholds for `goodClick` ratios that trigger meaningful re-ranking? [^15][^23].
- **Information Gain Score and user satisfaction**: The Google patent US11354342B2 measures how much novel content a document contains relative to existing results. How does this interact with engagement signals? Low-information-gain pages that rehash existing content may get demoted even with good engagement, while high-information-gain pages may get promoted even with initially weak engagement [^24].
- **SERP abandonment vs. pogo-sticking**: The CAS model distinguishes "good abandonments" (finding answers without clicking) from dissatisfaction. As AI Overviews increase zero-click searches, how does Google distinguish between a user satisfied by the AI summary and a user who simply gave up? This affects how NavBoost signals should be interpreted in an AI-first search environment [^20][^29].

---

### Citations

[^1]: SEO-Kreativ, "RankBrain, DeepRank, NavBoost: How Google's AI Ranking Really Works!" (2026). https://www.seo-kreativ.de/en/blog/google-ai-ranking-system/

[^2]: Hobo-Web, "NavBoost: How User Interactions Rank Websites In Google" (2026). https://www.hobo-web.co.uk/navboost-how-google-uses-large-scale-user-interaction-data-to-rank-websites/

[^3]: Rand Fishkin (SparkToro), "An Anonymous Source Shared Thousands of Leaked Google Search API Documents With Me" (May 27, 2024). https://sparktoro.com/blog/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them/

[^4]: Mike King (iPullRank), "Secrets from the Algorithm: Google Search's Internal Engineering Documentation Has Leaked" (May 28, 2024). https://ipullrank.com/google-search-documentation-leak

[^5]: WebSelect Agency, "goodClicks, badClicks, and lastLongestClick: the three click signals the Google leak confirmed" (2026). https://webselect.agency/google-leak-click-signals-goodclicks-badclicks-lastlongestclick/

[^6]: WebSelect Agency, "What is NavBoost? The click-based ranking system Google ran for nearly two decades" (2026). https://webselect.agency/what-is-navboost-google-ranking-system/

[^7]: Lockedown SEO, "How Does Google Know Users Are Satisfied With a Web Page?" (2019). https://lockedownseo.com/google-user-signals/

[^8]: Luca Tagliaferro, "Does Google Use Clicks as a Ranking Signal? Here Is the Definitive Answer" (2026). https://www.lucatagliaferro.com/does-google-use-clicks-as-a-ranking-signal/

[^9]: Umm E Masuma Munny, "Does Google Use Clicks as a Ranking Signal? Here Is the Definitive Answer" (2026). https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/

[^10]: HandWiki, "2024 Google Search documentation leak." https://handwiki.org/wiki/2024_Google_Search_documentation_leak

[^11]: Visual Sentinel, "Core Web Vitals Issues 2026: Debug Guide" (2026). https://visualsentinel.com/blog/core-web-vitals-issues-debug-guide

[^12]: SEO-Kreativ, "Core Web Vitals – The Complete Guide (2026)" (2026). https://www.seo-kreativ.de/en/blog/core-web-vitals-optimizing/

[^13]: Vidcogroup, "Core Web Vitals là gì? Hướng dẫn tối ưu LCP, INP, CLS" (2026). https://vidcogroup.com/core-web-vitals-la-gi/

[^14]: Nuclear Engagement, "Website engagement metrics vs Google search rankings" (2025). https://www.nuclearengagement.com/blog/engagement-metrics-vs-google-rankings

[^15]: Breakline Agency, "Does Google Use Dwell Time as a Ranking Factor?" (2026). https://www.breaklineagency.com/does-google-use-dwell-time-as-a-ranking-factor/

[^16]: NavBoost.com, "Pogo-Sticking: The Click Signal That Hurts Your Rankings" (2026). https://navboost.com/pogo-sticking/

[^17]: Signal (Zyppy), "How Google Click Signals Drive SEO Rankings and AI Answers" (2026). https://signal.zyppy.com/p/google-click-signals

[^18]: Becited, "What the 2024 Google API Leak Taught Us About Ranking Signals" (2026). https://becited.io/ai-search-guide/google-api-leak

[^19]: SEODigitalSight, "How to Optimize Your Website for Google AI Overviews and SGE in 2025" (2025). https://seodigitalsight.com/google-ai-overview-optimization-sge-2025/

[^20]: Chuklin & de Rijke, "Incorporating Clicks, Attention and Satisfaction into a Search Engine Result Page Evaluation Model" (Google Research / ACM CIKM, 2016). https://arxiv.org/abs/1609.00552

[^21]: DebugBear, "What Are Google Page Experience Signals?" (2026). https://www.debugbear.com/blog/google-page-experience-signals

[^22]: Thrive Agency, "Core Web Vitals & Google Page Experience Guide" (2026). https://thriveagency.com/google-page-experience-guide/

[^23]: Nuclear Engagement, "Website engagement metrics vs Google search rankings" (2025). https://www.nuclearengagement.com/blog/engagement-metrics-vs-google-rankings

[^24]: Fahlout Research, "The Reality Gap: Public Guidance vs. Engineering Reality" (2026). https://fahlout.com/research/reality-gap

[^25]: SEOPress, "How to Optimize Content for AI Overviews and Generative Search" (2026). https://www.seopress.org/newsroom/featured-stories/generative-engine-optimization/

[^26]: Search Engine Land, "Writing for SEO: How to write snippet-friendly content that wins in Google and LLMs" (2025). https://searchengineland.com/guide/how-to-write-for-seo

[^27]: WebSelect Agency, "goodClicks, badClicks, and lastLongestClick" (2026). https://webselect.agency/google-leak-click-signals-goodclicks-badclicks-lastlongestclick/

[^28]: WebSelect Agency, "What is NavBoost?" (2026). https://webselect.agency/what-is-navboost-google-ranking-system/

[^29]: NavBoost.com, "How AI Overviews Changed CTR: Data on Google's AI Search Impact" (2026). https://navboost.com/ai-overviews-ctr-impact/

[^30]: BlckAlpaca, "Off-Page SEO 2026: From PageRank to Entity Authority" (2026). https://blckalpaca.at/en/knowledge-base/seo-geo/off-page-seo-link-building/off-page-seo-2026-from-pagerank-to-entity-authority

[^31]: Spilno Agency, "Google's official statements on what affects ranking: a 1998–2026 deep dive" (2026). https://spilnoagency.com.ua/en/instructions-us/google-official-statements-ranking-factors-history

[^32]: WordStream, "The Most Important Google Ranking Factors for 2026" (2026). https://www.wordstream.com/blog/google-ranking-factors

[^33]: That's Belgium, "Technical SEO in the AI Era" (2025). https://thats.be/seo-search-engine-optimization/ai-seo-geo-aeo-beo-gbo-deo-eeat/

[^34]: Yotpo, "Google AI Overviews SEO: 15 Expert Strategies" (2026). https://www.yotpo.com/blog/optimize-google-ai-overviews-geo/

[^35]: OptimizeGEO, "Step-by-Step Guide to GEO in 2026" (2026). https://www.optimizegeo.ai/blog/step-by-step-guide-to-geo-2026

[^36]: Neil Patel, "Google Search Algorithm Changes: 2026 Update" (2026). https://neilpatel.com/blog/the-ultimate-google-algorithm-cheat-sheet/

[^37]: NavBoost.com, "Does CTR Affect SEO Rankings? The Complete Evidence" (2026). https://navboost.com/ctr-ranking-factor/

[^38]: SE Ranking, "Google Page Experience: A Complete Guide" (2025). https://seranking.com/blog/page-experience/

[^39]: ClickRank, "How SEO Works: Complete Guide for 2026" (2026). https://www.clickrank.ai/how-seo-works/

[^40]: GTCode, "Google and the Architecture of Information Control: A Technical Audit" (2026). https://gtcode.com/articles/google-information-control-audit/
