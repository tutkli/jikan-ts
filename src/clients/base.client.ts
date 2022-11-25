import {
  AxiosCacheInstance,
  CacheAxiosResponse,
  CacheOptions,
  CacheRequestConfig,
  setupCache,
} from 'axios-cache-interceptor';
import axios, { AxiosError } from 'axios';
import { BaseURL } from '../constants';
import {
  createLogger,
  DEFAULT_CACHE_OPTIONS,
  handleRequest,
  handleRequestError,
  handleResponse,
  handleResponseError,
} from '../config';
import { ISettingsParam, Logger } from 'tslog';

/**
 * **Client Args**
 * Used to pass optional configuration for logging and cache to the clients.
 */
export interface ClientArgs {
  /**
   * **Logger Options**
   * Options for the client logger.
   * @see https://tslog.js.org/#/?id=settings
   */
  loggerOptions?: ISettingsParam<never>;
  /**
   * **Axios Cache Options**
   * Options for cache.
   * @see https://axios-cache-interceptor.js.org/#/pages/configuration
   */
  cacheOptions?: CacheOptions;
  /**
   * **Base URL**
   * Location of the JikanAPI. Leave empty to use the official JikanAPI instance.
   */
  baseURL?: string;
}

/**
 * **Base Client** This client is responsible for creating an Axios Instance and the cache and logging configurations
 */
export abstract class BaseClient {
  public api: AxiosCacheInstance;
  public logger: Logger<never>;

  constructor(clientOptions?: ClientArgs) {
    this.api = setupCache(
      axios.create({
        baseURL: clientOptions?.baseURL ?? BaseURL.REST,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      {
        storage: clientOptions?.cacheOptions?.storage ?? DEFAULT_CACHE_OPTIONS.storage,
        generateKey: clientOptions?.cacheOptions?.generateKey ?? DEFAULT_CACHE_OPTIONS.generateKey,
        headerInterpreter: clientOptions?.cacheOptions?.headerInterpreter ?? DEFAULT_CACHE_OPTIONS.headerInterpreter,
        debug: clientOptions?.cacheOptions?.debug ?? DEFAULT_CACHE_OPTIONS.debug,
      }
    );

    this.logger = createLogger(clientOptions?.loggerOptions);

    if (clientOptions?.loggerOptions !== undefined) {
      this.addHttpInterceptors();
    }
  }

  private addHttpInterceptors(): void {
    this.api.interceptors.request.use(
      (config: CacheRequestConfig) => handleRequest(config, this.logger),
      (error: AxiosError<string>) => handleRequestError(error, this.logger)
    );

    this.api.interceptors.response.use(
      (response: CacheAxiosResponse) => handleResponse(response, this.logger),
      (error: AxiosError<string>) => handleResponseError(error, this.logger)
    );
  }
}
