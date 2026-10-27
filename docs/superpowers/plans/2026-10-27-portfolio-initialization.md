# Portfolio Initialization Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task in the current chat.

**Goal:** Publish the approved learning scaffold and populate its GitHub Project.

**Architecture:** One npm workspace, a Next.js frontend, a minimal Express backend, and a reserved shared UI package. All product features remain learning tasks.

**Tech Stack:** JavaScript, npm, Next.js/React/Tailwind, Express, MongoDB/Mongoose, bcrypt, jsonwebtoken.

**Spec:** docs/superpowers/specs/2026-10-27-portfolio-initialization-design.md (approved by the user).

## Global Constraints
- Initialize only; do not implement the portfolio or authentication.
- Use apps/frontend, apps/backend, packages/ui.
- Public repository My-port-folio; project title My port folio.
- Status options: To do, In progress, In review, Done.
- Keep secrets and node_modules out of Git.

## Review Focus
- A fresh clone must install using the committed lockfile: run npm ci.
- Frontend must build without external font downloads: use system fonts in placeholder.
- Backend must start without a MongoDB instance: no database connection until its learning task.
- Unknown API routes must return 404 without exposing stack traces: verify a request.
- Empty workspace directories must survive Git: track placeholders.

## Task 1: Workspace and starter applications
Files: root package.json/.gitignore/README.md; apps/frontend/{package.json,eslint.config.mjs,postcss.config.mjs,src/app/*}; apps/backend/{package.json,src/app.js,src/server.js,tests/app.test.js}; packages/ui/{package.json,README.md}; environment examples and folder placeholders.

Interfaces: npm run dev:frontend, dev:backend, build, lint, test. Backend exports app from src/app.js; GET /health returns 200 JSON {status:'ok'}; unknown routes return 404 JSON.

- [x] Resolve compatible package versions and supported Node runtime.
- [x] Write a small HTTP smoke test; confirm failure before the backend app exists.
- [x] Create minimal configuration, placeholder page, Express health endpoint and reserved directories.
- [x] Install dependencies and prepare the lockfile for the initial commit.
- [x] Verify clean install, frontend lint/build, backend tests and startup.

## Task 2: Learning and review materials
Files: docs/learning/README.md, docs/reviews/README.md, docs/backlog.json, .github/pull_request_template.md, .github/ISSUE_TEMPLATE/task.yml, .github/workflows/ci.yml.

Interfaces: backlog records contain title, phase, area, first step, lesson, assessment, acceptance criteria and prerequisite task identifiers. Each issue becomes a reviewable slice of user-owned implementation.

- [x] Write ordered tasks from setup through deployment, keeping auth scope conditional.
- [x] Include short lessons, assessments, completion checks and PR review guidance.
- [x] Configure CI for the same lint/test/build commands used locally.
- [x] Check documentation against actual scripts and installed dependencies.

## Task 3: Public repository and project
Remote targets: paulsonrison/My-port-folio and a linked GitHub Project named My port folio.

- [x] Create public repository without overwriting an existing repository.
- [x] Initialize local Git, review tracked files for secrets, commit and push.
- [x] Create/link Project, configure four Status options and board columns.
- [x] Create ordered issues from backlog, add to Project with To do status.
- [x] Verify repository visibility, remote commit, issue count, project linkage/status options and final local cleanliness.

## Execution
The user approved the initialization design and requested execution. Proceed inline using the existing workspace; it contains only the planning document and no existing Git history or conflicting work.
