import { AxiosError } from 'axios';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { SeasonsEndpoints } from '../constants';
import {
  Anime,
  AnimeSeason,
  JikanResponse,
  JikanSeasonsParams,
  SeasonNowParams,
  SeasonsListData,
} from '../models';
import { BaseClient } from './base.client';

/**
 * **Seasons Client**
 *
 * Client used to access the Seasons Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class SeasonsClient extends BaseClient {
  /**
   * Get the seasonal anime by year and season
   * @param year Season year
   * @param season Season value
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeason(
    year: number,
    season: AnimeSeason,
    searchParams?: Partial<JikanSeasonsParams>
  ): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = this.replacePathParams(SeasonsEndpoints.Season, {
        year: year,
        season: season,
      });
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) =>
          resolve(response.data)
        )
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get current seasonal anime
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeasonNow(
    searchParams?: Partial<SeasonNowParams>
  ): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${SeasonsEndpoints.SeasonNow}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) =>
          resolve(response.data)
        )
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get available list of seasons
   * @returns JikanResponse with Seasons array data
   */
  public async getSeasonsList(): Promise<JikanResponse<SeasonsListData[]>> {
    return new Promise<JikanResponse<SeasonsListData[]>>((resolve, reject) => {
      const endpoint = `${SeasonsEndpoints.SeasonsList}`;
      this.api
        .get<JikanResponse<SeasonsListData[]>>(endpoint)
        .then(
          (response: CacheAxiosResponse<JikanResponse<SeasonsListData[]>>) =>
            resolve(response.data)
        )
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get upcoming season's anime
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeasonUpcoming(
    searchParams?: Partial<JikanSeasonsParams>
  ): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${SeasonsEndpoints.SeasonUpcoming}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) =>
          resolve(response.data)
        )
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
