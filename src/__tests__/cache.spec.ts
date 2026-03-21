import { afterEach, describe, expect, it, spyOn } from 'bun:test'
import { ResponseCache } from '../config/cache'

describe('ResponseCache', () => {
	let nowSpy: ReturnType<typeof spyOn>

	afterEach(() => {
		nowSpy?.mockRestore()
	})

	it('returns undefined for missing key', () => {
		const cache = new ResponseCache()
		expect(cache.get('missing')).toBeUndefined()
	})

	it('stores and retrieves data', () => {
		const cache = new ResponseCache()
		const data = { mal_id: 1, title: 'Test' }
		cache.set('key', data)
		expect(cache.get('key')).toEqual(data)
	})

	it('returns undefined after TTL expires', () => {
		let now = 1000
		nowSpy = spyOn(Date, 'now').mockImplementation(() => now)

		const cache = new ResponseCache({ ttl: 100 })
		cache.set('key', 'value')

		now = 1101
		expect(cache.get('key')).toBeUndefined()
	})

	it('deletes expired entry on access (lazy cleanup)', () => {
		let now = 1000
		nowSpy = spyOn(Date, 'now').mockImplementation(() => now)

		const cache = new ResponseCache({ ttl: 100 })
		cache.set('key', 'value')

		now = 1101
		cache.get('key')

		// Even if we roll back time, it should still be gone
		now = 1000
		expect(cache.get('key')).toBeUndefined()
	})

	it('uses 5 minute default TTL', () => {
		let now = 1000
		nowSpy = spyOn(Date, 'now').mockImplementation(() => now)

		const cache = new ResponseCache()
		cache.set('key', 'value')

		// Just before 5 minutes
		now = 1000 + 5 * 60 * 1000 - 1
		expect(cache.get('key')).toBe('value')

		// After 5 minutes
		now = 1000 + 5 * 60 * 1000 + 1
		expect(cache.get('key')).toBeUndefined()
	})

	it('respects custom TTL', () => {
		let now = 1000
		nowSpy = spyOn(Date, 'now').mockImplementation(() => now)

		const cache = new ResponseCache({ ttl: 200 })
		cache.set('key', 'value')

		now = 1150
		expect(cache.get('key')).toBe('value')

		now = 1201
		expect(cache.get('key')).toBeUndefined()
	})

	it('keeps different keys independent', () => {
		const cache = new ResponseCache()
		cache.set('a', 1)
		cache.set('b', 2)
		expect(cache.get('a')).toBe(1)
		expect(cache.get('b')).toBe(2)
	})

	it('resets expiry when overwriting a key', () => {
		let now = 1000
		nowSpy = spyOn(Date, 'now').mockImplementation(() => now)

		const cache = new ResponseCache({ ttl: 100 })
		cache.set('key', 'first')

		now = 1080
		cache.set('key', 'second')

		// 80ms after second set — would be expired from first set
		now = 1160
		expect(cache.get('key')).toBe('second')
	})
})
