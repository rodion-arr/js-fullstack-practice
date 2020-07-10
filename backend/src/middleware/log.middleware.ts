import { Request, Response } from 'express';
import logger from '../util/logger';

/**
 * Logs incoming requests and response status code
 * @param req
 * @param res
 * @param next
 */
export const requestLogger = (req: Request, res: Response, next: () => void) => {
    const url = req.url;
    const method = req.method;

    logger.info(`Request to ${method} ${url}`, {'query': req.query, 'body': req.body});

    res.on('finish', () => {
        logger.info(`Response to ${method} ${url}`, {'status': res.statusCode});
    });

    next();
};
