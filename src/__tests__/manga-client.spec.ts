import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import { MangaClient } from '../clients';
import {
  CommonCharacter,
  JikanImages,
  JikanResponse,
  Manga,
  MangaSearchParams,
  MangaStatistics,
  Recommendation,
} from '../models';

describe('test Manga Client', () => {
  let client: MangaClient;
  beforeAll(() => {
    client = new MangaClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get mangas filtered by params', async () => {
    const params: Partial<MangaSearchParams> = { limit: 3, score: 9 };
    const data = await client.getMangaSearch(params).then((response: JikanResponse<Manga[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.score).toBeGreaterThanOrEqual(9);
    }
  });

  it('should get a full manga by its ID', async () => {
    const data = await client.getMangaFullById(1).then((response: JikanResponse<Manga>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get an manga by its ID', async () => {
    const data = await client.getMangaById(1).then((response: JikanResponse<Manga>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get manga characters', async () => {
    const data = await client.getMangaCharacters(1).then((response: JikanResponse<CommonCharacter[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get manga pictures', async () => {
    const data = await client.getMangaPictures(1).then((response: JikanResponse<JikanImages[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get manga statistics', async () => {
    const data = await client.getMangaStatistics(1).then((response: JikanResponse<MangaStatistics>) => response.data);
    expect(data.total).toBeGreaterThanOrEqual(1000);
  });

  it('should get manga recommendations', async () => {
    const data = await client
      .getMangaRecommendations(1)
      .then((response: JikanResponse<Recommendation[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });
});
