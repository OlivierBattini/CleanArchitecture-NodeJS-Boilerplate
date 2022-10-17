import CreateUserUseCase from './UpdateTaskUseCase';
import CreateUserController from './UpdateTaskController';
import userRepo from '../../repos';

// Inversion of control

const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };