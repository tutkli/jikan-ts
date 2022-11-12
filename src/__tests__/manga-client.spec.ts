import { MangaClient } from '../clients';
import { MangaSearchParams } from '../models/Params';
import { JikanResponse, JikanUniqueResponse, Manga } from '../models';

describe('test Manga Client', () => {
  let client: MangaClient;
  beforeAll(() => {
    client = new MangaClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get mangas filtered by params', async () => {
    const params: MangaSearchParams = { limit: 3, score: 9 };
    const data = await client.getMangaSearch(params).then((response: JikanResponse<Manga>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.score).toBeGreaterThanOrEqual(9);
    }
  });

  it('should get a full manga by its ID', async () => {
    const data = await client.getMangaFullById(1).then((response: JikanUniqueResponse<Manga>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get an manga by its ID', async () => {
    const data = await client.getMangaById(1).then((response: JikanUniqueResponse<Manga>) => response.data);
    expect(data.mal_id).toBe(1);
  });
});
