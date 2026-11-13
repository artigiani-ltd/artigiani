---
name: commit
description: Review pending repository changes, split them into cohesive local commits, and follow the repository's commit message convention. Use when the user invokes @commit or requests committing changes.
---

# Commit changes

Treat `@commit` as authorization to review, organize, verify, and create local commits in the current repository. Complete the workflow rather than only suggesting commit messages. Respect any scope or exclusions supplied with the command. A request to create or edit this workflow does not invoke it.

## Review and group

- Read the repository instructions and relevant verification rules. Inspect `git status --short`, staged and unstaged diffs, untracked file contents, and recent commit history before staging.
- Unless the user narrows the scope, consider all pending changes. Preserve their content and distinguish existing staged selections from unstaged work. Skip secrets, temporary artifacts, and generated files excluded by repository rules.
- Group by independently meaningful purpose, not file extension or an arbitrary commit size. Keep implementation, required assets, tests, and supporting scripts together when separating them would leave a broken or unusable intermediate commit.
- Separate unrelated changes. Use selected hunks when one file contains independent changes; do not rewrite working files merely to split commits. A single cohesive change can remain one commit.
- Briefly explain the intended groups before executing them; proceed without a separate confirmation. Resolve material ambiguity about ownership or scope before including uncertain changes.

## Commit message convention

Follow explicit repository rules first, then the established recent history. Artigiani uses:

```text
[Type] Imperative description
```

Use `[Feat]`, `[Fix]`, `[Perf]`, `[Refactor]`, `[Docs]`, `[Test]`, `[Build]`, `[CI]`, or `[Chore]` as appropriate. Match the history's capitalization and describe the concrete outcome. Do not switch to `feat:` or another format without instruction. Add a body only when needed to explain a material constraint or tradeoff.

Examples:

```text
[Perf] Reduce font downloads with Latin subsets
[Perf] Prioritize the opening hero image
[Docs] Add a workflow for focused commits
```

## Verify and execute

- Run checks appropriate to each group using the repository's commands. Reuse prior successful results only when they cover the exact current changes. Review each group's intermediate state for missing dependencies; passing checks on the final combined tree alone does not prove earlier commits are valid.
- Stage explicit paths or selected hunks. Inspect the staged diff, run `git diff --cached --check`, and ensure unrelated staged changes cannot enter the next commit. Respect the user's staged selections and preserve unrelated work.
- Create each commit with the chosen message. Let hooks run normally. If a check or hook fails, investigate; do not bypass it or commit a known failure without explicit user direction. Stop on an unresolved failure and report any commits already created and work left pending.
- Do not amend, reset, rebase, push, or modify Git configuration unless separately requested. If there are no pending changes, report that without creating an empty commit.
- Finish by checking `git status --short` and listing each new commit's short hash, message, validation results, and any remaining uncommitted changes.
