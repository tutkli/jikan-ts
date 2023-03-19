# Cache Configuration

Jikan-ts uses `axios-cache-interceptor` to store request results.

## Usage

Caching is **enabled** by default.
To use a specific configuration, pass the `cacheOptions` argument when instantiating a client:

```ts
import {AnimeClient} from '@tutkli/jikan-ts';

const animeClient = new AnimeClient({ 
    cacheOptions: { ... } // axios-cache-interceptor options
  }
);
```

## More

> For more information, check out the [axios-cache-interceptor Documentation](https://axios-cache-interceptor.js.org/).

