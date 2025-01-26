import { beforeAll, beforeEach, describe, expect, it } from 'bun:test'
import { AnimeClient } from '../clients/anime.client'
import type { AnimeSearchParams } from '../models'

describe('test Anime Client', () => {
	let client: AnimeClient

	beforeAll(() => {
		client = new AnimeClient()
	})

	// Prevent rate-limit errors. See: https://docs.api.jikan.moe/#section/Information/Rate-Limiting
	beforeEach(async () => {
		await new Promise(resolve => setTimeout(resolve, 1000))
	})

	it('should be instantiated correctly', () => {
		expect(client).toBeDefined()
	})

	// Endpoints

	it('should get a full anime by its id', async () => {
		const { data } = await client.getAnimeFullById(1)
		expect(data.mal_id).toBe(1)
	})

	it('should get an anime by its id', async () => {
		const { data } = await client.getAnimeById(1)
		expect(data.mal_id).toBe(1)
	})

	it('should get anime characters', async () => {
		const { data } = await client.getAnimeCharacters(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime staff', async () => {
		const { data } = await client.getAnimeStaff(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime episodes', async () => {
		const { data } = await client.getAnimeEpisodes(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime episode by its id', async () => {
		const { data } = await client.getAnimeEpisodeById(1, 1)
		expect(data.mal_id).toBe(1)
	})

	it('should get anime news', async () => {
		const { data } = await client.getAnimeNews(1, 1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime forum topics', async () => {
		const { data } = await client.getAnimeForum(1)
		expect(data.length).toBeGreaterThanOrEqual(1)
	})

	it('should get anime videos', async () => {
		const { data } = await client.getAnimeVideos(1)
		expect(data.promo.length).toBeGreaterThanOrEqual(0)
		expect(data.episodes.length).toBeGreaterThanOrEqual(0)
		expect(data.music_videos.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime episode videos', async () => {
		const { data } = await client.getAnimeEpisodeVideos(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime pictures', async () => {
		const { data } = await client.getAnimePictures(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime statistics', async () => {
		const { data } = await client.getAnimeStatistics(1)
		expect(data.total).toBeGreaterThanOrEqual(1000)
	})

	it('should get anime more info', async () => {
		const { data } = await client.getAnimeMoreInfo(1)
		expect(data.moreinfo.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime recommendations', async () => {
		const { data } = await client.getAnimeRecommendations(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get anime relations', async () => {
		const { data } = await client.getAnimeRelations(1)
		expect(data.length).toBeGreaterThanOrEqual(0)
	})

	it('should get animes filtered by params', async () => {
		const params: AnimeSearchParams = { limit: 3, score: 8 }
		const { data } = await client.getAnimeSearch(params)

		expect(data).toHaveLength(3)
		for (const anime of data) {
			expect(anime.score).toBeGreaterThanOrEqual(8)
		}
	})
})
