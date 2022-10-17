import { Result } from './Result';

export namespace Errors {
    export class UnexpectedError extends Result<UseCaseError> {
        public constructor(err: any) {
            super(false, {
                message: `An unexpected error occurred.`,
                error: err,
            } as UseCaseError);
            console.log(`[AppError]: An unexpected error occurred`);
            console.error(err);
        }

        public static create(err: any): UnexpectedError {
            return new UnexpectedError(err);
        }
    }

    interface IUseCaseError {
        message: string;
    }

    export abstract class UseCaseError implements IUseCaseError {
        public readonly message: string;

        constructor(message: string) {
            this.message = message;
        }
    }
}
