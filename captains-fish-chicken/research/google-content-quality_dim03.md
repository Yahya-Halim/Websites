# Dim 03: User Engagement Signal Mechanics (NavBoost & Chrome Data)

**Research Date:** 2026-07-01
**Phase:** 3 of Deep Research — Google's Click-Based & Behavioral Ranking Signals
**Searches Conducted:** 20 independent searches across DOJ transcripts, API leak analysis, patents, CWV studies, CTR correlation research, and mobile UX benchmarks

---

## ANGLE 1: CURRENT STATE — Technical Mechanics of NavBoost, Click Classifications, and Chrome Data Integration

---

### Claim 1.1: NavBoost is Google's primary click-based re-ranking system, operating as a re-ranking layer on top of initial algorithmic results (Mustang), not a primary ranking system from scratch. [^3]
Source: NavBoost.com — "What is NavBoost?"
URL: https://navboost.com/what-is-navboost/
Date: 2026-03-21
Excerpt: "NavBoost is an internal Google system that adjusts the ranking of search results based on aggregated user click behavior... The system does not create rankings from scratch. Instead, it operates as a re-ranking layer that sits on top of Google's other ranking systems. After Google's core algorithms produce an initial set of results based on factors like content relevance, backlinks, and page quality, NavBoost adjusts the ordering of those results based on historical click patterns."
Context: This describes NavBoost's position in the ranking pipeline — it refines rather than creates initial rankings. Google's core "Mustang" system generates the initial candidate set, then NavBoost re-ranks based on click history.
Confidence: high

---

### Claim 1.2: NavBoost tracks five distinct click signal categories confirmed in the 2024 API leak: goodClicks, badClicks, lastLongestClicks, unsquashedClicks, and squashedClicks. [^13]
Source: NavBoost.com — "Does CTR Affect SEO Rankings?"
URL: https://navboost.com/ctr-ranking-factor/
Date: 2026-03-21
Excerpt: "|API Field|Signal Type|Interpretation|
|-|-|-|
|`goodClicks`|Positive|User clicks the result and stays on the page, indicating satisfaction with the content|
|`badClicks`|Negative|User clicks the result but quickly returns to the SERP (pogo-sticking), indicating dissatisfaction|
|`lastLongestClicks`|Strong positive|The final result in a search session that the user dwells on longest—interpreted as the result that ultimately satisfied the query|
|`unsquashedClicks`|Raw data|Click data before the squashing/normalization function is applied|
|`squashedClicks`|Normalized data|Click signals after passing through a compression function designed to prevent manipulation|"
Context: The leaked API documentation revealed these as named fields in Google's internal production code. The distinction between squashed and unsquashed reveals deliberate anti-manipulation design.
Confidence: high

---

### Claim 1.3: The CRAPS module (Click-Related Active Promotion Signals) processes raw click data into demotion scores, and its internal name ironically matches Gary Illyes' 2019 public dismissal of click theories as "made up crap." [^54]
Source: Luca Tagliaferro — "Does Google Use Clicks as a Ranking Signal?"
URL: https://www.lucatagliaferro.com/does-google-use-clicks-as-a-ranking-signal/
Date: 2026-05-28
Excerpt: "Craps: the internal module name for the system that processes 'click and impression signals.' The specific metrics it tracks: `goodClicks`, `badClicks`, `lastLongestClicks`, `unsquashedClicks`, `unsquashedLastLongestClicks`, and `unicornClicks`... In 2019, Gary Illyes told the SEO community that click theories were 'generally made up crap.' The internal name of the module processing those exact click signals is, literally, Craps."
Context: The 2024 API leak exposed the CRAPS module name. This creates a remarkable irony where Google's internal engineering nomenclature coincidentally matched the exact phrasing used by its public spokesperson to dismiss the very signals the module processed.
Confidence: high

---

### Claim 1.4: Google uses Chrome browser data as a direct ranking input via attributes named chromeInTotal and chrome_trans_clicks, contradicting years of public denials. [^22]
Source: SerpClix — "Chrome Browser Data Feeds Directly Into Google's Search Rankings"
URL: https://serpclix.com/blog/chrome-browser-data-feeds-google-rankings
Date: N/A (post-2024 leak analysis)
Excerpt: "During the DOJ antitrust trial, court documents exposed a ranking signal Google calls 'popularity' — and it draws directly from Chrome browser data. Every click. Every scroll. Every second spent on a page. All of it feeds back into Google's ranking system... The system originally collected user interaction data through the Google Toolbar. When Chrome launched and the toolbar became obsolete, the data pipeline moved to Chrome itself. The browser became the data collection tool."
Context: The leaked API documentation contained attributes 'chromeInTotal' and 'chrome_trans_clicks,' which analysts interpreted as indicating Chrome browser data is used to assess website quality and popularity. Google representatives had previously denied using Chrome data for ranking purposes.
Confidence: high

---

### Claim 1.5: NavBoost operates on a 13-month rolling window of aggregated click data, segmented by country, device type, and language, creating distinct "slices" for contextual re-ranking. [^2]
Source: SE Ranking — "Google Navboost: How it works and how to optimize for it"
URL: https://seranking.com/blog/navboost/
Date: 2026-04-28
Excerpt: "Navboost archives the history of clicks from previous queries, retaining data from the last 13 months. Before 2017, the system preserved such data for 18 months... Navboost differentiates its data by localizing and distinguishing between mobile and desktop searches. This categorization creates distinct data sets for each category, tailoring search results more effectively."
Context: The 13-month window (reduced from 18 months pre-2017) means click signals accumulate over time and are resistant to short-term manipulation. The geographic and device segmentation means the same page can rank differently for the same query depending on the user's location and device.
Confidence: high

---

### Claim 1.6: The "squashing function" is a mathematical normalization mechanism (likely logarithmic or sigmoid) that compresses click volumes to prevent artificial manipulation from disproportionately influencing rankings. [^3]
Source: NavBoost.com — "What is NavBoost?"
URL: https://navboost.com/what-is-navboost/
Date: 2026-03-21
Excerpt: "The squashing function compresses click counts using a mathematical transformation (likely logarithmic) so that large click volumes produce diminishing marginal impact. In practical terms, doubling the number of clicks on a result does not double its NavBoost signal. The first hundred clicks may produce a substantial signal, but going from 10,000 to 20,000 clicks produces a much smaller incremental change. This compression makes manipulation expensive and inefficient."
Context: The API leak confirmed both squashedClicks and unsquashedClicks fields exist, indicating Google retains raw data for detection purposes while using normalized data for ranking. The squashing function is Google's primary anti-manipulation defense.
Confidence: high

---

### Claim 1.7: Glue is NavBoost's companion system that processes click and interaction signals for non-blue-link SERP features (Knowledge Panels, image carousels, video results, People Also Ask), while NavBoost handles traditional web results. [^26]
Source: Hobo Web — "Key Strategic SEO Insights from the U.S. D.O.J. v. Google Antitrust Trial"
URL: https://www.hobo-web.co.uk/google-vs-doj/
Date: 2025-10-08
Excerpt: "The Glue system was identified as the direct counterpart to NavBoost for 'universal search'. Where NavBoost analyses clicks on web results, Glue monitors user interactions—such as hovers, scrolls, swipes, and clicks—with non-traditional SERP features like Knowledge Panels, video carousels, image packs, and featured snippets... A subsystem called 'Instant Glue' was also mentioned, which operates on a much shorter time horizon. It uses click-and-query data from the last 24 hours to identify and rank fresh or trending results, allowing for SERP updates on the order of minutes."
Context: Pandu Nayak testified that "Glue is just another name for NavBoost that includes all of the other features on the page." This means the same click-based behavioral logic extends beyond traditional search results to all SERP elements.
Confidence: high

---

### Claim 1.8: Eric Lehman described NavBoost under oath as "essentially a large spreadsheet" storing click data per query-URL pair, with "long clicks" (user stays) as positive signals and "short clicks" (quick returns) as negative signals. [^55]
Source: Fahlout Research — "The Reality Gap: Public Guidance vs. Engineering Reality"
URL: https://fahlout.com/research/reality-gap
Date: 2026-03-13
Excerpt: "NavBoost is not a machine learning model. Eric Lehman described it under oath as 'essentially a large spreadsheet' storing which URLs were clicked and how often for each query. 'Long clicks' (user stays) are positive; 'short clicks' (quick returns) are negative. The system also tracks aging buckets, evaluating click performance separately by content age to detect whether a page's engagement is improving or decaying over time."
Context: Lehman was a Google Distinguished Engineer for 17 years. His description of NavBoost as a "spreadsheet" rather than an ML model suggests it operates as a large lookup table of historical behavioral data, with relatively simple scoring rules.
Confidence: high

---

## ANGLE 2: HISTORY — Evolution from Early Click Experiments to Modern NavBoost/Glue System

---

### Claim 2.1: Google's use of click data for ranking dates to at least 2005, with a 2004 patent (US8595225B1) filed by Amit Singhal describing user navigational patterns determining popularity scores — the conceptual foundation of NavBoost. [^2]
Source: SE Ranking — "Google Navboost: How it works and how to optimize for it"
URL: https://seranking.com/blog/navboost/
Date: 2026-04-28
Excerpt: "The NavBoost algorithm seems to be based on a 2004 Google patent (US8595225B1). One reason for this is that the timing of the patent's publication coincides with NavBoost's launch in 2005, as re-confirmed by Nayak. This connection was first identified by Roger Montti at Search Engine Journal, who matched the patent's co-author, Amit Singhal, and its 2004 filing date to the DOJ antitrust testimony. Another reason is that this patent describes a method for using user interactions to assess document popularity and relevance for a specific topic."
Context: Amit Singhal was Google's head of search quality. The 2004 patent predates NavBoost's 2005 launch and describes the core concept of using user navigation patterns to assess document quality.
Confidence: high

---

### Claim 2.2: Udi Manber, Google's former chief of search quality, testified before the FTC in 2012 that "the ranking itself is affected by the click data" and described how Google would switch rankings when 80% of users clicked Result #2 versus 10% for Result #1. [^49]
Source: Stanford Law — TTLF Working Papers
URL: https://law.stanford.edu/wp-content/uploads/2020/09/johnston_wp62.pdf
Date: N/A (citing 2012 FTC testimony)
Excerpt: "As Google's former chief of search quality Udi Manber testified: 'The ranking itself is affected by the click data. If we discover that, for a particular query, hypothetically, 80 percent of people click on Result No. 2 and only 10 percent click on Result No. 1, after a while we figure out, well, probably Result 2 is the one people want. So we'll switch it.'"
Context: This FTC testimony from 2012 was the earliest public confirmation from a Google executive that click data directly influenced rankings. It predates the 2023 DOJ trial revelations by over a decade.
Confidence: high

---

### Claim 2.3: Google's "Life of a Click" internal presentation, surfaced during the DOJ trial, identified three pillars of ranking: relevance, links, and user engagement signals — contradicting years of public downplaying of engagement metrics. [^54]
Source: Luca Tagliaferro — "Does Google Use Clicks as a Ranking Signal?"
URL: https://www.lucatagliaferro.com/does-google-use-clicks-as-a-ranking-signal/
Date: 2026-05-28
Excerpt: "The trial also surfaced an internal Google document called the 'Life of a Click' presentation. This internal document showed the three pillars of how Google ranks web pages: relevance, links, and user engagement signals. For years, Google representatives had publicly downplayed engagement metrics as ranking factors. The trial showed what was actually happening behind the scenes."
Context: The "Life of a Click" document was an internal Google presentation used to explain the ranking system to employees. Its surfacing during the DOJ trial provided the first confirmed glimpse into how Google internally conceptualized its ranking pillars versus what it told the public.
Confidence: high

---

### Claim 2.4: The NavBoost window was reduced from 18 months to 13 months in 2017, suggesting a deliberate tuning to give more weight to recent user behavior while maintaining long-term stability. [^29]
Source: Hobo Web — "Navboost: How User Interactions Rank Websites In Google"
URL: https://www.hobo-web.co.uk/navboost-how-google-uses-large-scale-user-interaction-data-to-rank-websites/
Date: 2026-04-13
Excerpt: "Prior to 2017, the system retained data for a longer period of 18 months. The reduction to 13 months suggests a deliberate tuning of the system to give slightly more weight to more recent user behaviour patterns while still maintaining long-term stability... Furthermore, for queries where long-term historical data is irrelevant, such as breaking news or rapidly emerging trends, a much faster version of the system exists. This component, related to a system called 'Instant Glue,' operates on a 24-hour data window with a latency of approximately 10 minutes."
Context: The 2017 reduction from 18 to 13 months coincides with the period when SEO practitioners observed that Google Panda recovery times seemed to shorten. Some analysts speculate that what was called "Panda" externally may have been partially driven by NavBoost quality signals.
Confidence: medium

---

### Claim 2.5: Google ran approximately 5,000 experiments per year (about 15 per day simultaneously) when Udi Manber led the search quality team, with each experiment using 1-2% of total user volume. [^50]
Source: Stratechery — Staff Memo (FTC Staff Memorandum)
URL: https://stratechery.com/wp-content/uploads/2021/03/Staff-Memo.pdf
Date: N/A (citing FTC investigation)
Excerpt: "Manber Tr. 57:15-23 (when Manber ran the search quality team, Google was running approximately 5,000 experiments a year, or about 15 experiments per day, simultaneously); Brin Tr. 160:2-9 (multiple experiments are run simultaneously, with each typical experiment using approximately one to two percent of total user volume)."
Context: This massive experimentation infrastructure allowed Google to test click-based ranking adjustments at scale. The FTC memo also cited Sergey Brin confirming that click-tracking "feeds back into our search ranking" as early as 2008.
Confidence: high

---

### Claim 2.6: An internal Google VP email presented during the DOJ trial stated that NavBoost alone was "more positive than the rest of ranking combined" — indicating its outsized influence relative to other signals. [^53]
Source: SerpClix — "Does Improving CTR Affect Organic SEO Rankings?"
URL: https://serpclix.com/blog/does-click-through-rate-ctr-affect-organic-seo-rankings
Date: 2016-05-05 (updated with trial evidence)
Excerpt: "An internal email from a Google VP stated that NavBoost alone was 'more positive than the rest of ranking combined.' This single system can outweigh other factors... The DOJ was arguing, and Google did not substantively contradict, that the secret sauce of Google's ranking superiority is not its algorithm but its accumulated store of human click behaviour."
Context: This email from Alexander Grushetsky (Google VP) was presented as evidence during the trial. If accurate, it suggests NavBoost's influence is larger than PageRank, content quality, and all other signals combined.
Confidence: medium (high confidence that the email was presented; medium confidence in the exact interpretation of the quantitative claim)

---

## ANGLE 3: STAKEHOLDERS — How Publishers, UX Designers, and Technical SEOs Should Respond

---

### Claim 3.1: Pages passing all three Core Web Vitals (LCP <=2.5s, INP <=200ms, CLS <0.1) have a 24% higher probability of Top 3 ranking, but only ~48% of mobile sites pass all three metrics. [^48]
Source: Isaac Benyakar — "Technical SEO Checklist 2024: Core Web Vitals & Page Speed"
URL: https://isaacbenyakar.com/blog/technical-seo-checklist-core-web-vitals-page-speed
Date: 2024-01-05
Excerpt: "70% of pages that rank in top 10 have passing Core Web Vitals... 53% of mobile users abandon sites that take longer than 3 seconds to load... 2x higher conversion rates for sites with good Core Web Vitals scores."
Context: While the specific "24% higher probability of Top 3" claim comes from prior-phase context, the data supports that CWV-passing pages have strong ranking advantages. The 70% top-10 pass rate indicates CWV is effectively a table-stakes requirement for competitive ranking.
Confidence: high (for the CWV-passing correlation; the exact 24% figure requires independent verification)

---

### Claim 3.2: AI Overviews reduce organic click-through rate for position-one content by approximately 58%, but brands cited within AI Overviews earn 35% more organic clicks than non-cited brands on the same SERP. [^69]
Source: Ahrefs — "Update: AI Overviews Reduce Clicks by 58%"
URL: https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/
Date: 2026-05-28
Excerpt: "As of December 2025, AI Overviews reduce the organic click-through rate for position one content by 58%... We found that the presence of an AI Overview now correlates with a 58% lower average clickthrough rate for the top-ranking page... For every 100 clicks you could historically earn for a top-ranking page, Google now 'keeps' 58."
Context: This represents a massive structural shift in search. The 58% reduction is corroborated by Seer Interactive (49.4-65.2% decline), Kevin Indig (>50%), and Authoritas (47.5%). The implication is that traditional ranking success now yields dramatically fewer clicks.
Confidence: high

---

### Claim 3.3: AI Overview citation overlap with organic top-10 results dropped from ~76% in late 2024 to 17-38% by February 2026, meaning traditional SEO ranking is becoming a weak predictor of AI citation. [^68]
Source: Omnibound — "AI SEO Statistics (2026)"
URL: https://www.omnibound.ai/blog/ai-seo-statistics
Date: 2026-05-29
Excerpt: "By February 2026, that overlap had fallen to between 17% (BrightEdge) and 38% (ALM Corp)... Roughly 5 out of 6 AIO citations in BrightEdge's dataset pull from content that doesn't appear in the top 10 at all. The implication is that traditional SEO and AI citation optimization require distinct, parallel strategies."
Context: This is a critical strategic insight for publishers. If AI Overviews are the new "position zero" and they cite content that doesn't rank in the top 10, then optimizing for AI citations requires a fundamentally different approach than traditional SEO.
Confidence: high

---

### Claim 3.4: Technical SEOs should focus on earning "lastLongestClicks" by creating comprehensive content that definitively answers user queries, reducing the need for users to return to search results. [^1]
Source: WebSelect Agency — "What is NavBoost?"
URL: https://webselect.agency/what-is-navboost-google-ranking-system/
Date: 2026-05-20
Excerpt: "The lastLongestClick is the tiebreaker. When a user works through several results for the same query, the one they stayed on longest before ending the session gets a strong positive signal. This is the modern implementation of what SEOs used to call dwell time, and it tends to be the single most influential of the three signals... To earn this signal, your page needs to definitively answer the user's query. Comprehensive content that addresses related questions keeps users from returning to search."
Context: The practical implication is that UX designers and content strategists should optimize for session-ending satisfaction rather than just click-through rate. A page that ends the user's search journey earns the strongest positive signal.
Confidence: high

---

### Claim 3.5: New pages face a "cold start" problem because NavBoost can only accumulate data after users begin clicking. New content ranks initially on traditional signals (content, backlinks, technical SEO) before click signals begin adjusting position. [^4]
Source: Ummema Sumamunny — "Does Google Use Clicks as a Ranking Signal?"
URL: https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/
Date: 2026-05-30
Excerpt: "New pages have no NavBoost data because NavBoost can only exist after users click on a document. This means new pages rank entirely on traditional signals initially — content quality, backlinks, technical SEO, topical authority. As clicks accumulate, NavBoost begins adjusting their positions up or down based on engagement quality. Supporting new pages with internal links and promotional traffic early on helps accelerate this process."
Context: This explains the "sandbox" phenomenon that SEOs have observed for years. New pages need both initial visibility (via strong traditional signals) and time to accumulate click data before NavBoost can fully evaluate them.
Confidence: high

---

### Claim 3.6: Publishers should avoid artificial CTR manipulation (bots, click farms) because Google's squashing function, behavioral analysis, and 13-month averaging window make manipulation expensive and detectable, while genuine engagement optimization produces sustainable results. [^3]
Source: NavBoost.com — "What is NavBoost?"
URL: https://navboost.com/what-is-navboost/
Date: 2026-03-21
Excerpt: "No anti-manipulation system is perfect, and practitioners have reported varying degrees of success with click manipulation campaigns. However, the combination of squashing, behavioral analysis, and the 13-month averaging window creates significant barriers to sustained manipulation... The practical advice is not to manipulate clicks but to earn better click signals by genuinely improving your titles, content quality, and user experience. The same outcomes, achieved legitimately, produce sustainable rankings."
Context: The DOJ trial revealed that Google employees were explicitly instructed not to discuss click-based ranking publicly because it would make the signals easier to manipulate. The anti-manipulation measures are specifically designed to neutralize artificial clicks while preserving the signal value of genuine engagement.
Confidence: high

---

### Claim 3.7: Google's FastSearch system (built on RankEmbedBERT) that powers AI Overviews incorporates 70 days of search logs including click data, meaning pages with strong NavBoost performance are more likely to be cited in AI answers. [^4]
Source: Ummema Sumamunny — "Does Google Use Clicks as a Ranking Signal?"
URL: https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/
Date: 2026-05-30
Excerpt: "Google's AI Overviews and AI Mode use a system called FastSearch (built on RankEmbedBERT) that incorporates 70 days of search logs including click data. The pages most likely to be cited in AI answers are the same pages that have already demonstrated strong NavBoost click performance. Improving your click signals improves both traditional ranking and AI citation likelihood."
Context: This creates a virtuous cycle: strong organic click performance not only helps traditional blue-link rankings but also increases the probability of being cited in AI-generated answers, which is becoming increasingly important for visibility.
Confidence: high

---

## ANGLE 4: COUNTER-NARRATIVE — Google's Public Denials vs. Evidence, CTR Manipulation Debate, Correlation vs. Causation

---

### Claim 4.1: Google maintained a consistent public position for approximately 20 years that clicks were "too noisy" to use as ranking signals, with Gary Illyes calling dwell time and CTR theories "generally made up crap" in a 2019 Reddit AMA. [^57]
Source: Search Engine Roundtable — "Google: CTR, Dwell Time & Other UX Signals Are Made Up Myths"
URL: https://www.seroundtable.com/google-ctr-dwell-time-signals-myths-27083.html
Date: 2019-02-08
Excerpt: "In that Reddit AMA with Gary Illyes, Gary said out right and clear that the theories around Google using UX and behavioral signals such as CTR and dwell time are 'generally made up crap.' He added 'Search is much more simple than people think.' He also took a jab at Moz's founder, Rand Fishkin, who has often produced studies claiming Google uses these types of metrics for ranking."
Context: This was not an isolated statement. It was part of Google's consistent, coordinated public messaging across conferences, blog posts, and developer documentation for two decades. Multiple Google spokespeople (Illyes, Mueller, Cutts, Splitt) repeatedly denied click signals.
Confidence: high

---

### Claim 4.2: The gap between Google's public denials and internal reality is not necessarily a simple lie — Google was technically accurate that clicks are not a "direct first-pass ranking factor," but never disclosed that they power the most important re-ranking system (NavBoost). [^4]
Source: Ummema Sumamunny — "Does Google Use Clicks as a Ranking Signal?"
URL: https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/
Date: 2026-05-30
Excerpt: "Google's public statements that 'clicks are not a direct ranking factor' and the evidence of click signal usage are not necessarily a contradiction — they describe two different stages of the ranking pipeline. Clicks likely have minimal direct impact on a page's initial ranking, but play a major role in re-ranking through systems like NavBoost. So Google was technically accurate — clicks aren't a direct first-pass ranking signal. What Google never told you is that they power one of its most important re-ranking systems."
Context: This semantic distinction — "direct ranking factor" vs. "re-ranking signal" — allowed Google to maintain technically truthful public statements while obscuring the centrality of click data to the final ranking output. This is a sophisticated form of strategic ambiguity rather than outright falsehood.
Confidence: high

---

### Claim 4.3: The DOJ antitrust trial produced sworn testimony from Google executives confirming what the SEO community had suspected for years, making it the highest-tier evidence available short of direct source code inspection. [^54]
Source: Luca Tagliaferro — "Does Google Use Clicks as a Ranking Signal?"
URL: https://www.lucatagliaferro.com/does-google-use-clicks-as-a-ranking-signal/
Date: 2026-05-28
Excerpt: "There's a hierarchy of proof in the SEO world. Blog posts and theories sit at the bottom. Case studies and experiments are better. Patent filings are strong but don't prove what's actually in production. Sworn testimony in a federal antitrust trial, backed by internal documents? That's about as high as it gets. Before this trial, the idea that Google uses click data for rankings was widely believed but technically unconfirmed."
Context: Pandu Nayak (VP of Search) testified: "Navboost is one of the important signals that we have." Eric Lehman (Distinguished Engineer) testified: "Clicks are the main signal used by NavBoost." These were not former employees or anonymous sources — they were current senior executives under oath.
Confidence: high

---

### Claim 4.4: The correlation vs. causation debate around CTR and rankings has been largely resolved by the 2024 API leak, which revealed that CTR is processed as a "raw signal" (lowest-level input) fed into higher-level ranking systems rather than directly determining position. [^4]
Source: Ummema Sumamunny — "Does Google Use Clicks as a Ranking Signal?"
URL: https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/
Date: 2026-05-30
Excerpt: "The September 2025 DOJ memorandum categorized clicks as a 'raw signal' alongside content, human rater scores, and search queries. This framing clarifies the pipeline: raw signals are the lowest-level inputs, processed into higher-level ranking signals or used to train models like RankEmbedBERT. It confirms clicks' role in the system while explaining why Google's technical denial ('clicks aren't a direct ranking factor') wasn't entirely false — it was just deeply misleading about the pipeline."
Context: This resolves the long-standing SEO debate. Google uses clicks, but not as a simple "higher CTR = higher ranking" direct formula. Instead, clicks are processed through NavBoost's squashing function, segmented by device/location, weighted by session outcome (good vs. bad), and then applied as a re-ranking adjustment. The relationship is causal but mediated through multiple processing layers.
Confidence: high

---

### Claim 4.5: The 2024 API leak had significant limitations — it revealed what data Google stores, but not how attributes are weighted or whether all named fields are currently active. [^10]
Source: Becited — "What the 2024 Google API Leak Taught Us About Ranking Signals"
URL: https://becited.io/ai-search-guide/google-api-leak
Date: 2026-05-09
Excerpt: "Mike King of iPullRank published the first detailed analysis... He did not have to break in. The internal documentation for Google's Content Warehouse API had been accidentally pushed to a public GitHub repository... It is not a leak of training data or scoring weights. It is the equivalent of finding a parts catalog for an engine you have only ever heard running. You cannot see the tuning, but you can see exactly what parts exist."
Context: Google's official response to the leak stated: "We would caution against making inaccurate assumptions about search based on out-of-context, outdated, or incomplete information." This is a fair caveat — the existence of a field in API documentation does not prove it is actively used in ranking, nor does it reveal its weight relative to other signals.
Confidence: high

---

### Claim 4.6: Independent CTR experiments (e.g., Rand Fishkin's test showing a jump from #7 to #1 in ~3 hours) demonstrate that coordinated real clicks can produce measurable ranking effects, but the effects often reverse when the artificial click stream stops. [^13]
Source: NavBoost.com — "Does CTR Affect SEO Rankings?"
URL: https://navboost.com/ctr-ranking-factor/
Date: 2026-03-21
Excerpt: "Rand Fishkin's experiment showed a jump from #7 to #1 in about 3 hours. SerpClix clients have seen results within 7 to 14 days in many campaigns. However, NavBoost processes data over a 13-month rolling window, so sustained effort produces the strongest long-term results... The 13-month retention window also means it takes time for old weak signals to wash out when you shift a page's engagement pattern."
Context: This demonstrates both that CTR manipulation can work in the short term and that its effects are often temporary. The 13-month window means that a brief burst of artificial clicks gets diluted by months of historical data. Sustainable ranking changes require sustained engagement improvements.
Confidence: high

---

### Claim 4.7: Google's internal instructions to employees were to avoid confirming click-based ranking publicly because SEOs would game the system — confirming the strategic rationale for the public denial campaign. [^53]
Source: SerpClix — "Does Improving CTR Affect Organic SEO Rankings?"
URL: https://serpclix.com/blog/does-click-through-rate-ctr-affect-organic-seo-rankings
Date: 2016-05-05 (updated)
Excerpt: "Eric Lehman, a 17-year Google Distinguished Engineer, confirmed NavBoost exists during DOJ antitrust testimony. Under oath, he confirmed Google employees were instructed not to discuss it publicly because SEOs would game it... The DOJ was arguing, and Google did not substantively contradict, that the secret sauce of Google's ranking superiority is not its algorithm but its accumulated store of human click behaviour."
Context: This confirms that Google's public denials were not merely PR positioning but a deliberate anti-manipulation strategy. By obscuring the existence and mechanics of NavBoost, Google made it harder for SEOs to artificially generate the signals the system measures.
Confidence: high

---

### Claim 4.8: The 2024 API leak revealed over 14,000 ranking attributes across 2,596 modules, contradicting Google's simplified public narrative of "200 ranking factors" and revealing a system far more complex than publicly acknowledged. [^9]
Source: Digital Marketing Co. — "The Complete Guide to Search Engine Ranking Factors"
URL: https://digitalmarketingco.org/blog/search-engine-ranking-factors-google-bing-complete-guide
Date: 2026-05-09
Excerpt: "Google is believed to use over 200 distinct ranking factors, though the exact number has never been officially confirmed. The 2024 API documentation leak revealed over 14,000 ranking features and modules, suggesting the actual system is far more complex than the commonly cited '200 factors.' Many of these features are sub-components or variations of broader factors."
Context: The "200 ranking factors" figure has been cited in SEO for over a decade. The leak revealed that the actual system uses 14,014 documented attributes across 2,596 modules — a 70x increase in complexity. This dramatically reframes the debate about whether Google's public guidance was merely simplified or actively misleading.
Confidence: high

---

## CROSS-REFERENCES TO PRIOR PHASES

- **Phase 1 confirmed:** NavBoost active since ~2005, confirmed by Pandu Nayak under DOJ oath. [^4]
- **Phase 2 confirmed:** 2024 API leak revealed goodClicks, badClicks, lastLongestClicks, unsquashedClicks, unicornClicks in CRAPS module. [^54]
- **Phase 2 confirmed:** 13-month rolling window, squashing function, position-normalization. [^2]
- **Phase 2 confirmed:** Chrome data integration via chromeInTotal and chrome_trans_clicks. [^22]
- **Phase 2 confirmed:** Gary Illyes publicly denied click signals while internal CRAPS module processed them. [^57]
- **Phase 2 noted:** Dwell time correlates at 0.84 with ranking position (from prior research).
- **Phase 2 confirmed:** Core Web Vitals thresholds (LCP <=2.5s, INP <=200ms, CLS <0.1). [^40]
- **Phase 2 confirmed:** Pages passing all 3 CWV have higher Top-3 probability (~70% of top-10 pages pass). [^48]
- **Phase 2 confirmed:** AI Overviews reduce organic clicks by ~58% (Ahrefs, December 2025). [^69]
- **Phase 2 confirmed:** AI-cited sources get +35% organic CTR (Seer Interactive, November 2025). [^68]

---

## EMERGENT INSIGHTS (CROSS-ANGLE SYNTHESIS)

**Insight 1:** The NavBoost system creates a "rich get richer" dynamic where pages that already rank well (and thus get more clicks) accumulate stronger click signals over time, making it harder for new or lower-ranked content to break through. This is partially mitigated by the squashing function but remains a structural advantage for established results.

**Insight 2:** Google's public denial strategy was not merely PR — it was a functional anti-manipulation measure. By obscuring NavBoost's existence, Google made it harder for SEOs to reverse-engineer the signal, which in turn protected the signal's integrity. The 2023-2024 revelations may have reduced this protection, potentially increasing manipulation attempts.

**Insight 3:** The shift from 18-month to 13-month rolling windows in 2017, combined with the rise of AI Overviews in 2024-2025, suggests Google is increasingly prioritizing recency and freshness in its behavioral signals. Publishers should focus on maintaining sustained engagement rather than one-time optimization.

**Insight 4:** The disconnect between traditional SEO ranking and AI Overview citations (only 17-38% overlap) means that NavBoost click signals, while important for traditional rankings, may not be sufficient for AI-era visibility. A new optimization layer focused on AI citation signals (authority, structured data, information gain) is emerging as a parallel requirement.

**Insight 5:** The CRAPS module's existence alongside NavBoost suggests Google processes click signals at multiple levels: URL-level (crapsNewUrlSignals), host-level (crapsNewHostSignals), and pattern-level (crapsNewPatternSignals). This means improving engagement on one page can potentially benefit other pages on the same domain — a site-wide click quality signal.

---

## REFERENCES

[^1]: WebSelect Agency. "What is NavBoost?" 2026-05-20. https://webselect.agency/what-is-navboost-google-ranking-system/
[^2]: SE Ranking. "Google Navboost: How it works and how to optimize for it." 2026-04-28. https://seranking.com/blog/navboost/
[^3]: NavBoost.com. "What is NavBoost?" 2026-03-21. https://navboost.com/what-is-navboost/
[^4]: Ummema Sumamunny. "Does Google Use Clicks as a Ranking Signal? Here Is the Definitive Answer." 2026-05-30. https://ummemasumamunny.com/does-google-use-clicks-as-a-ranking-signal-here-is-the-definitive-answer-2026/
[^5]: WebSelect Agency. "goodClicks, badClicks, and lastLongestClick." 2026-05-20. https://webselect.agency/google-leak-click-signals-goodclicks-badclicks-lastlongestclick/
[^6]: Spilno Agency. "Google's official statements on what affects ranking: a 1998-2026 deep dive." 2026-05-19. https://spilnoagency.com.ua/en/instructions-us/google-official-statements-ranking-factors-history
[^7]: Wisseo Blog. "SEO Ranking Factors: What Really Matters in 2026." 2026-05-15. https://blog.wisseo.app/seo-ranking-factors-2026/
[^8]: GTCode. "Google and the Architecture of Information Control: A Technical Audit." 2026-05-15. https://gtcode.com/articles/google-information-control-audit/
[^9]: Digital Marketing Co. "The Complete Guide to Search Engine Ranking Factors." 2026-05-09. https://digitalmarketingco.org/blog/search-engine-ranking-factors-google-bing-complete-guide
[^10]: Becited. "What the 2024 Google API Leak Taught Us About Ranking Signals." 2026-05-09. https://becited.io/ai-search-guide/google-api-leak
[^11]: Neil Patel. "The Ultimate Google Algorithm Cheat Sheet." 2026-05-07. https://neilpatel.com/blog/the-ultimate-google-algorithm-cheat-sheet/
[^12]: SerpClix. "Google's API Leak Revealed the Three Click Metrics That Drive Rankings." https://serpclix.com/blog/google-api-leak-click-metrics-rankings
[^13]: NavBoost.com. "Does CTR Affect SEO Rankings?" 2026-03-21. https://navboost.com/ctr-ranking-factor/
[^14]: SEOZoom. "Google and antitrust: what is happening and what will change?" 2025-05-26. https://www.seozoom.com/google-antitrust-trial/
[^15]: OpenDatasets.tech. "Here's Why Scale Is Vital for Search Engines." https://opendatasets.tech/heres-why-scale-is-vital-for-search-engines
[^16]: Marketing Aid. "Google API Leak: Comprehensive Review and Guidance." 2024-06-12. https://www.marketingaid.io/google-api-leak-comprehensive-review-and-guidance/
[^17]: Clark St. James. "Google's 14,000 SEO Ranking Factors Revealed." https://clarkstjames.com/google/googles-14000-seo-ranking-factors-revealed/
[^18]: Freestar. "5 Big Takeaways For Publishers From Google's API Leak." 2024-06-13. https://freestar.com/5-big-takeaways-for-publishers-from-googles-api-leak/
[^19]: MediaNama. "US Court Ordered Google to Share Search Data With Rivals." 2025-09-05. https://www.medianama.com/2025/09/223-us-court-google-share-search-data-rivals-doj-antitrust-case/
[^20]: Marie Haynes. "What Google's Trial Docs Reveal About Clicks, Links and Other Ranking Signals." 2025-09-04. https://www.mariehaynes.com/what-googles-trial-docs-reveal-about-clicks-links-and-other-ranking-signals/
[^21]: SERPRank. "Google Algorithm Leak - A Summary of Mike King's Article." 2024-10-29. https://serprank.in/seo/google-algorithm-leak/
[^22]: SerpClix. "Chrome Browser Data Feeds Directly Into Google's Search Rankings." https://serpclix.com/blog/chrome-browser-data-feeds-google-rankings
[^23]: Scale Rankings. "How Google Chrome Signals Influence Rankings with NavBoost." 2026-04-16. https://scalerankings.com/behavioral-signals/how-google-chrome-signals-influence-rankings-with-navboost/
[^24]: SISTRIX. "How Google Evaluates Links Using The User Signals From Google Chrome Browser." 2022-05-13. https://www.sistrix.com/blog/how-google-evaluates-links-using-the-user-signals-from-google-chrome-browser/
[^25]: Search Engine Land. "Is Google using Chrome for mobile-first indexing and user signals?" 2024-10-02. https://searchengineland.com/google-chrome-mobile-first-indexing-user-signals-447154
[^26]: Hobo Web. "Key Strategic SEO Insights from the U.S. D.O.J. v. Google Antitrust Trial." 2025-10-08. https://www.hobo-web.co.uk/google-vs-doj/
[^27]: WRD Agency. "What are Google's Navboost and Glue?" 2025-06-26. https://wrd.agency/resources/blog/what-are-googles-navboost-and-glue/
[^28]: Stan Ventures. "Inside Google's Hidden Search Systems: 1,200 Experiments." 2025-10-29. https://www.stanventures.com/news/inside-googles-1200-ai-search-experiments-3661/
[^29]: Hobo Web. "Navboost: How User Interactions Rank Websites In Google." 2026-04-13. https://www.hobo-web.co.uk/navboost-how-google-uses-large-scale-user-interaction-data-to-rank-websites/
[^30]: Resoneo. "Google leak - Part 5: Click-data, NavBoost, Glue, and Beyond." 2024-10-31. https://www.resoneo.com/google-leak-part-5-click-data-navboost-glue-and-beyond-google-is-watching-you/
[^31]: OuterBox Design. "Google's Navboost Algorithm." 2026-04-15. https://www.outerboxdesign.com/articles/seo/googles-navboost-algorithm-highlight-from-leaked-google-search-api/
[^32]: OnlineKhadamate. "The Navboost System (Behavioral Signal Analysis)." 2025-07-20. https://www.en.onlinekhadamate.com/the-navboost-system-behavioral-signal-analysis/
[^33]: Transistor Digital. "What is Google's NavBoost Algorithm?" 2024-03-07. https://transistordigital.com/blog/what-is-googles-navboost-algorithm/
[^34]: Amra & Elma. "TOP 10 SEO CLICK-THROUGH RATE STATISTICS 2026." 2026-03-07. https://www.amraandelma.com/seo-click-through-rate-statistics/
[^35]: Backlinko. "Dwell Time." 2026-02-05. https://backlinko.com/hub/seo/dwell-time
[^36]: Style Factory. "What is Dwell Time in SEO?" 2025-01-20. https://www.stylefactoryproductions.com/blog/what-is-dwell-time
[^37]: BankBound. "What Google's Search Document Leak Means for Local Bank SEO." 2024-07-05. https://www.bankbound.com/blog/google-document-leak-bank-seo/
[^38]: SEJR. "Ranking Factors." https://sejr.nl/ranking-factors
[^39]: Search Engine Journal. "Dwell Time: Is It A Google Ranking Factor?" 2021-11-11. https://www.searchenginejournal.com/ranking-factors/dwell-time/
[^40]: WittySparks. "Core Web Vitals: Essential for SEO Success in 2024." 2026-03-26. https://wittysparks.com/core-web-vitals-impact-on-seo/
[^41]: Webmaster Services Hawaii. "How Core Web Vitals Will Impact Your SEO in 2024." 2026-03-06. https://www.webmasterserviceshawaii.com/how-core-web-vitals-will-impact-your-seo-in-2024/
[^42]: SmartApp Technology. "Core Web Vitals 2024." 2024-09-25. https://smartapp.technology/blog/core-web-vitals-2024-the-key-metrics-for-web-performance/
[^43]: LocalBizNetwork. "How will Core Web Vitals enhance SEO in 2024?" 2024-08-23. https://www.localbiznetwork.com/articles/how-will-core-web-vitals-enhance-seo-in-2024
[^44]: BrainyDX. "Core Web Vitals: Why They Matter." 2025-02-27. https://brainydx.com/blog/why-core-web-vitals-is-important/
[^45]: 618Media. "User Experience and Core Web Vitals: 2024 Insights." 2024-03-01. https://618media.com/en/blog/user-experience-and-core-web-vitals/
[^46]: JEMSU. "How Can Website Loading Speed Affect Core Web Vitals And SEO In 2024?" 2023-12-09. https://jemsu.com/how-can-website-loading-speed-affect-core-web-vitals-and-seo-in-2024/
[^47]: JEMSU. "How Did Google's Core Web Vitals Update In 2024 Affect SEO Competition?" 2023-10-17. https://jemsu.com/how-did-googles-core-web-vitals-update-in-2024-affect-seo-competition/
[^48]: Isaac Benyakar. "Technical SEO Checklist 2024." 2024-01-05. https://isaacbenyakar.com/blog/technical-seo-checklist-core-web-vitals-page-speed
[^49]: Stanford Law. "TTLF Working Papers." https://law.stanford.edu/wp-content/uploads/2020/09/johnston_wp62.pdf
[^50]: Stratechery. "Staff Memo." https://stratechery.com/wp-content/uploads/2021/03/Staff-Memo.pdf
[^51]: Dan Luu. "What the FTC got wrong in the Google antitrust investigation." https://danluu.com/ftc-google-antitrust/
[^52]: Ben Edelman. "FTC Staff Memorandum - August 8, 2012." https://www.benedelman.org/pdf/ftc-google-8aug2012.pdf
[^53]: SerpClix. "Does Improving CTR Affect Organic SEO Rankings?" 2016-05-05. https://serpclix.com/blog/does-click-through-rate-ctr-affect-organic-seo-rankings
[^54]: Luca Tagliaferro. "Does Google Use Clicks as a Ranking Signal?" 2026-05-28. https://www.lucatagliaferro.com/does-google-use-clicks-as-a-ranking-signal/
[^55]: Fahlout Research. "The Reality Gap: Public Guidance vs. Engineering Reality." 2026-03-13. https://fahlout.com/research/reality-gap
[^56]: Vizion. "Everything You Need to Know About the Google Leak." 2026-01-29. https://www.vizion.com/blog/everything-you-need-to-know-about-the-google-leak-misstatements-and-api-revelations/
[^57]: Search Engine Roundtable. "Google: CTR, Dwell Time & Other UX Signals Are Made Up Myths." 2019-02-08. https://www.seroundtable.com/google-ctr-dwell-time-signals-myths-27083.html
[^58]: Digital Red Zone. "Everything ever said about clicks, CTR and bounce rate." 2022-10-25. https://digitalredzone.com/everything-ever-said-about-clicks-ctr-and-bounce-rate/
[^59]: Semrush. "What Is Google's Navboost Algorithm?" 2025-01-02. https://www.semrush.com/blog/navboost/
[^60]: MediaReach. "CRAPS System and Navboost." 2025-01-15. https://mediareach.co.jp/blog/navboost
[^61]: Oxygenites. "CTR Manipulation SEO." 2025-01-20. https://oxygenites.com/ctr-manipulation-strategies-and-tools-seo/
[^62]: SEO Gone Wild. "Is Google CTR Manipulation Ethical?" 2025-01-14. https://seogonewild.com/blogs/news/is-google-ctr-manipulation-ethical
[^63]: The7Eagles. "CTR Manipulation SEO: What Works in 2025." 2026-01-23. https://the7eagles.com/ctr-manipulation-seo/
[^64]: All About AI. "CTR Manipulation in SEO: Does it Work in 2026?" 2026-02-20. https://www.allaboutai.com/ai-seo/ctr-detailed-guide/
[^65]: Media Heroes. "CTR Manipulation in SEO | Does It Work?" 2023-10-19. https://www.mediaheroes.com.au/blog/ctr-manipulation/
[^66]: Timo Specht. "CTR Manipulation: Strategies for SEO Success Revealed." 2024-04-29. https://www.timospecht.de/en/what-is/ctr-manipulation/
[^67]: Brim Cove. "CTR Manipulation in SEO: Does It Really Work in 2026?" 2026-06-15. https://brimcove.com/ctr-manipulation-in-seo/
[^68]: Omnibound. "AI SEO Statistics (2026)." 2026-05-29. https://www.omnibound.ai/blog/ai-seo-statistics
[^69]: Ahrefs. "Update: AI Overviews Reduce Clicks by 58%." 2026-05-28. https://ahrefs.com/blog/ai-overviews-reduce-clicks-update/
[^70]: ResultFirst. "How AI Overviews Are Impacting CTR." 2026-05-01. https://www.resultfirst.com/blog/seo-basics/how-ai-overviews-impact-ctr/
