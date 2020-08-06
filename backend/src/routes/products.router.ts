import express from 'express';
import * as controllers from '../controllers';
import { asyncWrap } from '../middleware';

export const productsRouter = express.Router();

// Products APIs
productsRouter.get('/', asyncWrap(controllers.getProducts));
productsRouter.get('/:slug', asyncWrap(controllers.getProductBySlug));
