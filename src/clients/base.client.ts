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
  getCacheOptions,
  handleRequest,
  handleRequestError,
  handleResponse,
  handleResponseError,
  LoggerOptions,
} from '../config';
import { Logger } from 'tslog';
import { ILogObj } from 'tslog/dist/types/interfaces';

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
  loggerOptions: Partial<LoggerOptions>;
  /**
   * **Axios Cache Options**
   * Options for cache.
   * @see https://axios-cache-interceptor.js.org/#/pages/configuration
   */
  cacheOptions: Partial<CacheOptions>;
  /**
   * **Base URL**
   * Location of the JikanAPI. Leave empty to use the official JikanAPI instance.
   */
  baseURL: string;
}

/**
 * **Base Client** This client is responsible for creating an Axios Instance and the cache and logging configurations
 */
export abstract class BaseClient {
  public api: AxiosCacheInstance;

  protected constructor(clientOptions: Partial<ClientArgs> = {}) {
    this.api = setupCache(
      axios.create({
        baseURL: clientOptions.baseURL ?? BaseURL.REST,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      getCacheOptions(clientOptions.cacheOptions)
    );

    if (clientOptions.loggerOptions?.enabled) {
      const logger: Logger<ILogObj> = createLogger(clientOptions.loggerOptions.settings);
      this.addHttpInterceptors(logger);
    }
  }

  private addHttpInterceptors(logger: Logger<ILogObj>): void {
    this.api.interceptors.request.use(
      (config: CacheRequestConfig) => handleRequest(config, logger),
      (error: AxiosError<string>) => handleRequestError(error, logger)
    );

    this.api.interceptors.response.use(
      (response: CacheAxiosResponse) => handleResponse(response, logger),
      (error: AxiosError<string>) => handleResponseError(error, logger)
    );
  }
}
