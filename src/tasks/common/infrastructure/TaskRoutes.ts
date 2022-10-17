import { Router, Request, Response } from 'express';

import { createTaskController } from '../../ioc';

const taskRouter = Router();

taskRouter.post('/', createTaskController.execute);

export default taskRouter;
