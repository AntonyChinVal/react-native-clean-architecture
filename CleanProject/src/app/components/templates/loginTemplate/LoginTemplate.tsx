import React from 'react';
import { View, Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LoginForm from '../../organisms/loginForm/LoginForm';

export interface LoginTemplateProps{ 
    login : () =>void
    loading : boolean
    userName : string
}

const LoginTemplate = (props  : LoginTemplateProps) => {
    return (
        <View style={{flex : 1}}>
            {<Spinner visible={props.loading}/>}
            <LoginForm style={{margin : 10, marginHorizontal : 20}} login={props.login}></LoginForm>
        </View>
    )
};

LoginTemplate.defaultProps = {
};


export default LoginTemplate;