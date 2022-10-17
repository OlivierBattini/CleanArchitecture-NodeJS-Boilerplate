import Task from '../domain/Task';
import TaskId from '../domain/TaskId';

interface ITaskRepository {
    getTaskById(taskId: TaskId): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    createTask(description: string): Promise<Task>;
    updateTask(task: Task): Promise<void>;
    deleteTask(taskId: TaskId): Promise<void>;
}

export default ITaskRepository;
