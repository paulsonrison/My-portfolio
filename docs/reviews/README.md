# Review agreement

You implement the portfolio; Codex reviews when you request it in the chat. Share the issue/PR link and the evidence listed in the issue. A GitHub review would be submitted through your connected account, not an independent Codex reviewer identity; an author cannot approve their own PR on GitHub.

## Before requesting review

- Explain what changed and why, in your own words.
- Check the issue's acceptance criteria.
- Run `npm run check` and any feature-specific tests.
- For UI changes, include desktop/mobile screenshots and keyboard checks.
- For API changes, demonstrate success and relevant failure cases with synthetic data.
- Answer the assessment, and identify anything you are unsure about.

## What the review checks

Correctness and scope first; then readability, accessibility, responsive behavior, error states, API contracts, appropriate security, and meaningful tests. Feedback should explain the reason and give a hint before supplying a full solution. Optional improvements are separated from required fixes.

## Status meanings

| Status | Meaning |
| --- | --- |
| To do | Not started; prerequisites and acceptance criteria are clear |
| In progress | You are implementing it |
| In review | Evidence is ready and you have requested review |
| Done | Acceptance checks pass and required review feedback is resolved |

There is no automatic review subscription. Bring work to this chat when ready.
