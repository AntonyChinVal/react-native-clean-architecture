import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './reduxStore/Store';
import { RootStack } from './navigation';

const App = () => {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView style={{flex : 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}> 
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex : 1}}>
              <RootStack/>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Provider>
  );
};


export default App;
