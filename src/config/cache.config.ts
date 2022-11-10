import { buildMemoryStorage, defaultHeaderInterpreter, defaultKeyGenerator } from 'axios-cache-interceptor';

export const DEFAULT_CACHE_OPTIONS = {
  storage: buildMemoryStorage(),
  generateKey: defaultKeyGenerator,
  headerInterpreter: defaultHeaderInterpreter,
  debug: undefined,
};
