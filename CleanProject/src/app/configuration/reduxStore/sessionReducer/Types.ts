import User from "../../../../domain/entities/User";


export type SessionState = {
    user : User
}

export type SaveUserAction = {
    type: string
    user: User
}
export type LoginAction = {
    type: string
    user: {email: string, password: string}
    onSuccess: Function
    onError: Function
}

export type SessionAction = SaveUserAction;