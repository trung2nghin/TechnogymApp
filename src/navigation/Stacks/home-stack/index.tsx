import React from 'react';
import { Button } from 'react-native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { HomeScreen, NewScreen, ChatListScreen } from '@src/screens';
import { homeType } from '@src/types/home-type';

export type HomeStackParamList = {
  HOME: undefined;
  NEW: { item: homeType };
  CHAT_LIST: undefined;
  // CHAT: {
  //   user: myInfo;
  // };
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
    <Stack.Screen
      component={ChatListScreen}
      name={'CHAT_LIST'}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      component={ChatScreen}
      name={'CHAT'}
      options={{ headerShown: false }}
    /> */}
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
