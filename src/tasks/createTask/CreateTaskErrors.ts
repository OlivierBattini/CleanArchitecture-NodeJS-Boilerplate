import { Errors } from '../../shared/application/Errors';
import { Result } from '../../shared/application/Result';
import TaskId from '../common/domain/TaskId';

export namespace CreateTaskErrors {
    /*export class TaskAlreadyExistsError extends Result<Errors.UseCaseError> {
        constructor(id: TaskId) {
            super(false, {
                message: `The task ${id} already exists`,
            } as Errors.UseCaseError);
        }
    }*/
}
