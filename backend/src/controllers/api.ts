"use strict";

import { Response, Request } from "express";

/**
 * GET /api
 */
export const getApi = (req: Request, res: Response) => {
    res.json({
        hello: "world"
    });
};
