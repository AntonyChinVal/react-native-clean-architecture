import { call, put, takeLatest } from 'redux-saga/effects';
import { SessionActionTypes, SessionActionCreator } from './Actions';
import { LoginAction } from './Types';
import { container } from '../../../../inject_container/injection';
import {LoginUseCase, LoginUseCaseParams, LOGIN_USE_CASE} from '../../../../domain/usecases/LoginUseCase';
import { GeneralActionCreator } from '../generalReducer/Actions';
import User from '../../../../domain/entities/User';


export function* watchLogin() {
    yield takeLatest(SessionActionTypes.LOGIN, login);
}

function* login(action : LoginAction){
    console.log('Login Saga');
    yield put(GeneralActionCreator.showLoading());
    try{
        let loginUseCase = container.get<LoginUseCase>(LOGIN_USE_CASE);
        console.log('LoginUseCase',loginUseCase)
        yield put(SessionActionCreator.saveUser(new User()));
        let loginParams = new LoginUseCaseParams();
        let user = yield call(loginUseCase.execute,loginParams) ;
        console.log("User" , user)
        yield put(SessionActionCreator.saveUser(user))
        if(action.onSuccess)action.onSuccess();
    }catch(err){
        console.log('Error Login Saga',err);
        if(action.onError)action.onError();
    }
    yield put(GeneralActionCreator.dissmissLoading());
}
