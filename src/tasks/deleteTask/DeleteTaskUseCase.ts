import IUseCase from "../../shared/application/IUseCase";
import CreateUserRequest from "./DeleteTaskRequest";
import CreateUserReponse from "./DeleteTaskResponse";

export default class CreateUserUseCase implements IUseCase<CreateUserRequest, CreateUserReponse>  {
    async execute(request?: CreateUserRequest): Promise<CreateUserReponse> {
        throw new Error("Method not implemented.");
    }
}