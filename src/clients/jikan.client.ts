import { AnimeClient } from './anime.client'
import type { ClientArgs } from './base.client'
import { CharactersClient } from './characters.client'
import { GenresClient } from './genres.client'
import { MangaClient } from './manga.client'
import { RandomClient } from './random.client'
import { SchedulesClient } from './schedules.client'
import { SeasonsClient } from './seasons.client'
import { TopClient } from './top.client'

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

	constructor(clientOptions?: Partial<ClientArgs>) {
		this.anime = new AnimeClient(clientOptions)
		this.characters = new CharactersClient(clientOptions)
		this.genres = new GenresClient(clientOptions)
		this.manga = new MangaClient(clientOptions)
		this.top = new TopClient(clientOptions)
		this.schedules = new SchedulesClient(clientOptions)
		this.seasons = new SeasonsClient(clientOptions)
		this.random = new RandomClient(clientOptions)
	}
}
