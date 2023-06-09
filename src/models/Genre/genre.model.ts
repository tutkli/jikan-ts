import { JikanNamedResource } from '../Common';

export interface Genre extends JikanNamedResource {
  mal_id: number;
  count: number;
}
