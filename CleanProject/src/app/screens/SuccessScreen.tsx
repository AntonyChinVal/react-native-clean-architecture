import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../configuration/reduxStore/Store';
import { SessionState } from '../configuration/reduxStore/sessionReducer/types';
import { Text, View } from 'react-native';
import { CButton } from '../components/atoms';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../configuration/navigation/AuthStack';
import SueccessTemplate from '../components/templates/SuccessTemplate.tsx/SuccessTemplate';


const SuccessScreen = () => {

    const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>()
    const sessionState : SessionState = useSelector((state : AppState)=> state.session)

    const onBack = useCallback(()=>{
        navigation.pop()
    },[])

    return (
        <SueccessTemplate
            onBack={onBack}
            userName={`${sessionState.user.name} ${sessionState.user.lastname}`}
        />
    )
}

export default SuccessScreen