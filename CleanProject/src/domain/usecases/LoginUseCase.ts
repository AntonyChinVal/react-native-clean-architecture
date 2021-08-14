import { injectable } from "inversify";
import UseCase from "../../domain/core/UseCase";
import User from "../../domain/entities/User";
import { container } from "../../inject_container/injection";
import { UserRepository, USER_REPOSITORY } from '../repositories/UserRepository';

export interface LoginUseCase extends UseCase<User, LoginUseCaseParams>{}
export const LOGIN_USE_CASE = "LOGIN_USE_CASE";

@injectable()
export class LoginUseCaseImpl implements  LoginUseCase{

    async execute(params: LoginUseCaseParams): Promise<User> {
        let userRepository = container.get<UserRepository>(USER_REPOSITORY)
        await userRepository.authenticate(params.email,params.password);
        let user : User = await userRepository.getUser();
        return user;
    }

}

export class LoginUseCaseParams {
    email : string
    password : string

    constructor(){
        this.email = ''
        this.password = ''
    }
  }