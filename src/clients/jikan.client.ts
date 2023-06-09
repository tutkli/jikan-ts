import { ClientArgs } from './base.client';
import { AnimeClient } from './anime.client';
import { MangaClient } from './manga.client';
import { TopClient } from './top.client';
import { SeasonsClient } from './seasons.client';
import { GenresClient } from './genres.client';
import { CharactersClient } from './characters.client';
import { SchedulesClient } from './schedules.client';

/**
 * **Jikan Client**
 *
 * The main client used to access all the Jikan Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient {
  public anime: AnimeClient;
  public characters: CharactersClient;
  public genres: GenresClient;
  public manga: MangaClient;
  public top: TopClient;
  public schedules: SchedulesClient;
  public seasons: SeasonsClient;

  constructor(clientOptions?: Partial<ClientArgs>) {
    this.anime = new AnimeClient(clientOptions);
    this.characters = new CharactersClient(clientOptions);
    this.genres = new GenresClient(clientOptions);
    this.manga = new MangaClient(clientOptions);
    this.top = new TopClient(clientOptions);
    this.schedules = new SchedulesClient(clientOptions);
    this.seasons = new SeasonsClient(clientOptions);
  }
}
