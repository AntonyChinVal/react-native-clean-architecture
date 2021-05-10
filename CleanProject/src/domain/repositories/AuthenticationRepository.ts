export interface AuthenticationRepository{
    authenticate(email : string, password : string) : Promise<string>
}

export const AUTHENTICATION_REPOSITORY = 'AUTHENTICATION_REPOSITORY'