import type {
	JikanImages,
	JikanNamedResource,
	JikanResource,
	JikanResourcePeriod,
	JikanResourceRelation,
	JikanResourceTitle
} from '../Common'
import type { AnimeYoutubeVideo } from './anime-video.model'

export interface Anime {
	mal_id: number
	url: string
	images: JikanImages
	trailer: AnimeYoutubeVideo
	approved: boolean
	titles: JikanResourceTitle[]
	title: string
	title_english?: string | null
	title_japanese?: string | null
	title_synonyms: string[]
	type: AnimeType | null
	source: string | null
	episodes: number | null
	status: AnimeStatus | null
	airing: boolean
	aired: JikanResourcePeriod
	duration: string | null
	rating?: AnimeRatingString | null
	score: number | null
	scored_by: number | null
	rank: number | null
	popularity: number | null
	members: number | null
	favorites: number | null
	synopsis: string | null
	background: string | null
	season: AnimeSeason | null
	year: number | null
	broadcast: AnimeBroadcast
	producers: JikanResource[]
	licensors: JikanResource[]
	studios: JikanResource[]
	genres: JikanResource[]
	explicit_genres: JikanResource[]
	themes: JikanResource[]
	demographics: JikanResource[]
	relations?: JikanResourceRelation[]
	theme?: AnimeTheme
	external?: JikanNamedResource[]
	streaming?: JikanNamedResource[]
}

export interface AnimeBroadcast {
	day: string | null
	time: string | null
	timezone: string | null
	string: string | null
}

export interface AnimeTheme {
	openings: string[]
	endings: string[]
}

export type AnimeType = 'TV' | 'OVA' | 'Movie' | 'Special' | 'ONA' | 'Music'
export type AnimeSearchType =
	| 'tv'
	| 'movie'
	| 'ova'
	| 'special'
	| 'ona'
	| 'music'
	| 'cm'
	| 'pv'
	| 'tv_special'
export type AnimeStatus =
	| 'Finished Airing'
	| 'Currently Airing'
	| 'Not yet aired'
export type AnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx'
export type AnimeRatingString =
	| 'G - All Ages'
	| 'PG - Children'
	| 'PG-13 - Teens 13 or older'
	| 'R - 17+ (violence & profanity)'
	| 'R+ - Mild Nudity'
	| 'Rx - Hentai'
export type AnimeSeason = 'spring' | 'summer' | 'fall' | 'winter'
