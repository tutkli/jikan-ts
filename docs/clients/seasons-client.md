# Seasons Client

## Usage

Client used to access the **Seasons endpoints**:

- getSeason
- getSeasonsNow
- getSeasonsList
- getSeasonsUpcoming

## Example

```ts
import {
  SeasonsClient,
  AnimeSeason,
  JikanResponse,
  Anime,
} from '@tutkli/jikan-ts';

(async () => {
  const seasonsClient = new SeasonsClient();

  await seasonsClient
    .getSeason(2023, AnimeSeason.spring)
    .then((response: JikanResponse<Anime[]>) => {
      /* your code */
    })
    .catch(error => console.error(error));
})();
```

## More

> For more information about the Seasons endpoints, check out the [Jikan Documentation](https://docs.api.jikan.moe/#tag/seasons)
