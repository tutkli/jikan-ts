import { RandomEndpoints } from '../constants';
import { Anime, Character, JikanResponse, Manga } from '../models';
import { BaseClient } from './base.client';

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
  public async getRandomAnime(): Promise<JikanResponse<Anime>> {
    return this.getResource<JikanResponse<Anime>>(RandomEndpoints.randomAnime);
  }

  /**
   * Get random manga
   */
  public async getRandomManga(): Promise<JikanResponse<Manga>> {
    return this.getResource(RandomEndpoints.randomManga);
  }

  /**
   * Get random character
   */
  public async getRandomCharacters(): Promise<
    JikanResponse<Omit<Character, 'anime' | 'manga' | 'voices'>>
  > {
    return this.getResource(RandomEndpoints.randomManga);
  }
}
