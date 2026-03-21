import { ProducersEndpoints } from '../endpoints/producers.endpoints'
import type {
	JikanNamedResource,
	Producer,
	ProducerFull,
	ProducersSearchParams
} from '../models'
import { BaseClient } from './base.client'

/**
 * **Producers Client**
 *
 * Client used to access the Producers Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class ProducersClient extends BaseClient {
	/**
	 * Get complete producer data
	 * @param id Producer ID
	 */
	public getProducerFullById(id: number) {
		return this.getResource<ProducerFull>(ProducersEndpoints.producerFullById, {
			id
		})
	}

	/**
	 * Get producer by ID
	 * @param id Producer ID
	 */
	public getProducerById(id: number) {
		return this.getResource<Producer>(ProducersEndpoints.producerById, { id })
	}

	/**
	 * Get producer external links
	 * @param id Producer ID
	 */
	public getProducerExternal(id: number) {
		return this.getResource<JikanNamedResource[]>(
			ProducersEndpoints.producerExternal,
			{ id }
		)
	}

	/**
	 * Search producers
	 * @param searchParams Search parameters
	 */
	public getProducersSearch(searchParams?: Partial<ProducersSearchParams>) {
		return this.getResource<Producer[]>(
			ProducersEndpoints.producersSearch,
			{},
			searchParams
		)
	}
}
