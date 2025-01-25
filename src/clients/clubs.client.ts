import { ClubsEndpoints } from '../endpoints/clubs.enpoints'
import type { ClubSearchParams } from '../models/clubs/clubs-params.model'
import type {
	Club,
	ClubMember,
	ClubRelations,
	ClubStaff
} from '../models/clubs/clubs.model'
import { BaseClient } from './base.client'

/**
 * **Club Client**
 *
 * Client used to access the Club Endpoints.
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class ClubsClient extends BaseClient {
	/**
	 * @returns Club resource
	 * @param id Club ID
	 */
	public getClubsById(id: number) {
		return this.getResource<Club>(ClubsEndpoints.clubById, { id })
	}

	/**
	 * @returns Club members resource
	 * @param id Club ID
	 * @param params
	 */
	public getClubMembers(id: number, params: Partial<{ page: number }> = {}) {
		return this.getResource<ClubMember[]>(
			ClubsEndpoints.clubMembers,
			{ id },
			params
		)
	}

	/**
	 * @returns Club staff
	 * @param id Club ID
	 */
	public getClubStaff(id: number) {
		return this.getResource<ClubStaff[]>(ClubsEndpoints.clubStaff, { id })
	}

	/**
	 * @returns Club relations
	 * @param id Club ID
	 */
	public getClubRelations(id: number) {
		return this.getResource<ClubRelations>(ClubsEndpoints.clubRelations, { id })
	}

	/**
	 * @returns Search results for Clubs
	 * @param params
	 */
	public getClubSearch(params: Partial<ClubSearchParams> = {}) {
		return this.getResource<Club[]>(ClubsEndpoints.clubSearch, {}, params)
	}
}
