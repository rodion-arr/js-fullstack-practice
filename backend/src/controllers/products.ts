'use strict';

import { Response, Request } from 'express';
import { Product } from '../models/Product';
import { AddressInfo } from 'net';

/**
 * GET /products
 */
export const getProducts = async (req: Request, res: Response) => {
    try {
        const address = req.socket.address() as AddressInfo;
        const serviceUrl = `${req.protocol}://${req.hostname}:${address.port}`;
        const productList = await Product.find();

        // update product urls with hostname
        for (const product of productList) {
            product.previewImage = `${serviceUrl}${product.previewImage}`;
            product.detailImage = `${serviceUrl}${product.detailImage}`;
        }

        res.json({
            status: true,
            message: 'Product list retrieved successfully',
            data: {
                'products': productList
            }
        });
    } catch (e) {
        res.json({
            status: false,
            message: 'Failed to get Product list'
        });
    }
};
