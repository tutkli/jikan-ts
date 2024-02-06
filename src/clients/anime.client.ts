import { AnimeEndpoints } from '../constants';
import {
  Anime,
  AnimeCharacter,
  AnimeEpisode,
  AnimeEpisodeVideo,
  AnimePicture,
  AnimeSearchParams,
  AnimeStaff,
  AnimeStatistics,
  AnimeVideos,
  JikanResponse,
  Recommendation,
} from '../models';
import { BaseClient } from './base.client';

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class AnimeClient extends BaseClient {
  /**
   * Get a complete Anime resource data
   * @param id The Anime ID
   * @returns JikanResponse with Anime data
   */
  public async getAnimeFullById(id: number): Promise<JikanResponse<Anime>> {
    return this.getResource<JikanResponse<Anime>>(
      AnimeEndpoints.AnimeFullById,
      { id }
    );
  }

  /**
   * Get Anime resource data
   * @param id The Anime ID
   * @returns JikanResponse with Anime data
   */
  public async getAnimeById(id: number): Promise<JikanResponse<Anime>> {
    return this.getResource<JikanResponse<Anime>>(AnimeEndpoints.AnimeById, {
      id,
    });
  }

  /**
   * Get Characters of a specific Anime
   * @param id The Anime ID
   * @returns JikanResponse with array of AnimeCharacter data
   */
  public async getAnimeCharacters(
    id: number
  ): Promise<JikanResponse<AnimeCharacter[]>> {
    return this.getResource<JikanResponse<AnimeCharacter[]>>(
      AnimeEndpoints.AnimeCharacters,
      { id }
    );
  }

  /**
   * Get Staff of a specific Anime
   * @param id The Anime ID
   * @returns JikanResponse with array of AnimeStaff data
   */
  public async getAnimeStaff(id: number): Promise<JikanResponse<AnimeStaff[]>> {
    return this.getResource<JikanResponse<AnimeStaff[]>>(
      AnimeEndpoints.AnimeStaff,
      { id }
    );
  }

  /**
   * Get a list of all the episodes of a specific Anime
   * @param id The Anime ID
   * @param page The page number
   * @returns JikanResponse with array of AnimeEpisode data
   */
  public async getAnimeEpisodes(
    id: number,
    page = 1
  ): Promise<JikanResponse<AnimeEpisode[]>> {
    return this.getResource<JikanResponse<AnimeEpisode[]>>(
      AnimeEndpoints.AnimeEpisodes,
      { id },
      { page }
    );
  }

  /**
   * Get a single Episode of a specific Anime by its ID
   * @param anime_id The Anime ID
   * @param episode_id The Episode ID
   * @returns JikanResponse with AnimeEpisode data
   */
  public async getAnimeEpisodeById(
    anime_id: number,
    episode_id: number
  ): Promise<JikanResponse<AnimeEpisode>> {
    return this.getResource<JikanResponse<AnimeEpisode>>(
      AnimeEndpoints.AnimeEpisodeById,
      { id: anime_id, episode: episode_id }
    );
  }

  /**
   * Get Videos related to a specific Anime
   * @param id The Anime ID
   * @returns JikanResponse with AnimeVideo data
   */
  public async getAnimeVideos(id: number): Promise<JikanResponse<AnimeVideos>> {
    return this.getResource<JikanResponse<AnimeVideos>>(
      AnimeEndpoints.AnimeVideos,
      { id }
    );
  }

  /**
   * Get Episode Videos related to a specific Anime
   * @param id The Anime ID
   * @param page The page number
   * @returns JikanResponse with array of AnimeVideoEpisode data
   */
  public async getAnimeEpisodeVideos(
    id: number,
    page = 1
  ): Promise<JikanResponse<AnimeEpisodeVideo[]>> {
    return this.getResource<JikanResponse<AnimeEpisodeVideo[]>>(
      AnimeEndpoints.AnimeVideosEpisodes,
      { id },
      { page }
    );
  }

  /**
   * Get Pictures related to a specific Anime
   * @param id The Anime ID
   * @returns JikanResponse with array of AnimePicture data
   */
  public async getAnimePictures(
    id: number
  ): Promise<JikanResponse<AnimePicture[]>> {
    return this.getResource<JikanResponse<AnimePicture[]>>(
      AnimeEndpoints.AnimePictures,
      { id }
    );
  }

  /**
   * Get Statistics related to a specific Anime
   * @param id The Anime ID
   * @returns JikanResponse with AnimeStatistics data
   */
  public async getAnimeStatistics(
    id: number
  ): Promise<JikanResponse<AnimeStatistics>> {
    return this.getResource<JikanResponse<AnimeStatistics>>(
      AnimeEndpoints.AnimeStatistics,
      { id }
    );
  }

  /**
   * Get Recommendations related to a specific Anime
   * @param id The Anime ID
   * @returns JikanResponse with array of Recommendation data
   */
  public async getAnimeRecommendations(
    id: number
  ): Promise<JikanResponse<Recommendation[]>> {
    return this.getResource<JikanResponse<Recommendation[]>>(
      AnimeEndpoints.AnimeRecommendations,
      { id }
    );
  }

  /**
   * Get all the Animes within the given filter. Returns all the Animes if no filters are given.
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getAnimeSearch(
    searchParams?: Partial<AnimeSearchParams>
  ): Promise<JikanResponse<Anime[]>> {
    return this.getResource<JikanResponse<Anime[]>>(
      AnimeEndpoints.AnimeSearch,
      {},
      searchParams
    );
  }
}
