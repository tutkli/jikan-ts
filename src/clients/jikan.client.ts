import { getAxiosCacheInstance } from '../config/axios.config'
import { AnimeClient } from './anime.client'
import type { ClientArgs } from './base.client'
import { CharactersClient } from './characters.client'
import { GenresClient } from './genres.client'
import { MangaClient } from './manga.client'
import { RandomClient } from './random.client'
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
	public genres: GenresClient
	public manga: MangaClient
	public top: TopClient
	public schedules: SchedulesClient
	public seasons: SeasonsClient
	public random: RandomClient
	public watch: WatchClient

	constructor(clientOptions: Partial<ClientArgs> = {}) {
		const axiosCacheInstance = getAxiosCacheInstance(
			clientOptions.axiosInstance,
			clientOptions.cacheOptions
		)

		this.anime = new AnimeClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.characters = new CharactersClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.genres = new GenresClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.manga = new MangaClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.top = new TopClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.schedules = new SchedulesClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.seasons = new SeasonsClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.random = new RandomClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
		this.watch = new WatchClient({
			axiosInstance: axiosCacheInstance,
			...clientOptions
		})
	}
}
