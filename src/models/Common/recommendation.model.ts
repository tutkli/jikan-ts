import type { JikanImages } from './image.model'

export interface Recommendation {
	entry: RecommendationEntry
	url: string
	votes: number
}

export interface RecommendationEntry {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}
