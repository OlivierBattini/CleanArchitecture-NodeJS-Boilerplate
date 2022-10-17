import express from 'express';

import BaseController from '../../shared/infrastructure/http/express/BaseController';
import IUseCase from '../../shared/application/IUseCase';
import CreateUserRequest from './UpdateTaskRequest';
import CreateUserReponse from './UpdateTaskResponse';

export default class CreateUserController extends BaseController {
    constructor(
        private _useCase: IUseCase<CreateUserRequest, CreateUserReponse>
    ) {
        super();
    }

    protected async executeImpl(
        request: express.Request,
        response: express.Response
    ): Promise<any> {
        
    }
}
