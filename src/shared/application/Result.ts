export class Result<T> {
    public isSuccess: boolean;
    public isFailure: boolean;
    private error: T | string;
    private _value: T;

    public constructor(isSuccess: boolean, error?: T | string, value?: T) {
        if (isSuccess && error) {
            throw new Error(
                'InvalidOperation: A result cannot be successful and contain an error'
            );
        }
        if (!isSuccess && !error) {
            throw new Error(
                'InvalidOperation: A failing result needs to contain an error message'
            );
        }

        this.isSuccess = isSuccess;
        this.isFailure = !isSuccess;
        this.error = error;
        this._value = value;

        Object.freeze(this);
    }

    public getValue(): T {
        if (!this.isSuccess) {
            console.log(this.error);
            throw new Error(
                "Can't get the value of an error result. Use 'errorValue' instead."
            );
        }

        return this._value;
    }

    public getErrorValue(): T {
        return this.error as T;
    }

    public static success<U>(value?: U): Result<U> {
        return new Result<U>(true, null, value);
    }

    public static failure<U>(error: string): Result<U> {
        return new Result<U>(false, error);
    }

    public static combine(results: Result<any>[]): Result<any> {
        for (let result of results) {
            if (result.isFailure) return result;
        }
        return Result.success();
    }
}

export type Either<F, S> = Failure<F, S> | Success<F, S>;

export class Failure<F, S> {
    readonly value: F;

    constructor(value: F) {
        this.value = value;
    }

    isFailure(): this is Failure<F, S> {
        return true;
    }

    isSuccess(): this is Success<F, S> {
        return false;
    }
}

export class Success<F, S> {
    readonly value: S;

    constructor(value: S) {
        this.value = value;
    }

    isFailure(): this is Failure<F, S> {
        return false;
    }

    isSuccess(): this is Success<F, S> {
        return true;
    }
}

export const failure = <F, S>(f: F): Either<F, S> => {
    return new Failure(f);
};

export const success = <F, S>(s: S): Either<F, S> => {
    return new Success<F, S>(s);
};
