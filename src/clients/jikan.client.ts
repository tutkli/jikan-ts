import { AxiosInstance } from 'axios'
import { AnimeClient } from './anime.client'
import { CharactersClient } from './characters.client'
import { GenresClient } from './genres.client'
import { MangaClient } from './manga.client'
import { RandomClient } from './random.client'
import { SchedulesClient } from './schedules.client'
import { SeasonsClient } from './seasons.client'
import { TopClient } from './top.client'
import { CacheOptions } from 'axios-cache-interceptor'

export interface JikanClientArgs {
	/**
	 * **EnableLogging**
	 * Enables logging request responses.
	 */
	enableLogging: boolean

	/**
	 * **Axios Cache Options**
	 * Options for cache.
	 * @see https://axios-cache-interceptor.js.org/#/pages/configuration
	 */
	cacheOptions: Partial<CacheOptions>

	/**
	 * **Base URL**
	 * Location of the JikanAPI. Leave empty to use the official JikanAPI instance.
	 */
	baseURL: string

	/**
	 * **Axios Instance Factory**
	 * The ability to build your own axios instance if you need it
	 */
	axiosInstanceFactory?: () => AxiosInstance
}

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

	constructor(clientOptions?: Partial<JikanClientArgs>) {
		this.anime = new AnimeClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.characters = new CharactersClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.genres = new GenresClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.manga = new MangaClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.top = new TopClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.schedules = new SchedulesClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.seasons = new SeasonsClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
		this.random = new RandomClient({
			...clientOptions,
			axiosInstance: clientOptions?.axiosInstanceFactory?.()
		})
	}
}
