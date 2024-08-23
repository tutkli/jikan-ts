import xior, { type XiorInstance } from 'xior'
import cachePlugin, { type XiorCacheOptions } from 'xior/plugins/cache'
import { JikanURL } from '../constants'
import type { JikanResponse } from '../models'

/**
 * **Client Args**
 *
 * Used to pass optional configuration for logging and cache to the clients.
 */
export interface ClientArgs {
	/**
	 * **Xior Cache Options**
	 * Options for cache.
	 * @see https://github.com/suhaotian/xior?tab=readme-ov-file#cache-plugin
	 */
	cacheOptions: XiorCacheOptions
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
			baseURL: JikanURL,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.api.plugins.use(cachePlugin(clientOptions.cacheOptions))
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
		return Object.keys(params).reduce((str, param) => {
			if (!RegExp(`{${param}}`).exec(str))
				throw new Error(`Path does not contain "${param}" parameter.`)
			return str.replace(`{${param}}`, String(params[param]))
		}, path)
	}
}
