import type { SortOptions } from '../Params'

export type Magazine = {
	mal_id: number
	name: string
	url: string
	count: number
}

export type MagazineSearchOrder = 'mal_id' | 'name' | 'count'

export type MagazineSearchParams = {
	page: number
	limit: number
	q: string
	order_by: MagazineSearchOrder
	sort: SortOptions
	letter: string
}
