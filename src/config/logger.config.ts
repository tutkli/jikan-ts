import { AxiosError } from 'axios';
import { CacheAxiosResponse, CacheRequestConfig } from 'axios-cache-interceptor';
import { ISettingsParam, Logger } from 'tslog';
import { ILogObj } from 'tslog/dist/types/interfaces';

export interface LoggerOptions {
  enabled: boolean;
  settings?: ISettingsParam<ILogObj>;
}

export const DEFAULT_LOGGER_SETTINGS: ISettingsParam<ILogObj> = {
  prettyLogTemplate: '{{yyyy}}.{{mm}}.{{dd}} {{hh}}:{{MM}}:{{ss}}:{{ms}} {{logLevelName}} [{{name}}] ',
  name: 'Jikan-ts Logger',
};

export const createLogger = (options: ISettingsParam<ILogObj> = DEFAULT_LOGGER_SETTINGS): Logger<ILogObj> =>
  new Logger(options);

export const handleRequest = (
  requestConfig: CacheRequestConfig,
  logger: Logger<ILogObj> | undefined
): CacheRequestConfig => {
  if (logger !== undefined) {
    logger.info(`[Request Config] ${requestConfig.method?.toUpperCase() || ''} | ${requestConfig.url || ''}`);
  }
  return requestConfig;
};

export const handleRequestError = (error: AxiosError, logger: Logger<ILogObj> | undefined): Promise<AxiosError> => {
  if (logger !== undefined) {
    logger.error(`[Request Error] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  }
  throw error;
};

export const handleResponse = (
  response: CacheAxiosResponse,
  logger: Logger<ILogObj> | undefined
): CacheAxiosResponse => {
  if (logger !== undefined) {
    logger.info();
    console.log(response.data);
  }
  return response;
};

export const handleResponseError = (error: AxiosError, logger: Logger<ILogObj> | undefined): Promise<AxiosError> => {
  if (logger !== undefined) {
    logger.error(`[ Response Error ] CODE ${error.code || 'UNKNOWN'} | ${error.message}`);
  }
  throw error;
};
