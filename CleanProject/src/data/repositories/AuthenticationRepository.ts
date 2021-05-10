
import { injectable } from "inversify";
import { AuthenticationRepository } from "../../domain/repositories/AuthenticationRepository";
import ApiService from "../api/ApiService";
import ApiUrls from "../api/ApiUrls";

@injectable()
export default class AuthRepositoryImpl implements AuthenticationRepository{

    authenticate(email: string, password: string): Promise<string> {
        return ApiService.jfetch<string>(ApiUrls.URL_AUTH_AUTHENTICATE, {
            method : ApiService.HttpMethod.POST,
            body : {
                email,
                password
            }
        });
    }
    
}