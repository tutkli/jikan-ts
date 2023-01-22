/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { SeasonsClient } from '../clients';
import { Anime, AnimeSeason, AnimeStatus, JikanResponse } from '../models';
import { SeasonsListData } from '../models/Common/seasons-list.model';
import { JikanSeasonsParams, SeasonNowParams } from '../models/Params/seasons-params.model';

describe('test Seasons Client', () => {
  let client: SeasonsClient;
  beforeAll(() => {
    client = new SeasonsClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get the seasonal anime by year and season', async () => {
    const year = 2022;
    const data = await client
      .getSeason(year, AnimeSeason.winter, { limit: 3 })
      .then((response: JikanResponse<Anime[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.year).toBe(year);
      expect(anime.season).toBe(AnimeSeason.winter);
    }
  });

  it('should get current seasonal anime filtered by params', async () => {
    const params: SeasonNowParams = { limit: 3 };
    const data = await client.getSeasonNow(params).then((response: JikanResponse<Anime[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.status).toBe(AnimeStatus.airing);
    }
  });

  it('should available list of seasons', async () => {
    const data = await client.getSeasonsList().then((response: JikanResponse<SeasonsListData[]>) => response.data);

    for (const season of data) {
      expect(typeof season.year).toEqual('number');
    }
  });

  it("should get upcoming season's anime filtered by params", async () => {
    const params: JikanSeasonsParams = { limit: 3 };
    const data = await client.getSeasonUpcoming(params).then((response: JikanResponse<Anime[]>) => response.data);

    expect(data).toHaveLength(3);
    for (const anime of data) {
      expect(anime.status).toBe(AnimeStatus.upcoming);
    }
  });
});
