import { beforeEach, describe, expect, it, mock } from 'bun:test'
import { AnimeClient } from '../clients/anime.client'
import { CharactersClient } from '../clients/characters.client'
import { ClubsClient } from '../clients/clubs.client'
import { GenresClient } from '../clients/genres.client'
import { MagazinesClient } from '../clients/magazines.client'
import { MangaClient } from '../clients/manga.client'
import { PeopleClient } from '../clients/people.client'
import { ProducersClient } from '../clients/producers.client'
import { RandomClient } from '../clients/random.client'
import { RecommendationsClient } from '../clients/recommendations.client'
import { ReviewsClient } from '../clients/reviews.client'
import { SchedulesClient } from '../clients/schedules.client'
import { SeasonsClient } from '../clients/seasons.client'
import { TopClient } from '../clients/top.client'
import { WatchClient } from '../clients/watch.client'
import { ResponseCache } from '../config/cache'

const mockKy = { get: mock(() => ({ json: () => Promise.resolve({}) })) }
const mockCache = new ResponseCache()
const mockCreateKyInstance = mock(() => ({
	api: mockKy,
	cache: mockCache
}))

mock.module('../config/ky.config', () => ({
	createKyInstance: mockCreateKyInstance
}))

const { JikanClient } = await import('../clients/jikan.client')

describe('JikanClient', () => {
	beforeEach(() => {
		mockCreateKyInstance.mockClear()
	})

	it('calls createKyInstance exactly once', () => {
		new JikanClient()
		expect(mockCreateKyInstance).toHaveBeenCalledTimes(1)
	})

	it('exposes all 15 sub-client properties with correct types', () => {
		const jikan = new JikanClient()
		expect(jikan.anime).toBeInstanceOf(AnimeClient)
		expect(jikan.characters).toBeInstanceOf(CharactersClient)
		expect(jikan.clubs).toBeInstanceOf(ClubsClient)
		expect(jikan.genres).toBeInstanceOf(GenresClient)
		expect(jikan.magazines).toBeInstanceOf(MagazinesClient)
		expect(jikan.manga).toBeInstanceOf(MangaClient)
		expect(jikan.people).toBeInstanceOf(PeopleClient)
		expect(jikan.producers).toBeInstanceOf(ProducersClient)
		expect(jikan.top).toBeInstanceOf(TopClient)
		expect(jikan.schedules).toBeInstanceOf(SchedulesClient)
		expect(jikan.seasons).toBeInstanceOf(SeasonsClient)
		expect(jikan.random).toBeInstanceOf(RandomClient)
		expect(jikan.recommendations).toBeInstanceOf(RecommendationsClient)
		expect(jikan.reviews).toBeInstanceOf(ReviewsClient)
		expect(jikan.watch).toBeInstanceOf(WatchClient)
	})
})
