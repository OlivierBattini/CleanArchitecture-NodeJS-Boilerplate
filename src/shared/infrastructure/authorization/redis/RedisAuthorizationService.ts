import IAuthorizationService from '../../http/express/authorization/IAuthorizationService';
import IAuthorizationToken from '../../http/express/authorization/IAuthorizationToken';

export default class RedisAuthorizationService
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
