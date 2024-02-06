import { AnimeRating, AnimeType } from '../Anime';
import { MangaType } from '../Manga';

export enum SortOptions {
  asc = 'asc',
  desc = 'desc',
}

export enum SearchOrder {
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

export enum AnimeSearchOrder {
  type = 'type',
  rating = 'rating',
  episodes = 'episodes',
}

export enum AnimeSearchStatus {
  airing = 'airing',
  complete = 'complete',
  upcoming = 'upcoming',
}

export enum MangaSearchOrder {
  chapters = 'chapters',
  volumes = 'volumes',
}

export enum MangaSearchStatus {
  publishing = 'publishing',
  complete = 'complete',
  hiatus = 'hiatus',
  discontinued = 'discontinued',
  upcoming = 'upcoming',
}

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
  unapproved?: boolean;
}

/**
 * QueryParams used in **getMangaSearch** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/manga/operation/getMangaSearch)
 */
export interface MangaSearchParams extends JikanSearchParams {
  type?: MangaType | string;
  status?: MangaSearchStatus | string;
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
  status?: AnimeSearchStatus | string;
  rating?: AnimeRating | string;
  order_by?: AnimeSearchOrder | SearchOrder | string;
}
