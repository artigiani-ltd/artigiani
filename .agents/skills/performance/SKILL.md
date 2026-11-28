---
name: performance
description: Measure and improve loading and runtime performance across all available Artigiani pages while preserving design and animations. Use for @performance, Lighthouse improvements, or loading and rendering bottlenecks.
---

# Artigiani performance

With `@performance`, discover and check every available page, identify bottlenecks, and implement focused optimizations supported by evidence. Use a narrower scope only when the user explicitly requests it. An audit-only request stays read-only. A request to create or edit this skill does not invoke it.

## Discover page coverage

- Build a current route inventory from App Router page files, the production build route output, sitemap, and internal navigation. Do not assume the homepage is the whole site or rely on a hardcoded list. Resolve route groups to public URLs; metadata and API endpoints are not pages.
- For dynamic routes, use existing content or data to enumerate valid URLs, including locale variants when present. Do not invent route parameters. Record any pages that cannot be enumerated or reached, and the reason; do not claim complete coverage when pages remain unverified.
- Keep a coverage table for every discovered page with its URL, baseline, bottlenecks, changes or evidence that no change is needed, final measurements, and verification status. Every reachable page must be measured and assessed; shared-layout improvements do not replace checking individual pages.

## Establish a baseline

- Read [code](../../rules/code.md), [styling](../../rules/styling.md), and [verification](../../rules/verification.md) rules. Consult the relevant installed Next.js guides before changing framework code or configuration.
- Measure a production build with `pnpm build` and `pnpm start` on an available port. Keep browser profiles, reports, and temporary audit tools outside the repository. Do not overwrite or stop an existing user server to obtain a port.
- Measure every page on mobile and desktop. Record the URL, Lighthouse version, device/throttling settings, score, LCP, TBT, CLS, and relevant network evidence. Compare under the same settings and cache conditions, without concurrent builds or browser checks distorting CPU measurements. Repeat when variance makes the conclusion uncertain.
- Check each page's loading and runtime behavior: direct entry, internal navigation, scrolling, animations, and available interactions. Inspect page-specific assets and client work alongside shared layouts, fonts, and scripts.
- Treat `docs/production-audit.md` as historical evidence, not the current baseline. Distinguish local lab scores from deployed results and field Core Web Vitals. If measurement is unavailable, report that limitation and label source-based hypotheses.

## Optimize the demonstrated bottleneck

- Prioritize shared bottlenecks that affect multiple pages, then address page-specific issues. Assess every page, but change only what the evidence supports; a page with no demonstrated issue needs no forced optimization.
- Inspect actual delivered resources before converting source assets. `next/image` may already serve small responsive WebP images from large originals. Check selected image width, transfer size, discovery, and request priority.
- For image changes, preserve composition, crop, transparency, and apparent quality. Keep later hero scenes available for playback and direct scene selection; deferred loading must not introduce blank transitions.
- For font changes, inspect `src/app/constants/fonts.ts` and the real text and weights in use. Preserve font identity, shaping, accents, punctuation, and control symbols. Keep source fonts and licenses; use `scripts/subset-fonts.py` when present and appropriate. Expand subsets if new content requires additional scripts or weights.
- Inspect client boundaries and hydration only when JavaScript or main-thread work is implicated. Preserve server-rendered content and interactive behavior; do not add a runtime dependency merely to improve an audit score.
- Preserve animation timing, scene transitions, scroll reveals, and reduced-motion behavior. Do not hide content, suppress animations for audit tools, or change the deliberate opening fade to improve a metric without an explicit design request.

## Verify and report

Follow the shared verification rules. Remeasure every inventoried reachable page on mobile and desktop against the final production build, including pages without direct edits that may be affected by shared changes. Compare design and interactions on each page and investigate regressions before declaring completion.

Report the coverage table with per-page baseline and final metrics, testing conditions, the causal changes, and remaining limitations or inaccessible pages. Distinguish measured improvements from unchanged results and source-based hypotheses. Do not present a homepage score as a site-wide result or promise a particular deployed Lighthouse score.
