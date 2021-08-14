import React, { useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import CTextFormField from '../../atoms/cTextFormField/CTextFormField';
import CButton from '../../atoms/cButton/CButton';

export interface LoginFormProps{ 
    login : () =>void
    style?: StyleProp<ViewStyle>
}

const LoginForm = (props  : LoginFormProps) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <View style={props.style}>
            <CTextFormField 
                onChangeText={(value)=>{
                    setUsername(value)
                }}
                style={{marginVertical : 10}} 
                placeholder={"Username"}/>
            <CTextFormField 
                onChangeText={(value)=>{
                    setPassword(value)
                }}
                style={{marginVertical : 10}} 
                placeholder={"Password"}/>
            <CButton title={'Continuar'} onPress={()=>{

                if(username && password){
                    props.login()
                }

            }}/>
        </View>
    )
};

LoginForm.defaultProps = {
};


export default LoginForm;