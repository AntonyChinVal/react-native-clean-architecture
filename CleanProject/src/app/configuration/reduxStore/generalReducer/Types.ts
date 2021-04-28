import User from "../../../../domain/entities/User";


export type GeneralState = {
    loading : boolean
}

export type ShowLoadingAction = {
    type: string
}
export type DissmissLoadingAction = {
    type: string
}

export type GeneralAction = ShowLoadingAction | DissmissLoadingAction;