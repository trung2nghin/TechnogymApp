import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { HomeScreen, NewScreen } from '@src/screens';
import { Button } from 'react-native';
import { homeType } from '@src/types';

export type HomeStackParamList = {
  HOME: undefined;
  NEW: {item: homeType};
};

export type HomeStackNavigationProp = StackScreenProps<HomeStackParamList>;

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
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
    <Stack.Screen
      component={NewScreen}
      name={'NEW'}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeStack;
