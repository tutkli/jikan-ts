export interface CacheOptions {
	/** TTL in milliseconds. Default: 5 minutes */
	ttl: number
}

export class ResponseCache {
	private cache = new Map<string, { data: unknown; expiry: number }>()
	private ttl: number

	constructor(options: Partial<CacheOptions> = {}) {
		this.ttl = options.ttl ?? 5 * 60 * 1000
	}

	get<T>(key: string): T | undefined {
		const entry = this.cache.get(key)
		if (!entry) return undefined
		if (Date.now() > entry.expiry) {
			this.cache.delete(key)
			return undefined
		}
		return entry.data as T
	}

	set(key: string, data: unknown): void {
		this.cache.set(key, { data, expiry: Date.now() + this.ttl })
	}
}
