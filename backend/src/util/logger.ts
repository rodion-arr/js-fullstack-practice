import winston from 'winston';
import { Logger, format } from 'winston';
const { combine, timestamp } = format;

const logger: Logger = winston.createLogger({
    format: combine(
        timestamp(),
        format.json()
    ),
    transports: [
        new winston.transports.Console({ level: process.env.NODE_ENV === 'production' ? 'info' : 'debug' }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.debug('Logging initialized at debug level');
}

export default logger;
