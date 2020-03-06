"use strict";

import { Response, Request } from "express";
import { Product } from "../models/Product";

/**
 * GET /products
 */
export const getProducts = async (req: Request, res: Response) => {
    try {
        const productList = await Product.find();
        res.json({
            status: true,
            message: "Product list retrieved successfully",
            data: {
                "products": productList
            }
        });
    } catch (e) {
        res.json({
            status: false,
            message: "Failed to get Product list"
        });
    }
};
