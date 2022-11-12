import { AnimeType } from '../Anime';
import { MangaType } from '../Manga';

export type TopFilter = 'airing' | 'upcoming' | 'bypopularity' | 'favorite';

export interface JikanTopParams {
  page?: number;
  limit?: number;
  filter?: TopFilter;
}

export interface AnimeTopParams extends JikanTopParams {
  type: AnimeType;
}

export interface MangaTopParams extends JikanTopParams {
  type: MangaType;
}
