import { AxiosError } from 'axios';
import { CacheAxiosResponse, CacheRequestConfig } from 'axios-cache-interceptor';
import { ISettingsParam, Logger } from 'tslog';

export const createLogger = (options?: ISettingsParam<never>) => new Logger(options);

export const handleRequest = (requestConfig: CacheRequestConfig, logger: Logger<never>): CacheRequestConfig => {
  logger.info(`[Request Config] ${requestConfig.method?.toUpperCase() || ''} | ${requestConfig.url || ''}`);
  return requestConfig;
};

export const handleRequestError = (error: AxiosError, logger: Logger<never>): Promise<AxiosError> => {
  logger.error(`[Request Error] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  throw error;
};

export const handleResponse = (response: CacheAxiosResponse, logger: Logger<never>): CacheAxiosResponse => {
  logger.info(response.data);
  return response;
};

export const handleResponseError = (error: AxiosError, logger: Logger<never>): Promise<AxiosError> => {
  logger.error(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  throw error;
};
