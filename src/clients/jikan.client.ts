import type { ClientArgs } from './base.client'
import { createKyInstance } from '../config/ky.config'
import { AnimeClient } from './anime.client'
import { CharactersClient } from './characters.client'
import { ClubsClient } from './clubs.client'
import { GenresClient } from './genres.client'
import { MagazinesClient } from './magazines.client'
import { MangaClient } from './manga.client'
import { PeopleClient } from './people.client'
import { ProducersClient } from './producers.client'
import { RandomClient } from './random.client'
import { RecommendationsClient } from './recommendations.client'
import { ReviewsClient } from './reviews.client'
import { SchedulesClient } from './schedules.client'
import { SeasonsClient } from './seasons.client'
import { TopClient } from './top.client'
import { WatchClient } from './watch.client'

/**
 * **Jikan Client**
 *
 * The main client used to access all the Jikan Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient {
	public anime: AnimeClient
	public characters: CharactersClient
	public clubs: ClubsClient
	public genres: GenresClient
	public magazines: MagazinesClient
	public manga: MangaClient
	public people: PeopleClient
	public producers: ProducersClient
	public top: TopClient
	public schedules: SchedulesClient
	public seasons: SeasonsClient
	public random: RandomClient
	public recommendations: RecommendationsClient
	public reviews: ReviewsClient
	public watch: WatchClient

	constructor(clientOptions: Partial<ClientArgs> = {}) {
		const { api, cache } = createKyInstance({
			enableLogging: clientOptions.enableLogging,
			cacheOptions: clientOptions.cacheOptions,
			kyInstance: clientOptions.kyInstance
		})

		const sharedOptions: Partial<ClientArgs> = {
			...clientOptions,
			kyInstance: api,
			_cache: cache
		}

		this.anime = new AnimeClient(sharedOptions)
		this.characters = new CharactersClient(sharedOptions)
		this.clubs = new ClubsClient(sharedOptions)
		this.genres = new GenresClient(sharedOptions)
		this.magazines = new MagazinesClient(sharedOptions)
		this.manga = new MangaClient(sharedOptions)
		this.people = new PeopleClient(sharedOptions)
		this.producers = new ProducersClient(sharedOptions)
		this.top = new TopClient(sharedOptions)
		this.schedules = new SchedulesClient(sharedOptions)
		this.seasons = new SeasonsClient(sharedOptions)
		this.random = new RandomClient(sharedOptions)
		this.recommendations = new RecommendationsClient(sharedOptions)
		this.reviews = new ReviewsClient(sharedOptions)
		this.watch = new WatchClient(sharedOptions)
	}
}
