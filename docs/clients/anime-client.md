# Anime Client

## Usage

Client used to access the **Anime endpoints**:

- getAnimeSearch
- getAnimeById
- getAnimeFullById
- getAnimeCharacters
- getAnimeStaff
- getAnimeEpisodes
- getAnimeEpisodeById
- getAnimeVideos
- getAnimePictures
- getAnimeStatistics
- getAnimeRecommendations

## Example

```ts
import { AnimeClient, JikanResponse, Anime } from '@tutkli/jikan-ts';

(async () => {
  const animeClient = new AnimeClient();

  await animeClient
    .getAnimeById(1)
    .then((response: JikanResponse<Anime>) => {
      /* your code */
    })
    .catch(error => console.error(error));
})();
```

## More

> For more information about the Anime endpoints, check out the [Jikan Documentation](https://docs.api.jikan.moe/#tag/anime)
