import { SeasonsEndpoints } from '../constants/endpoints/seasons.endpoints'
import type {
	Anime,
	AnimeSeason,
	JikanSeasonsParams,
	SeasonNowParams,
	SeasonsListData
} from '../models'
import { BaseClient } from './base.client'

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
	 */
	public getSeason(
		year: number,
		season: AnimeSeason,
		searchParams?: Partial<JikanSeasonsParams>
	) {
		return this.getResource<Anime[]>(
			SeasonsEndpoints.season,
			{ year, season },
			searchParams
		)
	}

	/**
	 * Get current seasonal anime
	 * @param searchParams Filter parameters
	 */
	public getSeasonNow(searchParams?: Partial<SeasonNowParams>) {
		return this.getResource<Anime[]>(
			SeasonsEndpoints.seasonNow,
			{},
			searchParams
		)
	}

	/**
	 * Get available list of seasons
	 */
	public getSeasonsList() {
		return this.getResource<SeasonsListData[]>(SeasonsEndpoints.seasonsList)
	}

	/**
	 * Get upcoming season's anime
	 * @param searchParams Filter parameters
	 */
	public getSeasonUpcoming(searchParams?: Partial<JikanSeasonsParams>) {
		return this.getResource<Anime[]>(
			SeasonsEndpoints.seasonUpcoming,
			{},
			searchParams
		)
	}
}
