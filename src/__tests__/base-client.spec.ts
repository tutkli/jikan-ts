import { beforeEach, describe, expect, it } from 'bun:test'
import { BaseClient } from '../clients/base.client'
import { ResponseCache } from '../config/cache'

const mockResponse = { data: { mal_id: 1, title: 'Test Anime' } }

interface MockKy {
	get: (...args: unknown[]) => { json: () => Promise<unknown> }
	calls: unknown[][]
}

function createMockKy(): MockKy {
	const calls: unknown[][] = []
	return {
		get(...args: unknown[]) {
			calls.push(args)
			return { json: () => Promise.resolve(mockResponse) }
		},
		calls
	}
}

class TestClient extends BaseClient {
	callGetResource<T>(
		endpoint: string,
		pathParams?: { [key in string]: unknown },
		params?: { [key in string]: unknown }
	) {
		return this.getResource<T>(endpoint, pathParams, params)
	}
}

describe('BaseClient', () => {
	let client: TestClient
	let mockKy: MockKy
	let cache: ResponseCache

	beforeEach(() => {
		mockKy = createMockKy()
		cache = new ResponseCache()
		client = new TestClient({
			kyInstance: mockKy as any,
			_cache: cache
		})
	})

	describe('path parameter interpolation', () => {
		it('replaces a single {id} parameter', async () => {
			await client.callGetResource('/anime/{id}', { id: 1 })
			expect(mockKy.calls[0][0]).toBe('anime/1')
		})

		it('replaces multiple path params', async () => {
			await client.callGetResource('/anime/{id}/episodes/{episode}', {
				id: 1,
				episode: 5
			})
			expect(mockKy.calls[0][0]).toBe('anime/1/episodes/5')
		})

		it('throws when param is not in the path template', () => {
			expect(
				client.callGetResource('/anime/{id}', { id: 1, foo: 'bar' })
			).rejects.toThrow('Path does not contain "foo" parameter.')
		})

		it('works with no path params', async () => {
			await client.callGetResource('/anime')
			expect(mockKy.calls[0][0]).toBe('anime')
		})

		it('strips leading slash from path', async () => {
			await client.callGetResource('/anime/{id}', { id: 1 })
			const calledPath = mockKy.calls[0][0] as string
			expect(calledPath).toBe('anime/1')
			expect(calledPath.startsWith('/')).toBe(false)
		})
	})

	describe('query parameter cleaning', () => {
		it('passes defined params as searchParams', async () => {
			await client.callGetResource('/anime', {}, { page: 1, limit: 10 })
			expect(mockKy.calls[0][1]).toEqual({
				searchParams: { page: 1, limit: 10 }
			})
		})

		it('filters out undefined params', async () => {
			await client.callGetResource(
				'/anime',
				{},
				{
					page: 1,
					limit: undefined
				}
			)
			expect(mockKy.calls[0][1]).toEqual({ searchParams: { page: 1 } })
		})

		it('passes undefined searchParams when all params are undefined', async () => {
			await client.callGetResource(
				'/anime',
				{},
				{
					a: undefined,
					b: undefined
				}
			)
			expect(mockKy.calls[0][1]).toEqual({ searchParams: undefined })
		})

		it('passes undefined searchParams when params object is empty', async () => {
			await client.callGetResource('/anime', {}, {})
			expect(mockKy.calls[0][1]).toEqual({ searchParams: undefined })
		})

		it('handles undefined as params argument', async () => {
			await client.callGetResource('/anime/{id}', { id: 1 }, undefined)
			expect(mockKy.calls[0][1]).toEqual({ searchParams: undefined })
		})
	})

	describe('caching', () => {
		it('returns cached response on second call', async () => {
			await client.callGetResource('/anime/{id}', { id: 1 })
			await client.callGetResource('/anime/{id}', { id: 1 })
			expect(mockKy.calls).toHaveLength(1)
		})

		it('produces same cache key regardless of param order', async () => {
			await client.callGetResource('/anime', {}, { b: 2, a: 1 })
			await client.callGetResource('/anime', {}, { a: 1, b: 2 })
			expect(mockKy.calls).toHaveLength(1)
		})

		it('produces different cache keys for different params', async () => {
			await client.callGetResource('/anime', {}, { page: 1 })
			await client.callGetResource('/anime', {}, { page: 2 })
			expect(mockKy.calls).toHaveLength(2)
		})

		it('ignores undefined params in cache key', async () => {
			await client.callGetResource(
				'/anime',
				{},
				{
					page: 1,
					limit: undefined
				}
			)
			await client.callGetResource('/anime', {}, { page: 1 })
			expect(mockKy.calls).toHaveLength(1)
		})
	})

	describe('return value', () => {
		it('returns the response from ky', async () => {
			const result = await client.callGetResource('/anime/{id}', { id: 1 })
			expect(result).toEqual(mockResponse)
		})
	})
})
