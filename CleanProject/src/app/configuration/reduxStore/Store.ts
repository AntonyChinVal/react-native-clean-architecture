import { createStore, applyMiddleware, combineReducers } from "redux";
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import { SessionState } from "./sessionReducer/Types";
import { sessionReducer } from "./sessionReducer/Reducer";
import { watchLogin } from "./sessionReducer/Saga";
import { GeneralState } from "./generalReducer/types";
import { generalReducer } from "./generalReducer/Reducer";


export type AppState = {
    general : GeneralState,
    session : SessionState
}

let reducers = combineReducers(
    {
        general : generalReducer,
        session : sessionReducer,
    }
);
function* rootSaga(){
    yield all ([
        watchLogin(),
    ])
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);


export default store;