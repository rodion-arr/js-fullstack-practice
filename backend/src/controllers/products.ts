'use strict';

import { Response, Request } from 'express';
import { Product, ProductDocument } from '../models';
import { AddressInfo } from 'net';
import { NotFoundError } from '../errors';

/**
 * Formats Products URL to absolute format
 */
const formatImageUrl = (product: ProductDocument, req: Request) => {
    const address = req.socket.address() as AddressInfo;
    const serviceUrl = `${req.protocol}://${req.hostname}:${address.port}`;

    product.previewImage = `${serviceUrl}${product.previewImage}`;
    product.detailImage = `${serviceUrl}${product.detailImage}`;
};

/**
 * GET /products
 */
export const getProducts = async (req: Request, res: Response) => {
    const productList: ProductDocument[] = await Product.find();

    // update product urls with hostname
    for (const product of productList) {
        formatImageUrl(product, req);
    }

    res.json({
        status: true,
        message: 'Product list retrieved successfully',
        data: {
            'products': productList
        }
    });
};

/**
 * GET /products/:slug
 */
export const getProductBySlug = async (req: Request, res: Response) => {
    const searchedSlug = req.params.slug;
    const product: ProductDocument = await Product.findOne({ slug: searchedSlug });

    if (product) {
        formatImageUrl(product, req);

        res.json({
            status: true,
            message: 'Product retrieved successfully',
            data: {
                'product': product
            }
        });
    } else {
        throw new NotFoundError(`Product ${searchedSlug} not found`);
    }
};
