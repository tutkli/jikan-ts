import type { SortOptions } from '../Params'

export type ClubSearchType = 'public' | 'private' | 'secret'

export type ClubSearchCategory =
	| 'anime'
	| 'manga'
	| 'actors_and_artists'
	| 'characters'
	| 'cities_and_neighborhoods'
	| 'companies'
	| 'conventions'
	| 'games'
	| 'japan'
	| 'music'
	| 'other'
	| 'schools'

export type ClubSearchOrder = 'mal_id' | 'name' | 'members_count' | 'created'

export type ClubSearchParams = {
	page: number
	limit: number
	q: string
	type: ClubSearchType
	category: ClubSearchCategory
	order_by: ClubSearchOrder
	sort: SortOptions
	letter: string
}
