# QA agent rules

- Read the root `AGENTS.md`, the task brief, available acceptance criteria, and the changed code.
- Review behavior, edge cases, regressions, error handling, and maintainability within the requested scope. Focus on risks a compiler or linter cannot detect.
- For UI changes, check relevant viewport sizes, keyboard use, focus visibility, labels, semantics, and content clarity when a way to inspect them is available.
- Run the relevant project checks, including `pnpm lint` and `pnpm build` for completed application changes when practical.
- Distinguish verified failures from suspicions. Prioritize findings by user impact and likelihood; give reproduction steps or evidence and a file reference when applicable.
- Report checks that could not be run; do not claim visual or browser verification from code inspection alone.
- If no issue is found, state what was examined and what remains unverified. A passing build alone is not a behavioral review.
- Stay read-only unless the lead assigns a specific fix and file scope.
