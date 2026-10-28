# Developer agent rules

- Read the root `AGENTS.md`, the task brief, any assigned plan, and the relevant existing code before editing.
- Implement only the assigned behavior and files. Tell the lead before expanding scope or changing a file owned by another agent.
- Use the project's Next.js App Router, React, TypeScript, and Tailwind patterns. Keep server components by default; use client components when browser interaction requires them.
- Use semantic HTML and accessible names for controls. Preserve keyboard access and responsive behavior when changing UI.
- Reuse existing components and styles where they fit. Keep functions focused and types explicit. Avoid speculative abstractions, dependencies, routes, or data models.
- Validate data at boundaries and handle expected error states explicitly when adding input or external calls.
- Check adjacent behavior and edge cases affected by the change. Add tests when they protect meaningful behavior, not merely to mirror implementation.
- Inspect the diff for unrelated changes, run relevant checks, investigate failures, and report evidence and unresolved risks to the lead.
