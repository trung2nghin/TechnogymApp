import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { HomeScreen, SignupScreen } from '@src/screens';
import { Button } from 'react-native';

export type HomeStackParamList = {
  HOME: undefined;
  SIGNUP: undefined;
};

export type HomeStackNavigationProp = StackScreenProps<HomeStackParamList>;

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      component={HomeScreen}
      name={'HOME'}
      options={{
        headerShown: true,
        title: 'HOME',
        headerTitleStyle: {
          fontFamily: 'NotoSans-Bold',
        },
        headerRightContainerStyle: {
          right: 16,
        },
        headerLeft: () => <></>,
        headerRight: () => <Button title="Inbox" />,
      }}
    />
    <Stack.Screen component={SignupScreen} name={'SIGNUP'} />
  </Stack.Navigator>
);

export default HomeStack;
