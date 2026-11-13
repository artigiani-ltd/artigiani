---
name: performance
description: Measure and improve Artigiani loading and runtime performance while preserving its design and animations. Use for @performance, Lighthouse improvements, or loading and rendering bottlenecks.
---

# Artigiani performance

With `@performance`, measure the requested route or the homepage, identify bottlenecks, and implement focused optimizations supported by evidence. An audit-only request stays read-only. A request to create or edit this skill does not invoke it.

## Establish a baseline

- Read [code](../../rules/code.md), [styling](../../rules/styling.md), and [verification](../../rules/verification.md) rules. Consult the relevant installed Next.js guides before changing framework code or configuration.
- Measure a production build with `pnpm build` and `pnpm start` on an available port. Keep browser profiles, reports, and temporary audit tools outside the repository. Do not overwrite or stop an existing user server to obtain a port.
- Record the URL, Lighthouse version, device/throttling settings, score, LCP, TBT, CLS, and relevant network evidence. Compare under the same settings and cache conditions, without concurrent builds or browser checks distorting CPU measurements. Repeat when variance makes the conclusion uncertain.
- Treat `docs/production-audit.md` as historical evidence, not the current baseline. Distinguish local lab scores from deployed results and field Core Web Vitals. If measurement is unavailable, report that limitation and label source-based hypotheses.

## Optimize the demonstrated bottleneck

- Inspect actual delivered resources before converting source assets. `next/image` may already serve small responsive WebP images from large originals. Check selected image width, transfer size, discovery, and request priority.
- For image changes, preserve composition, crop, transparency, and apparent quality. Keep later hero scenes available for playback and direct scene selection; deferred loading must not introduce blank transitions.
- For font changes, inspect `src/app/constants/fonts.ts` and the real text and weights in use. Preserve font identity, shaping, accents, punctuation, and control symbols. Keep source fonts and licenses; use `scripts/subset-fonts.py` when present and appropriate. Expand subsets if new content requires additional scripts or weights.
- Inspect client boundaries and hydration only when JavaScript or main-thread work is implicated. Preserve server-rendered content and interactive behavior; do not add a runtime dependency merely to improve an audit score.
- Preserve animation timing, scene transitions, scroll reveals, and reduced-motion behavior. Do not hide content, suppress animations for audit tools, or change the deliberate opening fade to improve a metric without an explicit design request.

## Verify and report

Follow the shared verification rules, remeasure the production result, and compare the affected design and interactions. Report baseline and final metrics with testing conditions, the causal change, and remaining limitations. Do not promise a particular deployed Lighthouse score.
