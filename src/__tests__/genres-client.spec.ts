import { beforeAll, beforeEach, describe, expect, it } from 'bun:test'
import { GenresClient } from '../clients/genres.client'
import type { Genre, JikanResponse } from '../models'

describe('test Genres Client', () => {
	let client: GenresClient
	beforeAll(() => {
		client = new GenresClient()
	})
	beforeEach(async () => {
		await new Promise(resolve => setTimeout(resolve, 1000))
	})

	it('should get anime genres', async () => {
		const data = await client
			.getAnimeGenres('demographics')
			.then((response: JikanResponse<Genre[]>) => response.data)

		expect(data.length).toBeGreaterThan(0)
	})

	it('should get manga genres', async () => {
		const data = await client
			.getMangaGenres()
			.then((response: JikanResponse<Genre[]>) => response.data)

		expect(data.length).toBeGreaterThan(0)
	})
})
