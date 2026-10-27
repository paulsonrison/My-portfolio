# My port folio — initialization design

## Intent and scope
Initialize a public learning project for Paulson. The user will implement the portfolio; Codex will teach concepts and review submitted work. Do not copy the Figma application or implement portfolio features, authentication, database models, shared UI components, or deployment now.

## Approach
Use one npm workspace repository containing apps/frontend, apps/backend, and packages/ui. This follows the user's supplied monorepo layout. Separate repositories would complicate shared components and progress tracking. A Next.js-only application would not provide the separately requested Express backend.

## Proposed structure
```text
apps/frontend/
  public/
  src/app/                 # Next.js App Router: layout, placeholder page, global CSS
  src/assets/{images,fonts,icons}/
  src/components/{common,layout}/
  src/features/{auth,portfolio,contact}/
  src/{hooks,context,services,utils,styles,config}/
  tests/
apps/backend/
  src/{config,constants,controllers,errors,middleware,models,repositories,routes,services,utils,validators}/
  src/app.js               # minimal Express application
  src/server.js            # server entry point
  tests/
packages/ui/src/           # reserved for user-created components
docs/{learning,reviews}/
.github/                  # issue/PR templates and validation workflow
```

Use JavaScript to match the user's JSX examples. Next.js App Router replaces Vite/CRA entry points, public/index.html, and a separate React Router setup. Empty folders use tracked placeholders. No speculative Redux store or empty component implementations.

## Dependencies
Frontend: next, react, react-dom, tailwindcss and its PostCSS integration; ESLint and the matching Next.js configuration. Backend: express, mongodb, mongoose, bcrypt, jsonwebtoken, dotenv, cors, helmet, express-rate-limit, zod; nodemon and supertest for development. Install compatible current versions, commit the lockfile, and document the supported Node runtime. Shared UI package initially contains only workspace configuration and documentation.

## Configuration and verification
Provide root install/dev/build/lint commands, environment examples, ignored local secrets, and setup instructions. Verify dependency installation, frontend production build and lint, and backend startup/basic HTTP behavior. The database and authentication packages are installed but their behavior is future work. Do not claim security controls exist based on installed packages.

## GitHub
Create a public repository under the connected personal account paulsonrison, using the proposed URL name My-port-folio and display/project title My port folio. Push only the reviewed scaffold. Create and link a GitHub Project with one Status field containing To do, In progress, In review, Done, displayed as four board columns. Use connector tools where supported; repository/project creation may need GitHub CLI or browser because those tools are absent from the connector.

## Backlog
Create small issues in ordered milestones: foundations; design system; frontend; backend; integration; quality; deployment. Cover Figma inventory, semantic HTML, custom styling, font licensing/loading, color/spacing tokens, light/dark themes, responsive layout, shared buttons/inputs/progress indicators, navigation/footer, portfolio sections, projects/detail pages, contact form, loading/empty/error states, API contracts, environment validation, MongoDB connection/model/index design, content endpoints, validation/errors, contact submission, admin-only authentication/authorization if required, bcrypt, JWT expiry/verification/revocation, abuse prevention, redacted logs, integration, accessibility, tests, performance/SEO, CI, hosting, production secrets, HTTPS, health checks, and post-deployment verification. Authentication/email/reset work is conditional on the chosen admin requirements.

Each issue includes purpose, a 20–45 minute first step, checklist, dependencies, acceptance criteria, a short lesson, a practical assessment, and review evidence. Larger work is divided further. Initial setup can be marked Done after verification; implementation issues start To do.

## Learning and review
User selects one issue, learns its core concept, implements it, answers a brief assessment, and submits evidence or a PR. Codex reviews correctness, design, accessibility, security where applicable, and tests. Move work to In review before requesting review and Done only when acceptance checks pass. Reviews happen when requested in this chat; no automatic background review or separate GitHub bot identity is implied.

## References and limitations
The attached Downloads/skill.md is reference material about backend architecture/security, not authorization to implement its full feature list. Figma Make URL is recorded as the design reference; the context tool returned no source files or screenshot in the available response, so exact screen-specific tasks remain provisional. The I Have ADHD plugin search returned no match; small tasks and explicit checkpoints are proposed directly.

## Approval
Approved by the user on 2026-10-27. Execution proceeds in the original empty workspace, creating its initial main branch and public repository as requested.
