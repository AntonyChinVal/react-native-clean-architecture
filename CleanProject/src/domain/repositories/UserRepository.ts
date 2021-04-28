import User from "../entities/User";

export interface UserRepository{
    getUser() : Promise<User>
}

export const USER_REPOSITORY = 'USER_REPOSITORY'