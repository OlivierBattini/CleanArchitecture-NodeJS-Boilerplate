import CreateUserUseCase from './DeleteTaskUseCase';
import CreateUserController from './DeleteTaskController';
import userRepo from '../../repos';

// Inversion of control

const createUserUseCase = new CreateUserUseCase(userRepo);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };