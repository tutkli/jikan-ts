import { ClientArgs } from './base.client';
import { AnimeClient } from './anime.client';
import { MangaClient } from './manga.client';
import { TopClient } from './top.client';
import { SeasonsClient } from './seasons.client';
import { GenresClient } from './genres.client';

/**
 * **Jikan Client**
 *
 * The main client used to access all the Jikan Endpoints:
 *
 * See also: [Jikan Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient {
  public anime: AnimeClient;
  public genres: GenresClient;
  public manga: MangaClient;
  public top: TopClient;
  public seasons: SeasonsClient;

  constructor(clientOptions?: Partial<ClientArgs>) {
    this.anime = new AnimeClient(clientOptions);
    this.genres = new GenresClient(clientOptions);
    this.manga = new MangaClient(clientOptions);
    this.top = new TopClient(clientOptions);
    this.seasons = new SeasonsClient(clientOptions);
  }
}
