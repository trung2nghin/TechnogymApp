import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { useAppSelector } from '@src/hooks/useRedux';
import { RootStackParamList } from './configs';
import LoginStack from './Stacks/login-stack';
import BottomTabStack from './Stacks/bottom-tab-stack';
import DetailStack from './Stacks/detail-stack';
import { SearchScreen } from '@src/screens';

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
          <RootStack.Screen component={LoginStack} name={'LOGIN_STACK'} />
        ) : (
          <>
            <RootStack.Screen
              component={BottomTabStack}
              name={'BOTTOM_TAB_STACK'}
            />
            <RootStack.Screen component={DetailStack} name={'DETAIL_STACK'} />
            <RootStack.Screen component={SearchScreen} name={'SEARCH'} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
