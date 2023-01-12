import { BaseClient, ClientArgs } from './base.client';
import { AnimeEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
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

/**
 * **Anime Client**
 *
 * Client used to access the Anime Endpoints:
 * - [AnimeSearch](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimesearch-anime)
 * - [AnimeFullById](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimefullbyid-anime-id-full)
 * - [AnimeById](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimebyid-anime-id)
 * - [AnimeCharacters](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimecharacters-anime-id-characters)
 * - [AnimeStaff](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimestaff-anime-id-staff)
 * - [AnimeEpisodes](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimeepisodes-anime-id-episodes)
 * - [AnimeEpisodeById](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimeepisodebyid-anime-id-episodes-episode)
 * - [AnimeVideos](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimevideos-anime-id-videos)
 * - [AnimeEpisodeVideos](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimeepisodevideos-anime-id-videos-episodes)
 * - [AnimePictures](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimepictures-anime-id-pictures)
 * - [AnimeStatistics](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimestatistics-anime-id-statistics)
 * - [AnimeRecommendations](https://tutkli.github.io/jikan-ts-docs/clients/anime-client.html#getanimerecommendations-anime-id-recommendations)
 *
 * See also: [JikanAPI](https://docs.api.jikan.moe/)
 */
export class AnimeClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: Partial<ClientArgs>) {
    super(clientOptions);
  }

  /**
   * Get all the Animes within the given filter. Returns all the Animes if no filters are given.
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getAnimeSearch(searchParams?: Partial<AnimeSearchParams>): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeSearch}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a complete Anime resource data
   * @param mal_id The Anime ID
   * @returns JikanResponse with Anime data
   */
  public async getAnimeFullById(mal_id: number): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeFullById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Anime>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Anime resource data
   * @param mal_id The Anime ID
   * @returns JikanResponse with Anime data
   */
  public async getAnimeById(mal_id: number): Promise<JikanResponse<Anime>> {
    return new Promise<JikanResponse<Anime>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeById.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Anime>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Anime>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Characters of a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeCharacter array data
   */
  public async getAnimeCharacters(mal_id: number): Promise<JikanResponse<AnimeCharacter[]>> {
    return new Promise<JikanResponse<AnimeCharacter[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeCharacters.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeCharacter[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeCharacter[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Staff of a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeStaff array data
   */
  public async getAnimeStaff(mal_id: number): Promise<JikanResponse<AnimeStaff[]>> {
    return new Promise<JikanResponse<AnimeStaff[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeStaff.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeStaff[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeStaff[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a list of all the episodes of a specific Anime
   * @param mal_id The Anime ID
   * @param page The page number
   * @returns JikanResponse with AnimeEpisode array data
   */
  public async getAnimeEpisodes(mal_id: number, page = 1): Promise<JikanResponse<AnimeEpisode[]>> {
    return new Promise<JikanResponse<AnimeEpisode[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeEpisodes.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeEpisode[]>>(endpoint, { params: { page } })
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisode[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get a single Episode of a specific Anime by its ID
   * @param anime_mal_id The Anime ID
   * @param episode_mal_id The Episode ID
   * @returns JikanResponse with AnimeEpisode data
   */
  public async getAnimeEpisodeById(anime_mal_id: number, episode_mal_id: number): Promise<JikanResponse<AnimeEpisode>> {
    return new Promise<JikanResponse<AnimeEpisode>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeEpisodeById.replace('{id}', String(anime_mal_id)).replace(
        '{episode}',
        String(episode_mal_id)
      )}`;
      this.api
        .get<JikanResponse<AnimeEpisode>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisode>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Videos related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeVideo data
   */
  public async getAnimeVideos(mal_id: number): Promise<JikanResponse<AnimeVideos>> {
    return new Promise<JikanResponse<AnimeVideos>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeVideos.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeVideos>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeVideos>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Episode Videos related to a specific Anime
   * @param mal_id The Anime ID
   * @param page The page number
   * @returns JikanResponse with AnimeVideoEpisode array data
   */
  public async getAnimeEpisodeVideos(mal_id: number, page = 1): Promise<JikanResponse<AnimeEpisodeVideo[]>> {
    return new Promise<JikanResponse<AnimeEpisodeVideo[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeVideosEpisodes.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeEpisodeVideo[]>>(endpoint, { params: { page } })
        .then((response: CacheAxiosResponse<JikanResponse<AnimeEpisodeVideo[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Pictures related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimePicture array data
   */
  public async getAnimePictures(mal_id: number): Promise<JikanResponse<AnimePicture[]>> {
    return new Promise<JikanResponse<AnimePicture[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimePictures.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimePicture[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimePicture[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Statistics related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with AnimeStatistics data
   */
  public async getAnimeStatistics(mal_id: number): Promise<JikanResponse<AnimeStatistics>> {
    return new Promise<JikanResponse<AnimeStatistics>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeStatistics.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<AnimeStatistics>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<AnimeStatistics>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get Recommendations related to a specific Anime
   * @param mal_id The Anime ID
   * @returns JikanResponse with Recommendation array data
   */
  public async getAnimeRecommendations(mal_id: number): Promise<JikanResponse<Recommendation[]>> {
    return new Promise<JikanResponse<Recommendation[]>>((resolve, reject) => {
      const endpoint = `${AnimeEndpoints.AnimeRecommendations.replace('{id}', String(mal_id))}`;
      this.api
        .get<JikanResponse<Recommendation[]>>(endpoint)
        .then((response: CacheAxiosResponse<JikanResponse<Recommendation[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
