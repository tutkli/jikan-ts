# jikan-ts

![jikan-ts-890w](https://user-images.githubusercontent.com/49206247/207465731-9908e843-7c8d-4e05-838b-41bcd8c677f8.png)

![Language Shield](https://img.shields.io/badge/language-typescript-blue?style=for-the-badge)
![License Shield](https://img.shields.io/badge/license-mit-blueviolet?style=for-the-badge)
![Build Shield](https://img.shields.io/badge/build-passing-brightgreen?style=for-the-badge)
![Coverage Shield](https://img.shields.io/badge/coverage-100%25-brightgreen?style=for-the-badge)
![Code Style Shield](https://img.shields.io/badge/code%20style-Prettier-magenta?style=for-the-badge)

> Jikan API wrapper for Typescript and NodeJS with build in typings.

## Features

- 💅 Fully typed
- ♻ Http Request Cache
- 📄 Logging
- 📦 ESM with tree shaking support

#### 📖 Check out the [documentation page](https://tutkli.github.io/jikan-ts/)!

## Installation

```bash
npm install --save @tutkli/jikan-ts
# or
yarn add @tutkli/jikan-ts
```

## Example

Using a specific client, like **AnimeClient**:

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

const animeClient = new AnimeClient();

animeClient
  .getAnimeById(1)
  .then((jikanResponse: JikanResponse<Anime>) => {
    /* ... */
  })
  .catch(error => console.error(error));
```

Or, using the **JikanClient**:

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

const jikanClient = new JikanClient();

jikanClient.anime
  .getAnimeById(1)
  .then((jikanResponse: JikanResponse<Anime>) => {
    /* ... */
  })
  .catch(error => console.error(error));
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
- JikanClient (Main client)

## Leave you feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)
