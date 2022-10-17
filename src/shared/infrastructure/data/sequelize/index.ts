import { Sequelize } from 'sequelize-typescript';

import Task from './models/Task.model';

const sequelize = new Sequelize(process.env.DB_URL, {
    models: [__dirname + '/models/**/*.model.ts'],
});

export { sequelize, Task };
