import IUseCase from "../../shared/application/IUseCase";
import CreateUserRequest from "./UpdateTaskRequest";
import CreateUserReponse from "./UpdateTaskResponse";

export default class CreateUserUseCase implements IUseCase<CreateUserRequest, CreateUserReponse>  {
    async execute(request?: CreateUserRequest): Promise<CreateUserReponse> {
        throw new Error("Method not implemented.");
    }
}