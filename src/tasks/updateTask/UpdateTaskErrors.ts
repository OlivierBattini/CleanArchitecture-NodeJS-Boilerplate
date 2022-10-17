import { Result } from '../../shared/application/Result';
import { Errors } from '../../shared/application/Errors';

export namespace CreateUserErrors {
    export class EmailAlreadyExistsError extends Result<Errors.UseCaseError> {
        constructor(email: string) {
            super(false, {
                message: `The email ${email} associated with this account already exists`,
            } as Errors.UseCaseError);
        }
    }
}
