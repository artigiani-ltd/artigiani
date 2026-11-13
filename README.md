# Artigiani

A statically rendered, single-page portfolio built with Next.js App Router,
React, TypeScript, and Tailwind CSS. Use `pnpm` for project commands.

## Development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Production

```sh
pnpm lint
pnpm build
pnpm start
```

Deploy with a Next.js-compatible runtime so responsive image optimization remains
available. The production URL defaults to `https://artigiani.design`; set
`SITE_URL` before building only when overriding that origin.

For preview and staging deployments, set `SITE_INDEXABLE=false` **before building**.
This emits `noindex, nofollow`, blocks robots, and omits sitemap entries. Also use
hosting-level access protection for private previews; robots rules are not access
control. Production deployments should leave this variable unset or set it to
`true`.

The host must configure HTTPS, DNS, and permanent redirects from HTTP and `www`
to `https://artigiani.design`. Submit `/sitemap.xml` in Google Search Console once
the domain is live. Verify metadata, indexing, email links, and performance on
the deployed domain after launch.

## Code organization

- `src/app`: routes, metadata routes, and the root layout.
- `src/app/_components`: homepage sections and feature-specific UI.
- `src/app/constants`: static content, fonts, and SEO configuration.
- `src/app/types`: reusable homepage contracts.
- `src/components/navigation`: shared navigation UI, data, and types.
- `src/fonts`: self-hosted fonts and their licenses. WOFF2 assets are lossless
  compressed versions of the corresponding TTF sources.

Most content is rendered on the server. Client components own only interactions:
mobile navigation, hero playback, scroll reveals, and the email request form.

## Current product limitations

Newsletter requests and project inquiries open the visitor's email application.
They do not store subscriptions or deliver messages through a backend. Confirm
the published contact details, product claims, and image rights before launch.
The hero preserves its intentional five-second opening fade, which can delay
perceived loading and Largest Contentful Paint on slower devices.
