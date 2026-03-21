# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

jikan-ts is a TypeScript wrapper for the [Jikan API](https://jikan.moe/) (unofficial MyAnimeList API). Published as `@tutkli/jikan-ts` on npm. ESM-only package using Bun as build tool and test runner.

## Common Commands

```bash
bun run build          # Build to dist/ (ESM + .d.ts)
bun test               # Run all tests (alias: bun run test:dev)
bun test --coverage    # Run tests with coverage
bun run lint           # Check linting (biome)
bun run lint:fix       # Auto-fix lint issues
bun run format         # Check formatting (biome)
bun run format:fix     # Auto-fix formatting
```

To run a single test file:

```bash
bun test src/__tests__/anime-client.spec.ts
```

## Architecture

**Client-Endpoint-Model pattern:**

- **BaseClient** (`src/clients/base.client.ts`) — Abstract base with `getResource<T>()` and `replacePathParams()`. Handles axios instance creation with caching (`axios-cache-interceptor`) and optional logging interceptors.
- **Domain Clients** (e.g., `AnimeClient`, `MangaClient`) — Extend BaseClient, expose typed methods like `getAnimeById(id)`. Each client maps to one API resource domain.
- **JikanClient** (`src/clients/jikan.client.ts`) — Facade that composes all domain clients (`.anime`, `.manga`, `.characters`, etc.) sharing a single axios instance for cache reuse.
- **Endpoints** (`src/endpoints/`) — Constant objects mapping method names to parameterized URL paths (e.g., `'/anime/{id}/full'`).
- **Models** (`src/models/`) — TypeScript interfaces for API responses. `JikanResponse<T>` is the generic wrapper with pagination metadata.

**Not yet implemented clients:** PeopleClient, ProducersClient, RecommendationsClient, ReviewsClient, UsersClient.

## Code Style

Configured via `biome.json`:

- Tabs for indentation, line width 80
- Single quotes, no semicolons (as-needed), no trailing commas
- Arrow parens: as-needed
- CRLF line endings
- `noUnusedImports` enforced as error
- Import organization is automatic

Pre-commit hook runs lint-staged with biome on staged files.

## Testing Notes

- Tests are in `src/__tests__/*.spec.ts` and use `bun:test` (describe/it/expect).
- Tests are **integration tests** — they hit the live Jikan API, not mocks.
- Tests include 1000ms delays between requests to respect API rate limits.
- Peer dependencies `axios` and `axios-cache-interceptor` must be installed to run tests.

## Build

Build config is in `bun.build.js`. Entry point: `src/index.ts`. Output: minified ESM in `dist/` with generated `.d.ts` via `bun-plugin-dts`. `axios` and `axios-cache-interceptor` are externalized (peer deps).
