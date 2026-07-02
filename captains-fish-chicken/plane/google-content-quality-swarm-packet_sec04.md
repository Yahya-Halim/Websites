## 4. User Engagement and Behavioral Signals

The preceding chapter established that topical authority is measured through siteFocusScore, siteRadius, and siteEmbeddings, and that hub-and-spoke architecture raises AI citation rates from approximately 12% to 41%. This chapter examines how user behavior interacts with these structural signals to produce ranking outcomes: how clicks, attention, satisfaction, page experience, and content structure jointly determine whether a page earns visibility or accumulates demotion signals.

### 4.1 How User Behavior Feeds Rankings

#### 4.1.1 The CAS Model: Clicks, Attention, and Satisfaction

Google's internal framework for measuring search satisfaction is the CAS model — Clicks, Attention, and Satisfaction — developed by Google Research and published in 2016.[^1] This model captures three behavioral dimensions: whether a user clicked a result (click behavior), how long they remained engaged (attention), and whether their query intent was resolved (satisfaction). The CAS model is notable because it accounts for "good abandonments": scenarios in which a user finds their answer directly on the search results page without clicking a web result. In such cases, the absence of a click is not recorded as a negative signal but as a successful resolution — a distinction that resolves debates about whether low click-through rates (CTR) necessarily indicate poor content quality.

The CAS model's practical implementation extends beyond the search results page. Eric Lehman, a Google Distinguished Engineer for 17 years, testified under oath during the DOJ antitrust trial that NavBoost — Google's primary click-based re-ranking system — stores which URLs were clicked for each query, with "long clicks" (user stays) registered as positive signals and "short clicks" (quick returns) as negative signals.[^2] The 2024 API leak confirmed this, revealing five click signal categories within the CRAPS module (Click-Related Active Promotion Signals): goodClicks, badClicks, lastLongestClicks, unsquashedClicks, and squashedClicks.[^3] A goodClick is classified when a user clicks a result and does not quickly return to the SERP; a badClick occurs when users pogo-stick back within seconds; and lastLongestClicks identifies the result a user stayed on longest before ending their session — the page that "won" the query.[^4]

The historical significance of this system is substantial. Google's use of click data dates to at least 2005, with a 2004 patent filed by Amit Singhal describing navigational patterns for popularity scores.[^5] Udi Manber testified before the FTC in 2012 that "the ranking itself is affected by the click data," describing how Google would switch rankings when 80% of users clicked Result No. 2 versus 10% for Result No. 1.[^6] This testimony predates the 2023 DOJ trial by more than a decade, confirming that behavioral signals have been embedded in Google's infrastructure for nearly twenty years.

#### 4.1.2 Core Web Vitals as Confirmed Ranking Signals

While click-based signals measure behavioral outcomes, Core Web Vitals (CWV) measure the technical conditions that shape those outcomes. Google confirmed CWV as ranking signals with the June 2021 Page Experience update, and they remain foundational through 2026. The three CWV metrics are: Largest Contentful Paint (LCP), which measures loading performance; Interaction to Next Paint (INP), which measures interactivity responsiveness; and Cumulative Layout Shift (CLS), which measures visual stability. The thresholds are defined as follows:

| Metric | Threshold | Pass Rate | Competitive Gap |
|:---|:---|:---|:---|
| Largest Contentful Paint (LCP) | ≤ 2.5 seconds | ~70% of top-10 pages pass | 30% of pages in top-10 fail, creating ranking disadvantage |
| Interaction to Next Paint (INP) | ≤ 200 milliseconds | ~57% of sites pass (43% fail rate) | Most commonly failed CWV; largest technical differentiator |
| Cumulative Layout Shift (CLS) | < 0.1 | ~70% of sites pass | Visual stability is least problematic metric |
| All Three Combined | All thresholds met | ~48% of mobile sites pass | 52% of mobile sites are structurally disadvantaged for rankings |

Table 4.1: Core Web Vitals benchmarks and competitive gap analysis. Pass rate data reflects mobile performance, which Google indexes and ranks using mobile-first indexing. Sources: Isaac Benyakar (2024), Visual Sentinel (2026), SE Ranking (2026).[^7][^8]

The data in Table 4.1 reveals a significant competitive gap: approximately 52% of mobile sites fail to meet one or more CWV thresholds, and pages passing all three metrics have a 24% higher probability of ranking in the top three positions.[^7] Google operates mobile-first indexing, and approximately 53% of mobile users abandon sites that take longer than three seconds to load. The relationship between LCP performance and click behavior is direct: slow pages lose users before they generate a goodClick signal.[^7] Sites with good CWV scores also demonstrate approximately twice the conversion rate of slower counterparts, suggesting technical performance feeds into commercial outcomes beyond rankings alone.[^7]

The INP metric deserves particular attention because it replaced First Input Delay (FID) in March 2024 and now represents the most commonly failed CWV, with approximately 43% of sites still failing at the 200-millisecond threshold.[^8] INP measures the latency of all page interactions, not just the first one, making it a more stringent measure of interactivity. Page experience optimization should prioritize INP remediation as the largest single technical differentiator among the three CWV metrics. The 48% mobile pass rate for all three metrics combined indicates that CWV compliance is still a competitive moat rather than a universal baseline.

#### 4.1.3 Pogo-Sticking as a Negative Signal

If Core Web Vitals create the conditions for positive engagement, pogo-sticking represents the most direct negative behavioral signal a page can accumulate. Pogo-sticking occurs when a user clicks a search result, quickly returns to the SERP, and clicks a different result — behavior that signals the first page failed to satisfy the query intent. The 2024 API leak confirmed that this pattern is explicitly tracked as badClicks through the CRAPS module, and pages with high pogo-stick rates accumulate these negative signals over a 13-month rolling window.[^9]

The persistence of this signal is significant. NavBoost operates on a 13-month rolling window, meaning a page that generates badClicks in January will still carry those negative signals the following December.[^5] The window was reduced from 18 months in 2017, suggesting a deliberate tuning to give more weight to recent behavior while maintaining stability.[^10] For publishers, recovery from poor engagement is not a matter of weeks but of months. NavBoost signals take four or more months to show meaningful ranking movement, and bad click patterns take equally long to wash out.[^11]

The structural implications extend beyond individual pages. The CRAPS module processes click signals at URL-level, host-level, and pattern-level.[^12] A site-wide pattern of pogo-sticking can trigger broader quality penalties through the Firefly module, which lowers siteAuthority and siteFocusScore — signals that gate the initial retrieval engine and prevent the site from surfacing for new queries. The combination of NavBoost's 13-month persistence and Firefly's holistic assessment creates a "quality signal death spiral": poor engagement feeds into site-level demotions, which reduce surfacing, which limits the opportunity to earn new goodClicks. Recovery requires 6–12 months of sustained improvement.[^13]

#### 4.1.4 AI Overview Citations and Engagement Signals

The relationship between behavioral signals and visibility extends beyond traditional blue-link rankings into Google's AI-generated search surfaces. Pages with strong engagement metrics are more likely to be selected as sources for AI Overviews (AIO), while pages with high badClicks are less likely to be cited. Google's FastSearch system, which powers AI Overviews, incorporates 70 days of search logs including click data, meaning pages that have demonstrated strong NavBoost performance are the same pages most likely to be cited in AI-generated answers.[^14]

This creates a virtuous cycle for well-performing pages and a compounding disadvantage for poorly performing ones. AI Overviews reduce organic click-through rates for the top-ranking page by approximately 58%, a figure that nearly doubled from 34.5% to 58% between April and December 2025.[^15] The remaining clicks, though fewer, are more deliberate: a user who clicks past an AI summary is sending a stronger satisfaction signal than a casual SERP click. In this context, lastLongestClick becomes even more indicative of quality, identifying the page that ultimately satisfied the user's intent after they had already been offered an AI-generated answer.[^16]

The overlap between traditional ranking and AI citation is narrow. Only 10.7% of URLs overlap between AI Overviews and AI Mode, and AI Overview citations from URLs not in the top 20 organic results account for 59.6% of all citations.[^17] While engagement signals influence both traditional rankings and AI citations, they are not sufficient alone for AI-era visibility. The dual optimization problem — satisfying both NavBoost's behavioral criteria and AI retrieval systems' passage-quality criteria — is the central tension explored in the following section.

### 4.2 The Two-Layer Content Structure

#### 4.2.1 The Inverted Pyramid Approach

The tension between "answer fast" and "keep them reading" has acquired new urgency as AI retrieval systems and traditional search engines evaluate content through different but overlapping lenses. The inverted pyramid approach — a 40–70 word direct answer at the top, followed by supporting evidence and deep analysis — has emerged as the dominant structural response.[^18] SparkToro data from January 2026 found that 44.2% of all LLM citations come from the first 30% of a piece of content, and answer-first openings under 60 words are extracted 67% more often than buried-answer content.[^19]

The direct answer layer serves Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO). For AEO, the concise opening satisfies featured snippets, People Also Ask boxes, and AI Overview extraction algorithms. For GEO, the same opening provides the quotable fact that LLM retrieval systems favor when constructing citations. The Princeton GEO study found that adding direct quotations lifted citation visibility by 42.6%, adding statistics by 32.8%, and inline source citations by 27.7% — techniques most effective when positioned in the opening.[^20]

However, the inverted pyramid is not simply a formatting trick. It reflects a structural strategy for serving different user intents within the same document. The direct answer satisfies users who need a quick response; the deep content layer that follows satisfies users who need context, evidence, and nuance. Both user types arrive through the same query, and the two-layer structure ensures that neither is alienated.

#### 4.2.2 Serving LLM Extraction and User Engagement Simultaneously

The two-layer content structure is diagrammed in Figure 4.1. The upper layer — the direct answer — is optimized for extraction by LLMs, featured snippets, and AI Overviews. The lower layer — comprising supporting evidence, expert analysis, related topics, and detailed explanation — is optimized for the engagement signals that feed NavBoost.

![Figure 4.1: The Two-Layer Content Structure](google-content-quality-swarm-packet_sec04_fig1.png)

*Figure 4.1: The two-layer content structure. Layer 1 (40–70 words) serves AEO/GEO extraction. Layer 2 (deep content) serves SEO/NavBoost engagement. The tension between these layers is that an answer that satisfies the user too quickly may reduce dwell time, while content that buries its answer may fail to be extracted by AI systems. The optimal structure resolves this tension by front-loading the answer while maintaining depth below.*

The tension between these two layers is genuine and measurable. If the direct answer is too complete, a user may read the first 60 words, achieve satisfaction, and leave — generating a short session that could be classified as a badClick. Conversely, if the answer is buried under preamble, the page may fail to be extracted by AI systems and may trigger pogo-sticking. The resolution lies in the quality of the deep content layer: the direct answer must satisfy the immediate query, but the subsequent content must provide sufficient depth to extend the session. A user who reads the direct answer and continues into supporting evidence is sending a strong lastLongestClick signal — they found the answer, trusted the source, and wanted more.

This dual-purpose structure also serves the "triple optimization" problem: traditional SEO (organic results), AEO (featured snippets and AI Overviews), and GEO (LLM citations in ChatGPT, Perplexity, Gemini).[^21] These three systems evaluate content differently. NavBoost rewards dwell time and session-ending satisfaction; AEO rewards passage-level clarity; GEO rewards entity density and information gain. The two-layer structure is a partial but necessary compromise: it cannot fully optimize for all three simultaneously, but it provides the minimum viable architecture for competing across all three.

#### 4.2.3 Query-Level Signal Independence

A critical but frequently misunderstood property of NavBoost is that click signals are stored per query, per document, per locale — not globally.[^11] The same page can rank well for one query and poorly for a related one. There is no overall "site quality" click score that rescues a page with weak signals on its target query. This means engagement must be earned independently for each target keyword.

The practical implications of query-level segmentation are extensive. A strong homepage with excellent click signals for branded queries does not automatically transfer those signals to a product page targeting an unbranded informational query. Each page must earn its own goodClicks and lastLongestClicks for each target query. NavBoost also differentiates data by device type and geography.[^5] The same page can rank differently depending on whether the user is on mobile or desktop, and whether they are in New York or New Delhi. For multi-regional strategies, engagement optimization is a portfolio of query-specific, locale-specific, and device-specific initiatives.

New pages face the "cold start" problem. NavBoost can only accumulate data after users begin clicking, which means new content ranks initially on traditional signals before click signals adjust position.[^14] Supporting new pages with internal links and promotional traffic helps accelerate NavBoost data accumulation, but the 13-month window means meaningful behavioral signal accumulation requires sustained visibility. A page embedded within a strong hub-and-spoke cluster receives the internal link equity necessary to achieve initial visibility, which then enables the behavioral feedback loop that NavBoost requires.

The behavioral layer of Google's quality evaluation is not a separate system from structural signals but a reinforcing layer that compounds their effects. A page with strong topical authority, excellent technical performance, and strong behavioral engagement accumulates advantages across multiple ranking systems. A page lacking any of these three foundations will find itself progressively disadvantaged.

[^1]: Aleksandr Chuklin and Maarten de Rijke, "Incorporating Clicks, Attention and Satisfaction into a Search Engine Result Page Evaluation Model," Google Research / ACM CIKM, 2016. https://arxiv.org/abs/1609.00552

[^2]: Fahlout Research, "The Reality Gap: Public Guidance vs. Engineering Reality," 2026-03-13. https://fahlout.com/research/reality-gap

[^3]: Luca Tagliaferro, "Does Google Use Clicks as a Ranking Signal?" 2026-05-28. https://www.lucatagliaferro.com/does-google-use-clicks-as-a-ranking-signal/

[^4]: WebSelect Agency, "goodClicks, badClicks, and lastLongestClick: the three click signals the Google leak confirmed," 2026-05-20. https://webselect.agency/google-leak-click-signals-goodclicks-badclicks-lastlongestclick/

[^5]: SE Ranking, "Google Navboost: How it works and how to optimize for it," 2026-04-28. https://seranking.com/blog/navboost/

[^6]: Stanford Law, TTLF Working Papers (citing 2012 FTC testimony by Udi Manber). https://law.stanford.edu/wp-content/uploads/2020/09/johnston_wp62.pdf

[^7]: Isaac Benyakar, "Technical SEO Checklist 2024: Core Web Vitals & Page Speed," 2024-01-05. https://isaacbenyakar.com/blog/technical-seo-checklist-core-web-vitals-page-speed

[^8]: Visual Sentinel, "Core Web Vitals Issues 2026: Debug Guide," 2026. https://visualsentinel.com/blog/core-web-vitals-issues-debug-guide

[^9]: NavBoost.com, "Pogo-Sticking: The Click Signal That Hurts Your Rankings," 2026. https://navboost.com/pogo-sticking/

[^10]: Hobo Web, "Navboost: How User Interactions Rank Websites In Google," 2026-04-13. https://www.hobo-web.co.uk/navboost-how-google-uses-large-scale-user-interaction-data-to-rank-websites/

[^11]: WebSelect Agency, "What is NavBoost? The click-based ranking system Google ran for nearly two decades," 2026-05-20. https://webselect.agency/what-is-navboost-google-ranking-system/

[^12]: Becited, "What the 2024 Google API Leak Taught Us About Ranking Signals," 2026-05-09. https://becited.io/ai-search-guide/google-api-leak

[^13]: Nuclear Engagement, "Website engagement metrics vs Google search rankings," 2025. https://www.nuclearengagement.com/blog/engagement-metrics-vs-google-rankings

[^14]: Ummema Sumamunny, "Does Google Use Clicks as a Ranking Signal? Here Is the Definitive Answer," 2026-05-30. https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/

[^15]: Ahrefs, "Update: AI Overviews Reduce Clicks by 58%," 2026-05-28. https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/

[^16]: NavBoost.com, "How AI Overviews Changed CTR: Data on Google's AI Search Impact," 2026. https://navboost.com/ai-overviews-ctr-impact/

[^17]: Omnibound, "AI SEO Statistics (2026)," 2026-05-29. https://www.omnibound.ai/blog/ai-seo-statistics

[^18]: Search Engine Land, "Writing for SEO: How to write snippet-friendly content that wins in Google and LLMs," 2025. https://searchengineland.com/guide/how-to-write-for-seo

[^19]: Omnibound, "AI Search Statistics (2025-2026)," 2026-04-30. https://www.omnibound.ai/blog/ai-search-statistics

[^20]: Aggarwal et al., "GEO: Generative Engine Optimization," arXiv:2311.09735, KDD 2024. https://arxiv.org/abs/2311.09735

[^21]: SEOPress, "How to Optimize Content for AI Overviews and Generative Search," 2026. https://www.seopress.org/newsroom/featured-stories/generative-engine-optimization/
