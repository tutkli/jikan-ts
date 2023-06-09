import { BaseClient } from './base.client';
import { Genre, GenresFilter, JikanResponse } from '../models';
import { GenresEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class GenresClient extends BaseClient {
  /**
   * Get Anime genres
   * @param filter Type of the desired genres
   */
  public async getAnimeGenres(filter?: GenresFilter) {
    return new Promise<JikanResponse<Genre[]>>((resolve, reject): void => {
      const endpoint = `${GenresEndpoints.AnimeGenres}`;
      this.api
        .get<JikanResponse<Genre[]>>(endpoint, { params: { filter } })
        .then((response: CacheAxiosResponse<JikanResponse<Genre[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Manga genres
   * @param filter Type of the desired genres
   */
  public async getMangaGenres(filter?: GenresFilter) {
    return new Promise<JikanResponse<Genre[]>>((resolve, reject): void => {
      const endpoint = `${GenresEndpoints.MangaGenres}`;
      this.api
        .get<JikanResponse<Genre[]>>(endpoint, { params: { filter } })
        .then((response: CacheAxiosResponse<JikanResponse<Genre[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
