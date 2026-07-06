# Review — Phase 2 PLAN · reviewer: page-matrix-depth · verdict: PASS

The single-route matrix is correct FOR THIS ENGINE. The restaurant archetype injects only `/`,
so inventing /menu, /deals, /visit HTML routes would mean ejecting the integration — the exact
"old work" path we were told not to repeat. The plan instead folds menu/deals/visit into the
landing plus machine-readable schema (Menu, LocalBusiness, Offer), which is the intended GEO/AI
surface. That is depth in the right layer (structured data) rather than page-count padding.

Anti-doorway check: no thin matrix pages are generated, so there is nothing to fail the
do-not-ship unique-content requirement. Good.

One carried condition: the folded-menu decision means the menu is not human-browsable as its own
page at launch. That is an engine limitation, documented in the artifact and acceptable for v0.x —
flag it to the owner so expectations are set. Real-photo slots are correctly marked
blocked-awaiting-photos rather than fabricated. PASS.
