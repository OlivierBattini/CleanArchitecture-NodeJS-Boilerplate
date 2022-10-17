import IAuthorizationToken from './IAuthorizationToken';

interface IAuthorizationService {
    saveSession(session: IAuthorizationToken): void;
    verifySession(session: IAuthorizationToken): boolean;
    destroySession(session: IAuthorizationToken): void;
}

export default IAuthorizationService;
