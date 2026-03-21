import type { SortOptions } from '../Params'

export type ProducersSearchOrder =
	| 'mal_id'
	| 'count'
	| 'favorites'
	| 'established'

export interface ProducersSearchParams {
	page?: number
	limit?: number
	q?: string
	order_by?: ProducersSearchOrder
	sort?: SortOptions
	letter?: string
}
