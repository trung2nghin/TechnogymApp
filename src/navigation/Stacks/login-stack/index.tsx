import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { LoginScreen } from '@src/screens';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabStackParamList } from '../bottom-tab-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import LoginInputScreen from '@src/screens/LoginInputScreen';
import RegisterInputScreen from '@src/screens/RegisterInputScreen';

export type LoginStackParamList = {
  LOGIN: undefined;
  LOGIN_INPUT: undefined;
  REGISTER_INPUT: undefined;
};

export type LoginStackNavigationProp = StackScreenProps<LoginStackParamList>;

const Stack = createStackNavigator<LoginStackParamList>();

export type LoginScreenProp = CompositeScreenProps<
  StackScreenProps<LoginStackParamList, 'LOGIN'>,
  BottomTabScreenProps<BottomTabStackParamList>
>;

const LoginStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen component={LoginScreen} name={'LOGIN'} />
    <Stack.Screen component={LoginInputScreen} name={'LOGIN_INPUT'} />
    <Stack.Screen component={RegisterInputScreen} name={'REGISTER_INPUT'} />
  </Stack.Navigator>
);

export default LoginStack;
