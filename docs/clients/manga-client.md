# Manga Client

## Usage

Client used to access the **Manga endpoints**:

- getMangaSearch
- getMangaById
- getMangaFullById
- getMangaCharacters
- getMangaPictures
- getMangaStatistics
- getMangaRecommendations

## Example

```ts
import { MangaClient, JikanResponse, MangaCharacter } from '@tutkli/jikan-ts';

(async () => {
  const mangaClient = new MangaClient();

  await mangaClient
    .getMangaCharacters(1)
    .then((response: JikanResponse<MangaCharacter[]>) => {
      /* your code */
    })
    .catch(error => console.error(error));
})();
```

## More

> For more information about the Manga endpoints, check out the [Jikan Documentation](https://docs.api.jikan.moe/#tag/manga)
