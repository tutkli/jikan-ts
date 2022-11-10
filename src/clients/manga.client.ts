import { BaseClient, ClientArgs } from './base.client';
import { MangaEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import { JikanResponse, JikanUniqueResponse } from '../models/Response';
import { Manga } from '../models/Manga';

/**
 * **Manga Client**
 *
 * Client used to access the Manga Endpoints:
 * - [Manga](https://docs.api.jikan.moe/#tag/manga)
 * - [TopMangas](https://docs.api.jikan.moe/#tag/top/operation/getTopManga)
 * - [MangaFullById](https://docs.api.jikan.moe/#tag/manga/operation/getMangaFullById)
 * - [MangaById](https://docs.api.jikan.moe/#tag/manga/operation/getMangaById)
 */
export class MangaClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  /**
   * Get all the Mangas
   * @returns A JikanResponse with Manga data
   */
  public async getMangas(): Promise<JikanResponse<Manga>> {
    return new Promise<JikanResponse<Manga>>((resolve, reject) => {
      this.api
        .get<JikanResponse<Manga>>(`${MangaEndpoints.Manga}`)
        .then((response: CacheAxiosResponse<JikanResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get the top Mangas
   * @returns A JikanResponse with Manga data
   */
  public async getTopMangas(): Promise<JikanResponse<Manga>> {
    return new Promise<JikanResponse<Manga>>((resolve, reject) => {
      this.api
        .get<JikanResponse<Manga>>(`${MangaEndpoints.TopManga}`)
        .then((response: CacheAxiosResponse<JikanResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Manga with full information by its ID
   * @param mal_id The Manga ID
   * @returns A JikanUniqueResponse with Manga data
   */
  public async getMangaFullById(mal_id: number): Promise<JikanUniqueResponse<Manga>> {
    return new Promise<JikanUniqueResponse<Manga>>((resolve, reject) => {
      this.api
        .get<JikanUniqueResponse<Manga>>(`${MangaEndpoints.MangaFullById.replace('{id}', String(mal_id))}`)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Manga by its ID
   * @param mal_id The Manga ID
   * @returns A JikanUniqueResponse with Manga data
   */
  public async getMangaById(mal_id: number): Promise<JikanUniqueResponse<Manga>> {
    return new Promise<JikanUniqueResponse<Manga>>((resolve, reject) => {
      this.api
        .get<JikanUniqueResponse<Manga>>(`${MangaEndpoints.MangaById.replace('{id}', String(mal_id))}`)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
