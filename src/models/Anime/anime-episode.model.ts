export interface AnimeEpisode {
	mal_id: number
	url: string
	title: string
	title_japanese: string | null
	title_romanji: string | null
	duration: number | null
	aired: string | null
	filler: boolean
	recap: boolean
	synopsis: string | null
}
