import * as express from 'express';

import { BaseMiddleware } from '../BaseMiddleware';

export class EnsureAthenticatedMiddleware extends BaseMiddleware {
    protected executeImpl(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): Promise<any> {
        // TODO
        // 1. Check JWT token against authorization service
        // 2. Add Token to express request as AuthorizedExpressRequest
        throw new Error('Method not implemented.');
    }
}
