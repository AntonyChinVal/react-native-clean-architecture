import { GeneralState, GeneralAction, ShowLoadingAction, DissmissLoadingAction} from './Types';
import { GeneralActionTypes } from './Actions';

export const initialState: GeneralState = {
    loading : false
};

export const generalReducer = (
    state: GeneralState = initialState,
    action: GeneralAction
) => {
    switch (action.type){
        case GeneralActionTypes.SHOW_LOADING: {
            return { ...state, loading : true }
        }
        case GeneralActionTypes.DISMISS_LOADING: {
            return { ...state, loading : false }
        }
        default:
            return state;
    }
}

export default{}