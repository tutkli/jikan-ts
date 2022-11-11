import { JikanImages } from './image.model';

export interface Recommendation {
  entry: RecommendationEntry;
}

export interface RecommendationEntry {
  mal_id: number;
  url: string;
  images: JikanImages;
  title: string;
}
