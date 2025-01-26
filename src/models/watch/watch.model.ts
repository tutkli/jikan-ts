import type { AnimePromoVideo } from '../Anime'
import type { JikanImages } from '../Common'

export type WatchEpisode = {
	entry: EpisodeEntry
	episodes: {
		mal_id: string
		url: string
		title: string
		premium: boolean
	}[]
	region_locked: boolean
}

export type WatchEpisodePromo = AnimePromoVideo & {
	entry: EpisodeEntry
}

export type EpisodeEntry = {
	mal_id: number
	url: string
	images: JikanImages
	title: string
}
