import express from 'express';
import * as productsController from '../controllers/products';
import { asyncWrap } from '../middleware/error.middleware';

export const productsRouter = express.Router();

// Products APIs
productsRouter.get('/', asyncWrap(productsController.getProducts));
productsRouter.get('/:slug', asyncWrap(productsController.getProductBySlug));
