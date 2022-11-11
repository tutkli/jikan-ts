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

Use a specific client, like AnimeClient:

```js
import { AnimeClient } from 'jikan-ts';

(async () => {
  const api = new AnimeClient();

  await api
    .getAnimeById(1)
    .then((jikanResponse) => console.log(jikanResponse.data.title)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```

Or, use the JikanClient:

```js
import { JikanClient } from 'jikan-ts';

(async () => {
  const api = new JikanClient();

  await api.anime
    .getAnimeById(1)
    .then((jikanResponse) => console.log(jikanResponse.data.title)) // will output "Cowboy Bebob"
    .catch((error) => console.error(error));
})();
```
