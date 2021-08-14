import * as React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, UserStack } from '.';
import { MainScreen } from '../../screens';
import { HomeSvg, UserSvg } from '../../components/icons';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export function MainTab() {

    return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let svg;
            if (route.name === 'HomeTab') {
              svg = <HomeSvg color={color}/>
            } else if (route.name === 'UserTab') {
              svg = <UserSvg color={color}/>
            }
            return (
            <View style={{width:size, height : size}}>
              {svg}
            </View>)
          },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen 
        options={{
            tabBarLabel : "Home"
        }}
        name="HomeTab" component={HomeStack} />
        <Tab.Screen 
        options={{
            tabBarLabel : "You",
        }}
        name="UserTab" component={UserStack} />
      </Tab.Navigator>
    
    )

} 

function MainStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown : false}}
        />
      </Stack.Navigator>
  );
}

export type MainStackParamList = {
    MainScreen: undefined
};


export interface MainStackProp extends StackNavigationProp<MainStackParamList>{}

export default MainStack;