import { MangaEndpoints } from '../constants';
import {
  CommonCharacter,
  JikanImages,
  JikanResponse,
  Manga,
  MangaSearchParams,
  MangaStatistics,
  Recommendation,
} from '../models';
import { BaseClient } from './base.client';

/**
 * **Manga Client**
 *
 * Client used to access the Manga Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class MangaClient extends BaseClient {
  /**
   * Get a Manga with full information by its ID
   * @param id The Manga ID
   * @returns JikanResponse with Manga data
   */
  public async getMangaFullById(id: number): Promise<JikanResponse<Manga>> {
    return this.getResource<JikanResponse<Manga>>(
      MangaEndpoints.mangaFullById,
      { id },
    );
  }

  /**
   * Get a Manga by its ID
   * @param id The Manga ID
   * @returns JikanResponse with Manga data
   */
  public async getMangaById(id: number): Promise<JikanResponse<Manga>> {
    return this.getResource<JikanResponse<Manga>>(MangaEndpoints.mangaById, {
      id,
    });
  }

  /**
   * Get Characters of a specific Manga
   * @param id The Manga ID
   * @returns JikanResponse with CommonCharacter array data
   */
  public async getMangaCharacters(
    id: number,
  ): Promise<JikanResponse<CommonCharacter[]>> {
    return this.getResource<JikanResponse<CommonCharacter[]>>(
      MangaEndpoints.mangaCharacters,
      { id },
    );
  }

  /**
   * Get Pictures related to a specific Manga
   * @param id The Manga ID
   * @returns JikanResponse with JikanImages array data
   */
  public async getMangaPictures(
    id: number,
  ): Promise<JikanResponse<JikanImages[]>> {
    return this.getResource<JikanResponse<JikanImages[]>>(
      MangaEndpoints.mangaPictures,
      { id },
    );
  }

  /**
   * Get Statistics related to a specific Manga
   * @param id The Manga ID
   * @returns JikanResponse with MangaStatistics data
   */
  public async getMangaStatistics(
    id: number,
  ): Promise<JikanResponse<MangaStatistics>> {
    return this.getResource<JikanResponse<MangaStatistics>>(
      MangaEndpoints.mangaStatistics,
      { id },
    );
  }

  /**
   * Get Recommendations related to a specific Manga
   * @param id The Manga ID
   * @returns JikanResponse with Recommendation array data
   */
  public async getMangaRecommendations(
    id: number,
  ): Promise<JikanResponse<Recommendation[]>> {
    return this.getResource<JikanResponse<Recommendation[]>>(
      MangaEndpoints.mangaRecommendations,
      { id },
    );
  }

  /**
   * Get all the filtered Mangas. Returns all the Mangas if no filters are given.
   * @param searchParams Filter parameters
   * @returns JikanResponse with Manga array data
   */
  public async getMangaSearch(
    searchParams?: Partial<MangaSearchParams>,
  ): Promise<JikanResponse<Manga[]>> {
    return this.getResource<JikanResponse<Manga[]>>(
      MangaEndpoints.mangaSearch,
      {},
      searchParams,
    );
  }
}
