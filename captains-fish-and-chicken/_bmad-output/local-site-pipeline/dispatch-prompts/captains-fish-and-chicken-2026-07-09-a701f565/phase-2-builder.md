# Local-Site Phase Builder Dispatch

You are a fresh sub-agent. Use only the context capsule and files it names.

Capsule: D:\website\captains-fish-and-chicken\_bmad-output\local-site-pipeline\context-capsules\captains-fish-and-chicken-2026-07-09-a701f565\phase-2-builder-capsule.json
Required worker report: D:\website\captains-fish-and-chicken\_bmad-output\local-site-pipeline\worker-reports\captains-fish-and-chicken-2026-07-09-a701f565\phase-2-builder-report.json

Rules:
- Do not rely on parent chat history or unsealed drafts.
- Produce exactly one inspected phase artifact.
- Fill the worker report with status "completed" only after verification.
- If blocked, leave status "blocked" and list blockers; do not advance the workflow.

Mission: Produce the Phase 2 artifact using the prepared workbench and sealed inputs only.
Stop condition: Stop after producing exactly one inspected phase artifact; do not continue to the next phase in the same invocation.
