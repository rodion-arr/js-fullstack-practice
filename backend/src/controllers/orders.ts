'use strict';

import { Response, Request } from 'express';
import { CREATED } from 'http-status-codes';
import { check, validationResult } from 'express-validator';
import { Order } from '../models';
import { ValidationError } from '../errors';

/**
 * POST /orders
 */
export const postOrders = async (req: Request, res: Response) => {
    await check('userName').isLength({ min: 2, max: 100 }).run(req);
    await check('email').isEmail().run(req);
    await check('phone').isMobilePhone('any').run(req);
    await check('comment').isLength({ max: 500 }).run(req);
    await check('product').not().isEmpty().run(req);

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new ValidationError('Failed to add order', errors.array());
    }

    const order = new Order(req.body);
    await order.save();

    res.status(CREATED);
    return res.json({
        status: true,
        message: 'Order added successfully',
        data: { 'order': order }
    });
};
