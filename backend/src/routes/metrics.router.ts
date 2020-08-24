import express from 'express';
import * as controllers from '../controllers';
import { asyncWrap } from '../middleware';

export const metricsRouter = express.Router();

metricsRouter.get('/', asyncWrap(controllers.prometheusMetrics));
