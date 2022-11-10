import {
  JikanImages,
  JikanNamedResource,
  JikanResourcePeriod,
  JikanResourceRelation,
  JikanResourceTitle,
  JikanUniqueResource,
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
  authors: JikanUniqueResource[];
  serializations: JikanUniqueResource[];
  explicit_genres: JikanUniqueResource[];
  themes: JikanUniqueResource[];
  demographics: JikanUniqueResource[];
  relations?: JikanResourceRelation[];
  external?: JikanNamedResource[];
}

export type MangaType = 'Manga' | 'Novel' | 'Lightnovel' | 'Oneshot' | 'Doujin' | 'Manwha' | 'Manhua';

export type MangaStatus = 'Publishing' | 'Complete' | 'Hiatus' | 'Discontinued' | 'Upcoming';
