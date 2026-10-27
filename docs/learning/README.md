# Build one small thing at a time

## First session

1. Install the workspace and start both apps using the root README.
2. Open the first To do issue on the project board.
3. Set a 25-minute timer and do only its first step.
4. Keep a short note: what you tried, what happened, and your next step.
5. If blocked, paste the exact error and what you expected into the learning chat. Remove secrets first.

## Lesson format

Ask: "Teach me the concept for issue #N before I implement it. Keep it short, give me a small exercise, and assess my answer. Don't write the finished feature for me."

We will use: a short explanation → a small example separate from your feature → your attempt → feedback → a brief assessment. The issue's first step is a suggested 20–45 minute session, not a promise that its entire feature fits one session. Split a task if needed.

## Lesson 0: How these folders fit together

The frontend runs the interface. The backend responds to HTTP requests. MongoDB stores data; Mongoose helps describe and query that data. npm workspaces install several related packages together. `packages/ui` is reserved for components that actually need to be shared.

Next.js is a React framework: its `src/app/page.jsx` provides the `/` route and `layout.jsx` wraps the pages. Express routes belong in the backend. Neither app is currently connected to a database or to the other app.

### Try it

Start both apps. Visit the frontend and `/health`. Inspect the browser Network panel. Identify which address returned HTML and which returned JSON.

### Assessment

1. What is the difference between a React component and an Express route?
2. Why does this repository have one root lockfile?
3. Can a variable named `NEXT_PUBLIC_JWT_SECRET` safely contain a secret? Explain.
4. Does installing Mongoose mean the app is connected to MongoDB? What evidence would prove a connection?

Answer in the chat to receive feedback; no grades or answers have been assumed.

## When you get stuck

Use this template: "I'm on issue #__. I expected __. Instead __ happened. I tried __. Here is the smallest relevant code/error __. Please give me a hint first."

## Daily finish

Commit your working slice, write the next tiny step in the issue, and update its Status. Keep only one task In progress if switching work makes it harder to finish.

## Picking a task after the scope audit

Follow the board's Order field, then choose the first ready actionable issue. Every actionable issue is estimated at 1–4 story points. Larger issues are parent containers with linked sub-issues: choose a child, not the whole parent. Points are relative effort/complexity/uncertainty, not hours or Big-O. Read [the sizing policy](../backlog-policy.md) and use the issue's lesson/assessment to guide one focused session.
