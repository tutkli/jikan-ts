import { AnimeSeason } from '../Anime';

export interface SeasonsListData {
  year: number;
  seasons: Array<keyof typeof AnimeSeason>;
}
