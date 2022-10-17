import { Result } from "../../application/Result";

interface IDtoMappable<Entity, Dto> {
    toDto(entity: Entity): Dto;
    fromDto(dto: Dto): Result<Entity>;
}

export default IDtoMappable;