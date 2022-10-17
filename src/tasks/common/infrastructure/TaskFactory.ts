import IDaoMappable from '../../../shared/infrastructure/abstractions/IDaoMappable';
import IDtoMappable from '../../../shared/infrastructure/abstractions/IDtoMappable';
import { failure, Result } from '../../../shared/application/Result';
import { Task as TaskDao } from '../../../shared/infrastructure/data/sequelize';
import Task from '../domain/Task';
import ITaskDto from '../interfaces/ITaskDto';
import ITaskDao from '../interfaces/ITaskDao';
import TaskId from '../domain/TaskId';
import TaskDescription from '../domain/TaskDescription';
import TaskCreatedAt from '../domain/TaskCreatedAt';

interface ITaskFactory
    extends IDtoMappable<Task, ITaskDto>,
        IDaoMappable<Task, ITaskDao> {}

export default class TaskFactory implements ITaskFactory {
    toDto(entity: Task): ITaskDto {
        const dto: ITaskDto = {
            id: entity.id.toString(),
            description: entity.description.value,
            done: entity.done,
            createdAt: entity.createdAt.value,
        };
        return dto;
    }

    fromDto(dto: ITaskDto): Result<Task> {
        const taskDescriptionOrError: Result<TaskDescription> =
            TaskDescription.create({ description: dto.description });

        const taskCreatedAtOrError: Result<TaskCreatedAt> =
            TaskCreatedAt.create({ createdAt: dto.createdAt });

        return Task.create(
            {
                description: taskDescriptionOrError.getValue(),
                done: dto.done,
                createdAt: taskCreatedAtOrError.getValue(),
            },
            new TaskId(dto.id)
        );
    }

    toDao(entity: Task): TaskDao {
        const daoProps: ITaskDao = {
            id: entity.id.toString(),
            description: entity.description.value,
            done: entity.done,
            createdAt: entity.createdAt.value,
        };
        return TaskDao.build(daoProps);
    }

    fromDao(dao: ITaskDao): Result<Task> {
        const taskDescriptionOrError: Result<TaskDescription> =
            TaskDescription.create({ description: dao.description });

        const taskCreatedAtOrError: Result<TaskCreatedAt> =
            TaskCreatedAt.create({ createdAt: dao.createdAt });

        return Task.create(
            {
                description: taskDescriptionOrError.getValue(),
                done: dao.done,
                createdAt: taskCreatedAtOrError.getValue(),
            },
            new TaskId(dao.id)
        );
    }
}
