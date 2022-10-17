import { Result } from "../../application/Result";

interface IDaoMappable<Entity, Dao> {
    toDao(entity: Entity): Dao;
    fromDao(dao: Dao): Result<Entity>;
}

export default IDaoMappable;