import type { AxiosError, AxiosInstance } from 'axios'
import type {
	AxiosCacheInstance,
	CacheAxiosResponse,
	CacheOptions,
	InternalCacheRequestConfig
} from 'axios-cache-interceptor'
import { getAxiosCacheInstance } from '../config/axios.config'
import {
	handleRequest,
	handleRequestError,
	handleResponse,
	handleResponseError
} from '../config/logging.config'
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
	 * **Axios Cache Options**
	 * Options for cache.
	 * @see https://axios-cache-interceptor.js.org/#/pages/configuration
	 */
	cacheOptions: Partial<CacheOptions>
	/**
	 * **Axios Instance**
	 * The ability to build your own axios instance if you need it
	 */
	axiosInstance?: AxiosInstance | AxiosCacheInstance
}

/**
 * **Base Client**
 *
 * This client is responsible for creating an Axios Instance and the cache and logging configurations
 */
export abstract class BaseClient {
	private api: AxiosCacheInstance

	constructor(clientOptions: Partial<ClientArgs> = {}) {
		this.api = getAxiosCacheInstance(
			clientOptions.axiosInstance,
			clientOptions.cacheOptions
		)

		if (clientOptions.enableLogging) {
			this.addLoggingInterceptors()
		}
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

	private addLoggingInterceptors(): void {
		this.api.interceptors.request.use(
			(config: InternalCacheRequestConfig) => handleRequest(config),
			(error: AxiosError<string>) => handleRequestError(error)
		)

		this.api.interceptors.response.use(
			(response: CacheAxiosResponse) => handleResponse(response),
			(error: AxiosError<string>) => handleResponseError(error)
		)
	}
}
