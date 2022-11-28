import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { LoginScreen } from '@src/screens';
import { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabStackParamList } from '../bottom-tab-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type LoginStackParamList = {
  LOGIN: undefined;
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
  </Stack.Navigator>
);

export default LoginStack;
