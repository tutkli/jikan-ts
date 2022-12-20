export interface JikanPagination {
  last_visible_page: number;
  has_next_page: boolean;
  items?: JikanPaginationItems;
}

export interface JikanPaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export interface JikanResponse<T> {
  data: T;
  pagination?: JikanPagination;
}
