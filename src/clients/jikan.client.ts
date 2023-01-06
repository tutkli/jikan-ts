import { ClientArgs } from './base.client';
import { AnimeClient } from './anime.client';
import { MangaClient } from './manga.client';
import { TopClient } from './top.client';

/**
 * **Jikan Client**
 *
 * The main client used to access all the JikanAPI Endpoints:
 * - [Anime](https://docs.api.jikan.moe/#tag/anime)
 * - [Manga](https://docs.api.jikan.moe/#tag/manga)
 * - [Top](https://docs.api.jikan.moe/#tag/top)
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient {
  public anime: AnimeClient;
  public manga: MangaClient;
  public top: TopClient;

  constructor(clientOptions?: Partial<ClientArgs>) {
    this.anime = new AnimeClient(clientOptions);
    this.manga = new MangaClient(clientOptions);
    this.top = new TopClient(clientOptions);
  }
}
