interface ITaskDao {
    id: string,
    description: string,
    done: boolean,
    createdAt: Date,
}

export default ITaskDao;