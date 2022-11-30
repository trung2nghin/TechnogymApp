import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import LoginInputScreen from '@src/screens/LoginInputScreen';
import RegisterInputScreen from '@src/screens/RegisterInputScreen';
import WelcomeScreen from '@src/screens/WelcomeScreen';

export type LoginStackParamList = {
  WELCOME: undefined;
  LOGIN_INPUT: undefined;
  REGISTER_INPUT: undefined;
};

export type LoginStackNavigationProp = StackScreenProps<LoginStackParamList>;

const Stack = createStackNavigator<LoginStackParamList>();

const LoginStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen component={WelcomeScreen} name={'WELCOME'} />
    <Stack.Screen component={LoginInputScreen} name={'LOGIN_INPUT'} />
    <Stack.Screen component={RegisterInputScreen} name={'REGISTER_INPUT'} />
  </Stack.Navigator>
);

export default LoginStack;
