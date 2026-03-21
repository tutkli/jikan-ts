import { afterEach, beforeEach, describe, expect, it, spyOn } from 'bun:test'
import { AnimeClient } from '../clients/anime.client'
import { BaseClient } from '../clients/base.client'
import { ResponseCache } from '../config/cache'
import { AnimeEndpoints } from '../endpoints/anime.endpoints'

describe('AnimeClient', () => {
	let client: AnimeClient
	let spy: ReturnType<typeof spyOn>

	beforeEach(() => {
		spy = spyOn(BaseClient.prototype as any, 'getResource').mockResolvedValue({
			data: {}
		})
		client = new AnimeClient({
			kyInstance: {} as any,
			_cache: new ResponseCache()
		})
	})

	afterEach(() => {
		spy.mockRestore()
	})

	it('getAnimeById passes correct endpoint and path params', async () => {
		await client.getAnimeById(1)
		expect(spy).toHaveBeenCalledWith(AnimeEndpoints.animeById, { id: 1 })
	})

	it('getAnimeFullById passes correct endpoint and path params', async () => {
		await client.getAnimeFullById(1)
		expect(spy).toHaveBeenCalledWith(AnimeEndpoints.animeFullById, { id: 1 })
	})

	it('getAnimeEpisodes uses default page=1', async () => {
		await client.getAnimeEpisodes(1)
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeEpisodes,
			{ id: 1 },
			{ page: 1 }
		)
	})

	it('getAnimeEpisodes passes custom page', async () => {
		await client.getAnimeEpisodes(1, 3)
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeEpisodes,
			{ id: 1 },
			{ page: 3 }
		)
	})

	it('getAnimeEpisodeById passes multiple path params', async () => {
		await client.getAnimeEpisodeById(1, 5)
		expect(spy).toHaveBeenCalledWith(AnimeEndpoints.animeEpisodeById, {
			id: 1,
			episode: 5
		})
	})

	it('getAnimeForum without filter passes undefined params', async () => {
		await client.getAnimeForum(1)
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeForum,
			{ id: 1 },
			undefined
		)
	})

	it('getAnimeForum with filter passes filter param', async () => {
		await client.getAnimeForum(1, 'episode')
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeForum,
			{ id: 1 },
			{ filter: 'episode' }
		)
	})

	it('getAnimeSearch with params passes empty path params and search params', async () => {
		await client.getAnimeSearch({ limit: 3, score: 8 })
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeSearch,
			{},
			{
				limit: 3,
				score: 8
			}
		)
	})

	it('getAnimeSearch without params passes undefined search params', async () => {
		await client.getAnimeSearch()
		expect(spy).toHaveBeenCalledWith(AnimeEndpoints.animeSearch, {}, undefined)
	})

	it('getAnimeReviews with params passes review params', async () => {
		await client.getAnimeReviews(1, { page: 2 })
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeReviews,
			{ id: 1 },
			{ page: 2 }
		)
	})

	it('getAnimeReviews without params passes undefined', async () => {
		await client.getAnimeReviews(1)
		expect(spy).toHaveBeenCalledWith(
			AnimeEndpoints.animeReviews,
			{ id: 1 },
			undefined
		)
	})

	it('getAnimeCharacters passes correct endpoint', async () => {
		await client.getAnimeCharacters(1)
		expect(spy).toHaveBeenCalledWith(AnimeEndpoints.animeCharacters, {
			id: 1
		})
	})
})
