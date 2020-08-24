'use strict';

import { Response, Request } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import prometheus from 'prom-client';

export const prometheusMetrics = async (req: Request, res: Response) => {
    try {
        res.set('Content-Type', prometheus.register.contentType);
        res.end(await prometheus.register.metrics());
    } catch (ex) {
        res.status(INTERNAL_SERVER_ERROR).end(ex);
    }
};
