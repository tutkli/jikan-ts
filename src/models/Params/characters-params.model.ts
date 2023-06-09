import { SortOptions } from './search-params.model';

export interface CharactersSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: CharactersSearchOrder;
  sort?: SortOptions;
  letter?: string;
}

export enum CharactersSearchOrder {
  mal_id = 'mal_id',
  name = 'name',
  favorites = 'favorites',
}
