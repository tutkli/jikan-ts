export interface SchedulesParams {
  page?: number;
  limit?: number;
  filter?: SchedulesFilter;
  kids?: boolean;
  sfw?: boolean;
  unapproved?: boolean;
}

const SchedulesFilter = {
  monday: 'monday',
  tuesday: 'tuesday',
  wednesday: 'wednesday',
  thursday: 'thursday',
  friday: 'friday',
  unknown: 'unknown',
  other: 'other',
} as const;
export type SchedulesFilter =
  (typeof SchedulesFilter)[keyof typeof SchedulesFilter];
