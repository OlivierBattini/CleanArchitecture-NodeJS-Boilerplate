import { Guard } from '../../../shared/application/Guard';
import { Result } from '../../../shared/application/Result';
import ValueObject from '../../../shared/domain/ValueObject';

interface ITaskCreatedAtProps {
    createdAt: Date;
}

export default class TaskCreatedAt extends ValueObject<ITaskCreatedAtProps> {
    get value(): Date {
        return this.props.createdAt;
    }

    private constructor(props: ITaskCreatedAtProps) {
        super(props);
    }

    public static create(props: ITaskCreatedAtProps): Result<TaskCreatedAt> {
        const nullResult = Guard.againstNullOrUndefined(
            props.createdAt,
            'createdAt'
        );
        if (nullResult.isFailure) {
            props.createdAt = new Date();
        }

        return Result.success<TaskCreatedAt>(new TaskCreatedAt(props));
    }
}
