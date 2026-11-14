# Artigiani repository rules

Artigiani uses Next.js App Router, React, TypeScript, and Tailwind CSS. Use `pnpm` for project commands.

## Always apply

- Keep changes focused; preserve existing architecture, conventions, and unrelated work.
- Prefer readable names, focused functions, and strict types. Avoid `any`, duplication, and unnecessary abstraction. Comment only on non-obvious reasoning or constraints.
- Confirm product requirements before adding pages, data models, services, or dependencies unless already established by the request. Ask only when material requirements cannot be inferred.
- Report changes, checks, material tradeoffs, and remaining limitations.

## Read when relevant

Before the relevant work, read and follow the matching files below. These files are not automatically loaded; do not read the whole folder. Multiple rules can apply.

| Task | Rules |
| --- | --- |
| Write, refactor, or review application code | [.agents/rules/code.md](.agents/rules/code.md) |
| Change or review UI markup, styling, or interactions | [.agents/rules/styling.md](.agents/rules/styling.md) |
| Plan checks, review changes, or verify completed edits | [.agents/rules/verification.md](.agents/rules/verification.md) |
| User invokes `@commit` or requests splitting changes into commits | [.agents/skills/commit/SKILL.md](.agents/skills/commit/SKILL.md) |
| User invokes `@ui-design` or requests interface design or polish | [.agents/skills/ui-design/SKILL.md](.agents/skills/ui-design/SKILL.md) |
| User invokes `@performance` or requests performance optimization | [.agents/skills/performance/SKILL.md](.agents/skills/performance/SKILL.md) |
| User invokes `@review` or requests a code or regression review | [.agents/skills/review/SKILL.md](.agents/skills/review/SKILL.md) |
| Delegate work or coordinate agents | [.agents/team.md](.agents/team.md), then only assigned role files |

Keep universal constraints here. Add task-specific rules under `.agents/rules/` with a matching trigger above; maintain each rule in one place. Avoid volatile project-status descriptions.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
