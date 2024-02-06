# Top Client

## Usage

Client used to access the **Top endpoints**:

- getTopAnime
- getTopManga

## Example

```ts
import {
  TopClient,
  AnimeTopParams,
  AnimeType,
  JikanResponse,
  Anime,
} from '@tutkli/jikan-ts';

(async () => {
  const topClient = new TopClient();

  const searchParams: AnimeTopParams = {
    type: AnimeType.tv,
  };

  await topClient
    .getTopAnime(searchParams)
    .then((jikanResponse: JikanResponse<Anime[]>) => {
      /* your code */
    })
    .catch(error => console.error(error));
})();
```

## More

> For more information about the Top endpoints, check out the [Jikan Documentation](https://docs.api.jikan.moe/#tag/top)
