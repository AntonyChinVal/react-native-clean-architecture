export interface AuthenticationRepository{
    authenticate(email : string, password : string) : Promise<{ token : string }>
}

export const AUTHENTICATION_REPOSITORY = 'AUTHENTICATION_REPOSITORY'