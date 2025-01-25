import axios, { type AxiosInstance } from 'axios'
import {
	type AxiosCacheInstance,
	type CacheOptions,
	setupCache
} from 'axios-cache-interceptor'
import { BASE_URL } from '../constants'

const isAxiosCacheInstance = (
	instance: AxiosInstance | AxiosCacheInstance
): instance is AxiosCacheInstance => {
	return 'cache' in instance.defaults
}

export const getAxiosCacheInstance = (
	axiosInstance: AxiosInstance | AxiosCacheInstance | undefined,
	cacheOptions: Partial<CacheOptions> = {}
): AxiosCacheInstance => {
	const instance =
		axiosInstance ??
		axios.create({
			baseURL: BASE_URL,
			headers: {
				'Content-Type': 'application/json'
			}
		})

	if (isAxiosCacheInstance(instance)) {
		return instance
	}

	return setupCache(instance, {
		...cacheOptions,
		cacheTakeover: false
	})
}
