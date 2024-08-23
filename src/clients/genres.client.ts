import { GenresEndpoints } from '../constants'
import type { Genre, GenresFilter } from '../models'
import { BaseClient } from './base.client'

/**
 * Client used to access the Genres Endpoints.
 *
 * @see [Jikan Documentation](https://docs.api.jikan.moe/#tag/genres)
 */
export class GenresClient extends BaseClient {
	/**
	 * Get Anime genres
	 * @param filter Type of the desired genres
	 */
	public getAnimeGenres(filter?: GenresFilter) {
		return this.getResource<Genre[]>(
			GenresEndpoints.animeGenres,
			{},
			{ filter }
		)
	}

	/**
	 * Get Manga genres
	 * @param filter Type of the desired genres
	 */
	public getMangaGenres(filter?: GenresFilter) {
		return this.getResource<Genre[]>(
			GenresEndpoints.mangaGenres,
			{},
			{ filter }
		)
	}
}
