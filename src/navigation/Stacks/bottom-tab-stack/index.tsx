import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button, TouchableOpacity, View } from 'react-native';
import {
  FavoriteScreen,
  HomeScreen,
  ProfileScreen,
  ShoppingBagScreen,
  ShopScreen,
} from '@src/screens';

export type BottomTabStackParamList = {
  HOME: undefined;
  SHOP: undefined;
  FAVORITE: undefined;
  SHOPPING_BAG: undefined;
  PROFILE: undefined;
};

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen component={HomeScreen} name="HOME" />
      <Tab.Screen component={ShopScreen} name="SHOP" />
      <Tab.Screen component={FavoriteScreen} name="FAVORITE" />
      <Tab.Screen component={ShoppingBagScreen} name="SHOPPING_BAG" />
      <Tab.Screen component={ProfileScreen} name="PROFILE" />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
