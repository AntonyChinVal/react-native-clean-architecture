import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import { UserScreen } from '../../screens';

const Stack = createStackNavigator();

function UserStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
  );
}

export type UserStackParamList = {
  UserScreen: undefined
};


export interface UserStackProp extends StackNavigationProp<UserStackParamList>{}

export default UserStack;