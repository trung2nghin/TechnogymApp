import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '@src/screens';

const Stack = createStackNavigator();

const LoginStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen component={LoginScreen} name={'LOGIN'} />
  </Stack.Navigator>
);

export default LoginStack;
