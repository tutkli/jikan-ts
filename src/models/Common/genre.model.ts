import { JikanNamedResource } from './index';

export interface Genre extends JikanNamedResource {
  mal_id: number;
  count: number;
}
