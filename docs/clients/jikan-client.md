# JikanClient


## Usage

The JikanClient provides endpoints for all the available clients.

- [anime](/clients/anime-client)
- [manga](/clients/manga-client)
- [seasons](/clients/seasons-client)
- [top](/clients/top-client)

## Example

```ts
import { JikanClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
  const jikanClient = new JikanClient();

  await jikanClient.anime
    .getAnimeById(1)
    .then((response: JikanResponse<Anime>) => console.log(response.data))
    .catch((error) => console.error(error));
})();
```

## More

> For more information about the Jikan endpoints, check out the [Jikan Documentation](https://docs.api.jikan.moe/)
