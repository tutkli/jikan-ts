import { BaseClient, ClientArgs } from './base.client';
import { AnimeEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import { Anime, JikanResponse, JikanUniqueResponse } from '../models';

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 * - [Animes](https://docs.api.jikan.moe/#tag/anime)
 * - [TopAnimes](https://docs.api.jikan.moe/#tag/top/operation/getTopAnime)
 * - [AnimeFullById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById)
 * - [AnimeById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeById)
 */
export class AnimeClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  /**
   * Get all the Animes
   * @returns A JikanResponse with Anime data
   */
  public async getAnimes(): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      this.api
        .get<JikanResponse<Anime>>(`${AnimeEndpoints.Anime}`)
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get the top Animes
   * @returns A JikanResponse with Anime data
   */
  public async getTopAnimes(): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      this.api
        .get<JikanResponse<Anime>>(`${AnimeEndpoints.TopAnime}`)
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get an Anime with full information by its ID
   * @param mal_id The Anime ID
   * @returns A JikanUniqueResponse with Anime data
   */
  public async getAnimeFullById(mal_id: number): Promise<JikanUniqueResponse<Anime>> {
    return new Promise<JikanUniqueResponse<Anime>>((resolve, reject) => {
      this.api
        .get<JikanUniqueResponse<Anime>>(`${AnimeEndpoints.AnimeFullById.replace('{id}', String(mal_id))}`)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get an Anime by its ID
   * @param mal_id The Anime ID
   * @returns A JikanUniqueResponse with Anime data
   */
  public async getAnimeById(mal_id: number): Promise<JikanUniqueResponse<Anime>> {
    return new Promise<JikanUniqueResponse<Anime>>((resolve, reject) => {
      this.api
        .get<JikanUniqueResponse<Anime>>(`${AnimeEndpoints.AnimeById.replace('{id}', String(mal_id))}`)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
