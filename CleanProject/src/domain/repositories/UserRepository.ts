import User from "../entities/User";

export interface UserRepository{
    authenticate(email: string, password: string): Promise<void>
    getUser() : Promise<User>
}

export const USER_REPOSITORY = 'USER_REPOSITORY'