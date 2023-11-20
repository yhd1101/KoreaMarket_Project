import { LogLevel } from '@nestjs/common';

function getLogLevels(isProduction: boolean): LogLevel[] {
  if (isProduction) {
    return ['log', 'error', 'warn'];
  }
  return ['log', 'error', 'warn', 'debug', 'verbose'];
}

export default getLogLevels;
