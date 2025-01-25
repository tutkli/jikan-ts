import { RandomEndpoints } from '../constants/endpoints/random.endpoints'
import type { Anime, Character, Manga } from '../models'
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
	public getRandomAnime() {
		return this.getResource<Anime>(RandomEndpoints.randomAnime)
	}

	/**
	 * Get random manga
	 */
	public getRandomManga() {
		return this.getResource<Manga>(RandomEndpoints.randomManga)
	}

	/**
	 * Get random character
	 */
	public getRandomCharacters() {
		return this.getResource<Character>(RandomEndpoints.randomCharacters)
	}
}
