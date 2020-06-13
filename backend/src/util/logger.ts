import winston from 'winston';
import { Logger } from 'winston';

const logger: Logger = winston.createLogger({
    transports: [
        new winston.transports.Console({ level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export default logger;
