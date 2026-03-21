# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

TypeScript wrapper for the [Jikan API](https://jikan.moe/) (unofficial MyAnimeList API). Published as `@tutkli/jikan-ts` on npm.

## Commands

```bash
bun run build          # Bundle with Bun + generate .d.ts files
bun run lint           # Lint with Oxlint
bun run lint:fix       # Lint and auto-fix
bun run fmt            # Format with Oxfmt
bun run fmt:check      # Check formatting
bun run test:dev       # Run tests (Bun test framework)
bun run test:coverage  # Run tests with coverage
```

Run a single test file:

```bash
bun test src/__tests__/anime-client.spec.ts
```

## Architecture

**Entry points** (defined in `bun.build.js` and `package.json` exports):

- `src/index.ts` → main export (re-exports client.ts)
- `src/client.ts` → client classes export
- `src/types.ts` → types-only export (zero runtime dependencies)

**Client pattern**: `BaseClient` (abstract) → specialized clients (e.g., `AnimeClient`) → `JikanClient` (aggregator that composes all clients sharing one cache and Ky instance).

- `src/clients/base.client.ts` — Abstract base with `getResource<T>()`, in-memory caching, and path parameter interpolation (`{id}` replacement)
- `src/clients/jikan.client.ts` — Facade exposing all 15 domain clients as properties
- `src/config/ky.config.ts` — Ky HTTP client factory (base URL, optional logging hooks)
- `src/config/cache.ts` — `ResponseCache` class (Map-based, TTL expiry, default 5 min)
- `src/constants/base.const.ts` — `BASE_URL = 'https://api.jikan.moe/v4'`
- `src/endpoints/` — Endpoint path templates as `const` objects per domain
- `src/models/` — TypeScript interfaces for API responses and query parameters

## Code Style

- **Formatter**: Oxfmt — tabs, single quotes, no semicolons, no trailing commas, 80 char width
- **Pre-commit hook**: lint-staged runs `oxfmt` on staged files (configured in `.githooks/pre-commit`)
- **Strict TypeScript**: `strict: true` in tsconfig.json

## Testing

Tests are integration tests that call the live Jikan API. Each test has a 1-second `beforeEach` delay for rate limiting. Located in `src/__tests__/`. Uses `bun:test` imports (`describe`, `it`, `expect`).

## Build

Two-step process in the `build` script:

1. Bun bundles ESM output with code splitting and minification (`bun.build.js`)
2. `tsc --emitDeclarationOnly` generates type declarations into `dist/`

Ky is marked as `external` (peer dependency).
