
import { injectable } from "inversify";
import { UserRepository } from "../../domain/repositories/UserRepository";
import ApiService from "../api/ApiService";
import ApiUrls from "../api/ApiUrls";
import User from "../../domain/entities/User";
import AsyncStorage from "@react-native-community/async-storage";

@injectable()
export default class UserRepositoryImpl implements UserRepository{

    async authenticate(email: string, password: string): Promise<void> {
        let token = await ApiService.jfetch<string>(ApiUrls.URL_AUTH_AUTHENTICATE, {
            method : ApiService.HttpMethod.POST,
            body : {
                email,
                password
            }
        });
        await AsyncStorage.setItem('token', token);
    }

    async getUser(): Promise<User> {
        let user = await ApiService.jfetch<User>(ApiUrls.URL_USER_GET, {
            method : ApiService.HttpMethod.GET
        });
        return user
    }
    
}