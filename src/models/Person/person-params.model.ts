import type { SortOptions } from '../Params'

export type PeopleSearchOrder = 'mal_id' | 'name' | 'birthday' | 'favorites'

export interface PeopleSearchParams {
	page?: number
	limit?: number
	q?: string
	order_by?: PeopleSearchOrder
	sort?: SortOptions
	letter?: string
}
