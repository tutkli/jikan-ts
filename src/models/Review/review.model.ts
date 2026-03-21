import type { JikanImages } from '../Common'

export interface Review {
	mal_id: number
	url: string
	type: string
	reactions: ReviewReactions
	date: string
	review: string
	score: number
	tags: string[]
	is_spoiler: boolean
	is_preliminary: boolean
	entry: ReviewEntry
	user: ReviewUser
}

export interface AnimeReview extends Review {
	episodes_watched: number | null
}

export interface MangaReview extends Review {
	chapters_read: number | null
}

export interface ReviewReactions {
	overall: number
	nice: number
	love_it: number
	funny: number
	confusing: number
	informative: number
	well_written: number
	creative: number
}

export interface ReviewEntry {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}

export interface ReviewUser {
	url: string
	username: string
	images: JikanImages
}
