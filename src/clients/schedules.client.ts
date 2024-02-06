import { AxiosError } from 'axios';
import { CacheAxiosResponse } from 'axios-cache-interceptor';
import { SchedulesEndpoints } from '../constants/endpoints/schedules.endpoints';
import { Anime, JikanResponse, SchedulesParams } from '../models';
import { BaseClient } from './base.client';

/**
 * **Schedules Client**
 *
 * Client used to access the Schedules Endpoints
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class SchedulesClient extends BaseClient {
  /**
   * Returns weekly schedule
   * @param searchParams Filter parameters
   * @returns JikanResponse with Anime array data
   */
  public async getSchedules(
    searchParams?: Partial<SchedulesParams>
  ): Promise<JikanResponse<Anime[]>> {
    return new Promise<JikanResponse<Anime[]>>((resolve, reject) => {
      const endpoint = `${SchedulesEndpoints.Schedules}`;
      this.api
        .get<JikanResponse<Anime[]>>(endpoint, { params: searchParams })
        .then((response: CacheAxiosResponse<JikanResponse<Anime[]>>) =>
          resolve(response.data)
        )
        .catch((error: AxiosError<string>) => reject(error));
    });
  }
}
