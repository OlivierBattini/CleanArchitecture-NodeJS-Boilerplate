import * as express from 'express';

export abstract class BaseMiddleware {
    protected abstract executeImpl(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): Promise<void | any>;

    public async execute(
        request: express.Request,
        response: express.Response,
        next: express.NextFunction
    ): Promise<void> {
        try {
            await this.executeImpl(request, response, next);
        } catch (error) {
            console.log('[BaseMiddleware]: Uncaught controller error');
            console.log(error);
            BaseMiddleware.endRequest(
                500,
                'An unexpected error occurred',
                response
            );
        }
    }

    private static endRequest(
        status: 400 | 401 | 403 | 500,
        message: string,
        response: any
    ): any {
        return response.status(status).send({ message });
    }
}
