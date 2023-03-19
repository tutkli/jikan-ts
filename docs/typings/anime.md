# Anime Typings

## Anime

```ts
interface Anime {
    mal_id: number;
    url: string;
    images: JikanImages;
    trailer: AnimeYoutubeVideo;
    approved: boolean;
    titles: JikanResourceTitle[];
    title: string;
    title_english: string;
    title_japanese: string;
    title_synonyms: string[];
    type: AnimeType;
    source: string;
    episodes: number;
    status: AnimeStatus;
    airing: boolean;
    aired: JikanResourcePeriod;
    duration: string;
    rating: AnimeRating;
    score: number;
    scored_by: number;
    rank: number;
    popularity: number;
    members: number;
    favorites: number;
    synopsis: string;
    background: string;
    season?: AnimeSeason;
    year: number;
    broadcast: AnimeBroadcast;
    producers: JikanResource[];
    licensors: JikanResource[];
    studios: JikanResource[];
    genres: JikanResource[];
    explicit_genres: JikanResource[];
    themes: JikanResource[];
    demographics: JikanResource[];
    relations?: JikanResourceRelation[];
    theme?: AnimeTheme;
    external?: JikanNamedResource[];
    streaming: JikanNamedResource[];
}
```

## AnimeBroadcast

```ts
interface AnimeBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}
```

## AnimeTheme

```ts
interface AnimeTheme {
  openings: string[];
  endings: string[];
}
```

## AnimeType

```ts
enum AnimeType {
  tv = 'TV',
  movie = 'Movie',
  ova = 'Ova',
  special = 'Special',
  ona = 'Ona',
  music = 'Music',
}
```

## AnimeStatus

```ts
enum AnimeStatus {
  finished = 'Finished Airing',
  airing = 'Currently Airing',
  complete = 'Complete',
}
```

## AnimeRating

```ts
enum AnimeRating {
  g = 'g',
  pg = 'pg',
  pg13 = 'pg13',
  r17 = 'r17',
  r = 'r',
  rx = 'rx',
}
```

## AnimeSeason

```ts
enum AnimeSeason {
  spring = 'spring',
  summer = 'summer',
  fall = 'fall',
  winter = 'winter',
}
```

## AnimeCharacter

- *extends* [CommonCharacter](/typings/common#common-character)

```ts
interface AnimeCharacter extends CommonCharacter {
    voice_actors: AnimeCharacterVoiceActor[];
}
```

## AnimeCharacterVoiceActor

```ts
interface AnimeCharacterVoiceActor {
  person: JikanPerson;
  language: string;
}
```

## AnimeEpisode

```ts
interface AnimeEpisode {
  mal_id: number;
  url: string;
  title: string;
  title_japanese: string;
  title_romanji: string;
  duration: number;
  aired: string;
  filler: boolean;
  recap: boolean;
  forum_url: string;
}
```

## AnimePicture

```ts
interface AnimePicture {
  images: JikanImages;
}
```

## AnimeStaff

```ts
interface AnimeStaff {
  person: JikanPerson;
  positions: string[];
}
```

## AnimeStatistics

- *extends* [Statistics](/typings/common#statistics)

```ts
interface AnimeStatistics extends Statistics {
  watching: number;
  plan_to_watch: number;
}
```

## AnimeVideos

```ts
interface AnimeVideos {
  promo: AnimePromoVideo[];
  episodes: AnimeEpisodeVideo[];
  music_videos: AnimeMusicVideo[];
}
```

## AnimePromoVideo

```ts
interface AnimePromoVideo {
  title: string;
  trailer: AnimeYoutubeVideo;
}
```

## AnimeYoutubeVide

```ts
interface AnimeYoutubeVideo {
    youtube_id: string;
    url: string;
    embed_url: string;
    images?: JikanImagesCollection;
}
```

## AnimeEpisodeVideo

```ts
interface AnimeEpisodeVideo {
  mal_id: number;
  url: string;
  title: string;
  episode: string;
  images: JikanImages;
}
```

## AnimeMusicVideo

```ts
interface AnimeMusicVideo {
  title: string;
  video: AnimeYoutubeVideo;
  meta: AnimeVideoMeta;
}
```

## AnimeVideoMeta

```ts
interface AnimeVideoMeta {
  title: string;
  author: string;
}
```
