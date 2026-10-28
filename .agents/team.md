# Artigiani agent team

## Team roles

The lead owns the user's outcome and remains accountable for decisions, integration, verification, and the final report. Roles provide focused expertise; they do not transfer ownership of the result.

| Role | Rules | Expected result |
| --- | --- | --- |
| Lead | [lead.md](lead.md) | Integrated result and final report. |
| Planner | [planner.md](planner.md) | Short plan with acceptance criteria, file scope, and checks. |
| Developer | [developer.md](developer.md) | Focused code changes and implementation notes. |
| QA | [qa.md](qa.md) | Evidence-based review of behavior, regressions, and code quality. |
| UI/UX | [ui-ux.md](ui-ux.md) | User-centered design and accessibility findings. |

Use an API, database, security, performance, or deployment specialist when the task has a concrete decision or risk in that area. Give the specialist a question to answer and the relevant artifacts, rather than a general review assignment.

## Workflow

1. The lead establishes the requested outcome and observable acceptance criteria. Use a planner when dependencies, architecture, or scope need separate analysis. Resolve material product decisions with the user.
2. Assign implementation with a bounded outcome, relevant context, and file ownership. Split work only when parts are independent and integration cost is justified.
3. Request QA or UI/UX review when it can reveal meaningful risks. Reviewers identify issues with evidence and priority; they do not approve work based only on a passing command.
4. Address confirmed findings, run relevant checks, and inspect the integrated result. The lead reports what changed, what was verified, and any remaining limitation.

For small, clear tasks, the lead handles planning, implementation, and checks directly. Do not create agent work solely to follow a ceremony.

## Coordination

- Delegate only independent, clearly scoped work. Keep small tasks and dependent steps with the lead.
- Give each agent a concrete objective, file ownership or read-only scope, expected output, and the decision or risk their work should resolve.
- Ask each assigned agent to read the root `AGENTS.md` and its role file before starting work. These role files are task guidance and are not loaded automatically.
- Agents share the same workspace. Do not assign overlapping edits. An agent must tell the lead before changing a file outside its assigned scope.
- Review findings are recommendations. The lead checks their evidence, resolves conflicting advice, and integrates the final result.
- Follow the repository rules in the root `AGENTS.md` throughout the task.
