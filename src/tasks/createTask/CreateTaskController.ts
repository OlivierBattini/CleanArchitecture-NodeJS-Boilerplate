import express from 'express';

import BaseController from '../../shared/infrastructure/http/express/BaseController';
import IUseCase from '../../shared/application/IUseCase';
import CreateTaskRequest from './CreateTaskRequest';
import CreateTaskResponse from './CreateTaskResponse';
import { TextUtils } from '../../shared/utils/TextUtils';

export default class CreateTaskController extends BaseController {
    constructor(
        private _useCase: IUseCase<CreateTaskRequest, CreateTaskResponse>
    ) {
        super();
    }

    protected async executeImpl(
        request: express.Request,
        response: express.Response
    ): Promise<any> {
        let req: CreateTaskRequest = request.body as CreateTaskRequest;
        req = {
            description: TextUtils.sanitize(req.description),
        };

        const result = await this._useCase.execute(req);

        if (result.isFailure) {
            return this.fail(response, result.value.getErrorValue().message);
        } else {
            return this.created(response, result.value.getValue());
        }
    }
}
