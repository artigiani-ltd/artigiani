# Artigiani Frontend

This repository contains the public Artigiani frontend. It is a standalone Next.js application that communicates with the Artigiani backend exclusively through its HTTP API.

The Django backend is maintained, deployed, and configured in a completely separate repository. No backend source code or secrets belong in this project.

## Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint
- pnpm

## Prerequisites

- Node.js 22.13 or newer
- pnpm 11
- Git

Corepack can activate the pnpm version declared in `package.json`:

```bash
corepack enable
corepack install
```

## Installation

Install the frontend dependencies:

```bash
pnpm install
```

## Environment setup

Create your local environment file:

```bash
cp .env.example .env.local
```

The frontend requires this public configuration value:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

`NEXT_PUBLIC_API_URL` is the base URL for the separately deployed backend API. Set it independently for local, staging, and production environments. Because variables prefixed with `NEXT_PUBLIC_` can be exposed to browsers, never use one for credentials, private keys, or other secrets.

The Django backend normally runs locally at `http://localhost:8000`, but it is not part of this repository. Its expected status endpoint is:

```text
GET /api/v1/status
```

## Development

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). The placeholder homepage reports whether the frontend can reach the backend status endpoint. It continues to render if the backend is unavailable.

## Quality checks

Run ESLint:

```bash
pnpm lint
```

Run the TypeScript compiler without emitting files:

```bash
pnpm typecheck
```

Create a production build:

```bash
pnpm build
```

After building, run the production server with:

```bash
pnpm start
```

## API contract

Backend communication is centralized under `src/lib/api`. The Django Ninja OpenAPI schema can later be used to generate TypeScript types or a client without importing or duplicating backend source code. Until then, frontend code should use only documented API contracts and the shared API client.
