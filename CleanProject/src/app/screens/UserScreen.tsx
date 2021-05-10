import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../configuration/reduxStore/Store';
import { SessionState } from '../configuration/reduxStore/sessionReducer/types';
import UserTemplate from '../components/templates/UserTemplate/UserTemplate';


const UserScreen = () => {

    const sessionState : SessionState = useSelector((state : AppState)=> state.session)

    return (
        <UserTemplate
            userName={`${sessionState.user.name} ${sessionState.user.lastname}`}
        />
    )
}

export default UserScreen