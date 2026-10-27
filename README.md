# My port folio

A learning workspace for building an engineering portfolio yourself.
Only the starter applications and development setup are implemented.

[Public repository](https://github.com/paulsonrison/My-port-folio) · [Project board](https://github.com/users/paulsonrison/projects/3) · [Learning issues](https://github.com/paulsonrison/My-port-folio/issues)

## Start here

1. Install **Node.js 24 LTS** with **npm 11**. Check `node --version` and `npm --version`; if your Node installation includes a different npm major, run `npm install --global npm@11` first.
2. Open a terminal in this repository and run `npm ci`.
3. Copy `apps/backend/.env.example` to `apps/backend/.env` and `apps/frontend/.env.example` to `apps/frontend/.env.local` when you need configuration. The starter runs with defaults.
4. Run `npm run dev:frontend` and open http://localhost:3000.
5. In another terminal, run `npm run dev:backend`. Check http://localhost:4000/health.

| Command | Purpose |
| --- | --- |
| `npm run dev:frontend` | Start the Next.js development server |
| `npm run dev:backend` | Start Express with automatic restarts |
| `npm run build` | Build the frontend for production |
| `npm run start:frontend` | Serve the frontend after building |
| `npm run start:backend` | Start the API without the development watcher |
| `npm run lint` | Frontend ESLint and backend entry-file syntax checks |
| `npm test` | Run the backend HTTP smoke tests |
| `npm run check` | Run lint, tests and frontend build |

Install dependencies **from the root**. For example, `npm install some-package --workspace=@portfolio/frontend` adds a frontend dependency. Commit changes to both package.json and package-lock.json.

## Folder map

```text
apps/
  frontend/               Next.js + React + Tailwind CSS
    public/               Public static files
    src/app/              Routes, root layout, and global CSS
    src/assets/           Images, fonts, icons
    src/components/       Common UI and page layout components
    src/features/         Auth, portfolio, and contact feature folders
    src/hooks/            Shared hooks
    src/context/          Providers when needed
    src/services/         Browser/API integration
    src/utils/            Small shared helpers
    src/styles/           Future tokens, themes, and custom styling
    src/config/           Future frontend configuration
    tests/                Future frontend integration tests
  backend/                Node.js + Express
    src/app.js            Express app, health route, JSON 404
    src/server.js         Process entry point and port
    src/config/           Future validated configuration/database setup
    src/routes/           Future URL-to-controller mapping
    src/controllers/      Future HTTP request/response handling
    src/services/         Future application logic
    src/repositories/     Future database queries when useful
    src/models/           Future Mongoose schemas
    src/middleware/       Future cross-cutting request behavior
    src/validators/       Future request validation
    src/errors/           Future application error types/mapping
    src/constants/        Future shared backend constants
    src/utils/            Future small backend helpers
    tests/                Starter HTTP checks
packages/ui/              Reserved shared design components
docs/                     Learning guide, review guide, and backlog
```

Next.js supplies routing and entry points through `src/app`, so this project does not need Vite's `main.jsx`, `public/index.html`, or React Router. `.gitkeep` files preserve folders until you add real files.

## What is ready

- npm workspaces, installed dependencies, and a committed lockfile.
- A single placeholder page with Tailwind wired through PostCSS.
- Express `GET /health` and an unknown-route JSON response. The health route only reports that the process can respond; it does not verify database readiness.
- Environment examples, development scripts, HTTP smoke tests, and CI checks.
- MongoDB driver, Mongoose, bcrypt, JSON Web Tokens, Zod, CORS, Helmet and rate-limit packages available for future tasks.

**Still to build:** portfolio pages/components, custom fonts/themes, API integration, database connection/models, authentication/authorization, input validation, CORS policy, rate limiting, contact flow, and deployment. Installed packages are not implemented security controls. Never commit `.env` files or put secrets in `NEXT_PUBLIC_*` values.

## Your build-and-review workflow

Choose one **To do** task, move it to **In progress**, implement a small slice, and open a pull request. Move it to **In review** and share the PR in this chat. Codex can teach the concept, ask a short assessment, and review your work when requested. Mark it **Done** once its acceptance criteria and review checks pass. Codex is not a separate GitHub user or an automatic background reviewer.

Start with [the learning guide](docs/learning/README.md) and [review expectations](docs/reviews/README.md). The full task definitions are tracked in [docs/backlog.json](docs/backlog.json).

Begin with [issue #1: Run both starter applications](https://github.com/paulsonrison/My-port-folio/issues/1). [docs/backlog-links.json](docs/backlog-links.json) maps all 40 local task IDs to their GitHub issues.

## References

- [Your Figma Make portfolio](https://www.figma.com/make/RZtLZdMTGUI1U5rgCYEAJ7/Interactive-Engineering-Portfolio) is the design reference. Its implementation has not been imported. The first design task inventories its actual screens and interactions.
- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind with Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)

The provided backend-security document informed the architecture and security backlog. Its DocuPilot-specific examples are not implemented features or guarantees about this project.
