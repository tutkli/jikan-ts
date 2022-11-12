import { AnimeClient } from '../clients';
import { Anime, JikanResponse, JikanUniqueResponse } from '../models';
import { AnimeSearchParams } from '../models/Params';

describe('test Anime Client', () => {
  let client: AnimeClient;
  beforeAll(() => {
    client = new AnimeClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get animes filtered by params', async () => {
    const params: AnimeSearchParams = { limit: 3, score: 9 };
    const data = await client.getAnimeSearch(params).then((response: JikanResponse<Anime>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.score).toBeGreaterThanOrEqual(9);
    }
  });

  it('should get a full anime by its ID', async () => {
    const data = await client.getAnimeFullById(1).then((response: JikanUniqueResponse<Anime>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get an anime by its ID', async () => {
    const data = await client.getAnimeById(1).then((response: JikanUniqueResponse<Anime>) => response.data);
    expect(data.mal_id).toBe(1);
  });
});
