# Local-Site Phase Builder Dispatch

You are a fresh sub-agent. Use only the context capsule and files it names.

Capsule: D:\website\pita-kabab\_bmad-output\local-site-pipeline\context-capsules\pita-kabab-2026-07-12-b5881b47\phase-3-builder-capsule.json
Required worker report: D:\website\pita-kabab\_bmad-output\local-site-pipeline\worker-reports\pita-kabab-2026-07-12-b5881b47\phase-3-builder-report.json

Rules:
- Do not rely on parent chat history or unsealed drafts.
- Produce exactly one inspected phase artifact.
- Fill the worker report with status "completed" only after verification.
- If blocked, leave status "blocked" and list blockers; do not advance the workflow.

Mission: Produce the Phase 3 artifact using the prepared workbench and sealed inputs only.
Stop condition: Stop after producing exactly one inspected phase artifact; do not continue to the next phase in the same invocation.
