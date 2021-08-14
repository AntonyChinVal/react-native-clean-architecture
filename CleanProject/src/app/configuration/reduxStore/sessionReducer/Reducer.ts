import { SessionState, SessionAction, SaveUserAction} from './Types';
import { SessionActionTypes } from './Actions';
import User from '../../../../domain/entities/User';

export const initialState: SessionState = {
    user : new User(),
};

export const sessionReducer = (
    state: SessionState = initialState,
    action: SessionAction
) => {
    switch (action.type){
        case SessionActionTypes.SAVE_USER: {
            const { user } = <SaveUserAction>action;
            console.log("User nuevo" , user)
            return { ...state, user }
        }
        case SessionActionTypes.LOGIN: {
            return { ...state }
        }
        default:
            return state;
    }
}

export default{}