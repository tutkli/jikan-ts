import type { JikanImages } from '../Common'

export interface UserUpdateUser {
	username: string
	url: string
	images: JikanImages
}

export interface AnimeUserUpdate {
	user: UserUpdateUser
	score: number | null
	status: string
	episodes_seen: number | null
	episodes_total: number | null
	date: string
}

export interface MangaUserUpdate {
	user: UserUpdateUser
	score: number | null
	status: string
	volumes_read: number | null
	volumes_total: number | null
	chapters_read: number | null
	chapters_total: number | null
	date: string
}
