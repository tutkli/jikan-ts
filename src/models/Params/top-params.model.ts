import { AnimeType } from '../Anime';
import { MangaType } from '../Manga';

export type TopFilter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';

export interface JikanTopParams {
  page?: number;
  limit?: number;
  filter?: TopFilter;
}

/**
 * QueryParams used in **getTopAnime** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 */
export interface AnimeTopParams extends JikanTopParams {
  type: AnimeType;
}

/**
 * QueryParams used in **getTopManga** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopManga)
 */
export interface MangaTopParams extends JikanTopParams {
  type: MangaType;
}
