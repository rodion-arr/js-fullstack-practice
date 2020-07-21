import express from 'express';
import * as ordersController from '../controllers/orders';
import { asyncWrap } from '../middleware/error.middleware';

export const ordersRouter = express.Router();

// Order APIs
ordersRouter.post('/', asyncWrap(ordersController.postOrders));
