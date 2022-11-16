import { BaseClient, ClientArgs } from './base.client';
import { MangaEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import {
  CommonCharacter,
  JikanImages,
  JikanResponse,
  JikanUniqueResponse,
  Manga,
  MangaSearchParams,
  MangaStatistics,
  Recommendation,
} from '../models';

/**
 * **Manga Client**
 *
 * Client used to access the Manga Endpoints:
 * - [MangaSearch](https://docs.api.jikan.moe/#tag/manga)
 * - [MangaFullById](https://docs.api.jikan.moe/#tag/manga/operation/getMangaFullById)
 * - [MangaById](https://docs.api.jikan.moe/#tag/manga/operation/getMangaById)
 * - [MangaCharacters](https://docs.api.jikan.moe/#tag/manga/operation/getMangaCharacters)
 * - [MangaPictures](https://docs.api.jikan.moe/#tag/manga/operation/getMangaPictures)
 * - [MangaStatistics](https://docs.api.jikan.moe/#tag/manga/operation/getMangaStatistics)
 * - [MangaRecommendations](https://docs.api.jikan.moe/#tag/manga/operation/getMangaRecommendations)
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class MangaClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  /**
   * Get all the filtered Mangas. Returns all the Mangas if no filters are given.
   * @param searchParams Filter parameters
   * @returns A JikanResponse with Manga data
   */
  public async getMangaSearch(searchParams?: MangaSearchParams): Promise<JikanResponse<Manga>> {
    return new Promise<JikanResponse<Manga>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaSearch}`;
      this.api
        .get<JikanResponse<Manga>>(endpoint, { params: searchParams })
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
      const endpoint = `${MangaEndpoints.MangaFullById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<Manga>>(endpoint)
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
      const endpoint = `${MangaEndpoints.MangaById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<Manga>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Characters of a specific Manga
   * @param mal_id The Manga ID
   * @returns A JikanResponse with CommonCharacter data
   */
  public async getMangaCharacters(mal_id: number): Promise<JikanResponse<CommonCharacter>> {
    return new Promise<JikanResponse<CommonCharacter>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaCharacters.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<CommonCharacter>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<CommonCharacter>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Pictures related to a specific Manga
   * @param mal_id The Manga ID
   * @returns A JikanResponse with JikanImages data
   */
  public async getMangaPictures(mal_id: number): Promise<JikanResponse<JikanImages>> {
    return new Promise<JikanResponse<JikanImages>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaPictures.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<JikanImages>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<JikanImages>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Statistics related to a specific Manga
   * @param mal_id The Manga ID
   * @returns A JikanUniqueResponse with MangaStatistics data
   */
  public async getAnimeStatistics(mal_id: number): Promise<JikanUniqueResponse<MangaStatistics>> {
    return new Promise<JikanUniqueResponse<MangaStatistics>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaStatistics.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<MangaStatistics>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<MangaStatistics>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Recommendations related to a specific Manga
   * @param mal_id The Manga ID
   * @returns A JikanResponse with Recommendation data
   */
  public async getMangaRecommendation(mal_id: number): Promise<JikanResponse<Recommendation>> {
    return new Promise<JikanResponse<Recommendation>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaRecommendations.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Recommendation>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Recommendation>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
