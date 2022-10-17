import { Model } from 'sequelize';
import {
    AllowNull,
    Column,
    DataType,
    PrimaryKey,
    Table,
} from 'sequelize-typescript';

import ITaskDao from '../../../../../tasks/common/interfaces/ITaskDao';

@Table
class Task extends Model<ITaskDao> implements ITaskDao {
    @PrimaryKey
    @Column(DataType.UUIDV4)
    id: string;

    @Column(DataType.TEXT)
    @AllowNull(false)
    description: string;

    @Column(DataType.BOOLEAN)
    @AllowNull(false)
    done: boolean;

    @Column(DataType.DATE)
    @AllowNull(false)
    createdAt: Date;
}

export default Task;
