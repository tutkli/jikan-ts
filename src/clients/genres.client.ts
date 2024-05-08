import { GenresEndpoints } from '../constants'
import type { Genre, GenresFilter, JikanResponse } from '../models'
import { BaseClient } from './base.client'

/**
 * **Genres Client**
 *
 * Client used to access the Genres Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class GenresClient extends BaseClient {
	/**
	 * Get Anime genres
	 * @param filter Type of the desired genres
	 */
	public async getAnimeGenres(filter?: GenresFilter) {
		return this.getResource<JikanResponse<Genre[]>>(
			GenresEndpoints.animeGenres,
			{},
			{ filter }
		)
	}

	/**
	 * Get Manga genres
	 * @param filter Type of the desired genres
	 */
	public async getMangaGenres(filter?: GenresFilter) {
		return this.getResource<JikanResponse<Genre[]>>(
			GenresEndpoints.mangaGenres,
			{},
			{ filter }
		)
	}
}
