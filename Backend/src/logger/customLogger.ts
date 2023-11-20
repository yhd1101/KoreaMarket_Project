import {
  ConsoleLogger,
  ConsoleLoggerOptions,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import getLogLevels from '../utills/getLogLevels';

@Injectable()
class CustomLogger extends ConsoleLogger {
  constructor(
    context: string,
    options: ConsoleLoggerOptions,
    configService: ConfigService,
  ) {
    const environment = configService.get('NODE_ENV');
    super(context, {
      ...options,
      logLevels: getLogLevels(environment === 'production'),
    });
  }

  log(message: string, context?: string) {
    super.log.apply(this, [message, context]);
  }

  error(message: string, stack?: string, context?: string) {
    super.error.apply(this, [message, stack, context]);
  }

  warn(message: string, context?: string) {
    super.warn.apply(this, [message, context]);
  }

  debug(message: string, context?: string) {
    super.debug.apply(this, [message, context]);
  }

  verbose(message: string, context?: string) {
    super.verbose.apply(this, [message, context]);
  }
}

export default CustomLogger;
