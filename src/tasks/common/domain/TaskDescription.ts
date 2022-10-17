import { Guard } from '../../../shared/application/Guard';
import { Result } from '../../../shared/application/Result';
import ValueObject from '../../../shared/domain/ValueObject';

interface ITaskDescriptionProps {
    description: string;
}

export default class TaskDescription extends ValueObject<ITaskDescriptionProps> {
    public static readonly minLength: number = 3;
    public static readonly maxLength: number = 64;

    get value(): string {
        return this.props.description;
    }

    private constructor(props: ITaskDescriptionProps) {
        super(props);
    }

    public static create(
        props: ITaskDescriptionProps
    ): Result<TaskDescription> {
        const nullResult = Guard.againstNullOrUndefined(
            props.description,
            'description'
        );
        if (nullResult.isFailure) {
            return Result.failure<TaskDescription>(nullResult.getErrorValue());
        }

        const minLengthResult = Guard.againstAtLeast(
            this.minLength,
            props.description
        );
        if (minLengthResult.isFailure) {
            return Result.failure<TaskDescription>(
                minLengthResult.getErrorValue()
            );
        }
        const maxLengthResult = Guard.againstAtMost(
            this.maxLength,
            props.description
        );
        if (maxLengthResult.isFailure) {
            return Result.failure<TaskDescription>(
                maxLengthResult.getErrorValue()
            );
        }

        return Result.success<TaskDescription>(new TaskDescription(props));
    }
}
