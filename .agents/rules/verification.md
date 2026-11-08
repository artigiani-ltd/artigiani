# Verification

- Run checks relevant to changed code. For completed application changes, run `pnpm lint` (ESLint) and `pnpm build` (production build) when practical.
- Check affected behavior and edge cases. Add tests when they protect meaningful behavior, not merely mirror implementation.
- For documentation-only changes, check accuracy, referenced paths, and the diff; application builds are unnecessary.
- Inspect the final diff for unintended edits. Investigate failures and distinguish existing issues from regressions when evidence allows.
- Report what was checked, results, and anything unverified. Do not claim browser or visual verification from code inspection alone.
