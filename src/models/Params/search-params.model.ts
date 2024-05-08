import { AnimeRating, AnimeType } from '../Anime';
import { MangaType } from '../Manga';

const SortOptions = {
  asc: 'asc',
  desc: 'desc',
} as const;
export type SortOptions = (typeof SortOptions)[keyof typeof SortOptions];

const SearchOrder = {
  mal_id: 'mal_id',
  title: 'title',
  start_date: 'start_date',
  end_date: 'end_date',
  score: 'score',
  scored_by: 'scored_by',
  rank: 'rank',
  popularity: 'popularity',
  members: 'members',
  favorites: 'favorites',
} as const;
export type SearchOrder = (typeof SearchOrder)[keyof typeof SearchOrder];

const AnimeSearchOrder = {
  type: 'type',
  rating: 'rating',
  episodes: 'episodes',
} as const;
export type AnimeSearchOrder =
  (typeof AnimeSearchOrder)[keyof typeof AnimeSearchOrder];

const AnimeSearchStatus = {
  airing: 'airing',
  complete: 'complete',
  upcoming: 'upcoming',
} as const;
export type AnimeSearchStatus =
  (typeof AnimeSearchStatus)[keyof typeof AnimeSearchStatus];

const MangaSearchOrder = {
  chapters: 'chapters',
  volumes: 'volumes',
} as const;
export type MangaSearchOrder =
  (typeof MangaSearchOrder)[keyof typeof MangaSearchOrder];

const MangaSearchStatus = {
  publishing: 'publishing',
  complete: 'complete',
  hiatus: 'hiatus',
  discontinued: 'discontinued',
  upcoming: 'upcoming',
} as const;
export type MangaSearchStatus =
  (typeof MangaSearchStatus)[keyof typeof MangaSearchStatus];

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
  sort?: SortOptions;
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
  status?: MangaSearchStatus;
  order_by?: MangaSearchOrder & SearchOrder;
  magazines?: string;
}

/**
 * QueryParams used in **getAnimeSearch** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeSearch)
 */
export interface AnimeSearchParams extends JikanSearchParams {
  type?: AnimeType | string;
  status?: AnimeSearchStatus;
  rating?: AnimeRating | string;
  order_by?: AnimeSearchOrder & SearchOrder;
}
