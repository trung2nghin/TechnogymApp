import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginStack from './Stacks/login-stack';
import BottomTabStack from './Stacks/bottom-tab-stack';
import { RootStackParamList } from './configs';
import { useAppSelector } from '@src/hooks/useRedux';

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation: FC = () => {
  const user = useAppSelector(state => state.auth.userInfo);

  const isSignedIn = !!user?.accessToken;

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isSignedIn ? (
          <RootStack.Screen name={'LOGIN_STACK'} component={LoginStack} />
        ) : (
          <RootStack.Screen
            name={'BOTTOM_TAB_STACK'}
            component={BottomTabStack}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
