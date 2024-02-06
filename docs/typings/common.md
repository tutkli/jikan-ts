# Common Typings

## CommonCharacter

```ts
interface CommonCharacter {
  character: CommonCharacterData;
  role: CharacterRole;
}
```

## CommonCharacterData

```ts
interface CommonCharacterData {
  mal_id: number;
  url: string;
  images: JikanImages;
  name: string;
}
```

## CharacterRole

```ts
enum CharacterRole {
  main = 'Main',
  supporting = 'Supporting',
}
```

## JikanImages

```ts
interface JikanImages {
  jpg: JikanImagesCollection;
  webp?: JikanImagesCollection;
}
```

## JikanImagesCollection

```ts
interface JikanImagesCollection {
  image_url: string;
  small_image_url?: string;
  medium_image_url?: string;
  large_image_url?: string;
  maximum_image_url?: string;
}
```

## JikanPerson

```ts
interface JikanPerson {
  mal_id: number;
  url: string;
  images: JikanImages;
  name: string;
}
```

## Recommendation

```ts
interface Recommendation {
  entry: RecommendationEntry;
}
```

## RecommendationEntry

```ts
interface RecommendationEntry {
  mal_id: number;
  url: string;
  images: JikanImages;
  title: string;
}
```

## JikanResource

```ts
interface JikanResource {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}
```

## JikanNamedResource

```ts
interface JikanNamedResource {
  name: string;
  url: string;
}
```

## JikanResourceTitle

```ts
interface JikanResourceTitle {
  type: string;
  title: string;
}
```

## JikanResourcePeriod

```ts
interface JikanResourcePeriod {
  from: string;
  to: string;
  prop: {
    form: { day: number; month: number; year: number };
    to: { day: number; month: number; year: number };
    string: string;
  };
}
```

## JikanResourceRelation

```ts
interface JikanResourceRelation {
  relation: string;
  entry: JikanResource[];
}
```

## SeasonsListData

```ts
interface SeasonsListData {
  year: number;
  seasons: Array<keyof typeof AnimeSeason>;
}
```

## Statistics

```ts
interface Statistics {
  completed: number;
  on_hold: number;
  dropped: number;
  total: number;
  scores: StatisticsScore[];
}
```

## StatisticsScore

```ts
interface StatisticsScore {
  score: number;
  votes: number;
  percentage: number;
}
```
