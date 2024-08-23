import { SchedulesEndpoints } from '../constants/endpoints/schedules.endpoints'
import type { Anime, SchedulesParams } from '../models'
import { BaseClient } from './base.client'

/**
 * Client used to access the Schedules Endpoints.
 *
 * @see [Jikan Documentation](https://docs.api.jikan.moe/#tag/schedules)
 */
export class SchedulesClient extends BaseClient {
	/**
	 * Returns weekly schedule
	 * @param searchParams Filter parameters
	 */
	public getSchedules(searchParams?: Partial<SchedulesParams>) {
		return this.getResource<Anime[]>(
			SchedulesEndpoints.schedules,
			{},
			searchParams
		)
	}
}
