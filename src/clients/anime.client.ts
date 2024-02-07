import { AnimeEndpoints } from "../constants";
import {
  Anime,
  AnimeCharacter,
  AnimeEpisode,
  AnimeEpisodeVideo,
  AnimeForum,
  AnimeForumFilter,
  AnimePicture,
  AnimeSearchParams,
  AnimeStaff,
  AnimeStatistics,
  AnimeVideos,
  JikanMoreInfo,
  JikanNews,
  JikanRelation,
  JikanResponse,
  Recommendation
} from "../models";
import { BaseClient } from "./base.client";

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class AnimeClient extends BaseClient {
  /**
   * Get complete anime resource data
   * @param id anime id
   */
  public async getAnimeFullById(id: number): Promise<JikanResponse<Anime>> {
    return this.getResource<JikanResponse<Anime>>(
      AnimeEndpoints.AnimeFullById,
      { id },
    );
  }

  /**
   * Get anime resource
   * @param id anime id
   */
  public async getAnimeById(id: number): Promise<JikanResponse<Anime>> {
    return this.getResource<JikanResponse<Anime>>(AnimeEndpoints.AnimeById, {
      id,
    });
  }

  /**
   * Get characters of a specific anime
   * @param id anime id
   */
  public async getAnimeCharacters(
    id: number,
  ): Promise<JikanResponse<AnimeCharacter[]>> {
    return this.getResource<JikanResponse<AnimeCharacter[]>>(
      AnimeEndpoints.AnimeCharacters,
      { id },
    );
  }

  /**
   * Get staff of a specific Anime
   * @param id anime id
   */
  public async getAnimeStaff(id: number): Promise<JikanResponse<AnimeStaff[]>> {
    return this.getResource<JikanResponse<AnimeStaff[]>>(
      AnimeEndpoints.AnimeStaff,
      { id },
    );
  }

  /**
   * Get a list of all the episodes of a specific anime
   * @param id anime id
   * @param page page number
   */
  public async getAnimeEpisodes(
    id: number,
    page = 1,
  ): Promise<JikanResponse<AnimeEpisode[]>> {
    return this.getResource<JikanResponse<AnimeEpisode[]>>(
      AnimeEndpoints.AnimeEpisodes,
      { id },
      { page },
    );
  }

  /**
   * Get a single episode of a specific anime by its id
   * @param anime_id anime id
   * @param episode_id episode id
   */
  public async getAnimeEpisodeById(
    anime_id: number,
    episode_id: number,
  ): Promise<JikanResponse<AnimeEpisode>> {
    return this.getResource<JikanResponse<AnimeEpisode>>(
      AnimeEndpoints.AnimeEpisodeById,
      { id: anime_id, episode: episode_id },
    );
  }

  /**
   * Get a list of news articles related to the anime
   * @param id anime id
   * @param page page number
   */
  public async getAnimeNews(
    id: number,
    page: number,
  ): Promise<JikanResponse<JikanNews[]>> {
    return this.getResource<JikanResponse<JikanNews[]>>(
      AnimeEndpoints.AnimeNews,
      { id },
      { page },
    );
  }

  /**
   * Get a list of forum topics related to the anime
   * @param id anime id
   * @param filter forum filter
   */
  public async getAnimeForum(
    id: number,
    filter?: AnimeForumFilter,
  ): Promise<JikanResponse<AnimeForum[]>> {
    return this.getResource<JikanResponse<AnimeForum[]>>(
      AnimeEndpoints.AnimeNews,
      { id },
      filter ? { filter } : undefined,
    );
  }

  /**
   * Get videos related to the anime
   * @param id anime id
   */
  public async getAnimeVideos(id: number): Promise<JikanResponse<AnimeVideos>> {
    return this.getResource<JikanResponse<AnimeVideos>>(
      AnimeEndpoints.AnimeVideos,
      { id },
    );
  }

  /**
   * Get episode videos related to the anime
   * @param id anime id
   * @param page page number
   */
  public async getAnimeEpisodeVideos(
    id: number,
    page = 1,
  ): Promise<JikanResponse<AnimeEpisodeVideo[]>> {
    return this.getResource<JikanResponse<AnimeEpisodeVideo[]>>(
      AnimeEndpoints.AnimeVideosEpisodes,
      { id },
      { page },
    );
  }

  /**
   * Get pictures related to the Anime
   * @param id anime id
   */
  public async getAnimePictures(
    id: number,
  ): Promise<JikanResponse<AnimePicture[]>> {
    return this.getResource<JikanResponse<AnimePicture[]>>(
      AnimeEndpoints.AnimePictures,
      { id },
    );
  }

  /**
   * Get statistics related to the Anime
   * @param id anime id
   */
  public async getAnimeStatistics(
    id: number,
  ): Promise<JikanResponse<AnimeStatistics>> {
    return this.getResource<JikanResponse<AnimeStatistics>>(
      AnimeEndpoints.AnimeStatistics,
      { id },
    );
  }

  /**
   * Get more info related to the anime
   * @param id anime id
   */
  public async getAnimeMoreInfo(
    id: number,
  ): Promise<JikanResponse<JikanMoreInfo>> {
    return this.getResource<JikanResponse<JikanMoreInfo>>(
      AnimeEndpoints.AnimeMoreInfo,
      { id },
    );
  }

  /**
   * Get recommendations based on the anime
   * @param id anime id
   */
  public async getAnimeRecommendations(
    id: number,
  ): Promise<JikanResponse<Recommendation[]>> {
    return this.getResource<JikanResponse<Recommendation[]>>(
      AnimeEndpoints.AnimeRecommendations,
      { id },
    );
  }

  /**
   * Get anime relations
   * @param id anime id
   */
  public async getAnimeRelations(
    id: number,
  ): Promise<JikanResponse<JikanRelation[]>> {
    return this.getResource<JikanResponse<JikanRelation[]>>(
      AnimeEndpoints.AnimeRelations,
      { id },
    );
  }

  /**
   * Get all the Animes within the given filter. Returns all the Animes if no filters are given.
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getAnimeSearch(
    searchParams?: Partial<AnimeSearchParams>,
  ): Promise<JikanResponse<Anime[]>> {
    return this.getResource<JikanResponse<Anime[]>>(
      AnimeEndpoints.AnimeSearch,
      {},
      searchParams,
    );
  }
}
