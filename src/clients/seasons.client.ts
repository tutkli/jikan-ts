import { BaseClient, ClientArgs } from './base.client';
import { Anime, AnimeSeason, JikanResponse } from '../models';
import { SeasonsEndpoints } from '../constants';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { AxiosError } from 'axios';
import { JikanSeasonsParams, SeasonNowParams } from '../models/Params/seasons-params.model';
import { SeasonsListData } from '../models/Common/seasons-list.model';

/**
 * **Seasons Client**
 *
 * Client used to access the Seasons Endpoints
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class SeasonsClient extends BaseClient {
  /**
   * @argument clientOptions Options for the client.
   */
  constructor(clientOptions?: Partial<ClientArgs>) {
    super(clientOptions);
  }

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
      const endpoint = `${SeasonsEndpoints.Season.replace('{year}', String(year)).replace('{season}', season)}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get current seasonal anime
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeasonNow(searchParams?: Partial<SeasonNowParams>): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${SeasonsEndpoints.SeasonNow}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) => resolve(response.data))
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
        .then((response: CacheAxiosResponse<JikanResponse<SeasonsListData[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }

  /**
   * Get upcoming season's anime
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeasonUpcoming(searchParams?: Partial<JikanSeasonsParams>): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${SeasonsEndpoints.SeasonUpcoming}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) => resolve(response.data))
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
