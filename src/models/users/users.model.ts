import type { JikanImages, JikanResource } from '../Common'

/**
 * **User**
 *
 * A MyAnimeList user's public profile.
 */
export interface User {
	mal_id: number
	username: string
	url: string
	images: JikanImages
	last_online: string | null
	gender: string | null
	birthday: string | null
	location: string | null
	joined: string | null
}

/**
 * **User Full Profile**
 *
 * A user's profile together with their statistics and external links.
 */
export interface UserFull extends User {
	statistics: UserStatistics
	external: UserExternalLink[]
}

/**
 * **User By ID**
 *
 * The minimal resource returned when resolving a user by their MAL id.
 */
export interface UserById {
	url: string
	username: string
}

/**
 * **User About**
 *
 * The raw "about" section of a user's profile (may contain BBCode/HTML).
 */
export interface UserAbout {
	about: string | null
}

/** A short reference to another user. */
export interface UserMeta {
	username: string
	url: string
	images: JikanImages
}

/** An external link listed on a user's profile. */
export interface UserExternalLink {
	name: string
	url: string
}

export interface UserStatistics {
	anime: UserAnimeStatistics
	manga: UserMangaStatistics
}

export interface UserAnimeStatistics {
	days_watched: number
	mean_score: number
	watching: number
	completed: number
	on_hold: number
	dropped: number
	plan_to_watch: number
	total_entries: number
	rewatched: number
	episodes_watched: number
}

export interface UserMangaStatistics {
	days_read: number
	mean_score: number
	reading: number
	completed: number
	on_hold: number
	dropped: number
	plan_to_read: number
	total_entries: number
	reread: number
	chapters_read: number
	volumes_read: number
}

export interface UserFavorites {
	anime: UserFavoriteEntry[]
	manga: UserFavoriteEntry[]
	characters: UserFavoriteCharacter[]
	people: UserFavoritePerson[]
}

export interface UserFavoriteEntry {
	mal_id: number
	url: string
	images: JikanImages
	title: string
	type: string
	start_year: number
}

export interface UserFavoriteCharacter {
	mal_id: number
	url: string
	images: JikanImages
	name: string
	type: string
}

export interface UserFavoritePerson {
	mal_id: number
	url: string
	images: JikanImages
	name: string
}

export interface UserUpdates {
	anime: UserAnimeUpdate[]
	manga: UserMangaUpdate[]
}

/** The anime/manga entry referenced by a user list update. */
export interface UserUpdateEntry {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}

export interface UserAnimeUpdate {
	entry: UserUpdateEntry
	score: number | null
	status: string
	episodes_seen: number | null
	episodes_total: number | null
	date: string
}

export interface UserMangaUpdate {
	entry: UserUpdateEntry
	score: number | null
	status: string
	chapters_read: number | null
	chapters_total: number | null
	volumes_read: number | null
	volumes_total: number | null
	date: string
}

/** An entry in a user's activity history. */
export interface UserHistoryEntry {
	entry: JikanResource
	increment: number
	date: string
}

export interface UserFriend {
	user: UserMeta
	last_online: string | null
	friends_since: string | null
}

/** A club a user belongs to. */
export interface UserClub {
	mal_id: number
	name: string
	url: string
}
