
import { injectable } from "inversify";
import { UserRepository } from "../../domain/repositories/UserRepository";
import ApiService from "../api/ApiService";
import ApiUrls from "../api/ApiUrls";
import User from "../../domain/entities/User";

@injectable()
export default class UserRepositoryImpl implements UserRepository{

    getUser(): Promise<User> {
        return ApiService.jfetch<User>(ApiUrls.URL_USER_GET, {
            method : ApiService.HttpMethod.GET
        });
    }
    
}