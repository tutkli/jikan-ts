# jikan-ts

## What it is

Node.js wrapper of the Jikan API with build-in typings.

## Features

- Built-in typings
- Axios with Request Cache
- Logging Configuration

## Installation

```bash
npm install --save jikan-ts
```

## Basic Example

Using a specific client, like AnimeClient:

```js
import { AnimeClient } from '@tutkli/jikan-ts';

(async () => {
  const api = new AnimeClient();

  await api
    .getAnimeById(1)
    .then((jikanResponse) => console.log(jikanResponse.data.title)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```

Or, using the JikanClient:

```js
import { JikanClient } from '@tutkli/jikan-ts';

(async () => {
  const api = new JikanClient();

  await api.anime
    .getAnimeById(1)
    .then((jikanResponse) => console.log(jikanResponse.data.title)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```

## Available Clients

- AnimeClient
- MangaClient
- TopClient
- JikanClient (Main client)

## Leave you feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)

