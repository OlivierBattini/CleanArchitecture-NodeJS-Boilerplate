import jsonwebtoken from 'jsonwebtoken';
import IAuthorizationToken from '../authorization/IAuthorizationToken';

import TokenEncodingStrategy from '../authorization/TokenEncodingStrategy';

export default class JwtEncodingStrategy extends TokenEncodingStrategy<IAuthorizationToken> {
    encodeToken(tokenClaims: any): string {
        return jsonwebtoken.sign(JSON.stringify(tokenClaims), this.secret);
    }
    decodeToken(jwtToken: string) {
        return JSON.parse(
            jsonwebtoken.decode(jwtToken) as string
        ) as IAuthorizationToken;
    }
    isValid(token: string): boolean {
        throw new Error('Method not implemented.');
    }
}
