# Production readiness — 21 November 2026

The pending homepage redesign passes the local production checks below. This is
verification of the tested behavior, not a guarantee that no defects remain.

## Changes made during this audit

- Fixed six inquiry links whose accessible names omitted part of their visible
  text. The names now support selecting the links by voice and still identify
  each composition.
- Disabled image reveal transitions when reduced motion is enabled, including
  switching the preference while a reveal is running.
- Reused `ArtworkImage` for both galleries and replaced constructed image paths
  with typed static imports. Missing files now fail the build; replaced images
  receive new content hashes and immutable cache URLs.
- Reduced the Beau Rivage wordmark font from 50,140 to 5,112 bytes. The subset
  retains the glyph outlines, advance metrics, and shaping for “Artigiani”.
  Chromium canvas checks found identical word widths at 28, 30, 60, 82, and
  112 pixels. Full fonts and licenses remain in the repository. The regeneration
  script and README describe the subset's text restriction.
- Corrected the README's outdated opening-fade duration and removed a reference
  to the deleted homepage types directory.

The existing server/client composition, responsive layout, image quality, hero
timing, and carousel behavior were preserved. No runtime dependencies were added.

## Verification

- `pnpm check`: formatting, ESLint, generated route types, TypeScript, and the
  production build passed. Homepage, robots, and sitemap remain prerendered.
- `pnpm audit --prod`: no known production dependency vulnerabilities reported.
- `git diff --check`: passed.
- Production HTTP checks passed for canonical and social metadata, one H1,
  organization JSON-LD, section targets, robots, sitemap, 404 responses, response
  security headers, the catalogue PDF, and immutable optimized gallery images.
- A build with `SITE_INDEXABLE=false` emitted `noindex, nofollow`, blocked robots,
  and an empty sitemap. A subsequent normal build restored production indexing.
- Chromium checks at 1440, 768, 390, and 320 pixels found no horizontal overflow,
  broken images, hidden reveals after scrolling, or JavaScript exceptions.
- Automated axe WCAG A/AA checks found no violations after scrolling the page and
  enabling reduced motion. Both initial reduced motion and live preference
  changes were exercised.
- Carousel wrapping and keyboard activation, hero pause/resume, mobile menu focus
  wrapping, Escape dismissal and focus restoration, and closing the menu at the
  desktop breakpoint passed.
- Desktop and mobile screenshots were inspected before and after the changes.

Browser tooling and raw reports live under `/tmp/artigiani-readiness`; these are
temporary local artifacts, not committed tests or new CI coverage.

## Local performance measurements

URL: `http://localhost:3107`, served by `pnpm start` after `pnpm build`.
Lighthouse 12.8.2 used mobile emulation at 412 × 823, DPR 1.75, simulated network
throttling at 150 ms RTT and 1,638.4 Kbps throughput, and a 4× CPU slowdown.
Each run used a fresh browser profile with browser cache reset; the server's
image optimization cache was warm. No builds or browser tests ran concurrently.

| Metric                  | Initial baseline | Final runs |
| ----------------------- | ---------------- | ---------- |
| Performance             | 90               | 88–94      |
| Accessibility           | 100              | 100        |
| Best practices          | 100              | 100        |
| SEO                     | 100              | 100        |
| LCP                     | 3.4 s            | 3.0–3.9 s  |
| Total Blocking Time     | 140 ms           | 40 ms      |
| Cumulative Layout Shift | 0                | 0          |

An intermediate run before the font change measured 86 performance, 4.2 s LCP,
and 50 ms TBT. The initial baseline used Chrome Launcher; later runs used
Playwright to launch the same installed Chromium after a WSL profile-path issue.
The score variation does not establish a controlled overall performance gain.
The font response decreased from about 50.5 KB to 5.5 KB including response
overhead. LCP remains above the 2.5 s good threshold in these final lab runs.

## Remaining launch verification

- Measure the deployed origin, cold image optimization, slower devices, and field
  Core Web Vitals. Local scores are not guarantees of deployed performance.
- Verify Safari/iOS, Firefox, and assistive technology. Chromium and automated
  accessibility checks do not cover every browser or interaction.
- Confirm DNS, HTTPS, redirects, staging access protection, contact information,
  mailbox availability, artwork rights, and an approved favicon. Inquiry links
  open the visitor's email application; they are not a delivery backend.

## Next.js guidance checked

The installed Next.js 16.4.6 production checklist, Server and Client Components,
Image, and font documentation were consulted, including static image caching
and the current eager-loading/fetch-priority guidance. Public references:

- [Production checklist](https://nextjs.org/docs/app/guides/production-checklist)
- [Server and Client Components](https://nextjs.org/docs/app/getting-started/server-and-client-components)
- [Image](https://nextjs.org/docs/app/api-reference/components/image)
- [Font](https://nextjs.org/docs/app/api-reference/components/font)
- [Security releases](https://nextjs.org/blog/security)
