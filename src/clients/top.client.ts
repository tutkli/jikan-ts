import { BaseClient, ClientArgs } from './base.client';
import { Anime, AnimeTopParams, JikanResponse, Manga, MangaTopParams } from '../models';
import { TopEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';

/**
 * **Top Client**
 *
 * Client used to access the Top Endpoints:
 * - [TopAnime](https://tutkli.github.io/jikan-ts-docs/clients/top-client.html#gettopanime-top-anime)
 * - [TopManga](https://tutkli.github.io/jikan-ts-docs/clients/top-client.html#gettopmanga-top-manga)
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class TopClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: Partial<ClientArgs>) {
    super(clientOptions);
  }

  /**
   * Get the top Animes
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getTopAnime(searchParams?: Partial<AnimeTopParams>): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${TopEndpoints.TopAnime}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get the top Mangas
   * @param searchParams Filter parameters
   * @returns JikanResponse with Manga array data
   */
  public async getTopManga(searchParams?: Partial<MangaTopParams>): Promise<JikanResponse<Manga[]>> {
    return new Promise<JikanResponse<Manga[]>>((resolve, reject) => {
      const endpoint = `${TopEndpoints.TopManga}`;
      this.api
        .get<JikanResponse<Manga[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Manga[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
