import express from 'express';
import * as controllers from '../controllers';
import { asyncWrap } from '../middleware';

export const ordersRouter = express.Router();

// Order APIs
ordersRouter.post('/', asyncWrap(controllers.postOrders));
