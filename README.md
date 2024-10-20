# jikan-ts

![jikan-ts-890w](https://user-images.githubusercontent.com/49206247/207465731-9908e843-7c8d-4e05-838b-41bcd8c677f8.png)

<p align="center">

  ![Language Shield](https://img.shields.io/badge/language-typescript-blue?style=for-the-badge)
  ![GitHub License](https://img.shields.io/github/license/tutkli/jikan-ts?style=for-the-badge&color=blueviolet)
  ![Code Style Shield](https://img.shields.io/badge/code%20style-Biome-60A5FA?style=for-the-badge&logo=biome)
  ![NPM Downloads](https://img.shields.io/npm/dt/%40tutkli%2Fjikan-ts?style=for-the-badge&color=red&logo=npm&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tutkli%2Fjikan-ts)
  ![npm bundle size](https://img.shields.io/bundlephobia/minzip/%40tutkli%2Fjikan-ts?style=for-the-badge&color=darkgreen&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2F%40tutkli%2Fjikan-ts)

</p>

> Jikan API wrapper for Typescript and Node.js with built-in typings.

## Features

- 💅 Fully typed
- ♻ Http Request Cache
- 📄 Logging
- 📦 ESM with tree shaking support

## Installation

```bash
npm install --save @tutkli/jikan-ts axios axios-cache-interceptor
# or
yarn add @tutkli/jikan-ts axios axios-cache-interceptor
```

## Example

Using a specific client, like **AnimeClient**:

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

const animeClient = new AnimeClient();

animeClient
  .getAnimeById(1)
  .then((response: JikanResponse<Anime>) => {
    /* ... */
  })
```

Or, using the **JikanClient**:

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

### Custom Axios instance

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

- AnimeClient
- CharactersClient
- GenresClient
- MangaClient
- TopClient
- SchedulesClient
- SeasonsClient
- RandomClient
- JikanClient (Main client)

## Leave you feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)
