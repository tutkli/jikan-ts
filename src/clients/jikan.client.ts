import { ClientArgs } from './base.client';
import { AnimeClient } from './anime.client';
import { MangaClient } from './manga.client';
import { TopClient } from './top.client';
import { SeasonsClient } from './seasons.client';

/**
 * **Jikan Client**
 *
 * The main client used to access all the JikanAPI Endpoints:
 * - [Anime](https://docs.api.jikan.moe/#tag/anime)
 * - [Manga](https://docs.api.jikan.moe/#tag/manga)
 * - [Top](https://docs.api.jikan.moe/#tag/top)
 * - [Seasons](https://docs.api.jikan.moe/#tag/seasons)
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient {
  public anime: AnimeClient;
  public manga: MangaClient;
  public top: TopClient;
  public seasons: SeasonsClient;

  constructor(clientOptions?: Partial<ClientArgs>) {
    this.anime = new AnimeClient(clientOptions);
    this.manga = new MangaClient(clientOptions);
    this.top = new TopClient(clientOptions);
    this.seasons = new SeasonsClient(clientOptions);
  }
}
