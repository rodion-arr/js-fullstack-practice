import express from 'express';
import * as productsController from '../controllers/products';

export const productsRouter = express.Router();

// Products APIs
productsRouter.get('/', productsController.getProducts);
productsRouter.get('/:slug', productsController.getProductBySlug);
