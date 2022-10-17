import TaskRepository from "./common/infrastructure/TaskRepository";
import CreateTaskUseCase from "./createTask/CreateTaskUseCase";
import CreateTaskController from "./createTask/CreateTaskController";

const taskRepository: TaskRepository = new TaskRepository();
const createTaskUseCase: CreateTaskUseCase = new CreateTaskUseCase(taskRepository);
const createTaskController: CreateTaskController = new CreateTaskController(createTaskUseCase);

export { taskRepository, createTaskUseCase, createTaskController };