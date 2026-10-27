# Backlog Scope and Sizing Plan

**Goal:** Audit the existing 40 learning issues, add the confirmed whole-row reorder requirement, and split oversized work into GitHub sub-issues.

**Authority:** The user requested task updates and a full scope/sizing review. Product implementation remains the user's work. The latest confirmed interaction requires handle-initiated whole-row movement, live sibling rearrangement, drop placement, keyboard and touch support.

**Approach:** Preserve existing issues, statuses, comments and original acceptance criteria. Add explicit story-point estimates. Work greater than 4 points becomes a parent with independently reviewable sub-issues of 1–4 points. Parent points roll up children and are never counted twice. Order actionable leaves topologically by prerequisites, with parents immediately before their children where possible.

## Steps
- [x] Snapshot live issues, statuses and existing sub-issue relationships.
- [x] Independently audit frontend and backend coverage; audit foundations, quality and deployment.
- [x] Add a reorder requirement and its acceptance matrix without implementing it.
- [x] Update local task definitions, estimates, dependencies and learning/review policy.
- [x] Verify every original issue's acceptance remains covered, all actionable items are <=4 points, and dependencies are acyclic.
- [x] Create actual GitHub sub-issues, attach them to parents, update planning sections on the existing issues and add project estimates.
- [x] Order the board by dependency; verify issue counts, relationships, estimates, statuses and scope coverage against remote state.
- [x] Prepare the verified planning documents for commit and push; no portfolio implementation changes.

## Scope limits
The Figma connector lists source links that cannot be read in this session, and the browser preview requires sign-in. The user-provided reorder description is confirmed. Other exact screens/assets remain subject to the existing Figma inventory task. Do not invent persistence, cross-list dragging, registration, email or new screens as confirmed requirements. Conditional admin functionality stays conditional.
