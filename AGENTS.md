# Artigiani repository rules

Artigiani is a Next.js App Router project using React, TypeScript, and Tailwind CSS. The current application is an early frontend with a shared navbar and an empty home page. Confirm product requirements before introducing new pages, data models, services, or dependencies.

## Code and scope

- Prefer clear, maintainable code that junior and mid-level developers can follow.
- Keep functions focused, use descriptive names, and avoid unnecessary abstraction or duplication.
- Follow the existing architecture and conventions. Put routes and layouts in `src/app` and shared UI in `src/components`.
- Use strict TypeScript types, avoid `any`, validate inputs, and handle errors explicitly.
- Change only files relevant to the task. Add comments only for reasoning or constraints that are not evident from the code.
- Ask for clarification when a requirement materially affects the implementation and cannot be inferred from the repository or conversation.
- Explain material tradeoffs briefly when reporting changes.

## Verification

- Use `pnpm` for project commands. `pnpm lint` runs ESLint, and `pnpm build` checks the production build.
- Run checks relevant to the changed code. For completed application changes, run both commands when practical.
- Report what changed, what was checked, and any remaining limitations.

## Agent team

For team roles and coordination, read `.agents/team.md` before planning or delegating project work.
