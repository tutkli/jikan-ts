import { SortOptions } from './search-params.model';

export interface CharactersSearchParams {
  page?: number;
  limit?: number;
  q?: string;
  order_by?: CharactersSearchOrder;
  sort?: SortOptions;
  letter?: string;
}

export type CharactersSearchOrder = 'mal_id' | 'name' | 'favorites';
