import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginStack from './Stacks/login-stack';
import BottomTabStack from './Stacks/bottom-tab-stack';
import { RootStackParamList } from './configs';

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation: FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={'LOGIN_STACK'} component={LoginStack} />
        <RootStack.Screen
          name={'BOTTOM_TAB_STACK'}
          component={BottomTabStack}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
