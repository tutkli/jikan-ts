import type { JikanImages } from '../Common'

export interface RecentRecommendation {
	mal_id: string
	entry: RecentRecommendationEntry[]
	content: string
	date: string
	user: RecentRecommendationUser
}

export interface RecentRecommendationEntry {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}

export interface RecentRecommendationUser {
	url: string
	username: string
}
