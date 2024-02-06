# Params Typings

## JikanSearchParams

```ts
interface JikanSearchParams {
  q?: string;
  page?: number;
  limit?: number;
  score?: number;
  min_score?: number;
  max_score?: number;
  sfw?: boolean;
  genres?: string;
  genres_exclude?: string;
  sort?: SortOptions | string;
  letter?: string;
  producers?: string;
  start_date?: string;
  end_date?: string;
}
```

## AnimeSearchParams

- _extends_ [JikanSearchParams](#jikansearchparams)

```ts
interface AnimeSearchParams extends JikanSearchParams {
  type?: AnimeType | string;
  status?: AnimeStatus | string;
  rating?: AnimeRating | string;
  order_by?: AnimeSearchOrder | SearchOrder | string;
}
```

## MangaSearchParams

- _extends_ [JikanSearchParams](#jikansearchparams)

```ts
interface MangaSearchParams extends JikanSearchParams {
  type?: MangaType | string;
  status?: MangaStatus | string;
  order_by?: MangaSearchOrder | SearchOrder | string;
  magazines?: string;
}
```

## SortOptions

```ts
enum SortOptions {
  asc = 'asc',
  desc = 'desc',
}
```

## SearchOrder

```ts
enum SearchOrder {
  mal_id = 'mal_id',
  title = 'title',
  start_date = 'start_date',
  end_date = 'end_date',
  score = 'score',
  scored_by = 'scored_by',
  rank = 'rank',
  popularity = 'popularity',
  members = 'members',
  favorites = 'favorites',
}
```

## AnimeSearchOrder

```ts
enum AnimeSearchOrder {
  type = 'type',
  rating = 'rating',
  episodes = 'episodes',
}
```

## MangaSearchOrder

```ts
enum MangaSearchOrder {
  chapters = 'chapters',
  volumes = 'volumes',
}
```

## JikanTopParams

```ts
interface JikanTopParams {
  page?: number;
  limit?: number;
}
```

## AnimeTopParams

- _extends_ [JikanTopParams](#jikantopparams)

```ts
interface AnimeTopParams extends JikanTopParams {
  type?: AnimeType;
  filter?: TopAnimeFilter;
}
```

## MangaTopParams

- _extends_ [JikanTopParams](#jikantopparams)

```ts
interface MangaTopParams extends JikanTopParams {
  type?: MangaType;
  filter: TopMangaFilter;
}
```

## TopAnimeFilter

```ts
enum TopAnimeFilter {
  airing = 'airing',
  upcoming = 'upcoming',
  bypopularity = 'bypopularity',
  favorite = 'favorite',
}
```

## TopMangaFilter

```ts
enum TopMangaFilter {
  publishing = 'publishing',
  upcoming = 'upcoming',
  bypopularity = 'bypopularity',
  favorite = 'favorite',
}
```

## JikanSeasonsParams

```ts
interface JikanSeasonsParams {
  page?: number;
  limit?: number;
  filter?: AnimeType;
}
```

## SeasonNowParams

```ts
type SeasonNowParams = Omit<JikanSeasonsParams, 'filter'>;
```
