import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
} from '@react-navigation/stack';

import { FavoriteScreen, ModalScreen } from '@src/screens';
import { ProductItem } from '@src/types';

export type FavoriteStackParamList = {
  FAVORITE: undefined;
  MODAL: {
    item: ProductItem;
  };
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
    <Stack.Screen
      component={ModalScreen}
      name="MODAL"
      options={{ presentation: 'transparentModal', headerShown: false }}
    />
  </Stack.Navigator>
);

export default FavoriteStack;
