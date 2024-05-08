export interface SchedulesParams {
  page?: number;
  limit?: number;
  filter?: SchedulesFilter;
  kids?: boolean;
  sfw?: boolean;
  unapproved?: boolean;
}

export type SchedulesFilter =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'unknown'
  | 'other';
