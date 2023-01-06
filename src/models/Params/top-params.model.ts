import { AnimeType } from '../Anime';
import { MangaType } from '../Manga';

export enum TopAnimeFilter {
  airing = 'airing',
  upcoming = 'upcoming',
  bypopularity = 'bypopularity',
  favorite = 'favorite',
}

export enum TopMangaFilter {
  publishing = 'publishing',
  upcoming = 'upcoming',
  bypopularity = 'bypopularity',
  favorite = 'favorite',
}

export interface JikanTopParams {
  page: number;
  limit: number;
}

/**
 * QueryParams used in **getTopAnime** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 */
export interface AnimeTopParams extends JikanTopParams {
  type: AnimeType;
  filter: TopAnimeFilter;
}

/**
 * QueryParams used in **getTopManga** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopManga)
 */
export interface MangaTopParams extends JikanTopParams {
  type: MangaType;
  filter: TopMangaFilter;
}
