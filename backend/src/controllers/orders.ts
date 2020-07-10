'use strict';

import { Response, Request } from 'express';
import logger from '../util/logger';
import { CREATED, UNPROCESSABLE_ENTITY } from 'http-status-codes';
import { check, validationResult } from 'express-validator';
import { Order } from '../models/Order';

/**
 * POST /orders
 */
export const postOrders = async (req: Request, res: Response) => {
    await check('userName').isLength({ min: 2, max: 100 }).run(req);
    await check('email').isEmail().run(req);
    await check('phone').isMobilePhone('any').run(req);
    await check('comment').isLength({ max: 500 }).run(req);
    await check('product').not().isEmpty().run(req);

    const failedResponse = {
        status: false,
        message: 'Failed to add order',
    };

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(UNPROCESSABLE_ENTITY);
        return res.json({
            ...failedResponse,
            data: { 'errors': errors.array() }
        });
    }

    try {
        const order = new Order(req.body);
        await order.save();

        res.status(CREATED);
        return res.json({
            status: true,
            message: 'Order added successfully',
            data: { 'order': order }
        });
    } catch (e) {
        logger.error('POST /orders request error', {error: e.message});
        return res.json(failedResponse);
    }
};
