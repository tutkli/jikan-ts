import type { JikanImages } from './image.model'

export interface JikanNews {
	mal_id: number
	url: string
	title: string
	date: string
	author_username: string
	author_url: string
	forum_url: string
	images: JikanImages
	comments: number
	excerpt: string
}
