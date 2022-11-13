import { pino } from 'pino';
import { AxiosError } from 'axios';
import { CacheAxiosResponse, CacheRequestConfig } from 'axios-cache-interceptor';

export const createLogger = (options: pino.LoggerOptions | pino.DestinationStream): pino.Logger => pino(options);

export const handleRequest = (config: CacheRequestConfig, logger: pino.Logger): CacheRequestConfig => {
  logger.info(`[ Request Config ] ${config.method?.toUpperCase() || ''} | ${config.url || ''}`);
  return config;
};

export const handleRequestError = (error: AxiosError, logger: pino.Logger): Promise<AxiosError> => {
  logger.error(`[ Request Error] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  throw error;
};

export const handleResponse = (response: CacheAxiosResponse, logger: pino.Logger): CacheAxiosResponse => {
  logger.info(response.data);
  return response;
};

export const handleResponseError = (error: AxiosError, logger: pino.Logger): Promise<AxiosError> => {
  logger.error(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  throw error;
};
