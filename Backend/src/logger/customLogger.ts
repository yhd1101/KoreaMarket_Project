import {
  ConsoleLogger,
  ConsoleLoggerOptions,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import LogsService from '@root/logger/logger.service';
import getLogLevels from '@root/utills/getLogLevels';

@Injectable()
class CustomLogger extends ConsoleLogger {
  private readonly logsService: LogsService;
  constructor(
    context: string,
    options: ConsoleLoggerOptions,
    configService: ConfigService,
    logsService: LogsService,
  ) {
    const environment = configService.get('NODE_ENV');
    super(context, {
      ...options,
      logLevels: getLogLevels(environment === 'development'),
    });
    this.logsService = logsService;
  }

  log(message: string, context?: string) {
    super.log.apply(this, [message, context]);

    // this.logsService.createLog({
    //   message,
    //   context,
    //   level: 'log',
    // });
  }

  error(message: string, stack?: string, context?: string) {
    super.error.apply(this, [message, stack, context]);

    this.logsService.createLog({
      message,
      context,
      level: 'error',
    });
  }

  warn(message: string, context?: string) {
    super.warn.apply(this, [message, context]);

    this.logsService.createLog({
      message,
      context,
      level: 'error',
    });
  }

  debug(message: string, context?: string) {
    super.debug.apply(this, [message, context]);

    this.logsService.createLog({
      message,
      context,
      level: 'error',
    });
  }

  verbose(message: string, context?: string) {
    super.verbose.apply(this, [message, context]);

    this.logsService.createLog({
      message,
      context,
      level: 'error',
    });
  }
}

export default CustomLogger;
