import type { JikanImages } from '../Common'

export interface Person {
	mal_id: number
	url: string
	website_url: string | null
	images: JikanImages
	name: string
	given_name: string | null
	family_name: string | null
	alternate_names: string[]
	birthday: string | null
	favorites: number
	about: string | null
}

export interface PersonFull extends Person {
	anime: PersonAnimePosition[]
	manga: PersonMangaPosition[]
	voices: PersonVoiceActingRole[]
}

export interface PersonAnimePosition {
	position: string
	anime: PersonAnimeReference
}

export interface PersonMangaPosition {
	position: string
	manga: PersonMangaReference
}

export interface PersonVoiceActingRole {
	role: string
	anime: PersonAnimeReference
	character: PersonCharacterReference
}

export interface PersonAnimeReference {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}

export interface PersonMangaReference {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}

export interface PersonCharacterReference {
	mal_id: number
	url: string
	images: JikanImages
	name: string
}
