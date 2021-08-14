import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { AuthStack, MainStack } from '.';

const AppStack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
        <AppStack.Navigator>
          <AppStack.Screen 
            name="AuthStack"
            component={AuthStack}
            options={{headerShown : false}}
          />
          <AppStack.Screen 
            name="MainStack"
            component={MainStack}
            options={{headerShown : false}}
          />
        </AppStack.Navigator>
    </NavigationContainer>
  );
};

export type RootStackParamList = {
    AuthStack : undefined
    MainStack: undefined
  };
  
export interface RootStackProp extends StackNavigationProp<RootStackParamList>{}

export default Root;
