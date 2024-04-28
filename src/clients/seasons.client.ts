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
    searchParams?: Partial<JikanSeasonsParams>,
  ): Promise<JikanResponse<Anime[]>> {
    return this.getResource<JikanResponse<Anime[]>>(
      SeasonsEndpoints.season,
      { year, season },
      searchParams,
    );
  }

  /**
   * Get current seasonal anime
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeasonNow(
    searchParams?: Partial<SeasonNowParams>,
  ): Promise<JikanResponse<Anime[]>> {
    return this.getResource<JikanResponse<Anime[]>>(
      SeasonsEndpoints.seasonNow,
      {},
      searchParams,
    );
  }

  /**
   * Get available list of seasons
   * @returns JikanResponse with Seasons array data
   */
  public async getSeasonsList(): Promise<JikanResponse<SeasonsListData[]>> {
    return this.getResource<JikanResponse<SeasonsListData[]>>(
      SeasonsEndpoints.seasonsList,
    );
  }

  /**
   * Get upcoming season's anime
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSeasonUpcoming(
    searchParams?: Partial<JikanSeasonsParams>,
  ): Promise<JikanResponse<Anime[]>> {
    return this.getResource<JikanResponse<Anime[]>>(
      SeasonsEndpoints.seasonUpcoming,
      {},
      searchParams,
    );
  }
}
