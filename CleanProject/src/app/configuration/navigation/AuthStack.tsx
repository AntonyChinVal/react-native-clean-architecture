import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import LoginScreen from '../../screens/LoginScreen';
import SuccessScreen from '../../screens/SuccessScreen';

const Stack = createStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown : false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
  );
}

export type AuthStackParamList = {
  LoginScreen: undefined
  SuccessScreen : undefined
};


export interface AuthStackProp extends StackNavigationProp<AuthStackParamList>{}

export default AuthStack;