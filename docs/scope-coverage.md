# Portfolio backlog scope review — 2026-10-27

All 40 original issues were audited against the user's initialization request, the existing acceptance criteria, the supplied backend architecture/security reference and the new row-reorder description. Original acceptance text remains on its parent or unsplit task. These are plans for the user to implement, not completed product features.

The resulting plan contains **42 top-level issues**, including **29 parent containers**, and **67 linked sub-issues**. There are **80 actionable tasks**, each estimated at **1–4 story points**. Parent estimates roll up their children and may exceed 4; they are not separate actionable commitments.

| Scope | Tasks | Review result |
| --- | --- | --- |
| Workspace, development workflow and learning | F01, F04, F05 | Setup exercise and small PR practice retained; add frontend interaction and isolated API/database test harnesses before dependent implementation |
| Exact Figma inventory and content/API decisions | F02, F03 | Inventory explicitly records row reorder and unverified details; content, contracts and persistence/auth decisions split |
| Fonts, licensing, loading and fallbacks | D01 | Covered with loading and layout-stability verification |
| Custom styling, colors, type, spacing and responsive rules | D02, D04 | Covered with token consumption, contrast and overflow checks |
| Initial theme, system preference, manual toggle and persistence | D03 | Split initial theme resolution from accessible switching/persistence |
| Shared components, form feedback and meaningful progress | D05, D06, D07 | Button packaging/states split; labels/errors and conditional indicator semantics retained |
| Navigation, landmarks, introduction, journey, projects and contact UI | U01–U05 | Broad shell, project/detail and contact-state work split; unknown sections must be confirmed by F02 |
| Motion and reduced motion | U06, U07, Q01, Q03 | Decorative transitions and functional reorder behavior explicitly separated |
| Whole-row dragging and live sibling rearrangement | U07.a–U07.c | Newly added: handle activates entire row, live reflow before release, correct drop, stable identity, bounds/no-op/cancel, touch/keyboard/focus/announcements/reduced motion and regressions |
| Validated config, MongoDB lifecycle, schemas and indexes | B01, B02 | Config/lifecycle split; isolated-data constraint checks and readiness required |
| Strict input, architecture boundaries, safe errors and public DTOs | B03, B04 | Input/error and list/detail slices; negative paths, bounds, async failures and no internal fields |
| Contact processing and abuse prevention | B05, B06 | Processing and endpoint abuse separated; headers/CORS/body limits and trusted-proxy limiter checks explicit |
| Conditional admin credentials, JWT and authorization | B07, B08, B10 | Provisioning, login, token verification and writes split; no automatic public registration; bcrypt, JWT constraints, allow-lists and permissions covered |
| Conditional session invalidation, recovery and verification | B09 | Independently conditional sub-issues; hashed expiring single-use tokens, enumeration/abuse controls and safe delivery where needed |
| Redacted logs and bounded shutdown | B11 | Separate reviewable operational behaviors; reuse B01 cleanup hooks |
| API integration and actionable UI failure states | I01, I02, I03 | List/detail, contact success/failure and conditional admin integration split; preserve data and surface errors |
| Accessibility, regression testing, SEO and performance | Q01–Q03 | Focused sub-issues; reorder included in accessibility, interaction tests and measured performance |
| Dependency/secret review, CI and clean install | Q04 | Separate repeatable CI coverage from material dependency/secret findings |
| Hosting/budget, database/secrets, API/frontend rollout and launch | P01–P05 | Provision/config/recovery, rollout/live verification and maintenance/handoff split |

## Gaps corrected

- Added the missing whole-row reorder requirement and included it in quality and live deployment acceptance.
- Replaced oversized undifferentiated work with real linked sub-issues and explicit estimates.
- Added test-harness preparation before dependent feature work.
- Made backend DTO, async-error, proxy/rate-limit, token lifecycle and redaction requirements explicit without treating installed packages as working controls.
- Made backup/restore, rollback and final evidence independently reviewable.
- Moved requirements/security decisions before implementation dependencies and preserved all existing statuses.
- Independent review caught a missing conditional admin-UI dependency; Q02.c now waits for I03 before cross-layer admin regressions can be considered complete.

## Verification boundary

Complete visual coverage of the Figma file is **not yet verified**: its source links are unreadable in the current connector session and its browser preview requires sign-in. The user's supplied reorder behavior is confirmed. F02 remains the explicit gate for exact screens, content, assets and interactions that have not been observed. No unknown screens, cross-list movement, registration or mandatory email service have been invented.

Sizing is a first estimate for the agreed current scope, including its conditional branches. Parent totals roll up child estimates; only actionable leaves count toward the effort total. Future requirements or uncertainty discovered in F02/F03 require re-estimation and, if needed, further decomposition.

See [backlog-policy.md](backlog-policy.md), [backlog-audit.json](backlog-audit.json) and [backlog.json](backlog.json) for the sizing rules, counts and ordered definitions.

## Remote verification

Verified all 109 managed GitHub issues, 67 actual parent/sub-issue relationships, numeric Estimate/Order values and manual board order against the local definitions. The original 40 issue states, project statuses and acceptance criteria were retained. The public board still uses To do, In progress, In review and Done, with Estimate, Order, Parent issue and Sub-issues progress visible. See [the ordered issue index](backlog-order.md).
