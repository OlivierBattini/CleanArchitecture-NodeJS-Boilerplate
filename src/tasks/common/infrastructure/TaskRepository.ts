import Task from '../domain/Task';
import TaskId from '../domain/TaskId';
import TaskDao from '../../../shared/infrastructure/data/sequelize/models/Task.model';
import ITaskRepository from '../interfaces/ITaskRepository';
import TaskFactory from './TaskFactory';
import { Result } from '../../../shared/application/Result';

export default class TaskRepository implements ITaskRepository {
    getTaskById(taskId: TaskId): Promise<Task> {
        return TaskDao
            .findByPk(taskId.toString())
            .then(task => {
                const result = new TaskFactory().fromDao(task);
                if (result.isSuccess) {
                    return result.getValue();
                } else {
                    throw new Error(result.getErrorValue());
                }
            });
    }
    getAllTasks(): Promise<Task[]> {
        throw new Error('Method not implemented.');
    }
    createTask(description: string): Promise<Task> {
        throw new Error('Method not implemented.');
    }
    updateTask(task: Task): Promise<void> {
        throw new Error('Method not implemented.');
    }
    deleteTask(taskId: TaskId): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
