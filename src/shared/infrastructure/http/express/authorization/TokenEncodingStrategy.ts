export default abstract class TokenEncodingStrategy<C> {
    constructor(protected secret: string) {}
    abstract encodeToken(tokenClaims: C): string;
    abstract decodeToken(token: string): C;
    abstract isValid(token: string): boolean;
}
