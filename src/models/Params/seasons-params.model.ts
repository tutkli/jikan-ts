import type { AnimeSearchType } from '../Anime'

export interface JikanSeasonsParams {
	page?: number
	limit?: number
	filter?: AnimeSearchType
	sfw?: boolean
	unapproved?: boolean
}

/**
 * QueryParams used in **getSeasonNow** call
 */
export type SeasonNowParams = Omit<JikanSeasonsParams, 'filter'>
