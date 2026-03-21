import type { KyInstance } from 'ky'
import ky from 'ky'
import { BASE_URL } from '../constants/base.const'
import { type CacheOptions, ResponseCache } from './cache'
import {
	loggingAfterResponse,
	loggingBeforeError,
	loggingBeforeRequest
} from './logging.config'

export interface KyClientConfig {
	enableLogging?: boolean
	cacheOptions?: Partial<CacheOptions>
	kyInstance?: KyInstance
}

export function createKyInstance(config: KyClientConfig = {}): {
	api: KyInstance
	cache: ResponseCache
} {
	const cache = new ResponseCache(config.cacheOptions)

	if (config.kyInstance) {
		return { api: config.kyInstance, cache }
	}

	const api = ky.create({
		prefixUrl: BASE_URL,
		headers: { 'Content-Type': 'application/json' },
		retry: 0,
		hooks: config.enableLogging
			? {
					beforeRequest: [loggingBeforeRequest],
					afterResponse: [loggingAfterResponse],
					beforeError: [loggingBeforeError]
				}
			: {}
	})

	return { api, cache }
}
