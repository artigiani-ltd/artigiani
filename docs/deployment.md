# Development deployments

The [Artigiani Vercel project](https://vercel.com/kurtdutertes-projects/artigiani)
deploys the `development` branch through Vercel's GitHub integration. Its stable
URL is `https://artigiani-pink.vercel.app`.

Merging a pull request into `development` triggers an automatic deployment.
Direct pushes to `development` also deploy. Use a GitHub branch ruleset if merges
must be the only way to update the branch.

## Quality checks and branch restrictions

GitHub Actions runs `pnpm check` on pushes, pull requests, and merge groups.
Vercel also uses `pnpm check` as its build command, so formatting, lint, types,
and the production build must pass before that deployment can be published.
These checks can run in parallel; Vercel's own checks gate its publication.

Only `development` should deploy to this project:

- The Vercel Production environment tracks `development`.
- Preview deployments are disabled in the project settings.
- The ignored-build command skips every Git branch except `development`.
- `vercel.json` permits automatic Git deployments only for `development`.

The Vercel project's ignored-build command is:

```sh
if [ "$VERCEL_GIT_COMMIT_REF" = "development" ]; then exit 1; else exit 0; fi
```

Vercel interprets exit code zero as skipping the build and exit code one as
continuing it. Keep this setting even when branches do not yet contain
`vercel.json`.

The `main` branch is reserved for AWS production. This configuration does not
create or change the AWS deployment pipeline. Vercel calls its stable deployment
**Production**, but this project is the application's staging environment.

## Runtime and performance

The Vercel project uses the Next.js preset, Node.js 22, and
`pnpm install --frozen-lockfile`. The lockfile and `packageManager` field keep
dependency and pnpm versions consistent with local development.

Keep Next.js static rendering, responsive image optimization, and framework
asset caching enabled. Verify the hosted site on mobile, including cold image
requests, animation controls, navigation, and reduced motion. Passing CI does
not guarantee field performance.

## Environment variables and credentials

Set these variables in the Vercel project before building:

| Variable         | Vercel staging                      | AWS production             |
| ---------------- | ----------------------------------- | -------------------------- |
| `SITE_URL`       | `https://artigiani-pink.vercel.app` | `https://artigiani.design` |
| `SITE_INDEXABLE` | `false`                             | `true`                     |

Apply staging values to Vercel's Production, Preview, and Development scopes.
Vercel's Development scope refers to local development, not a Git branch.

The native GitHub integration does not require a Vercel deployment token in
GitHub Actions. Store future staging application secrets in this Vercel project
and production secrets separately in the chosen AWS service's secret store.
Use different credentials and resources for each environment while keeping
variable names consistent in code.

Keep secrets out of Git and never prefix them with `NEXT_PUBLIC_`, which makes
them available to browsers. Local credentials belong in ignored `.env.local`
files.

Vercel project settings and environment variables are external state. Committing
these files alone does not configure a different Vercel project.
