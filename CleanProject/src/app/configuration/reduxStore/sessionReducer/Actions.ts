import { SaveUserAction, LoginAction } from "./types";
import User from "../../../../domain/entities/User";

export enum SessionActionTypes {
    SAVE_USER = "SAVE_USER",
    LOGIN = "LOGIN"
}

export const saveUser = (user : User): SaveUserAction => ({
    type: SessionActionTypes.SAVE_USER,
    user
});


export const login = (user : {email: string, password: string}, onSuccess : Function = ()=>{}, onError : Function = ()=>{}): LoginAction => ({
    type: SessionActionTypes.LOGIN,
    user,
    onSuccess,
    onError
});

export const SessionActionCreator = {
    saveUser,
    login
}

export type SessionTypeCreator = {
    saveUser : (user : User) => void
    login : (user : {email: string, password: string}, onSuccess : Function , onError : Function) => void
}
