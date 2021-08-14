import React , { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginTemplate from '../components/templates/LoginTemplate/LoginTemplate';
import { SessionActionCreator } from '../configuration/reduxStore/sessionReducer/Actions';
import { AppState } from '../configuration/reduxStore/Store';
import { GeneralState } from '../configuration/reduxStore/generalReducer/types';
import { SessionState } from '../configuration/reduxStore/sessionReducer/types';
import { useNavigation } from '@react-navigation/native';
import { RootStackProp } from '../configuration/navigation/RootStack';

const LoginScreen = () => {

    const dispatch = useDispatch()
    const navigation = useNavigation<RootStackProp>()
    const generalState : GeneralState = useSelector((state : AppState)=> state.general)
    const sessionState : SessionState = useSelector((state : AppState)=> state.session)

    const login =   useCallback(() =>{
        dispatch(SessionActionCreator.login({email : '' , password : ''}, ()=>{
            navigation.replace('MainStack')
        }, ()=>{}))
    },[])


    return (
        <LoginTemplate
            loading={generalState.loading}
            login={login}
            userName={sessionState.user.name}
        />
    )
}

export default LoginScreen