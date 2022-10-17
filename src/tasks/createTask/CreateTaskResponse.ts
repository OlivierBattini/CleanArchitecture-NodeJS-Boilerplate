import { Errors } from '../../shared/application/Errors';
import { Either, Result } from '../../shared/application/Result';
import Task from '../common/domain/Task';

type CreateTaskResponse = Either<
    Errors.UnexpectedError | Result<any>,
    Result<Task>
>;

export default CreateTaskResponse;
