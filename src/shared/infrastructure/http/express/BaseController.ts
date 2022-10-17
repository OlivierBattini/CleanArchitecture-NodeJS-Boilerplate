import * as express from 'express';

export default abstract class BaseController {
    protected abstract executeImpl(
        request: express.Request,
        response: express.Response
    ): Promise<void | any>;

    public async execute(
        request: express.Request,
        response: express.Response
    ): Promise<void> {
        try {
            await this.executeImpl(request, response);
        } catch (err) {
            console.log(`[BaseController]: Uncaught controller error`);
            console.log(err);
            this.fail(response, 'An unexpected error occurred');
        }
    }

    public static jsonResponse(
        response: express.Response,
        code: number,
        message: string
    ) {
        return response.status(code).json({ message });
    }

    public ok<T>(response: express.Response, dto?: T) {
        if (!!dto) {
            response.type('application/json');
            return response.status(200).json(dto);
        } else {
            return response.sendStatus(200);
        }
    }

    public created<T>(response: express.Response, dto?: T) {
        if (!!dto) {
            response.type('application/json');
            return response.status(201).json(dto);
        } else {
            return response.sendStatus(201);
        }
    }

    public badRequest(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            400,
            message ? message : 'Bad request'
        );
    }

    public unauthorized(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            401,
            message ? message : 'Unauthorized'
        );
    }

    public paymentRequired(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            402,
            message ? message : 'Payment required'
        );
    }

    public forbidden(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            403,
            message ? message : 'Forbidden'
        );
    }

    public notFound(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            404,
            message ? message : 'Not found'
        );
    }

    public conflict(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            409,
            message ? message : 'Conflict'
        );
    }

    public tooMany(response: express.Response, message?: string) {
        return BaseController.jsonResponse(
            response,
            429,
            message ? message : 'Too many requests'
        );
    }

    public todo(response: express.Response) {
        return BaseController.jsonResponse(response, 400, 'TODO');
    }

    public fail(response: express.Response, error: Error | string) {
        console.log(error);
        return response.status(500).json({
            message: error.toString(),
        });
    }
}
