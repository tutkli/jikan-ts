import type { JikanImages, RelationEntry } from '../Common'

export type Club = {
	mal_id: number
	name: string
	url: string
	images: JikanImages
	members: number
	category: string
	created: string
	access: string
}

export type ClubMember = {
	username: string
	url: string
	images: JikanImages
}

export type ClubStaff = {
	url: string
	username: string
}

export type ClubRelations = {
	anime: RelationEntry[]
	manga: RelationEntry[]
	characters: RelationEntry[]
}
