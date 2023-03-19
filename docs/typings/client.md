# Clients

## Client Args

Client arguments for logging and cache configurations:

```ts
export interface ClientArgs {
  enableLogging?: boolean;
  cacheOptions?: CacheOptions;
  baseURL?: string;
}
```

> For more information, check out the [axios-cache-interceptor Documentation](https://axios-cache-interceptor.js.org/).

## Client Response

### `JikanResponse<T>`

The requested resource is received in the data property.

```
{
  data: T;
  pagination?: JikanPagination;
}
```

### Pagination

If the endpoint is paginated, it will receive a *JikanPagination* property.

#### `JikanPagination`

```
{
  last_visible_page: number;
  has_next_page: boolean;
  items?: JikanPaginationItems;
}
```

#### `JikanPaginationItems`

```
{
  count: number;
  total: number;
  per_page: number;
}
```
