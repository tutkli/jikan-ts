import { TopEndpoints } from '../constants'
import type {
	Anime,
	AnimeTopParams,
	Character,
	JikanTopParams,
	Manga,
	MangaTopParams
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Top Client**
 *
 * Client used to access the Top Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class TopClient extends BaseClient {
	/**
	 * Get the top Animes
	 * @param searchParams Filter parameters
	 */
	public getTopAnime(searchParams?: Partial<AnimeTopParams>) {
		return this.getResource<Anime[]>(TopEndpoints.topAnime, {}, searchParams)
	}

	/**
	 * Get the top Mangas
	 * @param searchParams Filter parameters
	 */
	public getTopManga(searchParams?: Partial<MangaTopParams>) {
		return this.getResource<Manga[]>(TopEndpoints.topManga, {}, searchParams)
	}

	/**
	 * Get the top Characters
	 * @param searchParams Filter parameters
	 */
	public getTopCharacters(searchParams?: Partial<JikanTopParams>) {
		return this.getResource<Character[]>(
			TopEndpoints.topCharacters,
			{},
			searchParams
		)
	}
}
