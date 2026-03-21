import type { JikanImages, JikanImagesCollection } from '../Common'

export interface AnimeVideos {
	promo: AnimePromoVideo[]
	episodes: AnimeEpisodeVideo[]
	music_videos: AnimeMusicVideo[]
}

export type AnimePromoVideo = {
	title: string
	trailer: AnimeYoutubeVideo
}

export interface AnimeYoutubeVideo {
	youtube_id: string | null
	url: string | null
	embed_url: string | null
	images?: JikanImagesCollection
}

export interface AnimeEpisodeVideo {
	mal_id: number
	url: string
	title: string
	episode: string
	images: JikanImages
}

export interface AnimeMusicVideo {
	title: string
	video: AnimeYoutubeVideo
	meta: AnimeVideoMeta
}

export interface AnimeVideoMeta {
	title: string | null
	author: string | null
}
