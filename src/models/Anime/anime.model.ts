import {
  JikanImages,
  JikanNamedResource,
  JikanResourcePeriod,
  JikanResourceRelation,
  JikanResourceTitle,
  JikanUniqueResource,
} from '../Common';

export interface Anime {
  mal_id: string;
  url: string;
  images: JikanImages;
  trailer: AnimeTrailer;
  approved: boolean;
  titles: JikanResourceTitle[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: AnimeType;
  source: string;
  episodes: number;
  status: AnimeStatus;
  airing: boolean;
  aired: JikanResourcePeriod;
  duration: string;
  rating: AnimeRating;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season?: AnimeSeason;
  year: number;
  broadcast: AnimeBroadcast;
  producers: JikanUniqueResource[];
  licensors: JikanUniqueResource[];
  studio: JikanUniqueResource[];
  genres: JikanUniqueResource[];
  explicit_genres: JikanUniqueResource[];
  themes: JikanUniqueResource[];
  demographic: JikanUniqueResource[];
  relations?: JikanResourceRelation[];
  theme?: AnimeTheme;
  external?: JikanNamedResource[];
  streaming: JikanNamedResource[];
}

export interface AnimeTrailer {
  youtube_id: string;
  url: string;
  embed_url: string;
}

export interface AnimeBroadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface AnimeTheme {
  openings: string[];
  endings: string[];
}

export type AnimeType = 'TV' | 'Movie' | 'Ova' | 'Special' | 'Ona' | 'Music';

export type AnimeStatus = 'Finished Airing' | 'Currently Airing' | 'Complete';

export type AnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx';

export type AnimeSeason = 'spring' | 'summer' | 'fall' | 'winter';
