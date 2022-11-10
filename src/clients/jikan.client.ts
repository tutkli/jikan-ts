import { BaseClient, ClientArgs } from './base.client';
import { AnimeClient } from './anime.client';
import { MangaClient } from './manga.client';

/**
 * **Jikan Client**
 *
 * The main client used to access all the JikanAPI Endpoints:
 * - [Anime](https://docs.api.jikan.moe/#tag/anime)
 * - [Manga](https://docs.api.jikan.moe/#tag/manga)
 *
 * See also: [JikanAPI Documentation](https://docs.api.jikan.moe/)
 */
export class JikanClient extends BaseClient {
  public anime: AnimeClient;
  public manga: MangaClient;

  constructor(clientOptions?: ClientArgs) {
    super(clientOptions);

    this.anime = new AnimeClient(clientOptions);
    this.manga = new MangaClient(clientOptions);
  }
}
