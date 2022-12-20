import {
  Anime,
  AnimeStatus,
  AnimeTopParams,
  JikanResponse,
  Manga,
  MangaStatus,
  MangaTopParams,
  TopAnimeFilter,
  TopMangaFilter,
} from '../models';
import { TopClient } from '../clients';

describe('test Top Client', () => {
  let client: TopClient;
  beforeAll(() => {
    client = new TopClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get top animes filtered by params', async () => {
    const params: AnimeTopParams = { limit: 3, filter: TopAnimeFilter.airing };
    const data = await client.getTopAnime(params).then((response: JikanResponse<Anime[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.status).toBe(AnimeStatus.airing);
    }
  });

  it('should get top mangas filtered by params', async () => {
    const params: MangaTopParams = { limit: 3, filter: TopMangaFilter.publishing };
    const data = await client.getTopManga(params).then((response: JikanResponse<Manga[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const manga of data) {
      expect(manga.status).toBe(MangaStatus.publishing);
    }
  });
});
