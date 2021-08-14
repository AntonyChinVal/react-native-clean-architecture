import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import { HomeScreen } from '../../screens';

const Stack = createStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
  );
}

export type HomeStackParamList = {
    HomeScreen: undefined
};


export interface HomeStackProp extends StackNavigationProp<HomeStackParamList>{}

export default HomeStack;