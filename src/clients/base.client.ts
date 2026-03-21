import type { KyInstance } from 'ky'
import type { CacheOptions, ResponseCache } from '../config/cache'
import { createKyInstance } from '../config/ky.config'
import type { JikanResponse } from '../models'

/**
 * **Client Args**
 *
 * Used to pass optional configuration for logging and cache to the clients.
 */
export interface ClientArgs {
	/**
	 * **EnableLogging**
	 * Enables logging request responses.
	 */
	enableLogging: boolean
	/**
	 * **Cache Options**
	 * Options for cache.
	 */
	cacheOptions: Partial<CacheOptions>
	/**
	 * **Ky Instance**
	 * The ability to build your own ky instance if you need it
	 */
	kyInstance?: KyInstance
	/** @internal Used to share cache between JikanClient sub-clients */
	_cache?: ResponseCache
}

/**
 * **Base Client**
 *
 * This client is responsible for creating a Ky Instance and the cache and logging configurations
 */
export abstract class BaseClient {
	private api: KyInstance
	private cache: ResponseCache

	constructor(clientOptions: Partial<ClientArgs> = {}) {
		if (clientOptions._cache && clientOptions.kyInstance) {
			this.api = clientOptions.kyInstance
			this.cache = clientOptions._cache
		} else {
			const { api, cache } = createKyInstance({
				enableLogging: clientOptions.enableLogging,
				cacheOptions: clientOptions.cacheOptions,
				kyInstance: clientOptions.kyInstance
			})
			this.api = api
			this.cache = cache
		}
	}

	protected async getResource<T>(
		endpoint: string,
		pathParams: { [key in string]: unknown } = {},
		params: { [key in string]: unknown } = {}
	): Promise<JikanResponse<T>> {
		const path = this.replacePathParams(endpoint, pathParams)
		const cacheKey = this.buildCacheKey(path, params)

		const cached = this.cache.get<JikanResponse<T>>(cacheKey)
		if (cached) return cached

		const cleanPath = path.startsWith('/') ? path.slice(1) : path
		const searchParams = this.cleanParams(params)

		const result = await this.api
			.get(cleanPath, {
				searchParams:
					Object.keys(searchParams).length > 0 ? searchParams : undefined
			})
			.json<JikanResponse<T>>()

		this.cache.set(cacheKey, result)
		return result
	}

	private buildCacheKey(
		path: string,
		params: { [key in string]: unknown }
	): string {
		const sorted = Object.entries(params)
			.filter(([, v]) => v !== undefined)
			.sort(([a], [b]) => a.localeCompare(b))
			.map(([k, v]) => `${k}=${v}`)
			.join('&')
		return sorted ? `${path}?${sorted}` : path
	}

	private cleanParams(
		params: { [key in string]: unknown }
	): Record<string, string | number | boolean> {
		return Object.fromEntries(
			Object.entries(params).filter(([, v]) => v !== undefined)
		) as Record<string, string | number | boolean>
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
