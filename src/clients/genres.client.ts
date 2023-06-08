import { BaseClient, ClientArgs } from './base.client';
import { JikanResponse } from '../models';
import { Genre } from '../models/Common/genre.model';
import { GenresEndpoints } from '../constants/endpoints/genres.endpoints';
import { GenresFilter } from '../models/Params/genres-params.model';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';

export class GenresClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: Partial<ClientArgs>) {
    super(clientOptions);
  }

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
