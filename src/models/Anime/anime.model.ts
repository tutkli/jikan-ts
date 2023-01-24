import {
  JikanImages,
  JikanNamedResource,
  JikanResource,
  JikanResourcePeriod,
  JikanResourceRelation,
  JikanResourceTitle,
} from '../Common';
import { AnimeYoutubeVideo } from './anime-video.model';

export interface Anime {
  mal_id: number;
  url: string;
  images: JikanImages;
  trailer: AnimeYoutubeVideo;
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
  producers: JikanResource[];
  licensors: JikanResource[];
  studios: JikanResource[];
  genres: JikanResource[];
  explicit_genres: JikanResource[];
  themes: JikanResource[];
  demographics: JikanResource[];
  relations?: JikanResourceRelation[];
  theme?: AnimeTheme;
  external?: JikanNamedResource[];
  streaming: JikanNamedResource[];
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

export enum AnimeType {
  tv = 'TV',
  movie = 'Movie',
  ova = 'Ova',
  special = 'Special',
  ona = 'Ona',
  music = 'Music',
}

export enum AnimeStatus {
  finished = 'Finished Airing',
  airing = 'Currently Airing',
  complete = 'Complete',
  upcoming = 'Not yet aired',
}

export enum AnimeRating {
  g = 'g',
  pg = 'pg',
  pg13 = 'pg13',
  r17 = 'r17',
  r = 'r',
  rx = 'rx',
}

export enum AnimeSeason {
  spring = 'spring',
  summer = 'summer',
  fall = 'fall',
  winter = 'winter',
}
