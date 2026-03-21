import type { AnimeSearchType } from '../Anime'
import type { MangaSearchType } from '../Manga'

type TopFilter = 'upcoming' | 'bypopularity' | 'favorite'

export type TopAnimeFilter = 'airing' | TopFilter

export type TopMangaFilter = 'publishing' | TopFilter

export interface JikanTopParams {
	page?: number
	limit?: number
}

/**
 * QueryParams used in **getTopAnime** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 */
export interface AnimeTopParams extends JikanTopParams {
	type?: AnimeSearchType
	filter?: TopAnimeFilter
}

/**
 * QueryParams used in **getTopManga** call
 *
 * See also: [Jikan API Documentation](https://docs.api.jikan.moe/#tag/top/operation/getTopManga)
 */
export interface MangaTopParams extends JikanTopParams {
	type?: MangaSearchType
	filter?: TopMangaFilter
}
