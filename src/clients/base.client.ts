import xior, { type XiorInstance } from 'xior'
import { BaseURL } from '../constants'
import type { JikanResponse } from '../models'

/**
 * **Client Args**
 *
 * Used to pass optional configuration for logging and cache to the clients.
 */
export interface ClientArgs {
	/**
	 * **Base URL**
	 * Location of the JikanAPI. Leave empty to use the official JikanAPI instance.
	 */
	baseURL: string
}

/**
 * **Base Client**
 *
 * This client is responsible for creating an Axios Instance and the cache and logging configurations
 */
export abstract class BaseClient {
	private api: XiorInstance

	constructor(clientOptions: Partial<ClientArgs> = {}) {
		this.api = xior.create({
			baseURL: clientOptions.baseURL ?? BaseURL,
			headers: {
				'Content-Type': 'application/json'
			}
		})
	}

	protected async getResource<T>(
		endpoint: string,
		pathParams: { [key in string]: unknown } = {},
		params: { [key in string]: unknown } = {}
	): Promise<JikanResponse<T>> {
		return (
			await this.api.get<JikanResponse<T>>(
				this.replacePathParams(endpoint, pathParams),
				{
					params
				}
			)
		).data
	}

	private replacePathParams(
		path: string,
		params: { [key in string]: unknown }
	): string {
		let endpoint = path
		for (const param of Object.keys(params)) {
			if (!RegExp(`{${param}}`).exec(endpoint))
				throw new Error(`Path does not contain "${param}" parameter.`)
			endpoint = endpoint.replace(`{${param}}`, String(params[param]))
		}
		return endpoint
	}
}
