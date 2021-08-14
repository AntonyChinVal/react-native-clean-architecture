import { Container } from "inversify";
import "reflect-metadata";
import { UserRepository, USER_REPOSITORY } from "../domain/repositories/UserRepository";
import UserRepositoryImpl from "../data/repositories/UserRepositoryImpl";
import {LoginUseCase, LoginUseCaseImpl, LOGIN_USE_CASE} from "../domain/usecases/LoginUseCase";

let container = new Container();
const bindRepositories = () => {
    container.bind<UserRepository>(USER_REPOSITORY).to(UserRepositoryImpl);
}
bindRepositories();

const bindUseCases = () => {
    container.bind<LoginUseCase>(LOGIN_USE_CASE).to(LoginUseCaseImpl);
}

bindUseCases();

export {  
    container
}