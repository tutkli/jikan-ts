import axios, { AxiosError } from "axios";
import {
  AxiosCacheInstance,
  CacheAxiosResponse,
  CacheOptions,
  InternalCacheRequestConfig,
  setupCache
} from "axios-cache-interceptor";
import { handleRequest, handleRequestError, handleResponse, handleResponseError } from "../config";
import { BaseURL } from "../constants";

/**
 * **Client Args**
 *
 * Used to pass optional configuration for logging and cache to the clients.
 */
export interface ClientArgs {
  /**
   * **EnableLogging**
   * Enables logging request responses.
   */
  enableLogging: boolean;
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
 * **Base Client**
 *
 * This client is responsible for creating an Axios Instance and the cache and logging configurations
 */
export abstract class BaseClient {
  private api: AxiosCacheInstance;

  constructor(clientOptions: Partial<ClientArgs> = {}) {
    this.api = setupCache(
      axios.create({
        baseURL: clientOptions.baseURL ?? BaseURL.REST,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
      { ...clientOptions.cacheOptions, cacheTakeover: false },
    );

    if (clientOptions.enableLogging) {
      this.addLoggingInterceptors();
    }
  }

  protected async getResource<T>(
    endpoint: string,
    identifiers: { [key in string]: unknown } = {},
    params: { [key in string]: unknown } = {},
  ): Promise<T> {
    return (
      await this.api.get<T>(this.replaceIdentifiers(endpoint, identifiers), {
        params,
      })
    ).data;
  }

  private replaceIdentifiers(
    path: string,
    params: { [key in string]: unknown },
  ): string {
    let endpoint = path;
    for (const param of Object.keys(params)) {
      if (!RegExp(`{${param}}`).exec(endpoint))
        throw new Error(`Path does not contain "${param}" parameter.`);
      endpoint = endpoint.replace(`{${param}}`, String(params[param]));
    }
    return endpoint;
  }

  private addLoggingInterceptors(): void {
    this.api.interceptors.request.use(
      (config: InternalCacheRequestConfig) => handleRequest(config),
      (error: AxiosError<string>) => handleRequestError(error),
    );

    this.api.interceptors.response.use(
      (response: CacheAxiosResponse) => handleResponse(response),
      (error: AxiosError<string>) => handleResponseError(error),
    );
  }
}
