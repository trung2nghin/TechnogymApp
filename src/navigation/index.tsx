import React, { FC } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AuthAPI from '@src/api/AuthAPI';
import { useAppDispatch, useAppSelector } from '@src/hooks/useRedux';
import { RootStackParamList } from './configs';
import LoginStack from './Stacks/login-stack';
import BottomTabStack from './Stacks/bottom-tab-stack';
import DetailStack from './Stacks/detail-stack';
import { SearchScreen } from '@src/screens';
import { setUser } from '@src/redux/auth/authSlice';

const RootStack = createStackNavigator<RootStackParamList>();

const AppNavigation: FC = () => {
  const user = useAppSelector(state => state.auth.userInfo);
  const dispatch = useAppDispatch();
  const isSignedIn = !!user?.accessToken;

  // Add a response interceptor
  axios.interceptors.response.use(
    async config => {
      return config;
    },
    async error => {
      if (
        error.response.status === 403 &&
        error.response.data === 'Token is not valid'
      ) {
        let currentDate = new Date().getTime();
        if (user?.accessToken) {
          const decodedToken: any = jwtDecode(String(user?.accessToken));
          if (decodedToken.exp * 1000 < currentDate) {
            const data = await AuthAPI.requestRefreshToken();
            const refreshUser = {
              ...user,
              accessToken: data,
            };
            dispatch(setUser(refreshUser));
            error.config.headers['token'] = `Bearer ${data}`;
          }
        }
      }
      // Do something with request error
      return Promise.reject(error);
    },
  );

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
