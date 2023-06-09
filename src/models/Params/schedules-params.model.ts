export interface SchedulesParams {
  page?: number;
  limit?: number;
  filter?: SchedulesFilter;
  kids?: boolean;
  sfw?: boolean;
  unapproved?: boolean;
}

export enum SchedulesFilter {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  unknown = 'unknown',
  other = 'other',
}
