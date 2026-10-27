# Task size, dependencies and review

## What points mean

Story points estimate relative effort, complexity and uncertainty. They are not hours, deadlines or algorithmic time complexity (Big-O). Initial estimates are a planning judgment, not a prediction of your learning speed.

| Points | Typical slice |
| --- | --- |
| 1 | Small, well-understood change with one clear check |
| 2 | A bounded change with a few states to verify |
| 3 | A coherent behavior with meaningful success and failure cases |
| 4 | The largest actionable slice: still independently reviewable |

Anything above **4** must become a parent containing actionable sub-issues of 1–4 points. A parent can show 6, 8, 13 or another total because its Estimate is the sum of its children. Never implement or commit to that parent as one task, and never add parent totals to leaf totals when calculating effort. If a child grows above 4, split it again before work begins.

The first 20–45 minute step is a starting session, not the task's duration. Re-estimate together after your first few completed tasks; do not inflate scope just to reach an estimate.

When scope or estimates change, update the issue, its project fields, `docs/backlog.json` and the issue mapping together. Unknown remediation work is triaged and sized after findings are known; the current estimate never authorizes an unbounded batch of fixes.

## How to pick the next task

Use the board's **Order** and **Estimate** fields. The board order respects prerequisites; parent containers appear before their children when dependencies allow. An unresolved dependency can cause children of one parent to be separated by another task. That is intentional.

1. Pick the earliest actionable issue whose prerequisites are complete.
2. For a parent, pick its first ready sub-issue instead of implementing the parent.
3. Keep one actionable issue In progress. Move it to In review when evidence is ready.
4. Mark a parent Done only after all children and its original acceptance criteria are resolved.

Dependencies referencing a parent require all applicable child work to be complete. Conditional work can be excluded only through a linked explicit scope decision and recorded N/A result; it must not silently disappear. If recovery is N/A but password change is required, the N/A recovery child does not prevent the approved password-change flow.

## Definition of ready

- One observable outcome and clear acceptance examples.
- Prerequisites resolved; unknown Figma details or API decisions explicitly recorded.
- Estimate between 1 and 4 for actionable work; larger work decomposed.
- Clear first step, short lesson, assessment and review evidence.
- Relevant success, failure and accessibility checks identified before implementation.

## Definition of done

- Acceptance criteria demonstrated using synthetic data where needed.
- Relevant tests/checks pass; no secrets or unrelated feature work.
- UI changes include applicable mobile, keyboard, touch and reduced-motion evidence.
- The learner can explain the concept and tradeoff in the assessment.
- Required review feedback resolved; parent/child and board status updated deliberately.

## Confirmed row reorder contract

U07 owns this interaction: dragging its handle moves **the entire row**, while other rows rearrange live before release. Dropping commits the visible destination. Stable identity/content, no-op and boundary moves, cancel restoration, touch scrolling, keyboard pickup/move/drop/cancel, focus/announcements and reduced motion all need evidence. Animating only the handle or rearranging siblings only after release does not satisfy it.

The existing row collection and order ownership/persistence are decided in F02/F03/U07.a. Do not invent a new screen, cross-list dragging or a persistence API. If durable ordering is chosen, size and split its storage/API/integration work before implementation; the current confirmed interaction does not by itself require persistence.
