---
name: ui-design
description: Design and refine Artigiani interfaces using its existing artwork, typography, and editorial style. Use for @ui-design, UI design requests, or visual polish; not for performance-only changes.
---

# Artigiani UI design

Use the requested section or interaction as the scope. With a bare `@ui-design`, inspect the current homepage and propose prioritized improvements before making visual changes. A request to create or edit this skill does not invoke it.

## Establish the design direction

- Read [styling rules](../../rules/styling.md) and inspect the affected interface and its implementation. For implementation, also read [code rules](../../rules/code.md) and the relevant installed Next.js documentation required by `AGENTS.md`.
- Derive the visual language from `src/app/globals.css`, `src/app/constants/fonts.ts`, the owning homepage sections, and shared navigation. Check the rendered result when browser access is available; source inspection alone cannot establish visual quality.
- Keep artwork central. Reuse the existing black and warm-white surfaces, restrained accents, serif collection headings, italic hero captions, script branding, and sans-serif body text where the surrounding section uses them. These are cues to inspect, not permission to restyle other sections.
- Identify the visitor's task: explore the collection, inspect an installation, or make an inquiry. Explain how the proposed hierarchy or interaction helps that task. Do not invent product claims, assets, routes, or backend capabilities.

## Design and implement

- For a concrete change request, implement the smallest coherent improvement. For a design exploration, present a concise direction with affected elements and tradeoffs; ask only about product choices that materially affect the result.
- Use the existing section components and layout patterns. Check headline wrapping, artwork crop and aspect ratio, alignment, reading order, and CTA emphasis at narrow and wide widths. Avoid generic decorative additions that compete with the artwork.
- Follow the shared styling rules for visual and motion preservation. If a requested visual change conflicts with an explicit preservation constraint, resolve that conflict before editing the affected design.
- For hero work, inspect `ArtHero`, `HeroPlayback`, `HeroCaption`, `hero-scenes.ts`, and their CSS together. Keep captions, scene imagery, playback controls, and the shared animation clock synchronized.
- For navigation and inquiry flows, check the actual menu and email behavior. Do not present a mailto request as a completed subscription or message delivery.

## Verify and report

Follow [verification rules](../../rules/verification.md). Compare the affected UI before and after at mobile and desktop widths, including keyboard navigation and relevant motion states. Report the design change, its user benefit, checks performed, and any visual states that could not be inspected. Keep a review or proposal read-only unless implementation was requested.
