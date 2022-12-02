import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { ShoppingBagScreen } from '@src/screens';
import HomeStack from '../home-stack';
import ShopStack from '../shop-stack';
import ProfileStack from '../profile-stack';
import FavoriteStack from '../favorite-stack';

import { Colors } from '@src/assets';
import { useAppSelector } from '@src/hooks/useRedux';

export type BottomTabStackParamList = {
  HOME_STACK: undefined;
  SHOP_STACK: undefined;
  FAVORITE_STACK: undefined;
  SHOPPING_BAG: undefined;
  PROFILE_STACK: undefined;
};

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

const BottomTabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={HomeStack}
        name="HOME_STACK"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <>
              {focused ? (
                <Ionicons name="md-home" size={size} color={Colors.black} />
              ) : (
                <Ionicons
                  name="md-home-outline"
                  size={size}
                  color={Colors.black}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        component={ShopStack}
        name="SHOP_STACK"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <>
              {focused ? (
                <Ionicons name="md-search" size={size} color={Colors.black} />
              ) : (
                <Ionicons
                  name="md-search-outline"
                  size={size}
                  color={Colors.black}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        component={FavoriteStack}
        name="FAVORITE_STACK"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <>
              {focused ? (
                <Ionicons name="heart" size={size} color={Colors.black} />
              ) : (
                <Ionicons
                  name="heart-outline"
                  size={size}
                  color={Colors.black}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        component={ShoppingBagScreen}
        name="SHOPPING_BAG"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <>
              {focused ? (
                <Ionicons name="cart" size={size} color={Colors.black} />
              ) : (
                <Ionicons
                  name="cart-outline"
                  size={size}
                  color={Colors.black}
                />
              )}
            </>
          ),
        }}
      />
      <Tab.Screen
        component={ProfileStack}
        name="PROFILE_STACK"
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, size }) => (
            <>
              {focused ? (
                <Ionicons name="person" size={size} color={Colors.black} />
              ) : (
                <Ionicons
                  name="person-outline"
                  size={size}
                  color={Colors.black}
                />
              )}
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabStack;
