import express from 'express';

import taskRouter from '../../../../../../tasks/common/infrastructure/TaskRoutes';

const v1Router = express.Router();

v1Router.use('/tasks', taskRouter);

export { v1Router };