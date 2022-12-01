import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { ProfileScreen } from '@src/screens';

export type ProfileStackParamList = {
  PROFILE: undefined;
};

export type ProfileStackNavigationProp =
  StackScreenProps<ProfileStackParamList>;

const Stack = createStackNavigator<ProfileStackParamList>();

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      component={ProfileScreen}
      name={'PROFILE'}
      options={{
        headerShown: true,
        title: 'PROFILE',
        headerTitleStyle: {
          fontFamily: 'NotoSans-Bold',
        },
        headerRightContainerStyle: {
          right: 16,
        },
      }}
    />
  </Stack.Navigator>
);

export default ProfileStack;
