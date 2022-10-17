import IAuthorizationService from '../../http/express/authorization/IAuthorizationService';
import IAuthorizationToken from '../../http/express/authorization/IAuthorizationToken';

class SessionStore {
    // TODO
}

export default class InMemoryAuthorizationService
    implements IAuthorizationService
{
    saveSession(session: IAuthorizationToken): void {
        throw new Error('Method not implemented.');
    }
    verifySession(session: IAuthorizationToken): boolean {
        throw new Error('Method not implemented.');
    }
    destroySession(session: IAuthorizationToken): void {
        throw new Error('Method not implemented.');
    }
}
