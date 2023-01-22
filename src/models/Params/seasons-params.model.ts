export enum SeasonsFilter {
  tv = 'tv',
  movie = 'movie',
  ova = 'ova',
  special = 'special',
  ona = 'ona',
  music = 'music',
}

export interface JikanSeasonsParams {
  page?: number;
  limit?: number;
  filter?: SeasonsFilter;
}

/**
 * QueryParams used in **getSeasonNow** call
 *
 */
export type SeasonNowParams = Omit<JikanSeasonsParams, 'filter'>;
