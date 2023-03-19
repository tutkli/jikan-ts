# Getting Started

## Installation

Install `@tutkli/jikan-ts` with your favorite package manager:

::: code-group

```sh [npm]
npm install --save @tutkli/jikan-ts
```

```sh [yarn]
yarn add @tutkli/jikan-ts
```

:::

## Example

Using a specific client, like AnimeClient:

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
    const animeClient = new AnimeClient();

    await animeClient
        .getAnimeById(1)
        .then((response: JikanResponse<Anime>) => console.log(response.data))
        .catch((error) => console.error(error));
})();
```

Or, using the JikanClient:

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.anime
    .getAnimeById(1)
    .then((response: JikanResponse<Anime>) => console.log(jikanResponse.data))
    .catch((error) => console.error(error));
})();
```

## Leave you feedback

- Did you find this project useful? [Leave a ⭐](https://github.com/tutkli/jikan-ts)
- Found a problem? [Create an issue 🔎](https://github.com/tutkli/jikan-ts/issues)
- Want to contribute? [Submit a PR 📑](https://github.com/tutkli/jikan-ts/pulls)

