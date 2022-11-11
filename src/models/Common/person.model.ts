import { JikanImages } from './image.model';

export interface JikanPerson {
  mal_id: number;
  url: string;
  images: JikanImages;
  name: string;
}
