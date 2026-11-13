# Production audit — 13 November 2026

The project has a sound foundation for a single-page portfolio, but loading
performance and launch configuration still need attention before calling it
fully production ready.

## Verified

- ESLint and the production build pass, including TypeScript checks.
- The homepage, robots file, and sitemap are statically generated.
- The production dependency audit reports no known vulnerabilities.
- Rendered HTML contains one H1, descriptive title and description, a canonical
  URL for `https://artigiani.design`, social metadata, and organization JSON-LD.
- Sitemap, robots rules, section link targets, HTTP 404 behavior, and security
  headers pass runtime assertions against the production server.
- A staging build with `SITE_INDEXABLE=false` emits `noindex, nofollow`, blocks
  robots, and has no sitemap entries. The final build restores production indexing.
- Chromium checks at 1440, 390, and 320 pixels find no horizontal overflow or
  browser JavaScript errors. Automated WCAG A/AA checks after revealing the page
  find no violations; this is not a complete accessibility certification.
- Mobile menu focus containment and Escape dismissal work. Hero pause and static
  scene selection under reduced motion work.
- Actual scroll opacity and translation transitions pass at desktop and mobile
  widths. Reveal attributes are cleared during effect cleanup so development
  refreshes do not retain stale completion flags.

## Local mobile Lighthouse result

The final isolated run against `next start` using Lighthouse 12.8.2 reported:

| Category / metric | Result |
| --- | --- |
| Performance | 69 / 100 |
| Accessibility | 96 / 100 |
| Best practices | 100 / 100 |
| SEO | 100 / 100 |
| Largest Contentful Paint | 7.3 seconds |
| Total Blocking Time | 270 milliseconds |
| Cumulative Layout Shift | 0 |

These are local simulated results, not field Core Web Vitals or a guarantee of
search rankings. Lighthouse sampled low text contrast during an animated caption
fade; the settled and reduced-motion browser accessibility checks passed. The
initial baseline run measured LCP at 8.6 seconds, but timing and score differences
should not be treated as a controlled benchmark.

## Improvements made

- Production domain defaults to `https://artigiani.design`, with a validated
  optional origin override and explicit staging indexing configuration.
- Added organization structured data, basic response security headers, and an
  image preload for the opening hero scene.
- Converted three full TTF fonts to lossless WOFF2, reducing their combined source
  size from 2,188,852 to 581,144 bytes (about 73%). Original sources and licenses
  remain available; no font tooling was added to project dependencies.
- Added a hero pause control and improved mobile menu keyboard handling.
- Preserved existing hero timing, scene transitions, and scroll reveals.
- Updated setup, deployment, and artwork documentation to reflect the actual app.

## Remaining launch work

1. The deliberate five-second opening fade remains intact. It delays perceived
   loading and can affect LCP; improving this requires an agreed animation change.
   Recheck performance on the deployed site, including cold image optimization.
2. Replace the default Next.js favicon with an approved Artigiani brand asset.
3. Configure DNS, HTTPS, and permanent HTTP / www redirects on the host. Validate
   the live canonical and sitemap, then submit it in Search Console.
4. Confirm contact details, product claims, image permissions, and the actual
   mailbox. Requests currently open an email application; there is no newsletter
   subscription backend.
5. Use `SITE_INDEXABLE=false` before building preview deployments. Add host access
   protection if previews must be private.
6. Only Chromium was exercised. Check Safari/iOS, Firefox, and assistive technology
   before launch. Automated checks do not replace that review.

Temporary audit dependencies, scripts, browser profiles, and raw reports are
removed after verification. No audit dependencies are added to the repository.
