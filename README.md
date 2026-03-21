# jikan-ts

![jikan-ts-890w](https://user-images.githubusercontent.com/49206247/207465731-9908e843-7c8d-4e05-838b-41bcd8c677f8.png)

<p align="center">

  ![Language Shield](https://img.shields.io/badge/language-typescript-blue?style=for-the-badge)
  ![GitHub License](https://img.shields.io/github/license/tutkli/jikan-ts?style=for-the-badge&color=blueviolet)
  ![Code Style Shield](https://img.shields.io/badge/code%20style-Biome-60A5FA?style=for-the-badge&logo=biome)
  ![NPM Downloads](https://img.shields.io/npm/dt/%40tutkli%2Fjikan-ts?style=for-the-badge&color=red&logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tutkli%2Fjikan-ts)
  ![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40tutkli%2Fjikan-ts?style=for-the-badge&color=darkgreen&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tutkli%2Fjikan-ts)

</p>

> Jikan API wrapper for TypeScript and Node.js with built-in typing.

## Features

- 💅 Fully typed
- ♻ Http Request Cache
- 📄 Logging
- 📦 ESM with tree shaking support

## Installation

### Full client (with axios)

```bash
npm install @tutkli/jikan-ts axios axios-cache-interceptor
```

### Types only (zero runtime dependencies)

If you want to use the types and endpoint constants to build your own HTTP client:

```bash
npm install @tutkli/jikan-ts
```

## Example

### Using the types-only import

```ts
import type { Anime, JikanResponse } from '@tutkli/jikan-ts/types';
import { AnimeEndpoints, BASE_URL } from '@tutkli/jikan-ts/types';

// Build your own HTTP client using the provided types and endpoints
const response = await fetch(`${BASE_URL}${AnimeEndpoints.AnimeById.replace('{id}', '1')}`);
const data: JikanResponse<Anime> = await response.json();
```

### Using a specific client, like **AnimeClient**

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

const animeClient = new AnimeClient();

animeClient
  .getAnimeById(1)
  .then((response: JikanResponse<Anime>) => {
    /* ... */
  })
```

### Using the **JikanClient**

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

const jikanClient = new JikanClient();

jikanClient.anime
  .getAnimeById(1)
  .then((response: JikanResponse<Anime>) => {
    /* ... */
  })
```

## Client configuration

### Cache Configuration

Jikan-ts uses `axios-cache-interceptor` to store request results.
To use a specific configuration, pass the `cacheOptions` argument when instantiating a client:

```ts
import { AnimeClient } from '@tutkli/jikan-ts';

const animeClient = new AnimeClient({
    cacheOptions: { ... } // axios-cache-interceptor options
  }
);
```

### Custom Axios Instance

Jikan uses `axios` as an `http` client and if you are not satisfied with the default client settings, then you can build your instance by passing it to the optional `axiosInstance` argument

```ts
import { AnimeClient } from '@tutkli/jikan-ts';
import Axios from 'axios';

const animeClient = new AnimeClient({
    axiosInstance: Axios.create({ ... })
  }
);
```

For more information, check out the [axios-cache-interceptor Documentation](https://axios-cache-interceptor.js.org/).

### Logging

To enable logging, pass the `enableLogging` argument as `true`.

```ts
import { AnimeClient } from '@tutkli/jikan-ts';

const animeClient = new AnimeClient({
  enableLogging: true,
});
```

## Available Clients

| Client                        | Status      |
|-------------------------------|-------------|
| **AnimeClient**               | ✅ Supported |
| **CharactersClient**          | ✅ Supported |
| **ClubsClient**               | ✅ Supported |
| **GenresClient**              | ✅ Supported |
| **MagazinesClient**           | ✅ Supported |
| **MangaClient**               | ✅ Supported |
| **PeopleClient**              | ❌ Upcoming  |
| **ProducersClient**           | ❌ Upcoming  |
| **RandomClient**              | ✅ Supported |
| **RecommendationsClient**     | ❌ Upcoming  |
| **ReviewsClient**             | ❌ Upcoming  |
| **SchedulesClient**           | ✅ Supported |
| **UsersClient**               | ❌ Upcoming  |
| **SeasonsClient**             | ✅ Supported |
| **TopClient**                 | ✅ Supported |
| **WatchClient**               | ✅ Supported |
| **JikanClient** (Main client) | ✅ Supported |

## Leave you feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)
