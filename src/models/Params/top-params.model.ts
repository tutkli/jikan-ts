import { AnimeType } from '../Anime';
import { MangaType } from '../Manga';

const TopAnimeFilter = {
  airing: 'airing',
  upcoming: 'upcoming',
  bypopularity: 'bypopularity',
  favorite: 'favorite',
} as const;
export type TopAnimeFilter =
  (typeof TopAnimeFilter)[keyof typeof TopAnimeFilter];

const TopMangaFilter = {
  publishing: 'publishing',
  upcoming: 'upcoming',
  bypopularity: 'bypopularity',
  favorite: 'favorite',
};
export type TopMangaFilter =
  (typeof TopMangaFilter)[keyof typeof TopMangaFilter];

export interface JikanTopParams {
  page?: number;
  limit?: number;
}

/**
 * QueryParams used in **getTopAnime** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 */
export interface AnimeTopParams extends JikanTopParams {
  type?: AnimeType;
  filter?: TopAnimeFilter;
}

/**
 * QueryParams used in **getTopManga** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopManga)
 */
export interface MangaTopParams extends JikanTopParams {
  type?: MangaType;
  filter?: TopMangaFilter;
}
