import { SchedulesEndpoints } from '../constants/endpoints/schedules.endpoints'
import type { Anime, JikanResponse, SchedulesParams } from '../models'
import { BaseClient } from './base.client'

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
	public async getSchedules(searchParams?: Partial<SchedulesParams>) {
		return this.getResource<JikanResponse<Anime[]>>(
			SchedulesEndpoints.schedules,
			{},
			searchParams
		)
	}
}
