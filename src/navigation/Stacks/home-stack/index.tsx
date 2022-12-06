import React from 'react';
import { Button } from 'react-native';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { ChatListScreen, ChatScreen, HomeScreen } from '@src/screens';
import { myInfo } from '@src/types';

export type HomeStackParamList = {
  HOME: undefined;
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
  </Stack.Navigator>
);

export default HomeStack;
