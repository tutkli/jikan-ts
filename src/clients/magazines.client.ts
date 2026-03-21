import type {
	Magazine,
	MagazineSearchParams
} from '../models/magazine/magazine.model'
import { MagazinesEndpoints } from '../endpoints/magazines.endpoints'
import { BaseClient } from './base.client'

export class MagazinesClient extends BaseClient {
	/**
	 * @returns Magazines collection
	 * @param params
	 */
	public getMagazines(params: Partial<MagazineSearchParams> = {}) {
		return this.getResource<Magazine[]>(
			MagazinesEndpoints.magazines,
			{},
			params
		)
	}
}
