import AsyncStorage from '@react-native-community/async-storage';
import { injectable } from "inversify";
import UseCase from "../../domain/core/UseCase";
import User from "../../domain/entities/User";
import { container } from "../../inject_container/injection";
import {AuthenticationRepository , AUTHENTICATION_REPOSITORY} from "../../domain/repositories/AuthenticationRepository";
import { UserRepository, USER_REPOSITORY } from '../repositories/UserRepository';

export interface LoginUseCase extends UseCase<User, LoginUseCaseParams>{}
export const LOGIN_USE_CASE = "LOGIN_USE_CASE";

@injectable()
export class LoginUseCaseImpl implements  LoginUseCase{
   

    constructor(){
    }

    async execute(params: LoginUseCaseParams): Promise<User> {
        let authRepository: AuthenticationRepository = container.get<AuthenticationRepository>(AUTHENTICATION_REPOSITORY)
        let userRepository: UserRepository = container.get<UserRepository>(USER_REPOSITORY)
        let token : {token : string} = await authRepository.authenticate(params.email,params.password);
        await AsyncStorage.setItem('token', token.token);
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