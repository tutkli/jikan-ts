import { MangaStatus, MangaType } from '../Manga';
import { AnimeRating, AnimeStatus, AnimeType } from '../Anime';

export type SortOptions = 'asc' | 'desc';

export type SearchOrder =
  | 'mal_id'
  | 'title'
  | 'start_date'
  | 'end_date'
  | 'score'
  | 'scored_by'
  | 'rank'
  | 'popularity'
  | 'members'
  | 'favorites';
export type AnimeSearchOrder = 'type' | 'rating' | 'episodes';
export type MangaSearchOrder = 'chapters' | 'volumes';

export interface JikanSearchParams {
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

/**
 * QueryParams used in **getMangaSearch** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/manga/operation/getMangaSearch)
 */
export interface MangaSearchParams extends JikanSearchParams {
  type?: MangaType | string;
  status?: MangaStatus | string;
  order_by?: MangaSearchOrder | SearchOrder | string;
  magazines?: string;
}

/**
 * QueryParams used in **getAnimeSearch** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch)
 */
export interface AnimeSearchParams extends JikanSearchParams {
  type?: AnimeType | string;
  status?: AnimeStatus | string;
  rating?: AnimeRating | string;
  order_by?: AnimeSearchOrder | SearchOrder | string;
}
