import { Request, Response } from 'express';
import { UNPROCESSABLE_ENTITY, INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import logger from '../util/logger';
import { NotFoundError } from '../errors';
import { ValidationError } from '../errors';

/**
 * Middlware for handling validation errors from controllers
 */
export const validationErrorMiddleware = (error: Error, req: Request, res: Response, next: any) => {
    if (error instanceof ValidationError) {
        const url = req.url;
        const method = req.method;
        const validationErrors = error.getValidationErrors();

        logger.error(`Request to ${method} ${url} VALIDATION ERROR`, { message: error.message, errors: validationErrors});

        const failedResponse = {
            status: false,
            message: error.message,
        };

        res.status(UNPROCESSABLE_ENTITY);
        return res.json({
            ...failedResponse,
            data: { 'errors': validationErrors }
        });
    }

    next(error);
};

/**
 * Middlware for handling 404 errors from controllers
 */
export const notFoundErrorMiddleware = (error: Error, req: Request, res: Response, next: any) => {
    if (error instanceof NotFoundError) {
        const url = req.url;
        const method = req.method;

        logger.error(`Request to ${method} ${url} NOT FOUND`, { message: error.message });

        const failedResponse = {
            status: false,
            message: error.message,
        };

        res.status(NOT_FOUND);
        return res.json(failedResponse);
    }

    next(error);
};

/**
 * Middlware for handling general errors from controllers
 */
export const generalErrorMiddleware = (error: Error, req: Request, res: Response, next: any) => {
    const url = req.url;
    const method = req.method;

    logger.error(`Request to ${method} ${url} FAILED`, { error: error.message });
    res.status(INTERNAL_SERVER_ERROR);
    return res.json({
        status: false,
        message: error.message,
    });
};
