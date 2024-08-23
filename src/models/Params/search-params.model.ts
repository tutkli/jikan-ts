import type { AnimeRating, AnimeType } from '../Anime'
import type { MangaType } from '../Manga'

export type SortOptions = 'asc' | 'desc'

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
	| 'favorites'

export type AnimeSearchOrder = 'type' | 'rating' | 'episodes' | SearchOrder

export type AnimeSearchStatus = 'airing' | 'complete' | 'upcoming'

export type MangaSearchOrder = 'chapters' | 'volumes' | SearchOrder

export type MangaSearchStatus =
	| 'publishing'
	| 'complete'
	| 'hiatus'
	| 'discontinued'
	| 'upcoming'

export interface JikanSearchParams {
	q?: string
	page?: number
	limit?: number
	score?: number
	min_score?: number
	max_score?: number
	sfw?: boolean
	genres?: string
	genres_exclude?: string
	sort?: SortOptions
	letter?: string
	producers?: string
	start_date?: string
	end_date?: string
	unapproved?: boolean
}

/**
 * QueryParams used in `getMangaSearch`
 */
export interface MangaSearchParams extends JikanSearchParams {
	type?: MangaType
	status?: MangaSearchStatus
	order_by?: MangaSearchOrder
	magazines?: string
}

/**
 * QueryParams used in `getAnimeSearch`
 */
export interface AnimeSearchParams extends JikanSearchParams {
	type?: AnimeType
	status?: AnimeSearchStatus
	rating?: AnimeRating
	order_by?: AnimeSearchOrder
}
