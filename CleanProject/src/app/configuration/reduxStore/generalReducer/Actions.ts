import { GeneralState, ShowLoadingAction, DissmissLoadingAction } from "./types";
import User from "../../../../domain/entities/User";

export enum GeneralActionTypes {
    SHOW_LOADING = "SHOW_LOADING",
    DISMISS_LOADING = "DISMISS_LOADING"
}

export const showLoading = (): ShowLoadingAction => ({
    type: GeneralActionTypes.SHOW_LOADING,
});

export const dissmissLoading = (): DissmissLoadingAction => ({
    type: GeneralActionTypes.DISMISS_LOADING,
}); 

export const GeneralActionCreator = {
    showLoading,
    dissmissLoading
}

export type GeneralTypeCreator = {
    showLoading : () => void
    dissmissLoading : () => void
}
