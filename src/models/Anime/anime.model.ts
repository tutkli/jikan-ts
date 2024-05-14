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
	title_english: string
	title_japanese: string
	title_synonyms: string[]
	type: AnimeType
	source: string
	episodes: number
	status: AnimeStatus
	airing: boolean
	aired: JikanResourcePeriod
	duration: string
	rating: AnimeRating
	score: number
	scored_by: number
	rank: number
	popularity: number
	members: number
	favorites: number
	synopsis: string
	background: string
	season?: AnimeSeason
	year: number
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
	streaming: JikanNamedResource[]
}

export interface AnimeBroadcast {
	day: string
	time: string
	timezone: string
	string: string
}

export interface AnimeTheme {
	openings: string[]
	endings: string[]
}

export type AnimeType = 'TV' | 'Movie' | 'Ova' | 'Special' | 'Ona' | 'Music'
export type AnimeStatus =
	| 'Finished Airing'
	| 'Currently Airing'
	| 'Complete'
	| 'Not yet aired'
export type AnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx'
export type AnimeSeason = 'spring' | 'summer' | 'fall' | 'winter'
