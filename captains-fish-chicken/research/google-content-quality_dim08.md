# Dim 08: Humanization & Evasion Techniques — Manual and Automated

## Deep-Dive Investigation Report
**Date:** 2026-07-01  
**Researcher:** Deep_Researcher  
**Phase:** 3 of Deep Research  
**Searches Conducted:** 20+ independent queries across academic papers, independent benchmarks, ethics debates, and policy analysis.

---

## ANGLE 1: CURRENT STATE — Most Effective Manual and Automated Techniques with Effectiveness Data

---

Claim: Adversarial Paraphrasing (Cheng et al. 2025) achieves an average 87.88% reduction in TPR@1%FPR across 8 detectors, including neural network-based, watermark-based, and zero-shot approaches, making it the most effective training-free attack framework currently documented [^1].
Source: Cheng et al., arXiv:2506.07001 (NeurIPS 2025)
URL: https://arxiv.org/abs/2506.07001
Date: 2025-06-08
Excerpt: "Across a diverse set of detectors—including neural network-based, watermark-based, and zero-shot approaches—our attack achieves an average T@1%F reduction of 87.88% under the guidance of OpenAI-RoBERTa-Large."
Context: The paper introduces a detector-guided paraphrasing framework where an LLM paraphrases AI-generated content under the guidance of an AI text detector, producing adversarial examples optimized to bypass detection. The attack transfers across detectors because they converge toward a common human-like distribution.
Confidence: high

---

Claim: AuthorMist (David & Gervais 2025) achieves attack success rates (ASR) ranging from 78.6% to 96.2% against individual commercial detectors while maintaining semantic similarity above 0.94, using a 3B-parameter model fine-tuned with GRPO and commercial detector APIs as reward functions [^2].
Source: David & Gervais, arXiv:2503.08716
URL: https://arxiv.org/abs/2503.08716
Date: 2025-03-10
Excerpt: "Our evaluation shows attack success rates ranging from 78.6% to 96.2% against individual detectors, significantly outperforming baseline paraphrasing methods. AuthorMist maintains high semantic similarity (above 0.94) with the original text while successfully evading detection."
Context: This reinforcement learning-based system treats external detector APIs (GPTZero, WinstonAI, Originality.ai, Sapling, HelloSimpleAI, OpenAI RoBERTa) as reward signals within an RL loop. The "API-as-reward" methodology enables optimization against any accessible detector.
Confidence: high

---

Claim: MASH (Gu et al. 2026) achieves 92% average ASR across 6 datasets and 5 detectors through a multi-stage style transfer pipeline, surpassing strongest baselines by 24%, while requiring only ~3GB GPU memory and 1.7 seconds per sample at inference [^3].
Source: Gu et al., arXiv:2601.08564 (ACL Findings 2026)
URL: https://arxiv.org/html/2601.08564v1
Date: 2026-01-13
Excerpt: "MASH is a multi-stage black-box attack framework that reformulates detector evasion as a style transfer task. It trains a lightweight BART-based paraphraser (~0.1B parameters) through a sequential pipeline—Style-injection SFT, DPO alignment, and inference-time refinement."
Context: MASH is unique in treating evasion as "machine-to-human" style transfer. Stages 1–3 are offline, yielding zero query cost at inference time. The 4th stage uses LLM-guided adversarial refinement with perplexity ranking.
Confidence: high

---

Claim: SICO (Lu et al. 2023) reduces detector AUC by approximately 0.5 on average across 6 detectors using only 40 human-written examples and limited LLM inferences, achieving human-level readability and task completion rates [^4].
Source: Lu et al., arXiv:2305.10847
URL: https://arxiv.org/abs/2305.10847
Date: 2023-05-18
Excerpt: "Extensive experiments across three real-world tasks demonstrate that SICO significantly outperforms the paraphraser baselines and enables GPT-3.5 to successfully evade six detectors, decreasing their AUC by 0.5 on average."
Context: SICO is a prompt-based optimization method (Substitution-based In-Context example Optimization) that constructs detection-minimizing prompts. Once built, a task-specific prompt can be universally used against a wide range of detectors.
Confidence: high

---

Claim: StealthRL (Ranganath & Ramesh 2026) achieves a 99.9% attack success rate and near-zero detection (0.001 mean TPR@1%FPR) by training a paraphrase policy against a multi-detector ensemble using GRPO with LoRA adapters on Qwen3-4B [^5].
Source: Ranganath & Ramesh, arXiv:2602.08934
URL: https://arxiv.org/html/2602.08934v1
Date: 2026-02-09
Excerpt: "StealthRL achieves near-zero detection (0.001 mean TPR@1%FPR), reduces mean AUROC from 0.74 to 0.27, and attains a 99.9% attack success rate. Critically, attacks transfer to a held-out detector family not seen during training."
Context: This represents the current state-of-the-art in RL-based adversarial paraphrasing, extending AuthorMist's single-detector approach to multi-detector ensemble training with held-out evaluation.
Confidence: high

---

Claim: SilverSpeak (Creo & Pudasaini 2025) demonstrates that homoglyph substitution (e.g., replacing Latin 'A' with Cyrillic 'А') can effectively circumvent 7 state-of-the-art detectors, decreasing average Matthews Correlation Coefficient from 0.64 to -0.01 [^6].
Source: Creo & Pudasaini, GenAIDetect Workshop 2025 (COLING)
URL: https://aclanthology.org/2025.genaidetect-1.1/
Date: 2025-01
Excerpt: "Our findings demonstrate that homoglyph-based attacks can effectively circumvent state-of-the-art detectors, leading them to classify all texts as either AI-generated or human-written (decreasing the average Matthews Correlation Coefficient from 0.64 to -0.01)."
Context: This is a character-level attack that requires no rewriting or semantic change—only visual substitution of Unicode characters. It is trivially defeated by normalization but exposes fundamental tokenization-level vulnerabilities.
Confidence: high

---

Claim: Independent 2026 benchmarks show commercial humanizer tools achieve highly variable bypass rates: Undetectable AI (82–87% GPTZero, 54–67% Turnitin), StealthWriter (73–79% GPTZero, 38–52% Originality.ai), HIX Bypass (74–80% GPTZero, 49–61% Originality.ai), with no tool achieving consistent cross-detector evasion [^7].
Source: EyeSift Independent Testing
URL: https://www.eyesift.com/blog/stealthwriter-review/
Date: 2026-05-03
Excerpt: "Independent testing shows bypass rates ranging from 38% to 79% depending on which detector and content type is involved. '100% undetectable' is a marketing claim, not a result."
Context: The EyeSift benchmark tested 90 samples of 400–800 words across Enhanced mode. Turnitin's AIR-1 update specifically trained on humanizer-processed content, reducing category-wide bypass effectiveness.
Confidence: high

---

Claim: Manual structural editing combined with automated humanization produces 2.3× better bypass rates than automated tools alone, per a 2025 study in Computers in Human Behavior [^8].
Source: EyeSift / Computers in Human Behavior 2025 (cited in review)
URL: https://www.eyesift.com/blog/undetectable-ai-review/
Date: 2026-04-18
Excerpt: "A 2025 study published in Computers in Human Behavior found that comprehensive manual editing combined with automated humanization produced 2.3x better bypass rates than automated tools alone."
Context: Manual techniques include sentence variation, burstiness injection, removing AI watermark words, adding personal anecdotes, and breaking grammatical rules. The synergy between manual editing (content-level) and automated tools (statistical-level) is complementary.
Confidence: medium

---

Claim: Key manual techniques for humanizing AI content include: injecting personal anecdotes, varying sentence structure (burstiness), removing AI watermark words ("delve," "testament to," "in conclusion"), using emotional/sensory language, adding specific concrete details, breaking grammar rules intentionally, and the read-aloud test [^9].
Source: Humbot.ai / Multiple manual editing guides
URL: https://humbot.ai/hub/humanize-ai/how-to-humanize-ai-writing
Date: 2026-01-30
Excerpt: "7 Manual Ways to Humanize Your AI Writing: Inject Personal Anecdotes (The 'I' Factor), Vary Sentence Structure (Increase Burstiness), Remove 'AI Watermark' Words, Use Emotional and Sensory Language, Be Specific and Concrete, Break the Grammar Rules, The Read-Aloud Test."
Context: These techniques target the core statistical signals detectors measure: perplexity (predictability) and burstiness (variance in sentence length). AI text tends to have low perplexity and low burstiness; manual edits increase both.
Confidence: high

---

## ANGLE 2: HISTORY — Evolution from Simple Paraphrasing to RL-Based Adversarial Attacks to Style Transfer

---

Claim: The evasion timeline begins with early detection (GLTR token rarity statistics for GPT-2, ~2019), followed by RoBERTa-based discriminators and zero-shot methods like DetectGPT (2023), then paraphrasing attacks (DIPPER, Krishna et al. 2023), then prompt-based attacks (SICO, 2023), then adversarial paraphrasing (Cheng et al. 2025), RL-based attacks (AuthorMist 2025, StealthRL 2026), and finally style-transfer approaches (MASH 2026) [^10].
Source: AuthorMist paper (Related Work section) / AI Writing Evolution blog
URL: https://arxiv.org/html/2503.08716v1
Date: 2025-03-10
Excerpt: "Early approaches like GLTR used token rarity statistics to highlight unlikely word sequences produced by GPT-2... More automated classifiers soon emerged, such as RoBERTa-based discriminators... and zero-shot methods like DetectGPT... As detectors improve, so do methods to evade them."
Context: The arms race has produced increasingly sophisticated attacks. Each generation of detectors has been met with more advanced evasion. The progression moves from: (1) surface perturbations, (2) paraphrasing, (3) detector-guided optimization, (4) RL with API rewards, (5) multi-detector RL, (6) style-transfer as evasion.
Confidence: high

---

Claim: DIPPER (Krishna et al. 2023), a T5-XXL paraphraser with lexical and syntactic controls, was the first major demonstration that paraphrasing systematically evades detectors, achieving detection accuracy drops from 70.3% to 4.6% on some systems [^11].
Source: Krishna et al., NeurIPS 2023 / Cheng et al. comparison table
URL: https://arxiv.org/abs/2303.13408
Date: 2023
Excerpt: "Their biggest drop in detection accuracy (at 1% FPR) is from 70.3% to 4.6%; smallest from 100.0% to 55.8%." (Cheng et al. citing DIPPER)
Context: DIPPER established paraphrasing as the foundational evasion technique. All subsequent methods build on this insight: detectors are calibrated to a fixed human distribution, and paraphrasing can push AI text closer to that distribution.
Confidence: high

---

Claim: Sadasivan et al. (2023) proved theoretically that under sufficiently capable paraphrasing, any detector's performance degrades toward random chance, establishing the theoretical limit of the detection-evasion arms race [^12].
Source: Sadasivan et al. (cited in multiple 2025–2026 papers)
URL: https://arxiv.org/abs/2303.13408 (related work in Cheng et al.)
Date: 2023
Excerpt: "Sadasivan et al. (2023) proved theoretically that under a sufficiently capable paraphrasing attack, any detector's performance is bounded to degrade toward random chance." (ResearchSquare paper citing Sadasivan)
Context: This theoretical result is fundamental: it means no detector can be universally robust against a strong enough paraphraser. The theorem underpins why every subsequent defensive advance has been met with a more sophisticated attack.
Confidence: high

---

Claim: The evolution from simple paraphrasing to adversarial paraphrasing (detector-guided) to RL-based attacks (AuthorMist, StealthRL) to style transfer (MASH) represents a shift from: (a) generic rewriting, (b) detector-aware optimization, (c) learned policies via feedback, (d) learned human-like style distributions [^13].
Source: MASH paper / StealthRL paper
URL: https://arxiv.org/html/2601.08564v1 / https://arxiv.org/html/2602.08934v1
Date: 2026-01-13 / 2026-02-09
Excerpt: "MASH extends TST [text style transfer] to stylistic humanization, redefining detector evasion as a specialized 'machine-to-human' style transfer task." / "StealthRL extends [AuthorMist's] approach to multi-detector ensemble training with held-out evaluation."
Context: The field has matured from simple heuristics to principled machine learning frameworks. Each stage learns more about the target detectors: DIPPER knows nothing, adversarial paraphrasing knows detector scores, RL methods learn policies from repeated feedback, and style transfer learns the human distribution directly.
Confidence: high

---

## ANGLE 3: STAKEHOLDERS — Who Uses What and Why

---

Claim: Students are the most visible stakeholder group, with 75% reporting stress related to AI detection and over 50% fearing false accusations; ESL students experience roughly twice the anxiety level of domestic students [^14].
Source: GenZWrite / Inside Higher Ed survey 2026
URL: https://genzwrite.com/blog/ai-humanizer-students-flag-false-detection
Date: 2026-03-24
Excerpt: "According to a 2026 Inside Higher Ed survey, 75% of students now report stress related to AI detection, and more than half specifically fear being falsely accused of using AI. For international and ESL students, that anxiety is roughly twice as intense."
Context: Students use humanizers both for legitimate purposes (polishing AI-assisted drafts, avoiding false positives on their own writing) and for misconduct (submitting fully AI-generated work). The "flagxiety" phenomenon is documented across college applicants, med school applicants, and graduate students.
Confidence: high

---

Claim: Freelance writers and content creators use AI humanizers to scale output 3× while maintaining quality standards, with reported workflows producing 25–35 articles/month versus 8–12 without AI assistance [^15].
Source: TheHumanizeAI.pro
URL: https://thehumanizeai.pro/articles/ai-humanizer-for-freelance-writers
Date: 2026-05-13
Excerpt: "Freelance writers using AI humanization deliver 3x more content per month while maintaining the quality standards clients expect. With AI + Humanize AI Pro: Output: 25-35 articles/month, Revenue: $7,500-$10,500/month, Time per article: 45-60 minutes."
Context: Freelancers on platforms like Upwork and Fiverr report work rejection or account suspension based on AI detection. Humanizers are used as a productivity tool—similar to spellcheck or research databases—in a workflow that still includes expert enhancement and quality checking.
Confidence: medium

---

Claim: ESL (non-native English) writers are disproportionately impacted by AI detection bias; the landmark Stanford study (Liang et al. 2023) found GPT detectors falsely flagged 61.22% of TOEFL essays written by non-native English speakers, with 97.8% flagged at least once by at least one detector, while native-speaker essays showed near-zero false positives [^16].
Source: Liang et al., Patterns (Cell Press) 2023
URL: https://doi.org/10.1016/j.patter.2023.100779
Date: 2023-07
Excerpt: "GPT detectors are biased against non-native English writers." / "Seven detectors flagged 61.22% of non-native TOEFL essays as AI-generated, with 97.80% flagged at least once."
Context: The mechanism is well-understood: ESL writing exhibits lower perplexity (simpler vocabulary, more formulaic transitions, uniform syntactic complexity), which detectors misread as AI signatures. For ESL students, using a humanizer is often a fairness tool, not a cheating tool.
Confidence: high

---

Claim: Publishers and SEO teams use Originality.ai and Copyleaks as quality gates, but independent testing shows even the best detectors catch only 7.8% (Originality.ai) to 25% (Copyleaks) of properly humanized content, making them unreliable as publishing filters [^17].
Source: TheHumanizeAI.pro Detector Leaderboard 2026
URL: https://thehumanizeai.pro/articles/ai-detector-accuracy-leaderboard-2026
Date: 2026-06-26
Excerpt: "When AI text was processed through a quality humanizer before testing, detection rates dropped to 2-8% across all tools. Even Originality.ai only caught 7.8% of humanized content."
Context: Content publishers face a paradox: they need to ensure quality, but detection tools fail on humanized text. The market response has been a shift toward valuing content quality (E-E-A-T) over provenance.
Confidence: medium

---

Claim: Academics and researchers increasingly use AI for drafting, literature review, and editing, but face journal submissions and grant proposals subject to AI detection screening. The 2026 Nature study found AI-assisted writing is growing fastest among non-English-speaking and less-established scientists [^18].
Source: Nature / Liu et al. 2025 (cited in arXiv 2511.11687)
URL: https://arxiv.org/html/2511.11687v2
Date: 2026-03-10
Excerpt: "Liu et al. (2025) AI-assisted writing is growing fastest among non-English-speaking and less established scientists."
Context: The academic community is split: some journals ban AI authorship, others allow AI-assisted drafting with disclosure. The detection arms race affects researchers who legitimately use AI for language polishing.
Confidence: medium

---

## ANGLE 4: COUNTER-NARRATIVE — Ethics, Tool Claims vs. Reality, Google Policy, Flagxiety, Institutional Retreat

---

Claim: "Flagxiety" (AI detection anxiety) is a documented phenomenon affecting college applicants, med school applicants, graduate students, freelance writers, and academics—especially international students and neurodivergent writers who face disproportionately high false-positive rates [^19].
Source: GradPilot / Gegg-Harrison & Quarterman (IRMA International)
URL: https://gradpilot.com/news/what-is-flagxiety
Date: 2026-05-13
Excerpt: "Flagxiety is not limited to college applicants submitting Common App essays. The anxiety extends to anyone whose writing is subject to AI detection." / "This chapter... presents the possibility that neurodivergent writers, along with L2 writers, are more likely to be impacted by false positives."
Context: The term describes the low-grade dread that accompanies submitting writing subject to AI detection. 81% of ESL students report detection anxiety versus 74% of domestic students. A Yale Executive MBA student filed suit in 2025 after suspension based on a GPTZero flag.
Confidence: high

---

Claim: Over 50 universities across the US, Canada, UK, Australia, and South Africa have formally banned, disabled, or discouraged AI detection tools, including MIT, Yale, Georgetown, UCLA, Vanderbilt, Princeton, Harvard, Stanford, and UC Berkeley [^20].
Source: DetectionDrama / PLEASE Database
URL: https://detectiondrama.com/universities-that-banned-ai-detectors/
Date: 2026-06-27
Excerpt: "Over 50 universities — including MIT, Yale, Georgetown, UCLA, and Vanderbilt — have banned or disabled AI detection tools, citing false positives, bias against non-native English speakers, and the fundamental unreliability of the technology."
Context: The institutional retreat is driven by: (1) documented false positives, (2) ESL bias, (3) legal exposure (Yale lawsuit), (4) pedagogical philosophy (trust over surveillance), and (5) the Weber-Wulff et al. (2023) finding that no tool scored above 80% accuracy.
Confidence: high

---

Claim: OpenAI shut down its own AI Text Classifier in July 2023 after achieving only 26% accuracy (true positive rate) with a 9% false positive rate on human writing, explicitly stating it was "impossible to reliably detect all AI-written text" [^21].
Source: OpenAI / TechCrunch / Originality.ai blog
URL: https://techcrunch.com/2023/07/20/openai-shuts-down-ai-classifier/
Date: 2023-07-20
Excerpt: "As of July 20, 2023, the AI classifier is no longer available due to its low rate of accuracy." / "It is impossible to reliably detect all AI-written text."
Context: The creator of ChatGPT could not build a reliable detector for its own model. This is the most consequential admission in the field and underpins the institutional retreat. OpenAI shifted to watermarking research instead.
Confidence: high

---

Claim: Google's official stance is that it does not penalize AI content per se, but rather low-quality content regardless of origin; however, the March and June 2025 core updates cracked down on "scaled content abuse" and explicitly devalued AI-generated content lacking originality, depth, or value [^22].
Source: SEO Perth Experts / Google Search Central
URL: https://www.seoperthexperts.com.au/wp-content/uploads/2025/07/Google-Updates-and-AI-Content_.pdf
Date: 2025-07
Excerpt: "Google's official stance is that it does not penalize AI content per se, but rather low-quality content, regardless of its origin. However, the simultaneous crackdown on 'scaled content abuse' and explicit mentions of AI-generated content lacking value strongly suggest that, in practice, most AI-generated content at scale currently falls into Google's 'low-quality' bucket."
Context: The nuance is critical: Google targets quality, not authorship. But mass unedited AI content typically triggers quality issues (lack of E-E-A-T, generic output, duplication). Google's Quality Rater Guidelines now include specific instructions for spotting automated paraphrasing.
Confidence: high

---

Claim: Tool marketing claims of "100% undetectable" or "99% accuracy" are not supported by independent benchmarks; the largest independent study (Weber-Wulff et al., 2023) tested 14 tools and found none scored above 80% accuracy, with only 5 above 70% [^23].
Source: DetectionDrama / Weber-Wulff et al., International Journal for Educational Integrity 2023
URL: https://detectiondrama.com/universities-that-banned-ai-detectors/
Date: 2026-06-27
Excerpt: "The largest independent study of AI detection tools (Weber-Wulff et al., 2023) tested 14 tools and found none scored above 80% accuracy. Only 5 scored above 70%."
Context: The gap between vendor claims and independent verification is stark. Turnitin claims <1% false positive, but independent studies show 2–5% (general) and 43–83% on student essays. ZeroGPT claims 99% accuracy but independent testing shows 74.1% detection with 16.2% false positives.
Confidence: high

---

Claim: The ethics of AI humanization are context-dependent: using it to polish AI-assisted drafts where disclosure is permitted is ethically acceptable; using it to submit fully AI-generated academic work as one's own is academic fraud, which 78% of universities with AI policies classify as equivalent to plagiarism [^24].
Source: Lund et al., MDPI 2025 / International Center for Academic Integrity
URL: https://www.mdpi.com/3042-8130/1/1/2
Date: 2025-09-02
Excerpt: "The rise of generative AI in higher education has disrupted our traditional understandings of academic integrity, moving our focus from clear-cut infractions to evolving ethical judgment." / "78% of universities with AI policies classify violations as equivalent to plagiarism."
Context: The ethical framework is shifting from authorship (who wrote it?) to integrity (is the work genuinely the student's own thinking?). The Lund et al. study of 401 students found ethical beliefs—not institutional policies—are the strongest predictors of perceived misconduct.
Confidence: high

---

Claim: The AI content market is projected to grow from $18.4 billion (2025) to $212.6 billion by 2034 (31.4% CAGR), with 73% of enterprise content teams in 2025 adopting human-AI collaborative workflows [^25].
Source: DataIntelo AI-Generated Content Market Report
URL: https://dataintelo.com/report/ai-generated-content-market
Date: 2025-06-28
Excerpt: "The AI-Generated Content market was valued at $18.4 billion in 2025 and is projected to reach $212.6 billion by 2034, growing at a 31.4% CAGR." / "73% of enterprise content teams in 2025 had adopted a human-AI collaborative workflow model."
Context: The commercial incentive for humanization tools is enormous. The market includes not just students but marketers, SEO agencies, publishers, and enterprise content teams. The economic driver is efficiency: AI produces 10,000+ words/minute at near-zero marginal cost versus 500–1,000 words/hour for a skilled human.
Confidence: medium

---

Claim: AI detection false positives are a structural, not solvable, problem for non-native English writers. Mathematical proof shows ESL writing patterns are indistinguishable from AI outputs at the statistical level, and over 50 universities have disabled detection tools since 2025, with Curtin University explicitly citing ESL bias [^26].
Source: Paper-Checker / Stanford HAI / Curtin University
URL: https://hub.paper-checker.com/blog/international-students-ai-detection-guide-2026/
Date: 2026-06-10
Excerpt: "The bias is structural, not a solvable bug—mathematical proof shows ESL writing patterns are indistinguishable from AI outputs at the statistical level. 81% of ESL students report detection anxiety compared to 74% of domestic students."
Context: The underlying mechanism (low perplexity in L2 writing) is well-established in linguistics predating AI detection. The false positive problem is not a bug that can be patched; it is inherent to the statistical approach of comparing ESL writing against native-speaker baselines.
Confidence: high

---

Claim: TheHumanizeAI.pro and similar benchmarking sites claim 99.8% bypass rates for their own tools, but these are marketing claims from tool vendors, not independent peer-reviewed studies. Independent testing consistently shows lower and more variable results across detectors [^27].
Source: TheHumanizeAI.pro / EyeSift independent testing
URL: https://thehumanizeai.pro/articles/best-ai-humanizers-2026
Date: 2026-06-01
Excerpt: "Humanize AI Pro (Overall winner): Pass Rate: 99.8%." vs. EyeSift: "Independent testing shows bypass rates ranging from 38% to 79%."
Context: The divergence between vendor claims and independent benchmarks is a central counter-narrative. Vendor tests optimize for their own tools; independent tests use standardized samples across multiple detectors. The honest assessment is that no tool achieves reliable cross-detector evasion.
Confidence: high

---

## SOURCES INDEX

[^1]: Cheng et al., "Adversarial Paraphrasing: A Universal Attack for Humanizing AI-Generated Text," arXiv:2506.07001, 2025. https://arxiv.org/abs/2506.07001
[^2]: David & Gervais, "AuthorMist: Evading AI Text Detectors with Reinforcement Learning," arXiv:2503.08716, 2025. https://arxiv.org/abs/2503.08716
[^3]: Gu et al., "MASH: Evading Black-Box AI-Generated Text Detectors via Style Humanization," arXiv:2601.08564 (ACL Findings 2026). https://arxiv.org/html/2601.08564v1
[^4]: Lu et al., "Large Language Models can be Guided to Evade AI-Generated Text Detection," arXiv:2305.10847, 2023. https://arxiv.org/abs/2305.10847
[^5]: Ranganath & Ramesh, "StealthRL: Reinforcement Learning Paraphrase Attacks for Multi-Detector Evasion," arXiv:2602.08934, 2026. https://arxiv.org/html/2602.08934v1
[^6]: Creo & Pudasaini, "SilverSpeak: Evading AI-Generated Text Detectors using Homoglyphs," GenAIDetect Workshop 2025. https://aclanthology.org/2025.genaidetect-1.1/
[^7]: EyeSift, "StealthWriter Review: AI Humanizer That Bypasses Detection," 2026. https://www.eyesift.com/blog/stealthwriter-review/
[^8]: EyeSift (citing Computers in Human Behavior 2025), "Undetectable AI Review," 2026. https://www.eyesift.com/blog/undetectable-ai-review/
[^9]: Humbot.ai, "How to Humanize AI Writing: 7 Strategies," 2026. https://humbot.ai/hub/humanize-ai/how-to-humanize-ai-writing
[^10]: AuthorMist paper, Related Work section; Writebros.ai, "AI Writing Evolution," 2026.
[^11]: Krishna et al., "Paraphrasing Evades Detectors of AI-Generated Text," NeurIPS 2023.
[^12]: Sadasivan et al., 2023 (cited in Cheng et al. 2025 and ResearchSquare).
[^13]: MASH paper; StealthRL paper.
[^14]: GenZWrite, "How Students Write Without the Fear of getting flagged," 2026. https://genzwrite.com/blog/ai-humanizer-students-flag-false-detection
[^15]: TheHumanizeAI.pro, "AI Humanizer for Freelance Writers," 2026. https://thehumanizeai.pro/articles/ai-humanizer-for-freelance-writers
[^16]: Liang et al., "GPT detectors are biased against non-native English writers," Patterns (Cell Press) 4(7), 2023. https://doi.org/10.1016/j.patter.2023.100779
[^17]: TheHumanizeAI.pro, "AI Detector Accuracy Leaderboard 2026," 2026. https://thehumanizeai.pro/articles/ai-detector-accuracy-leaderboard-2026
[^18]: Liu et al. 2025, cited in "Does Scientific Writing Converge to U.S. English?" arXiv:2511.11687, 2026.
[^19]: GradPilot, "What Is Flagxiety?" 2026. https://gradpilot.com/news/what-is-flagxiety / Gegg-Harrison & Quarterman, "AI Detection's High False Positive Rates and the Psychological and Material Impacts on Students," IRMA International 2025.
[^20]: DetectionDrama, "Universities That Banned AI Detectors: The Complete List (2026)," 2026. https://detectiondrama.com/universities-that-banned-ai-detectors/
[^21]: OpenAI / TechCrunch, "OpenAI pulls plug on AI detection tool over low accuracy rate," 2023. https://coingeek.com/openai-pulls-plug-on-ai-detection-tool-over-low-accuracy-rate/
[^22]: SEO Perth Experts, "Google Updates and AI Content," 2025. https://www.seoperthexperts.com.au/wp-content/uploads/2025/07/Google-Updates-and-AI-Content_.pdf
[^23]: DetectionDrama / Weber-Wulff et al., "Testing of detection tools for AI-generated text," International Journal for Educational Integrity, 2023.
[^24]: Lund et al., "Student Perceptions of AI-Assisted Writing and Academic Integrity," MDPI 2025. https://www.mdpi.com/3042-8130/1/1/2
[^25]: DataIntelo, "AI-Generated Content Market Research Report 2034," 2025. https://dataintelo.com/report/ai-generated-content-market
[^26]: Paper-Checker, "International Students & AI Detection: 2026 False Positive Guide," 2026. https://hub.paper-checker.com/blog/international-students-ai-detection-guide-2026/
[^27]: TheHumanizeAI.pro vs. EyeSift independent testing, 2026.
