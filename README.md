# jikan-ts

![jikan-ts-890w](https://user-images.githubusercontent.com/49206247/207465731-9908e843-7c8d-4e05-838b-41bcd8c677f8.png)

<p align="center">

![Language Shield](https://img.shields.io/badge/language-typescript-blue?style=for-the-badge)
![GitHub License](https://img.shields.io/github/license/tutkli/jikan-ts?style=for-the-badge&color=blueviolet)
![Code Style Shield](https://img.shields.io/badge/code%20style-Oxfmt-60A5FA?style=for-the-badge)
![NPM Downloads](https://img.shields.io/npm/dt/%40tutkli%2Fjikan-ts?style=for-the-badge&color=red&logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tutkli%2Fjikan-ts)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40tutkli%2Fjikan-ts?style=for-the-badge&color=darkgreen&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tutkli%2Fjikan-ts)

</p>

> Jikan API wrapper for TypeScript and Node.js with built-in typing.

## Features

- 💅 Fully typed
- ♻ Built-in in-memory response cache (TTL-based)
- 📄 Request logging
- 📦 ESM with tree shaking support

## Installation

### Full client (with ky)

```bash
npm install @tutkli/jikan-ts ky
```

### Types only (zero runtime dependencies)

If you want to use the types and endpoint constants to build your own HTTP client:

```bash
npm install @tutkli/jikan-ts
```

## Example

### Using the types-only import

```ts
import type { Anime, JikanResponse } from '@tutkli/jikan-ts/types'
import { AnimeEndpoints, BASE_URL } from '@tutkli/jikan-ts/types'

// Build your own HTTP client using the provided types and endpoints
const response = await fetch(
	`${BASE_URL}${AnimeEndpoints.AnimeById.replace('{id}', '1')}`
)
const data: JikanResponse<Anime> = await response.json()
```

### Using a specific client, like **AnimeClient**

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts'

const animeClient = new AnimeClient()

animeClient.getAnimeById(1).then((response: JikanResponse<Anime>) => {
	/* ... */
})
```

### Using the **JikanClient**

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts'

const jikanClient = new JikanClient()

jikanClient.anime.getAnimeById(1).then((response: JikanResponse<Anime>) => {
	/* ... */
})
```

## Client configuration

### Cache Configuration

Jikan-ts uses a built-in in-memory cache with TTL-based expiry (default: 5 minutes).
To customize the cache, pass the `cacheOptions` argument when instantiating a client:

```ts
import { AnimeClient } from '@tutkli/jikan-ts'

const animeClient = new AnimeClient({
	cacheOptions: { ttl: 10 * 60 * 1000 } // 10 minutes
})
```

### Custom Ky Instance

Jikan-ts uses [Ky](https://github.com/sindresorhus/ky) as its HTTP client. You can provide your own Ky instance via the optional `kyInstance` argument:

```ts
import { AnimeClient } from '@tutkli/jikan-ts'
import ky from 'ky'

const animeClient = new AnimeClient({
	kyInstance: ky.create({
		/* ... */
	})
})
```

### Logging

To enable logging, pass the `enableLogging` argument as `true`.

```ts
import { AnimeClient } from '@tutkli/jikan-ts'

const animeClient = new AnimeClient({
	enableLogging: true
})
```

## Leave your feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)
