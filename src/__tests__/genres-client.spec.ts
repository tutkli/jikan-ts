import { beforeAll, beforeEach, describe, expect, it } from '@jest/globals';
import { GenresClient } from '../clients/genres.client';
import { JikanResponse } from '../models';
import { Genre } from '../models/Common/genre.model';
import { GenresFilter } from '../models/Params/genres-params.model';

describe('test Genres Client', () => {
  let client: GenresClient;
  beforeAll(() => {
    client = new GenresClient();
  });
  beforeEach(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  });

  it('should get anime genres', async () => {
    const data = await client
      .getAnimeGenres(GenresFilter.demographics)
      .then((response: JikanResponse<Genre[]>) => response.data);

    expect(data.length).toBeGreaterThan(0);
  });

  it('should get manga genres', async () => {
    const data = await client.getMangaGenres().then((response: JikanResponse<Genre[]>) => response.data);

    expect(data.length).toBeGreaterThan(0);
  });
});
