import { Errors } from '../../shared/application/Errors';
import IUseCase from '../../shared/application/IUseCase';
import { failure, Result, success } from '../../shared/application/Result';
import Task from '../common/domain/Task';
import TaskId from '../common/domain/TaskId';
import TaskFactory from '../common/infrastructure/TaskFactory';
import ITaskRepository from '../common/interfaces/ITaskRepository';
import CreateTaskRequest from './CreateTaskRequest';
import CreateTaskResponse from './CreateTaskResponse';

export default class CreateTaskUseCase
    implements IUseCase<CreateTaskRequest, CreateTaskResponse>
{
    constructor(private _taskRepository: ITaskRepository) {}

    async execute(request?: CreateTaskRequest): Promise<CreateTaskResponse> {
        try {
            const task: Task = await this._taskRepository.createTask(
                request.description
            );
            return success(Result.success(task));
        } catch (error) {
            return failure(new Errors.UnexpectedError(error));
        }
    }
}