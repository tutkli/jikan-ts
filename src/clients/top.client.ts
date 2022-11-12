import { BaseClient, ClientArgs } from './base.client';
import { Anime, JikanResponse, Manga } from '../models';
import { AnimeEndpoints, MangaEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import { AnimeTopParams, MangaTopParams } from '../models/Params';

/**
 * **Anime Client**
 *
 * Client used to access the Top Endpoints:
 * - [TopAnime](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 * - [TopManga]https://docs.api.jikan.moe/#tag/top/operation/getTopManga]
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class TopClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  /**
   * Get the top Animes
   * @returns A JikanResponse with Anime data
   */
  public async getTopAnime(searchParams: AnimeTopParams): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeSearch}`;
      this.api
        .get<JikanResponse<Anime>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get the top Mangas
   * @returns A JikanResponse with Manga data
   */
  public async getTopManga(searchParams: MangaTopParams): Promise<JikanResponse<Manga>> {
    return new Promise<JikanResponse<Manga>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaSearch}`;
      this.api
        .get<JikanResponse<Manga>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
