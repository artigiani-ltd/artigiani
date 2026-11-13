---
name: review
description: Review Artigiani changes for concrete bugs, regressions, accessibility issues, and release risks. Use for @review or a code review request; report findings without editing unless fixes are requested.
---

# Artigiani change review

With a bare `@review`, review all pending staged, unstaged, and untracked changes. If the tree is clean, review the latest commit and state that scope. Respect an explicitly supplied diff, commit range, or file scope. A request to create or edit this skill does not invoke it.

## Inspect the change

- Read [code](../../rules/code.md) and [verification](../../rules/verification.md) rules, plus [styling rules](../../rules/styling.md) for UI changes. Inspect the diff, new file contents, and relevant callers or consumers. Check installed Next.js documentation when a finding depends on framework behavior.
- Focus on introduced defects and affected existing behavior. Connect each finding to a concrete trigger and user impact; distinguish confirmed failures from plausible concerns. Avoid unrelated cleanup and stylistic preferences already covered by repository conventions.
- Check server/client boundaries and hydration when changed. For assets and fonts, verify that references resolve and required text and weights remain supported.
- For motion or navigation changes, inspect scene timing, pause and selection behavior, reduced motion, keyboard access, Escape dismissal, focus restoration, and responsive menu transitions as applicable. Use browser evidence where available.
- For metadata or deployment changes, inspect the affected canonical URL, social metadata, sitemap, robots rules, and staging indexing behavior together. Do not change environment settings or deploy during a review.
- For inquiry changes, check input handling and accurately represented outcomes. The existing email flow does not imply a working subscription backend.

## Validate and deliver findings

Run relevant checks under the shared verification rules. Do not edit source files, stage changes, or create commits during a review unless separately requested. If tools generate files, distinguish them from user changes and remove only artifacts created by the review.

Present findings in order of impact, with a file and line reference, reproduction condition, and suggested correction. State what was reviewed, checks run, and unverified behavior. If no actionable issue is found, say so without implying that the application is free of defects. When fixes are requested, implement within the agreed scope and verify the affected behavior.
