import { BaseClient, ClientArgs } from './base.client';
import { MangaEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import {
  CommonCharacter,
  JikanImages,
  JikanResponse,
  Manga,
  MangaSearchParams,
  MangaStatistics,
  Recommendation,
} from '../models';

/**
 * **Manga Client**
 *
 * Client used to access the Manga Endpoints:
 * - [MangaSearch](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangasearch-manga)
 * - [MangaFullById](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangafullbyid-manga-id-full)
 * - [MangaById](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangabyid-manga-id)
 * - [MangaCharacters](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangacharacters-manga-id-characters)
 * - [MangaPictures](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangapictures-manga-id-pictures)
 * - [MangaStatistics](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangastatistics-manga-id-statistics)
 * - [MangaRecommendations](https://tutkli.github.io/jikan-ts-docs/clients/manga-client.html#getmangarecommendations-manga-id-recommendations)
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
   * @returns JikanResponse with Manga array data
   */
  public async getMangaSearch(searchParams?: MangaSearchParams): Promise<JikanResponse<Manga[]>> {
    return new Promise<JikanResponse<Manga[]>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaSearch}`;
      this.api
        .get<JikanResponse<Manga[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Manga[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Manga with full information by its ID
   * @param mal_id The Manga ID
   * @returns JikanResponse with Manga data
   */
  public async getMangaFullById(mal_id: number): Promise<JikanResponse<Manga>> {
    return new Promise<JikanResponse<Manga>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaFullById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Manga>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a Manga by its ID
   * @param mal_id The Manga ID
   * @returns JikanResponse with Manga data
   */
  public async getMangaById(mal_id: number): Promise<JikanResponse<Manga>> {
    return new Promise<JikanResponse<Manga>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Manga>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Manga>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Characters of a specific Manga
   * @param mal_id The Manga ID
   * @returns JikanResponse with CommonCharacter array data
   */
  public async getMangaCharacters(mal_id: number): Promise<JikanResponse<CommonCharacter[]>> {
    return new Promise<JikanResponse<CommonCharacter[]>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaCharacters.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<CommonCharacter[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<CommonCharacter[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Pictures related to a specific Manga
   * @param mal_id The Manga ID
   * @returns JikanResponse with JikanImages array data
   */
  public async getMangaPictures(mal_id: number): Promise<JikanResponse<JikanImages[]>> {
    return new Promise<JikanResponse<JikanImages[]>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaPictures.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<JikanImages[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<JikanImages[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Statistics related to a specific Manga
   * @param mal_id The Manga ID
   * @returns JikanResponse with MangaStatistics data
   */
  public async getMangaStatistics(mal_id: number): Promise<JikanResponse<MangaStatistics>> {
    return new Promise<JikanResponse<MangaStatistics>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaStatistics.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<MangaStatistics>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<MangaStatistics>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Recommendations related to a specific Manga
   * @param mal_id The Manga ID
   * @returns JikanResponse with Recommendation array data
   */
  public async getMangaRecommendations(mal_id: number): Promise<JikanResponse<Recommendation[]>> {
    return new Promise<JikanResponse<Recommendation[]>>((resolve, reject) => {
      const endpoint = `${MangaEndpoints.MangaRecommendations.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Recommendation[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Recommendation[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
