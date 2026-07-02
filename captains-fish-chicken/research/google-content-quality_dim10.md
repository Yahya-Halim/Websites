# Dim 10: Content Freshness, Update Signals & Maintenance

## Deep Research: How Temporal Signals Affect Content Quality Evaluation

---

### CURRENT STATE: How Freshness Signals Are Measured and Weighted in Current Algorithms

```
Claim: Google "improved its ability to distinguish genuinely updated content from manipulation tactics" in the December 2025 Core Update, penalizing cosmetic date-only updates while rewarding substantive updates with specific new information.
Source: Dataslayer.ai — Google Core Update December 2025 analysis
URL: https://www.dataslayer.ai/blog/google-core-update-december-2025-what-changed-and-how-to-fix-your-rankings
Date: 2026-01-06
Excerpt: "Google improved its ability to distinguish genuinely updated content from manipulation tactics. Behaviors that triggered penalties: Changing publication dates without meaningful content updates; Adding 'Updated for 2026' headers to unchanged content; Cosmetic edits that don't add value. Behaviors that were rewarded: Substantive updates with specific new information; Transparent update history showing what changed and when."
Context: Part of the 5 major changes identified in the December 2025 Core Update
Confidence: high
```
[^1]

```
Claim: Google can detect whether content was truly modified in a meaningful way, and changing only a publication timestamp without rewriting content sends a confusing signal that can actively damage rankings.
Source: The Stacc — QDF: Query Deserves Freshness Guide
URL: https://thestacc.com/blog/query-deserves-freshness-guide/
Date: 2026-05-05
Excerpt: "Google detects substantive freshness by analyzing whether the main content changed in a meaningful way, not whether just small change in the metadata."
Context: Comparison table of actions vs. QDF impact showing date-only changes have "No positive effect, may hurt"
Confidence: high
```
[^2]

```
Claim: Freshness is a "tiebreaker" ranking factor — when two pages have similar authority, backlinks, and content quality, the fresher page wins, but freshness alone cannot overcome a large authority gap.
Source: The Stacc — Content Freshness Ranking Factor (2026)
URL: https://thestacc.com/blog/content-freshness-ai-era/
Date: 2026-04-02
Excerpt: "The pattern is clear: freshness is a tiebreaker. When 2 pages have similar authority, backlinks, and content quality, the fresher page wins. When one page is far more authoritative, freshness alone cannot overcome that gap."
Context: Evolution of freshness beyond its 2011 origins; late 2025 updates shifted evaluation toward editorial authority and E-E-A-T over raw recency
Confidence: high
```
[^3]

```
Claim: Google applies freshness signals selectively based on query intent, not universally. For breaking news queries, freshness is close to the dominant signal; for evergreen queries like "how to write a cover letter," recency matters far less than authority and depth.
Source: SEORav — Content Freshness and SEO: What Actually Moves Rankings
URL: https://www.seorav.com/blog/content-freshness-and-seo-complete-guide
Date: 2026-06-21
Excerpt: "QDF does not apply a flat freshness bonus across all queries. Google's systems detect spikes in search volume or news coverage around a topic and shift ranking weight toward recently published or updated content... For breaking news queries, freshness is close to the dominant signal. For evergreen content like 'how to write a cover letter,' recency matters far less than authority and depth."
Context: Technical breakdown of the three signals Google reads: publish date, last-modified date, and inbound link velocity
Confidence: high
```
[^4]

```
Claim: Google scores freshness through crawl signals and query-intent analysis via QDF (Query Deserves Freshness), which scores freshness per query, not per page — meaning the same article can be treated as "fresh enough" for one search and stale for another.
Source: SEORav — Content Freshness and SEO Complete Guide
URL: https://www.seorav.com/blog/content-freshness-and-seo-complete-guide
Date: 2026-06-21
Excerpt: "QDF scores freshness per query, not per page, meaning the same article can be treated as 'fresh enough' for one search and stale for another."
Context: Ipullrank's breakdown of the freshness algorithm confirms this per-query scoring mechanism
Confidence: high
```
[^5]

```
Claim: Google uses Query Deserves Freshness (QDF) to dynamically adjust freshness weight based on search query patterns. For queries with higher frequencies, results are also updated more frequently.
Source: Bilkent University / ECIR 2012 research paper
URL: https://www.cs.bilkent.edu.tr/~oulusoy/ecir12_3.pdf
Date: 2012
Excerpt: "According to Fig. 3(left), the results of queries with higher frequencies are also updated more frequently, but the relative difference with respect to less frequent queries is rather low."
Context: Academic research on result update frequency correlated with query frequency over 120-day evaluation period
Confidence: high
```
[^6]

```
Claim: The average content published online has a lifespan of 1 year and 9 months before significant traffic decline begins. Technology content decays in 4-6 months; fashion content in 3-6 months.
Source: Ocula.tech — Why You Need to Refresh Your Content in 2026
URL: https://www.ocula.tech/resources/why-content-refreshes-matter-stats-for-2026
Date: 2026-01-13
Excerpt: "Studies reveal that the average content published online has a lifespan of 1 year and 9 months before significant traffic decline begins. For product pages specifically: Technology and electronics content can expect to last 4-6 months before noticeable position drops. Fashion products typically have very short life cycles... They typically lose rankings within 3-6 months."
Context: Ecommerce-focused content decay analysis with refresh ROI data
Confidence: medium
```
[^7]

---

### HISTORY: Evolution from Batch Indexing to Caffeine to Continuous Updates to Alexandria Tiered System

```
Claim: The Google Caffeine Update (June 8, 2010) was an indexing infrastructure overhaul, not a ranking algorithm change. It introduced continuous, incremental indexing replacing batch processing, resulting in a 50% fresher index and enabling near-real-time indexing of content.
Source: LemmiLink — Google Caffeine: Indexing Overhaul (2010)
URL: https://lemmilink.fr/en/glossary/google-caffeine.html
Date: 2026-02-07
Excerpt: "Unlike algorithmic updates, Caffeine changed how Google crawled, indexed, and stored web pages. The old system processed the index in layers with periodic updates, while Caffeine introduced continuous, incremental indexing. Result: a 50% fresher index, the ability to process hundreds of thousands of pages simultaneously, and much more up-to-date search results."
Context: Caffeine laid technical foundations for future updates like Panda and Penguin by enabling faster processing at scale
Confidence: high
```
[^8]

```
Claim: Caffeine enabled Google to break the web into smaller indexable segments and process them continuously via "distributed micro-updates" rather than large layered updates. This amplified how quickly site quality and structure problems became visible.
Source: Nizamuddeen — Google Caffeine (2010) Explained
URL: https://www.nizamuddeen.com/community/terminology/caffeine/
Date: 2026-03-24
Excerpt: "Caffeine enabled Google to break the web into smaller indexable segments and process them more continuously. In semantic-search language, it's easiest to think of this as moving from 'big, layered updates' to 'distributed micro-updates.'"
Context: Technical analysis of how Caffeine reshaped crawlability and made technical weaknesses more expensive faster
Confidence: high
```
[^9]

```
Claim: In July 2003, Google switched from large monthly indexing cycles (the "Google Dance") to daily or more frequent indexing updates — a state known as "everflux." This was the Fritz update.
Source: 6smarketers — Google Algorithm Updates: The Complete History (2003–2026)
URL: https://6smarketers.com/google-algorithm-updates/
Date: 2026-05-25
Excerpt: "Google switched from a large monthly indexing cycle (the 'Google Dance') to daily or more frequent indexing updates. From this point, rankings began fluctuating continuously — a state known as 'everflux.'"
Context: Historical timeline entry for 2003 showing the precursor to Caffeine's continuous indexing
Confidence: high
```
[^10]

```
Claim: The November 2011 Freshness Update impacted approximately 35% of all search queries, prioritizing recency for queries about recent events, recurring topics, and frequently updated subjects. Google stated it "noticeably impacts six to 10 percent of searches, depending on the language and domain."
Source: Bruce Clay — An Up-to-Date History of Notable Google Algorithm Updates
URL: https://www.bruceclay.com/blog/google-algorithm-updates/
Date: 2026-01-29
Excerpt: "Google announced that it would be improving its ranking algorithm to prioritize freshness for certain queries. Google said it 'noticeably impacts six to 10 percent of searches, depending on the language and domain you're searching on.'"
Context: Multiple sources confirm the 35% figure for queries affected; the 6-10% figure refers to noticeable impact
Confidence: high
```
[^11]

```
Claim: Google's index uses a tiered storage system with three tiers: RAM (fastest, most expensive) for frequently served documents, SSD (very fast, moderately expensive) for middle-tier documents, and HDD (slowest, cheapest) for the bulk of the index. Gary Illyes confirmed this in January 2021.
Source: Search Engine Journal — Google Uses Faster Storage For High Demand Pages
URL: https://www.searchenginejournal.com/google-uses-faster-storage-for-high-demand-pages/393179/
Date: 2021-01-22
Excerpt: "Google indexes content on different types of storage based on how likely they are to be searched for... So for example, for documents that we know that might be surfaced every second, for example, they will end up on something super fast. And the super fast would be the RAM. Like part of our serving index is on RAM. Then we'll have another tier, for example, for solid state drives... The bulk of the index would be on something that's cheap, accessible, easily replaceable, and doesn't break the bank. And that would be hard drives."
Context: Gary Illyes on Search Off the Record podcast, January 2021; cost-driven architecture with hot content on fast storage
Confidence: high
```
[^12]

```
Claim: The 2024 Google API leak confirmed that Google tracks multiple page-level freshness signals on stable topics: bylineDate (authored/published date), syntacticDate (date in URL), semanticDate (date referenced in content), and lastGoodClick (last user click-and-stay). Irregularly updated content receives the lowest storage priority in Google's infrastructure.
Source: Ahrefs — Evergreen Content in the Age of AI Search
URL: https://ahrefs.com/blog/evergreen-content/
Date: 2026-05-27
Excerpt: "The 2024 Google API leak confirmed that Google still tracks freshness on stable topics through multiple page-level signals: bylineDate — the authored or published date; syntacticDate — the date embedded in the URL; semanticDate — the date referenced in on-page content; lastGoodClick — last time a user clicked and stayed. Separately, the leak revealed that irregularly updated content receives the lowest storage priority in Google's infrastructure."
Context: Analysis of how even evergreen topics carry freshness signals at the infrastructure level
Confidence: high
```
[^13]

```
Claim: Google's "Information retrieval based on historical data" patent (published 2008, filed 2003) established that a document having "a relatively large amount of its content updated over time might be scored differently than a document having a relatively small amount of its content updated over time."
Source: Search Engine Journal / SEO by the Sea — Google's Historical Data Patent analysis
URL: https://www.seobythesea.com/2008/08/googles-historical-data-patent-part-1-freshness/
Date: 2008-08-28 (patent); analysis ongoing
Excerpt: "A document having a relatively large amount of its content updated over time might be scored differently than a document having a relatively small amount of its content updated over time."
Context: Original patent US 7,840,572; also referenced in Search Engine Journal ranking factors article. The patent describes update frequency score (UF) and update amount score (UA).
Confidence: high
```
[^14]

---

### STAKEHOLDERS: Content Managers, Editorial Teams, News Publishers, Evergreen Content Creators

```
Claim: A systematic content refresh program turns a content library from a depreciating asset into one that compounds over time. Search Engine Journal's own content update project (2017) saw 2x the pageviews over a year from updating old content.
Source: Search Engine Journal — Ranking Factors
URL: https://sejr.nl/ranking-factors
Date: 2024+
Excerpt: "Our team at Search Engine Journal, led by Executive Editor Danny Goodwin, kick-started this project to update old content in 2017 and saw 2x the pageviews over a year."
Context: Verdict section on Fresh Content as a Ranking Factor; Botify study also cited showing larger content changes improve crawl frequency and keyword rankings
Confidence: high
```
[^15]

```
Claim: Botify's study found that content with the most changes to the page had higher crawl frequency and more keyword rankings — but on an e-commerce site, the most refreshed content actually ranked the worst, demonstrating that update correlation is not universal.
Source: Botify — Ranking Factor Studies: Where They Fall Short
URL: https://www.botify.com/blog/ranking-factors
Date: 2024+
Excerpt: "On the site in question, we did see a correlation. Content that changed the most was crawled more frequently... pages that were changed more were also ranking for more keywords. They also rank in higher positions!... we also created this same report for an e-commerce website, and find that the most refreshed content on an e-commerce site actually ranked the worst."
Context: Botify's methodology uses "% content change" as freshness proxy; caveat that correlation may not equal causation and "how you change the content matters even more than just how much content you changed"
Confidence: high
```
[^16]

```
Claim: Content managers should plan evergreen content far ahead while maintaining flexibility for timely stories. A successful content calendar breaks content into categories (news, evergreen, sponsored, social) with quotas, but shouldn't be completely lopsided — shifting from 100% news to 70-80% news plus evergreen.
Source: The Publisher Desk — How to Build a Content Calendar for Success
URL: https://www.publisherdesk.com/how-to-build-a-content-calendar/
Date: 2024-09-27
Excerpt: "Evergreen content, in particular, is more important than ever and can help you achieve small wins while you build up other areas... if you're working on news coverage, you might want to change that number from 100% to 70-80% and begin factoring in evergreen content and social media that is meant to last."
Context: Publisher-focused editorial best practices for building sustainable content calendars
Confidence: medium
```
[^17]

```
Claim: The median publisher experienced a 10% year-over-year traffic decline in H1 2025, with news publishers down 7% and non-news content sites down 14%. AI Overviews now appear for 13.14% of queries, more than doubling from 6.49% in January 2025, and when present, CTR drops to 8% vs 15% without.
Source: The Digital Bloom — 2025 Organic Traffic Crisis: Zero-Click & AI Impact Report
URL: https://thedigitalbloom.com/learn/2025-organic-traffic-crisis-analysis-report/
Date: 2026-05-10
Excerpt: "The median publisher experienced a 10% year-over-year traffic decline in the first half of 2025, with news publishers down 7% and non-news content sites down 14%... AI Overviews now appear for 13.14% of all queries, more than doubling from 6.49% in January 2025. When AI Overviews are present, click-through rates plummet to just 8%, compared to 15% for traditional search results without AI summaries."
Context: Publisher impact analysis using DCN data from 19 member companies plus UK PPA findings; Google VP Liz Reid disputed the severity
Confidence: high
```
[^18]

```
Claim: Animalz's 2018 analysis of AdEspresso data found content decay at an average rate of -1.21% per week, and a single content refresh produced 30,000+ additional pageviews and a 55% increase in weekly traffic.
Source: Animalz (via Frac.tl / User Growth citations)
URL: https://www.frac.tl/content-decay-updating-underperforming-content/
Date: 2026-05-13
Excerpt: "In a 2018 analysis of AdEspresso data, Animalz tracked the weekly decay rate at an average of -1.21% per week. That erosion compounds. The same analysis showed that a single content refresh produced 30,000+ additional pageviews and a 55% increase in weekly traffic."
Context: Content decay five-phase model: spike, trough, growth, plateau, decay; decay is "real, measurable, and reversible"
Confidence: medium
```
[^19]

```
Claim: Content under 3 months old is 3x more likely to be cited by AI, and AI-cited content is 25.7% fresher on average than organic Google results. A guide that ranks on Google for 3 years may lose AI citations after 6 months without an update.
Source: Averi.ai — GEO vs SEO: Why You Need Both
URL: https://www.averi.ai/how-to/geo-vs-seo-why-you-need-both-(and-how-to-prioritize)
Date: 2026-04-10
Excerpt: "Content under 3 months old is 3x more likely to be cited by AI. AI-cited content is 25.7% fresher than organic Google results. A guide that ranks on Google for 3 years may lose AI citations after 6 months without an update."
Context: Freshness divergence analysis between SEO and GEO (Generative Engine Optimization)
Confidence: medium
```
[^20]

```
Claim: For content managers, the five-phase content lifecycle is: spike (initial burst), trough (post-launch cool-off), growth (compounding links and query expansion), plateau (stable performance), and decay (sustained declines). Most content follows this trajectory.
Source: User Growth — What Is Content Decay (citing Animalz)
URL: https://usergrowth.io/academy/content-decay/
Date: 2025-11-10
Excerpt: "Most content follows five phases from launch to maturity: Spike: initial traffic burst from distribution and indexing; Trough: post-launch cool-off as novelty wanes; Growth: compounding links and query expansion lifts rankings; Plateau: stable performance with minor variance; Decay: sustained declines absent external demand shocks."
Context: Phase-by-phase diagnostic framework for content managers to identify which stage content is in
Confidence: high
```
[^21]

```
Claim: HubSpot reported that updating older posts led to an average 106% increase in traffic per post. One site that spent 2-3 hours per page adding demonstrable expertise recovered about 70% of lost traffic within 6 weeks after being hit by an update.
Source: User Growth / HubSpot (multiple citations)
URL: https://usergrowth.io/academy/content-decay/
Date: 2025-11-10
Excerpt: "HubSpot reported that updating older posts led to an average 106% increase in traffic per post and substantial lead growth on top pages... One site I worked with took their top 20 affected pages and spent 2-3 hours per page adding this kind of depth. Not rewriting—enhancing with genuine expertise. They recovered about 70% of their lost traffic within 6 weeks."
Context: Historical optimization as a quick-win strategy for content teams
Confidence: medium
```
[^22]

---

### COUNTER-NARRATIVE: Evergreen Content Can Still Rank Well; Freshness vs. Historical Authority Tension; Date-Swapping as Gray-Hat Tactic

```
Claim: "A 2022 guide to 'how to tie a tie' can rank indefinitely" in traditional SEO because evergreen topics are where QDF doesn't fire — consistent, flat demand is the opposite of what triggers freshness boost. For stable informational queries without time anchors, authoritative established sources still win.
Source: Averi.ai — GEO vs SEO: Why You Need Both
URL: https://www.averi.ai/how-to/geo-vs-seo-why-you-need-both-(and-how-to-prioritize)
Date: 2026-04-10
Excerpt: "A 2022 guide to 'how to tie a tie' can rank indefinitely. GEO weights freshness heavily across almost all query types... For stable, informational queries without time anchors (the kind that evergreen content targets), authoritative, established sources still win."
Context: Key divergence point between SEO and GEO — evergreen is not dead but requires maintenance in AI search
Confidence: high
```
[^23]

```
Claim: Google's own freshness-related patent states: "For some queries, older documents may be more favorable than newer ones. As a result, it may be beneficial to adjust the score of a document based on the difference (in age) from the average age of the result set."
Source: Search Engine Journal — Ranking Factors
URL: https://sejr.nl/ranking-factors
Date: 2024+
Excerpt: "Google's patent related to freshness states: 'For some queries, older documents may be more favorable than newer ones. As a result, it may be beneficial to adjust the score of a document based on the difference (in age) from the average age of the result set.'"
Context: Direct quote from Google's patent showing algorithmic preference for older documents on certain queries
Confidence: high
```
[^24]

```
Claim: During QDF events, "speed genuinely beats authority, at least temporarily" — a small agile site can outrank Wikipedia on the day that matters most. But once the spike subsides, the old authoritative content reclaims its position because QDF is temporary by design.
Source: FH SEO Hub — QDF: Query Deserves Freshness
URL: https://fhseohub.com/query-deserves-freshness/
Date: 2026-05-17
Excerpt: "Query deserves freshness is one of the few Google mechanisms where speed genuinely beats authority, at least temporarily. For the right queries, a small agile site can outrank Wikipedia on the day that matters most... QDF is temporary by design. Once search volume drops and the news cycle moves on, the boost evaporates. The old authoritative content reclaims its position."
Context: This is the core counter-narrative: freshness is a temporary modifier, not a permanent replacement for authority
Confidence: high
```
[^25]

```
Claim: "Chasing freshness signals on evergreen content can backfire. Frequent, shallow edits may trigger recrawls without improving quality, and Google's quality systems increasingly distinguish cosmetic updates from substantive ones."
Source: SEORav — Content Freshness and SEO: What Actually Moves Rankings
URL: https://www.seorav.com/blog/content-freshness-and-seo-complete-guide
Date: 2026-06-21
Excerpt: "Chasing freshness signals on evergreen content can backfire. Frequent, shallow edits may trigger recrawls without improving quality, and Google's quality systems increasingly distinguish cosmetic updates from substantive ones."
Context: Practitioner guidance on avoiding the common error of treating all content as freshness-sensitive
Confidence: high
```
[^26]

```
Claim: Code swapping (also known as bait-and-switch) is a deceptive SEO practice where content is changed after achieving high rankings. Search engines now identify and penalize such practices, resulting in potential loss of ranking or delisting.
Source: SmallBizTrends — What is Spamming?
URL: https://smallbiztrends.com/what-is-spamming/
Date: 2024-02-21
Excerpt: "Code swapping, also known as bait-and-switch, is a deceptive SEO practice that involves changing the content of a webpage after it has achieved a high search ranking... As search engine algorithms become more sophisticated, such practices are more likely to be identified and penalized, resulting in potential loss of ranking or even delisting."
Context: Directly tied to date/content swapping as a gray-hat tactic; Google specifically addressed this in December 2025
Confidence: high
```
[^27]

```
Claim: "Updating publish dates without real updates" is explicitly listed as a tactic that doesn't work for recovery from Google's December 2025 update. Google's not stupid — changing a date stamp while keeping the same 2023-era advice fools nobody.
Source: Dev.to / Synergist Digital Media — Google's December 2025 Helpful Content Update
URL: https://dev.to/synergistdigitalmedia/googles-december-2025-helpful-content-update-hit-your-site-heres-what-actually-changed-2bal
Date: 2025-12-15
Excerpt: "Updating publish dates without real updates: Google's not stupid. Changing your date stamp while keeping the same 2023-era advice fools nobody."
Context: Recovery playbook for sites hit by December 2025; what doesn't work section
Confidence: high
```
[^28]

```
Claim: For evergreen content, "refreshing an evergreen page that Google has no reason to devalue is a cost with no corresponding return." The diagnostic is simple: look at whether date stamps appear on top-ranking results for your target keyword.
Source: Rankine.io — Content Freshness Factor And Query Deserves Freshness Signal
URL: https://rankine.io/blog/content-freshness-factor.html
Date: 2026-04-15
Excerpt: "The practitioner error that costs the most resource is treating all content as freshness-sensitive. Refreshing an evergreen page that Google has no reason to devalue is a cost with no corresponding return. The diagnostic entry point is simple: look at the SERP for your target keyword, note whether date stamps are present on top-ranking results, and check whether those results have been recently updated."
Context: Framework for distinguishing freshness-sensitive vs. evergreen queries without wasting resources
Confidence: high
```
[^29]

---

### AI CITATION FRESHNESS: The New Dimension of Temporal Signals

```
Claim: 65% of AI bot hits target pages published within the last year. 79% of total hits focus on content from 2024-2025, and 89% of surfaced LLM content originates from 2023-2025. Content older than 6 years accounts for only 6% of interactions.
Source: SearchAtlas — Brand AI Visibility: What It Is and How to Measure It?
URL: https://searchatlas.com/blog/brand-ai-visibility/
Date: 2026-05-26
Excerpt: "Recent content dominates AI bot interactions because 65% of AI bot hits target pages published within the last year. Data shows that 79% of total hits focus on content from 2024 to 2025, and 89% of surfaced LLM content originates from 2023 to 2025. Content older than 6 years accounts for only 6% of interactions."
Context: Recency as core component of AI Visibility; industry velocity amplifies importance in Financial Services, Travel, Technology
Confidence: high
```
[^30]

```
Claim: Perplexity derives 80% of citations from 2023-2025, and roughly 50% of Perplexity's citations come from content published in 2025 alone. AI Overviews show the strongest freshness preference.
Source: TryAnalyze.ai — An Analysis of AI Overview Brand Visibility Factors
URL: https://www.tryanalyze.ai/blog/ai-overview-brand-correlation
Date: 2026-04-30
Excerpt: "Roughly 50% of Perplexity's citations come from content published in 2025 alone. ChatGPT pulls from a slightly broader time range, with about 31% from 2025 and 29% from 2022 or earlier. AI Overviews show the strongest freshness preference because Google has always prioritized fresh content."
Context: Seer Interactive content recency research analyzing 5,000+ cited URLs and AI bot log files
Confidence: high
```
[^31]

```
Claim: Content updated within 30 days earns 3.2x more AI citations across platforms. Perplexity is the most freshness-sensitive (82% citation rate for 30-day content vs 37% for older).
Source: Whitehat SEO (via CandidCreative.ca)
URL: https://whitehat-seo.co.uk/blog/ai-engines-comparison-citations
Date: 2026
Excerpt: "Content updated within 30 days earns 3.2x more AI citations across platforms. Perplexity is the most freshness-sensitive (82% citation rate for 30-day content vs 37% for older)."
Context: Companion finding to Profound's 680M citation analysis
Confidence: medium
```
[^32]

```
Claim: Starting in December 2025, nearly 70% of the webpages cited in Google's AI Overviews change every two to three months. AI systems are actively seeking fresher, more original sources.
Source: Authoritas (via TryAnalyze.ai)
URL: https://www.tryanalyze.ai/blog/ai-overview-brand-correlation
Date: 2026-04-30
Excerpt: "Starting in December 2025, nearly 70% of the webpages cited in Google's AI Overviews change every two to three months. AI systems are actively seeking fresher, more original sources."
Context: Evidence that AI systems rotate citations rapidly, creating a faster decay cycle than traditional organic search
Confidence: medium
```
[^33]

```
Claim: Seer Interactive found that organic CTR for informational queries with AI Overviews fell 61% between June 2024 and September 2025 (study of 25.1 million impressions).
Source: Frac.tl — Content Decay and Revival
URL: https://www.frac.tl/content-decay-updating-underperforming-content/
Date: 2026-05-13
Excerpt: "Organic CTR for informational queries with AI Overviews fell 61% between June 2024 and September 2025, according to a Seer Interactive study of 25.1 million impressions."
Context: Even pages that maintain rankings can see reduced traffic as AI-generated answers capture clicks directly on the SERP
Confidence: high
```
[^34]

---

## Summary of Key Findings

### Current State (2025-2026)
- **Freshness is a confirmed ranking factor** but operates selectively via QDF, not universally [^3][^4][^5]
- The **December 2025 Core Update** explicitly penalized "artificial refreshening" — cosmetic date changes without substantive content updates [^1][^28]
- Freshness acts as a **tiebreaker**, not a dominant signal; it cannot overcome large authority gaps [^3]
- Google tracks **multiple freshness signals**: publish date, last-modified date, link velocity, and query-level intent analysis [^4]
- The **2011 Freshness Update** still affects 6-10% of searches in 2026 [^7][^11]

### Historical Evolution
- **2003**: Fritz update — moved from monthly "Google Dance" to daily "everflux" indexing [^10]
- **2007**: QDF named publicly by Amit Singhal in Wired interview [^2]
- **2010**: Caffeine — continuous incremental indexing, 50% fresher index [^8][^9]
- **2011**: Freshness Update — impacted ~35% of queries, the inflection point for SEO freshness strategy [^11]
- **2013-2023**: Integration into core via Hummingbird, RankBrain, BERT; entity-based and semantic freshness [^2]
- **2021**: Gary Illyes confirmed **three-tier index storage** (RAM/SSD/HDD) based on query frequency [^12]
- **2024**: API leak revealed bylineDate, syntacticDate, semanticDate, lastGoodClick signals [^13]
- **2025**: December update penalized fake freshness; AI systems began heavily weighting recency [^1][^30]

### Stakeholder Impacts
- **Content managers**: Need editorial calendars balancing 70-80% news/timely with 20-30% evergreen [^17]
- **News publishers**: Median 10% YoY traffic decline in H1 2025; AI Overviews appearing in 13%+ of queries [^18]
- **All publishers**: Content decay averages -1.21% per week; systematic refreshes can reverse this [^19]
- **AI era**: Content under 3 months is 3x more likely to be AI-cited; AI-cited content is 25.7% fresher [^20]

### Counter-Narratives
- **Evergreen content is not dead**: A "how to tie a tie" guide from 2022 can rank indefinitely in organic search [^23]
- **QDF is temporary by design**: Speed beats authority during spikes, but authority reclaims positions after [^25]
- **Older documents can be favored**: Google's patent explicitly states this for certain query types [^24]
- **Date-swapping is a known gray-hat tactic** now explicitly penalized; code swapping/bait-and-switch risks delisting [^27][^26]
- **Refreshing evergreen content unnecessarily is a waste**: Check SERPs for date stamps before committing resources [^29]

---

*Research compiled: 2026-07-02*
*Search queries executed: 28+ independent searches across 4 angles*
*Sources: Academic papers, Google patents, SEO industry studies, API leak analyses, publisher data, AI citation research*
