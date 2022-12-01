import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { FavoriteScreen } from '@src/screens';

export type FavoriteStackParamList = {
  FAVORITE: undefined;
};

export type FavoriteStackNavigationProp =
  StackScreenProps<FavoriteStackParamList>;

const Stack = createStackNavigator<FavoriteStackParamList>();

const FavoriteStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      component={FavoriteScreen}
      name={'FAVORITE'}
      options={{
        headerShown: true,
        title: 'FAVORITE',
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

export default FavoriteStack;
