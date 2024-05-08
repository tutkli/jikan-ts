import { TopEndpoints } from '../constants'
import type {
	Anime,
	AnimeTopParams,
	JikanResponse,
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
	 * @returns JikanResponse with Anime array data
	 */
	public async getTopAnime(searchParams?: Partial<AnimeTopParams>) {
		return this.getResource<JikanResponse<Anime[]>>(
			TopEndpoints.topAnime,
			{},
			searchParams
		)
	}

	/**
	 * Get the top Mangas
	 * @param searchParams Filter parameters
	 * @returns JikanResponse with Manga array data
	 */
	public async getTopManga(searchParams?: Partial<MangaTopParams>) {
		return this.getResource<JikanResponse<Manga[]>>(
			TopEndpoints.topManga,
			{},
			searchParams
		)
	}
}
