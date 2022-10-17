import express from 'express';

import IAuthorizationToken from './IAuthorizationToken';

interface IAuthorizedExpressRequest extends express.Request {
    authorizationToken: IAuthorizationToken;
}

export default IAuthorizedExpressRequest;
