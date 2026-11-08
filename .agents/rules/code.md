# Application code

- Put routes and layouts in `src/app`. Colocate page-specific UI in the owning route's `_components` folder; reserve `src/components` for shared UI, grouped by concern (for example, `navigation`).
- Prefer one primary React component per file and one cohesive responsibility per module. Keep small private helpers, handlers, and related types alongside their code; do not enforce one function per file.
- Extract components or helpers when reused, independently responsible, or needed for readability. Follow framework-required exports and file conventions.
- Keep supporting code near its feature. Add hooks, utilities, or data folders only when needed; promote code to shared locations when multiple features use it.
- Put extracted static definitions in the owning route's `constants` folder with descriptive filenames (for example, `src/app/constants/hero-scenes.ts`). Keep derived types alongside constants. Use descriptive folder names; underscores are optional for non-route folders.
- Validate inputs at boundaries and handle expected errors explicitly.
