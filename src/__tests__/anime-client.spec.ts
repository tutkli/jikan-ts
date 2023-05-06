import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import { AnimeClient } from '../clients';
import {
  Anime,
  AnimeCharacter,
  AnimeEpisode,
  AnimeEpisodeVideo,
  AnimePicture,
  AnimeSearchParams,
  AnimeStaff,
  AnimeStatistics,
  AnimeVideos,
  JikanResponse,
  Recommendation,
} from '../models';

describe('test Anime Client', () => {
  let client: AnimeClient;
  beforeAll(() => {
    client = new AnimeClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get animes filtered by params', async () => {
    const params: Partial<AnimeSearchParams> = { limit: 3, score: 9 };
    const data = await client.getAnimeSearch(params).then((response: JikanResponse<Anime[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.score).toBeGreaterThanOrEqual(9);
    }
  });

  it('should get a full anime by its ID', async () => {
    const data = await client.getAnimeFullById(1).then((response: JikanResponse<Anime>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get an anime by its ID', async () => {
    const data = await client.getAnimeById(1).then((response: JikanResponse<Anime>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get anime characters', async () => {
    const data = await client.getAnimeCharacters(1).then((response: JikanResponse<AnimeCharacter[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get anime staff', async () => {
    const data = await client.getAnimeStaff(1).then((response: JikanResponse<AnimeStaff[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get anime episodes', async () => {
    const data = await client.getAnimeEpisodes(1).then((response: JikanResponse<AnimeEpisode[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get anime episode by its ID', async () => {
    const data = await client.getAnimeEpisodeById(1, 1).then((response: JikanResponse<AnimeEpisode>) => response.data);
    expect(data.mal_id).toBe(1);
  });

  it('should get anime videos', async () => {
    const data = await client.getAnimeVideos(1).then((response: JikanResponse<AnimeVideos>) => response.data);
    expect(data.promo.length).toBeGreaterThanOrEqual(0);
    expect(data.episodes.length).toBeGreaterThanOrEqual(0);
    expect(data.music_videos.length).toBeGreaterThanOrEqual(0);
  });

  it('should get anime episode videos', async () => {
    const data = await client
      .getAnimeEpisodeVideos(1)
      .then((response: JikanResponse<AnimeEpisodeVideo[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get anime pictures', async () => {
    const data = await client.getAnimePictures(1).then((response: JikanResponse<AnimePicture[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });

  it('should get anime statistics', async () => {
    const data = await client.getAnimeStatistics(1).then((response: JikanResponse<AnimeStatistics>) => response.data);
    expect(data.total).toBeGreaterThanOrEqual(1000);
  });

  it('should get anime recommendations', async () => {
    const data = await client
      .getAnimeRecommendations(1)
      .then((response: JikanResponse<Recommendation[]>) => response.data);
    expect(data.length).toBeGreaterThanOrEqual(0);
  });
});
