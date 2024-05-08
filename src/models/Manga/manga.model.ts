import {
  JikanImages,
  JikanNamedResource,
  JikanResource,
  JikanResourcePeriod,
  JikanResourceRelation,
  JikanResourceTitle,
} from '../Common';

export interface Manga {
  mal_id: number;
  url: string;
  images: JikanImages;
  approved: boolean;
  titles: JikanResourceTitle[];
  title: string;
  title_japanese: string;
  title_synonyms?: string[];
  type: MangaType;
  chapters: number;
  volumes: number;
  status: MangaStatus;
  publishing: boolean;
  published: JikanResourcePeriod;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  authors: JikanResource[];
  serializations: JikanResource[];
  genres: JikanResource[];
  explicit_genres: JikanResource[];
  themes: JikanResource[];
  demographics: JikanResource[];
  relations?: JikanResourceRelation[];
  external?: JikanNamedResource[];
}

export type MangaType =
  | 'Manga'
  | 'Novel'
  | 'Lightnovel'
  | 'Oneshot'
  | 'Doujin'
  | 'Manhwa'
  | 'Manhua';
export type MangaStatus =
  | 'Publishing'
  | 'Complete'
  | 'On Hiatus'
  | 'Discontinued'
  | 'Upcoming';
