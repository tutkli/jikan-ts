import {
  buildMemoryStorage,
  CacheOptions,
  defaultHeaderInterpreter,
  defaultKeyGenerator,
} from 'axios-cache-interceptor';

export const DEFAULT_CACHE_OPTIONS = {
  storage: buildMemoryStorage(),
  generateKey: defaultKeyGenerator,
  headerInterpreter: defaultHeaderInterpreter,
  debug: undefined,
};

export const getCacheOptions = (cacheOptions: CacheOptions | undefined): CacheOptions => {
  return {
    storage: cacheOptions?.storage ?? DEFAULT_CACHE_OPTIONS.storage,
    generateKey: cacheOptions?.generateKey ?? DEFAULT_CACHE_OPTIONS.generateKey,
    headerInterpreter: cacheOptions?.headerInterpreter ?? DEFAULT_CACHE_OPTIONS.headerInterpreter,
    debug: cacheOptions?.debug ?? DEFAULT_CACHE_OPTIONS.debug,
  };
};
