import { Guard } from '../../../shared/application/Guard';
import { Result } from '../../../shared/application/Result';
import Entity from '../../../shared/domain/Entity';
import UniqueEntityID from '../../../shared/domain/UniqueEntityID';
import TaskCreatedAt from './TaskCreatedAt';
import TaskDescription from './TaskDescription';
import TaskId from './TaskId';

interface TaskProps {
    description: TaskDescription;
    done: boolean;
    createdAt: TaskCreatedAt;
}

export default class Task extends Entity<TaskProps> {
    get id(): UniqueEntityID {
        return this._id;
    }

    get description(): TaskDescription {
        return this.props.description;
    }

    set description(description: TaskDescription) {
        this.props.description = description;
    }

    get done(): boolean {
        return this.props.done;
    }

    set done(done: boolean) {
        this.props.done = done;
    }

    get createdAt(): TaskCreatedAt {
        return this.props.createdAt;
    }

    private constructor(props: TaskProps, id?: TaskId) {
        super(props, id);
    }

    public static create(props: TaskProps, id?: TaskId): Result<Task> {
        const nullResult = Guard.againstNullOrUndefinedBulk([
            { argument: props.description, argumentName: 'description' },
            { argument: props.done, argumentName: 'done' },
            { argument: props.createdAt, argumentName: 'createdAt' },
        ]);
        if (nullResult.isFailure) {
            return Result.failure<Task>(nullResult.getErrorValue());
        }

        const newTask = new Task(props, id);
        return Result.success<Task>(newTask);
    }
}
