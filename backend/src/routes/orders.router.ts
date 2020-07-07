import express from 'express';
import * as ordersController from '../controllers/orders';

export const ordersRouter = express.Router();

// Order APIs
ordersRouter.post('/', ordersController.postOrders);
