import { RandomEndpoints } from '../constants'
import type { Anime, Character, JikanResponse, Manga } from '../models'
import { BaseClient } from './base.client'

/**
 * **Random Client**
 *
 * Client used to access the Random Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class RandomClient extends BaseClient {
	/**
	 * Get random anime
	 */
	public async getRandomAnime() {
		return this.getResource<JikanResponse<Anime>>(RandomEndpoints.randomAnime)
	}

	/**
	 * Get random manga
	 */
	public async getRandomManga() {
		return this.getResource<JikanResponse<Manga>>(RandomEndpoints.randomManga)
	}

	/**
	 * Get random character
	 */
	public async getRandomCharacters() {
		return this.getResource<Omit<Character, 'anime' | 'manga' | 'voices'>>(
			RandomEndpoints.randomCharacters
		)
	}
}
