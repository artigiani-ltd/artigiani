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

## Automated quality checks

Use Node.js 22 (`nvm install` and `nvm use` read `.nvmrc`) and the pnpm version
declared in `package.json`. Installing dependencies runs `prepare`, which enables
the repository's Husky hooks.

- Before each commit, lint-staged formats supported staged files and fixes
  JavaScript and TypeScript lint issues. Remaining lint errors block the commit.
- Before each push, `pnpm check` checks formatting, linting, TypeScript, and the
  production build. Any failed check blocks the push.
- GitHub Actions repeats `pnpm check` on pushes, pull requests, and merge queues
  using a frozen lockfile. CI checks files without rewriting them.

Run `pnpm check` manually at any time. Use `pnpm format` to fix formatting, or run
`pnpm format:check`, `pnpm lint`, `pnpm typecheck`, and `pnpm build` separately.
The full production build makes pushing slower in exchange for catching build
failures locally.

After this workflow has run on GitHub, configure a ruleset or branch protection
for the default branch: require a pull request and the `Quality checks` status
check before merging. Local hooks can be bypassed, so required CI checks enforce
the merge gate. This repository configuration does not enable that GitHub setting.

These checks do not include automated browser or unit tests yet.

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
