# Dim 11: AI Overviews, GEO & Generative Engine Optimization
## Deep Research — Phase 3: Google's AI-Driven Search Surfaces & Citation Dynamics
**Research date:** 2026-07-01
**Searches conducted:** 20 independent queries
**Researcher:** Deep_Researcher (Dim 11)

---

## 1. CURRENT STATE: How AI Overviews and Generative Engines Select, Cite, and Rank Sources

### Claim 1
Claim: Only 38% of pages cited in Google AI Overviews also rank in Google's top 10 for the same query, down sharply from 76% in Ahrefs' July 2025 study; the remaining citations are split almost evenly between pages ranking 11–100 (31.2%) and those beyond the top 100 (31.0%) [^1].
Source: Ahrefs Blog / Ryan Law
URL: https://ahrefs.com/blog/ai-overview-citations-top-10/
Date: 2026-03-02
Excerpt: "In our analysis, we looked at cases where the same URL appeared in both the AI Overview and the regular SERP, for the same query... From this, we discovered that 37.9% of URLs cited in AI Overviews also appeared within the first 10 blocks. The rest were almost evenly split between positions 11–100 (31.2%) and beyond the top 100 blocks (31.0%)."
Context: Ahrefs analyzed 863K keyword SERPs and 4 million AI Overview URLs using Brand Radar. This finding indicates Google AI Overviews are increasingly relying on fan-out sub-queries rather than direct top-10 results for source selection.
Confidence: high

### Claim 2
Claim: Among AI Overview cited pages that did not rank in Google's top 100 organic results for the same keyword, 18.2% were YouTube URLs; YouTube overall accounts for 5.6% of all AI Overview URLs cited and has grown 34% over the past six months as the most-cited domain [^1].
Source: Ahrefs Blog
URL: https://ahrefs.com/blog/ai-overview-citations-top-10/
Date: 2026-03-02
Excerpt: "Among the AI Overview cited pages that didn't rank in Google's top 100 results for the same keyword, 18.2% were YouTube URLs. And those YouTube URLs accounted for 5.6% of all AI Overview URLs cited across the dataset. In other words, YouTube makes up a meaningful slice of total AI Overview citations."
Context: The study highlights that YouTube is the most cited domain in AI Overviews today, reinforcing that AI visibility is becoming format-agnostic and video content is a critical citation source.
Confidence: high

### Claim 3
Claim: AI Overview citations from URLs not in the top 20 organic results account for 59.6% of all citations, and only 10.7% of URLs overlap between AI Overviews and AI Mode, meaning visibility on one Google surface does not guarantee visibility on the other [^2].
Source: SE Ranking / AirOps (Kevin Indig), 2026 State of AI Search
URL: https://www.omnibound.ai/blog/ai-search-statistics
Date: 2026-04-30
Excerpt: "AI Overview citations from URLs not in top 20 organic results: 59.6%... Overlap between AI Overviews and AI Mode URLs: 10.7% of URLs; 16% of domains."
Context: The extremely low URL overlap (10.7%) between AI Overviews and AI Mode means brands must optimize and track these surfaces separately. AI Mode uses Gemini 2.5 and handles more complex multi-part queries.
Confidence: high

### Claim 4
Claim: AI Overviews and AI Mode agree 86% of the time on answer content but share only 13.7% of their citations, so they must be tracked separately [^3].
Source: GitHub / fseixas super-geo-agent-readiness (Ahrefs 2026 studies compilation)
URL: https://github.com/fseixas/super-geo-agent-readiness
Date: 2026-05-18
Excerpt: "AI Overviews and AI Mode agree 86% of the time but share only 13.7% of their citations (so track them separately)."
Context: Compiled from 14 Ahrefs studies published Oct 2025–May 2026 covering ~1 billion data points across ChatGPT, Google AI Overviews, and AI Mode.
Confidence: high

### Claim 5
Claim: 96% of AI Overview citations come from sources with strong E-E-A-T signals, and content with 15+ recognized entities shows 4.8× higher selection probability [^4].
Source: Wellows / SEOcrawl.ai
URL: https://wellows.com/blog/google-ai-overviews-ranking-factors/
Date: 2026-06-11
Excerpt: "96% of AI Overview content comes from verified authoritative sources... Content with 15+ recognized entities shows 4.8× higher selection probability."
Context: The study analyzed 15,847 AI Overview results and found semantic completeness (r=0.87) as the #1 ranking factor, with multi-modal content driving 156% higher selection rates.
Confidence: medium

### Claim 6
Claim: Google's AI Overviews source selection relies on a "query fan-out" process where the initial query is split into multiple related sub-queries; pages that appear most often within those sub-query SERPs then get cited in the AI Overview [^1].
Source: Ahrefs Blog
URL: https://ahrefs.com/blog/ai-overview-citations-top-10/
Date: 2026-03-02
Excerpt: "Google has confirmed that its system performs a 'Query fan-out' whenever a user searches and AI is triggered. This is when the initial query is split into multiple related sub-queries. The pages that appear most often within those sub-query SERPs then get cited in the AI Overview."
Context: This explains why AI Overviews increasingly cite pages outside the top 10—fan-out queries reach deeper into the index for related sub-queries, making topic-cluster coverage more important than single-keyword ranking.
Confidence: high

### Claim 7
Claim: Google's AI Overviews use a retrieval-augmented generation (RAG) pipeline that retrieves relevant passages from indexed pages and uses them to construct responses, citing the sources drawn from; the RAG pipeline selects for passage quality and trust signals rather than organic rank alone [^5].
Source: SEOcrawl.ai
URL: https://seocrawl.ai/blog/ai-overview-ranking-factors
Date: 2026-05-22
Excerpt: "Google's AI Overviews use a retrieval-augmented generation pipeline: rather than generating answers purely from its training data, the system retrieves relevant passages from indexed pages and uses them to construct the response, citing the sources it drew from. In plain terms, the AI is searching for the best passage to answer a query, then building an answer around it."
Context: Because the RAG pipeline selects for passage quality and trust signals, a page at position 8 with a clear, well-structured answer can be cited ahead of the #1 result. This makes AI Overview optimization an opportunity for pages with strong content but lower link authority.
Confidence: high

### Claim 8
Claim: Schema markup does not meaningfully move AI citations according to a controlled difference-in-differences study of 1,885 pages: AI Overviews -4.6%, AI Mode +2.4%, ChatGPT +2.2% (indistinguishable from zero) [^3].
Source: GitHub / fseixas super-geo-agent-readiness (Ahrefs 2026 studies)
URL: https://github.com/fseixas/super-geo-agent-readiness
Date: 2026-05-18
Excerpt: "Schema markup does not move AI citations. A controlled difference-in-differences study of 1,885 pages found no meaningful citation lift on any platform (AI Overviews -4.6%, AI Mode +2.4%, ChatGPT +2.2%, with the last two indistinguishable from zero). The naive 3x correlation between schema and citation turned out to be selection, not cause."
Context: This finding reorders the GEO playbook—schema is now framed as hygiene for rich results and entity clarity, not as an AI-citation lever. The audit severity for schema was recalibrated from High to Medium.
Confidence: high

---

## 2. HISTORY: Evolution from Featured Snippets to SGE to AI Overviews to AI Mode

### Claim 9
Claim: Google introduced Search Generative Experience (SGE) on May 10, 2023 at Google I/O as an experimental Labs feature; after nearly a year of testing, SGE was rebranded as "AI Overviews" and launched to all US users by default on May 14, 2024 at Google I/O 2024 [^6].
Source: Discovered Labs / Search Savvy / Whitehat SEO
URL: https://discoveredlabs.com/blog/from-sge-to-google-ai-overviews-evolution-mechanics-and-the-new-b2b-playbook
Date: 2026-02-05
Excerpt: "Google announced Search Generative Experience on May 10, 2023 during the annual Google I/O conference... On May 14, 2024, Google officially launched AI Overviews at the 2024 Google I/O conference. The company removed the feature from beta status, rebranded it from SGE to AI Overviews, and made it available by default in the United States."
Context: The timeline traces the full evolution: SGE was opt-in via Search Labs; AI Overviews became default-on. The technical foundation evolved from PaLM 2 to Gemini Pro/Flash, then to Gemini 2.0 in March 2025 and Gemini 3.5 Flash by I/O 2026.
Confidence: high

### Claim 10
Claim: AI Overviews expanded to over 100 countries by October 2024 and to 200+ countries by May 2026, reaching 1.5 billion users monthly; Google CEO Sundar Pichai described AI Mode (launched March 2025) as a "total reimagining of search" [^7].
Source: Search Savvy / Whitehat SEO / Courthouse News (Penske Media complaint)
URL: https://searchsavvy.in/everything-about-google-ai-overviews-how-things-have-changed-from-sge-to-now/
Date: 2026-01-11
Excerpt: "As of May 2026, Google AI Overviews are available in over 200 countries and territories worldwide, supporting more than 40 languages... In May 2025, Google announced that it was making AI Mode available to all U.S. users, regardless of whether they are signed into Google. Google's CEO described the change as a 'total reimagining of search.'"
Context: The evolution from SGE → AI Overviews → AI Mode represents Google's strategic shift from experimental feature → production-ready search component → fully conversational search interface with zero blue links.
Confidence: high

### Claim 11
Claim: Zero-click search predates AI Overviews by a decade; the timeline of zero-click features includes: Knowledge Graph (2012), Featured Snippets (2014), People Also Ask (2015), then Perplexity AI (2022), ChatGPT (Nov 2022), Google AI Overviews (May 2024), and ChatGPT Search (Oct 2024) [^8].
Source: Alice Labs / AIO Clicks
URL: https://alicelabs.ai/en/insights/zero-click-search-ai-era
Date: 2026-05-06
Excerpt: "Zero-click did not start with AI. It accelerated through a decade of SERP features (Featured Snippets, Knowledge Panels, People Also Ask) and reached an inflection point with Google AI Overviews (May 2024), ChatGPT Search (Oct 2024), and Perplexity."
Context: Understanding that zero-click is a continuum, not a switch, is critical. Each feature reduced click rates on a slice of queries. AI Overviews are the latest, sharpest bend in that curve.
Confidence: high

### Claim 12
Claim: Featured snippets are now the "seed data" for AI Overviews; if a page wins the featured snippet, it has a 75% higher chance of being the primary citation in the AI-generated summary [^9].
Source: Stackmatix (citing ClickRank)
URL: https://www.stackmatix.com/blog/google-ai-overviews-optimization
Date: 2026
Excerpt: "According to ClickRank's featured snippets guide, featured snippets are now the 'seed data' for AI Overviews. If you win the list featured snippets AI overviews, you have a 75% higher chance of being the primary citation in the AI-generated summary."
Context: The evolutionary path maps: Pre-2014 (ten blue links) → 2014-2020 (featured snippets) → 2020-2024 (snippet expansion) → 2024-2026 (AI Overviews/multi-source synthesis) → 2026+ (AI-first search/entity authority).
Confidence: medium

### Claim 13
Claim: AI Mode, announced in March 2025 and rolled out to 180+ countries by August 2025, delivers a fully conversational search experience with zero organic blue links, making AI citation the only visibility mechanism; average links per AI Mode answer = 12.6 vs 13.3 sources in AI Overviews [^10].
Source: SE Ranking / Claude-SEO skill documentation
URL: https://github.com/AgriciDaniel/claude-seo/blob/main/skills/seo-content/SKILL.md
Date: 2026-02-07
Excerpt: "Google AI Mode launched publicly in May 2025 as a separate tab in Google Search, available in 180+ countries. Unlike AI Overviews (which appear above organic results), AI Mode provides a fully conversational search experience with zero organic blue links, making AI citation the only visibility mechanism."
Context: AI Mode uses Gemini 2.5 and handles more complex multi-part queries than AI Overviews. Early data showed only 6–8% of AI Mode sessions click out to external websites.
Confidence: high

---

## 3. STAKEHOLDERS: How SEOs, Content Marketers, Brands, and Publishers Must Adapt

### Claim 14
Claim: The Princeton GEO study (Aggarwal et al., KDD 2024) found that adding direct quotations lifted citation visibility by +42.6%, adding statistics by +32.8%, and inline source citations by +27.7%; keyword stuffing was the only method that hurt visibility (−8.6%) [^11].
Source: Princeton University / Aggarwal et al. — GEO: Generative Engine Optimization (arXiv:2311.09735)
URL: https://arxiv.org/abs/2311.09735
Date: 2024 (presented KDD 2024, Barcelona)
Excerpt: "Including citations, quotations from relevant sources, and statistics can significantly boost source visibility, with an increase of over 40% across various queries." Table 1 PAWC values: Quotation Addition 27.8, Statistics Addition 25.9, Fluency Optimization 25.1, Cite Sources 24.9, baseline 19.5, Keyword Stuffing 17.8.
Context: The paper introduced GEO-bench (~10,000 queries × 9 source datasets × 25 domains) and tested nine content modification strategies on GPT-3.5-turbo with a 200-query validation on live Perplexity.ai. The term GEO was coined by researchers from Princeton, Georgia Tech, IIT Delhi, and the Allen Institute for AI.
Confidence: high

### Claim 15
Claim: Citing sources delivers +115% citation lift for pages ranked #5 in SERPs, the highest single tactic documented, demonstrating that GEO can be a "democratization of digital space" for lower-ranked sites [^12].
Source: Astiva.ai / Princeton GEO study
URL: https://astiva.ai/blog/optimize-content-ai-citations-llm
Date: 2026-06-07
Excerpt: "Citing sources delivers +115% citation lift for pages ranked #5 in SERPs, the highest single tactic (Princeton, ACM KDD 2024)."
Context: The Princeton paper found that when a site ranked around fifth in search applied the citation tactic, its visibility rose by 115.1%, while the top-ranked site actually lost visibility. Lower-ranked sites gained the most from GEO methods.
Confidence: high

### Claim 16
Claim: Branded web mentions correlate 0.664 with AI Overview visibility versus 0.218 for backlinks, making brand mentions ~3× more predictive of AI citations than backlink volume; off-site brand signals dominate conventional SEO metrics [^13].
Source: Ahrefs (75,000-brand correlation study) / Digital Applied / Zyppy Signal
URL: https://www.digitalapplied.com/blog/ai-search-citation-ranking-factors-2026-data-study
Date: 2026-06-24
Excerpt: "Ahrefs studied 75,000 brands and found branded web mentions correlate 0.664 with AI Overview visibility versus 0.218 for backlinks. The top three signals are all off-site brand signals, not link metrics."
Context: This is the most actionable finding in the GEO data. YouTube mentions (~0.737 correlation), brand anchor text (0.527), and brand search volume (0.392) all outrank traditional link metrics. Site page count barely correlated (~0.194).
Confidence: high

### Claim 17
Claim: 94% of B2B buyers used generative AI tools during their purchase process, and 85% of B2B buyers ultimately purchase from a vendor on their pre-existing "Day One" shortlist — a list increasingly formed inside AI conversations before buyers ever visit a search engine [^14].
Source: 6sense (2025 Buyer Experience Report) / Bain & Company (Losing Control, Sep 2025)
URL: https://www.omnibound.ai/blog/ai-search-statistics
Date: 2026-04-30
Excerpt: "94% of B2B buyers used generative AI tools during their purchase process (6sense, 2025 Buyer Experience Report)... 85% of B2B buyers purchase from their 'day one' vendor list (Bain & Company, Losing Control, September 2025)."
Context: This redefines B2B marketing: pre-search visibility is now critical. If a brand doesn't appear when a buyer asks ChatGPT "who are the best providers for X," it's not on the list. AI referrals also converted 31% better than non-AI traffic during the 2025 holiday season (Adobe).
Confidence: high

### Claim 18
Claim: Share of Model (SoM) has emerged as the AI-native equivalent of Share of Voice, measuring what percentage of LLM responses mention a brand for a defined set of high-intent queries; early benchmarks show established brands achieving 15–30% Citation Frequency Rate [^15].
Source: Hendry.ai / Jellyfish / Steakhouse Agent / Seonali
URL: https://hendry.ai/ai-marketing/measurement
Date: 2026-02-01
Excerpt: "Share of Model is the AI-native equivalent of Share of Voice. The concept was introduced by Jack Smyth at Jellyfish in 2024, and has since become the leading candidate for an AI visibility metric. Early benchmarks suggest established brands achieve a Citation Frequency Rate of 15 to 30% for their core queries, while newcomers land at 5 to 10%."
Context: SoM breaks down into three components: (1) Citation Frequency, (2) Sentiment Alignment, and (3) Citation Velocity via Digital PR. It requires a polling-based methodology using 50–100 prompts tracked weekly across AI platforms.
Confidence: medium

### Claim 19
Claim: 54% of US marketers plan to implement GEO within 3–6 months, but only 23% of marketers currently invest in GEO measurement, creating a significant execution gap [^16].
Source: eMarketer / Incremys (via Omnibound.ai compilation)
URL: https://www.omnibound.ai/blog/ai-search-statistics
Date: 2026-04-30
Excerpt: "Only 23% of marketers currently invest in GEO measurement (Incremys, 2025)... 54% of US marketers plan to implement GEO within 3–6 months (eMarketer, January 2026)."
Context: The gap between awareness and measurement investment means many brands are optimizing blindly. Tools like Peec AI, Otterly, Profound AI, Semrush, and Ahrefs Brand Radar now offer dedicated GEO monitoring.
Confidence: medium

### Claim 20
Claim: 44.2% of all LLM citations come from the first 30% of a piece of content — the introduction — making position bias one of the strongest structural factors in AI citation; answer-first openings under 60 words are extracted 67% more often than buried-answer content [^17].
Source: SparkToro (January 2026) / amicited.com
URL: https://www.omnibound.ai/blog/ai-search-statistics
Date: 2026-04-30
Excerpt: "44.2% of all LLM citations come from the first 30% of a piece of content — the introduction (SparkToro, January 2026)... Answer-first openings under 60 words are extracted 67% more often than buried-answer content (amicited.com)."
Context: This structural insight directly impacts content formatting: clear answer-first structures, quotable statistics in the opening, and early expert quotations all increase citation likelihood.
Confidence: medium

---

## 4. COUNTER-NARRATIVE: Attribution Obscurity, Zero-Click Dominance, SEO "Death," Citation Accuracy

### Claim 21
Claim: 83% of searches that trigger AI Overviews end without a click to an external website; in AI Mode, the zero-click rate reaches 93% (Semrush, September 2025); only 1% of users click on links inside an AI Overview (Pew Research, July 2025) [^18].
Source: Omnibound.ai (aggregating Bain, Semrush, Pew, Ahrefs, SparkToro)
URL: https://www.omnibound.ai/blog/zero-click-search-statistics
Date: 2026-06-02
Excerpt: "With AI Overview present: 83% zero-click rate; in AI Mode: 93% (Bain–Dynata, December 2024; Semrush, September 2025)... Only 1% of users click on links inside an AI Overview (Pew Research, July 2025, n=68,879 searches)."
Context: The overall US zero-click rate is ~60–65% of all searches (SparkToro 2024). Mobile zero-click is 77% vs desktop 46.5%. The implication for content strategy is structural: visibility in AI-generated answers is the primary discovery mechanism for a growing share of buyer research.
Confidence: high

### Claim 22
Claim: AI Overviews reduce organic CTR for the top-ranking page by 58% (Ahrefs, December 2025), and the position-one CTR suppression nearly doubled in eight months from 34.5% to 58% [^19].
Source: Ahrefs / Zyppy Signal / ZipTie.dev
URL: https://ziptie.dev/blog/click-behavior-in-zero-click-search/
Date: 2026-05-16
Excerpt: "Position-one CTR suppression nearly doubled in eight months, from 34.5% to 58%. Ahrefs analyzed ~300,000 keywords in their December 2025 Search Console data and found AI Overviews reduce position-one organic CTR by 58%. Their April 2025 study, using identical methodology, found 34.5% suppression. The effect nearly doubled."
Context: The timeline shows acceleration: Jan 2025 (AIO in 6.49% of desktop searches) → March 2025 (13.14%) → April 2025 (34.5% suppression) → December 2025 (58% suppression). This is not stabilizing; it's accelerating.
Confidence: high

### Claim 23
Claim: Gartner predicted traditional search engine volume will drop 25% by 2026 due to AI chatbots and virtual agents; Google still handles ~80% of digital queries, but AI referral traffic accounts for only ~1% of total web traffic [^20].
Source: Gartner (Feb 2024) / WiloAI / Omnibound.ai
URL: https://wiloai.com/gartner-predicts-25-drop-in-search-volume-by-2026-what-this-means-for-yourbusiness/
Date: 2026-01-28
Excerpt: "'By 2026, traditional search engine volume will drop 25%, with search marketing losing market share to AI chatbots and other virtual agents.' — Alan Antin, Vice President Analyst, Gartner... AI referral traffic accounts for just over 1% of all website visits according to Conductor's 2026 benchmark."
Context: The Gartner prediction is unevenly distributed—concentrated on informational queries rather than across all query types. B2B SaaS and research-heavy queries are among the most affected. Google still sends ~190× more website traffic than all AI platforms combined.
Confidence: high

### Claim 24
Claim: A randomized field experiment found that AI Overviews reduce organic click-throughs by 38% and increase zero-click searches by 33%, with no compensating improvement in user-reported satisfaction; complementary evidence finds AIO exposure reduces traffic to English Wikipedia articles by approximately 15% [^21].
Source: arXiv / Agarwal and Sen (2026) / Khosravi and Yoganarasimhan (2026)
URL: https://arxiv.org/html/2605.14021v1
Date: 2026-05-13
Excerpt: "A randomized field experiment finds that AIOs reduce organic click-throughs by 38% and increase zero-click searches by 33%, with no compensating improvement in user-reported satisfaction (Agarwal and Sen, 2026). Complementary quasi-experimental evidence finds that AIO exposure reduces traffic to English Wikipedia articles by approximately 15% (Khosravi and Yoganarasimhan, 2026)."
Context: This academic paper also documents severe publisher impacts: Digital Content Next found a median 10% YoY decline in Google Search referral traffic over eight weeks in mid-2025; Stereogum lost 70% of ad revenue; The Planet D shut down after 90% traffic loss.
Confidence: high

### Claim 25
Claim: Chegg reported a 49% decline in non-subscriber traffic between January 2024 and January 2025, filed an antitrust lawsuit against Google in February 2025, and saw its market value collapse from $17 billion to under $200 million; CEO Nathan Schultz stated "Traffic is being blocked from ever coming to Chegg because of Google's AIO" [^22].
Source: Search Engine Journal / TechJuice / Startup.pk / BeyondSPX
URL: https://www.searchenginejournal.com/llms-are-changing-search-and-breaking-it/560346/
Date: 2025-12-30
Excerpt: "Education platform Chegg filed an antitrust lawsuit against Google showing major business impact from AI Overviews. Traffic declined 49% year over year, while Q4 2024 revenue hit $143.5 million (down 24% year-over-year). Market value collapsed from $17 billion at peak to under $200 million, a 98% decline."
Context: Chegg's CEO testified directly: "We would not need to review strategic alternatives if Google hadn't launched AI Overviews. Traffic is being blocked from ever coming to Chegg because of Google's AIO and their use of Chegg's content." The case argues Google used Chegg's content to train AI systems that directly compete with publishers.
Confidence: high

### Claim 26
Claim: Penske Media Corporation (owner of Rolling Stone, Billboard, Variety, WWD) filed the first major US publisher antitrust lawsuit against Google over AI Overviews in September 2025, alleging Google's conduct constitutes reciprocal dealing, monopoly maintenance, and unjust enrichment under the Sherman Act [^23].
Source: The Fashion Law / Courthouse News / Fordham Law Review (Stucke)
URL: https://www.thefashionlaw.com/wwd-rolling-stone-owner-sues-google-in-antitrust-test-for-ai-summaries/
Date: 2025-09-15
Excerpt: "PMC alleges that Google's AI-generated 'Overviews' and 'Search Generative Experience' unlawfully use publishers' work without consent... PMC contends that its brands — which attract hundreds of millions of monthly visitors — rely on traffic routed through Google search to monetize content via advertising, subscriptions, and affiliate commerce."
Context: The lawsuit is framed as antitrust, not copyright. It argues Google uses its monopoly in search to coerce publishers into supplying content for AI outputs while diverting traffic away. Google spokesperson countered: "With AI Overviews, people find search more helpful and use it more, creating new opportunities for content to be discovered."
Confidence: high

### Claim 27
Claim: The European Commission opened a formal antitrust investigation into Google on December 9, 2025 over AI Overviews and AI Mode, examining whether Google used publishers' content on unfair terms; the European Publishers Council filed a formal complaint in February 2026 [^24].
Source: European Commission / Tech Policy Press / Marek Lecian
URL: https://techpolicy.press/reviewing-european-antitrust-activity-in-2025-and-what-it-all-means-for-2026
Date: 2026-01-06
Excerpt: "On December 9, the EU began another antitrust investigation, this time into Google, examining whether Google violated EU competition rules by using web publishers' content for AI-related purposes. It will also assess to what extent Google's AI Overviews and AI Mode rely on publishers' material without providing suitable compensation."
Context: The UK CMA also designated Google with Strategic Market Status on September 30, 2025, covering AI Overviews and AI Mode. Publishers argue they face an "untenable choice": opt out of Google Search entirely to avoid AI scraping, or accept both.
Confidence: high

### Claim 28
Claim: A Columbia Journalism Review study (March 2025) found that eight leading generative search tools had a collective citation error rate of 60% when providing citation information; Perplexity at 37%, ChatGPT at 67%, and Grok-3 at 94% [^25].
Source: Columbia Journalism Review / Suprmind.ai / OWASP AISVS
URL: https://suprmind.ai/hub/insights/ai-hallucination-statistics-research-report-2026/
Date: 2026-05-16
Excerpt: "In March 2025, Columbia Journalism Review tested eight generative search tools with live search features... Across 1,600 total queries, the tools gave incorrect answers more than 60% of the time. Perplexity: 37%; Microsoft Copilot: 40%; Perplexity Pro: 45%; ChatGPT Search: 67%; DeepSeek Search: 68%; Google Gemini: 76%; Grok-2: 77%; Grok-3: 94%."
Context: This is a citation/retrieval reliability test, not a broad hallucination rate. It demonstrates that source links in AI responses do not guarantee accurate attribution. Oumi's study (April 2026) separately found that only 67% of claims in AI Overviews are supported by cited sources, meaning 1/3 of claims are hallucinated.
Confidence: high

### Claim 29
Claim: AI Overviews were accurate approximately 9 out of 10 times, but about half of AI Overviews contained facts not supported by the cited sources; Gemini 3 is more accurate than Gemini 2 but paradoxically less trustworthy with a higher hallucination rate [^26].
Source: Oumi.ai
URL: https://oumi.ai/blog/oumis-study-finds-50-of-ai-overviews
Date: 2026-04-14
Excerpt: "We found that AI Overviews were accurate approximately only 9 out of 10 times. And about half of AI Overviews contained facts not supported by the cited sources... We compared the results on the intersection of queries for which we were able to reliably obtain overviews and citations, and found that accuracy has increased in the newer Gemini 3 based overviews. Surprisingly, we found that the rate of hallucination has also increased."
Context: Oumi used the SimpleQA dataset (4,000+ challenging factual queries) and GPT-5 as LLM-as-judge. Only 67% of claims were supported by cited sources. This is concerning given Google's ubiquity—users perform "googols" of searches yearly.
Confidence: high

### Claim 30
Claim: SEO is not dead, but the strategy of producing high-volume informational content to capture top-of-funnel queries is functionally obsolete; technical SEO, domain authority, structured data, and bottom-of-funnel comparison content remain highly relevant and directly feed AI citation likelihood [^27].
Source: Mersel.ai / Enlear / SEOMA / Idea Digital Agency
URL: https://www.mersel.ai/blog/is-seo-dead
Date: 2026-03-17
Excerpt: "No, but significant portions of the traditional SEO playbook are functionally obsolete. Technical SEO, domain authority, structured data, and bottom-of-funnel comparison content all remain highly relevant and directly feed AI citation likelihood. What is effectively dead is the strategy of producing high-volume informational content to capture top-of-funnel queries."
Context: The "SEO death" narrative is overstated. BrightEdge found a 60% overlap between Perplexity citations and Google top-10 rankings. The right approach is hybrid: maintain SEO fundamentals while adding GEO visibility tracking and content optimization for citations. AI referral traffic is only ~1% of total web traffic, but growing fast.
Confidence: high

### Claim 31
Claim: Google AI Overviews now appear in 25.11% of Google searches (up from 13.14% in March 2025) and 99.9% of informational keywords trigger an AI Overview; commercial and transactional AI Overviews grew from 8.7% to 42.9% of AIO queries between January and October 2025 [^28].
Source: Conductor (2026 Benchmarks) / Semrush / Ahrefs
URL: https://www.omnibound.ai/blog/ai-search-statistics
Date: 2026-04-30
Excerpt: "AI Overviews now appear in 25.11% of Google searches, up from 13.14% in March 2025 (Conductor, 2026 Benchmarks)... 99.9% of informational keywords trigger an AI Overview (Ahrefs, November 2025)."
Context: The expansion into commercial queries is particularly alarming for e-commerce. Google is intercepting purchase-intent searches with AI-generated product recommendations, potentially bypassing retailer websites entirely.
Confidence: high

### Claim 32
Claim: 73% of B2B websites experienced significant traffic loss between 2024 and 2025, with average YoY declines reaching 34%; B2B software CTR fell by as much as 30% in some categories since AI Overviews launched [^29].
Source: Bain & Company (Losing Control, Sep 2025) / Onely / ABM Agency / NP Digital
URL: https://www.omnibound.ai/blog/zero-click-search-statistics
Date: 2026-06-02
Excerpt: "B2B software categories have seen CTR fall by as much as 30% since AI Overviews launched. 73% of B2B websites experienced significant traffic loss between 2024 and 2025, with average YoY declines reaching 34%."
Context: The most commercially consequential finding: 85% of B2B buyers purchase from their "day one" vendor list — formed before any search. Zero-click search is severing B2B brands' ability to insert themselves into list formation.
Confidence: high

---

## Source Index

[^1]: Ahrefs Blog, "Update: 38% of AI Overview Citations Pull From The Top 10," March 2, 2026. https://ahrefs.com/blog/ai-overview-citations-top-10/
[^2]: Omnibound.ai, "AI Search Statistics (2025-2026)," April 30, 2026. https://www.omnibound.ai/blog/ai-search-statistics
[^3]: GitHub / fseixas, "super-geo-agent-readiness," May 18, 2026. https://github.com/fseixas/super-geo-agent-readiness
[^4]: Wellows, "Google AI Overviews Ranking Factors: 2026 Guide," June 11, 2026. https://wellows.com/blog/google-ai-overviews-ranking-factors/
[^5]: SEOcrawl.ai, "AI Overviews Ranking Factors: SEO Guide (2026)," May 22, 2026. https://seocrawl.ai/blog/ai-overview-ranking-factors
[^6]: Discovered Labs, "From SGE to Google AI Overviews: Evolution, mechanics, and the new B2B playbook," Feb 5, 2026. https://discoveredlabs.com/blog/from-sge-to-google-ai-overviews-evolution-mechanics-and-the-new-b2b-playbook
[^7]: Search Savvy, "Google AI Overviews: How Search Changed from SGE to Now," Jan 11, 2026. https://searchsavvy.in/everything-about-google-ai-overviews-how-things-have-changed-from-sge-to-now/
[^8]: Alice Labs, "Zero-Click Search in the AI Era: 2026 Data & Strategy," May 6, 2026. https://alicelabs.ai/en/insights/zero-click-search-ai-era
[^9]: Stackmatix, "Google AI Overviews Optimization: How Featured Snippets Evolved for AI Search," 2026. https://www.stackmatix.com/blog/google-ai-overviews-optimization
[^10]: SE Ranking / Claude-SEO documentation, "Google AI Mode 2025–2026," Feb 7, 2026. https://github.com/AgriciDaniel/claude-seo/blob/main/skills/seo-content/SKILL.md
[^11]: Aggarwal et al., "GEO: Generative Engine Optimization," arXiv:2311.09735, KDD 2024. https://arxiv.org/abs/2311.09735
[^12]: Astiva.ai, "How to Optimize Content for AI Citations: The 2026 LLM Guide," June 7, 2026. https://astiva.ai/blog/optimize-content-ai-citations-llm
[^13]: Digital Applied, "What Actually Gets You Cited in AI Search (2026 Data)," June 24, 2026. https://www.digitalapplied.com/blog/ai-search-citation-ranking-factors-2026-data-study
[^14]: Omnibound.ai, "AI Search Statistics (2025-2026)," April 30, 2026. https://www.omnibound.ai/blog/ai-search-statistics
[^15]: Hendry.ai, "AI Marketing Measurement Problem (2026)," Feb 1, 2026. https://hendry.ai/ai-marketing/measurement
[^16]: Omnibound.ai, "AI Search Statistics (2025-2026)," April 30, 2026. https://www.omnibound.ai/blog/ai-search-statistics
[^17]: Omnibound.ai, "AI Search Statistics (2025-2026)," April 30, 2026. https://www.omnibound.ai/blog/ai-search-statistics
[^18]: Omnibound.ai, "Zero-Click Search Statistics (2026)," June 2, 2026. https://www.omnibound.ai/blog/zero-click-search-statistics
[^19]: ZipTie.dev, "Click Behavior in Zero-Click Search: Why Rankings No Longer Predict Traffic," May 16, 2026. https://ziptie.dev/blog/click-behavior-in-zero-click-search/
[^20]: WiloAI, "Gartner Predicts: 25% Drop in Search Volume by 2026," Jan 28, 2026. https://wiloai.com/gartner-predicts-25-drop-in-search-volume-by-2026-what-this-means-for-yourbusiness/
[^21]: arXiv, "Activation, Source Quality, Claim Fidelity, and Publisher Impact," May 13, 2026. https://arxiv.org/html/2605.14021v1
[^22]: Search Engine Journal, "LLMs Are Changing Search & Breaking It," Dec 30, 2025. https://www.searchenginejournal.com/llms-are-changing-search-and-breaking-it/560346/
[^23]: The Fashion Law, "WWD Owner Sues Google in Antitrust Test for AI Summaries," Sep 15, 2025. https://www.thefashionlaw.com/wwd-rolling-stone-owner-sues-google-in-antitrust-test-for-ai-summaries/
[^24]: Tech Policy Press, "Reviewing European Antitrust Activity in 2025," Jan 6, 2026. https://techpolicy.press/reviewing-european-antitrust-activity-in-2025-and-what-it-all-means-for-2026
[^25]: Suprmind.ai, "AI Hallucination Statistics 2026," May 16, 2026. https://suprmind.ai/hub/insights/ai-hallucination-statistics-research-report-2026/
[^26]: Oumi.ai, "Oumi's Study Finds 50% of AI Overviews Untrustworthy," April 14, 2026. https://oumi.ai/blog/oumis-study-finds-50-of-ai-overviews
[^27]: Mersel.ai, "Is SEO Dead in 2025 and 2026? Here Is the Real Answer," March 17, 2026. https://www.mersel.ai/blog/is-seo-dead
[^28]: Omnibound.ai, "AI Search Statistics (2025-2026)," April 30, 2026. https://www.omnibound.ai/blog/ai-search-statistics
[^29]: Omnibound.ai, "Zero-Click Search Statistics (2026)," June 2, 2026. https://www.omnibound.ai/blog/zero-click-search-statistics

---

*End of Dim 11 Research Report*
