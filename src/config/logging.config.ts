import { AxiosError } from 'axios';
import {
  CacheAxiosResponse,
  InternalCacheRequestConfig,
} from 'axios-cache-interceptor';

export const handleRequest = (
  requestConfig: InternalCacheRequestConfig,
): InternalCacheRequestConfig => {
  console.info(
    `[Request] ${requestConfig.method?.toUpperCase() ?? ''} | ${
      requestConfig.url ?? ''
    }`,
  );
  return requestConfig;
};

export const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(
    `[Request Error] CODE ${error.code ?? 'UNKNOWN'} | ${error.message}`,
  );
  throw error;
};

export const handleResponse = (
  response: CacheAxiosResponse,
): CacheAxiosResponse => {
  console.info(
    `[Request Response] ${response.config.method?.toUpperCase() ?? ''} | ${
      response.config.url ?? ''
    }`,
    response.data,
  );
  return response;
};

export const handleResponseError = (error: AxiosError): Promise<AxiosError> => {
  console.error(
    `[ Response Error ] CODE ${error.code ?? 'UNKNOWN'} | ${error.message}`,
  );
  throw error;
};
