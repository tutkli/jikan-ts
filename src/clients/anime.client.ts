import { BaseClient, ClientArgs } from './base.client';
import { AnimeEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import {
  Anime,
  AnimeCharacter,
  AnimeEpisode,
  AnimePicture,
  AnimeStaff,
  AnimeStatistics,
  AnimeVideo,
  AnimeVideoEpisode,
  JikanResponse,
  JikanUniqueResponse,
  Recommendation,
} from '../models';
import { AnimeSearchParams } from '../models/Params';

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 * - [AnimeSearch](https://docs.api.jikan.moe/#tag/anime)
 * - [AnimeFullById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeFullById)
 * - [AnimeById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeById)
 * - [AnimeCharacters](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeCharacters)
 * - [AnimeStaff](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStaff)
 * - [AnimeEpisodes](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodes)
 * - [AnimeEpisodeById](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeEpisodeById)
 * - [AnimeVideos](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeVideos)
 * - [AnimeVideosEpisodes](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeVideosEpisodes)
 * - [AnimePictures](https://docs.api.jikan.moe/#tag/anime/operation/getAnimePictures)
 * - [AnimeStatistics](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeStatistics)
 * - [AnimeRecommendations](https://docs.api.jikan.moe/#tag/anime/operation/getAnimeRecommendations)
 *
 * See also: [JikanAPI](https://docs.api.jikan.moe/)
 */
export class AnimeClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);
  }

  /**
   * Get all the filtered Animes. Returns all the Animes if no filters are given.
   * @param searchParams Filter parameters
   * @returns A JikanResponse with Anime data
   */
  public async getAnimeSearch(searchParams?: AnimeSearchParams): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeSearch}`;
      this.api
        .get<JikanResponse<Anime>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a complete Anime resource data
   * @param mal_id The Anime ID
   * @returns A JikanUniqueResponse with Anime data
   */
  public async getAnimeFullById(mal_id: number): Promise<JikanUniqueResponse<Anime>> {
    return new Promise<JikanUniqueResponse<Anime>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeFullById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<Anime>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Anime resource data
   * @param mal_id The Anime ID
   * @returns A JikanUniqueResponse with Anime data
   */
  public async getAnimeById(mal_id: number): Promise<JikanUniqueResponse<Anime>> {
    return new Promise<JikanUniqueResponse<Anime>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<Anime>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Characters of a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanResponse with AnimeCharacter data
   */
  public async getAnimeCharacters(mal_id: number): Promise<JikanResponse<AnimeCharacter>> {
    return new Promise<JikanResponse<AnimeCharacter>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeCharacters.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeCharacter>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeCharacter>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Staff of a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanResponse with AnimeStaff data
   */
  public async getAnimeStaff(mal_id: number): Promise<JikanResponse<AnimeStaff>> {
    return new Promise<JikanResponse<AnimeStaff>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeStaff.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeStaff>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeStaff>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a list of all the episodes of a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanResponse with AnimeEpisode data
   */
  public async getAnimeEpisodes(mal_id: number): Promise<JikanResponse<AnimeEpisode>> {
    return new Promise<JikanResponse<AnimeEpisode>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeEpisodes.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeEpisode>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisode>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a single Episode of a specific Anime by its ID
   * @param anime_mal_id The Anime ID
   * @param episode_mal_id The Episode ID
   * @returns A JikanUniqueResponse with AnimeEpisode data
   */
  public async getAnimeEpisodeById(
    anime_mal_id: number,
    episode_mal_id: number
  ): Promise<JikanUniqueResponse<AnimeEpisode>> {
    return new Promise<JikanUniqueResponse<AnimeEpisode>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeEpisodeById.replace('{id}', String(anime_mal_id)).replace(
        '{episode}',
        String(episode_mal_id)
      )}`;
      this.api
        .get<JikanUniqueResponse<AnimeEpisode>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<AnimeEpisode>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Videos related to a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanUniqueResponse with AnimeVideo data
   */
  public async getAnimeVideos(mal_id: number): Promise<JikanUniqueResponse<AnimeVideo>> {
    return new Promise<JikanUniqueResponse<AnimeVideo>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeVideos.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<AnimeVideo>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<AnimeVideo>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Episode Videos related to a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanResponse with AnimeVideoEpisode data
   */
  public async getAnimeVideosEpisode(mal_id: number): Promise<JikanResponse<AnimeVideoEpisode>> {
    return new Promise<JikanResponse<AnimeVideoEpisode>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeVideosEpisodes.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeVideoEpisode>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeVideoEpisode>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Pictures related to a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanResponse with AnimePicture data
   */
  public async getAnimePictures(mal_id: number): Promise<JikanResponse<AnimePicture>> {
    return new Promise<JikanResponse<AnimePicture>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimePictures.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimePicture>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimePicture>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Statistics related to a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanUniqueResponse with AnimeStatistics data
   */
  public async getAnimeStatistics(mal_id: number): Promise<JikanUniqueResponse<AnimeStatistics>> {
    return new Promise<JikanUniqueResponse<AnimeStatistics>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeStatistics.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanUniqueResponse<AnimeStatistics>>(endpoint)
        .then((response: CacheAxiosResponse<JikanUniqueResponse<AnimeStatistics>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Recommendations related to a specific Anime
   * @param mal_id The Anime ID
   * @returns A JikanResponse with Recommendation data
   */
  public async getAnimeRecommendation(mal_id: number): Promise<JikanResponse<Recommendation>> {
    return new Promise<JikanResponse<Recommendation>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeRecommendations.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Recommendation>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Recommendation>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
