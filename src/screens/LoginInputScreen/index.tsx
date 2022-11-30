import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';

import { Colors, Metrics } from '@src/assets';
import { InputForm, LoginButton, LoginHeader } from '../components';
import { useAppDispatch, useAppSelector } from '@src/hooks/useRedux';
import { loginThunk } from '@src/redux/auth/authThunk';
import { loginType } from '@src/types/auth-type';

const LoginInputScreen: FC<any> = ({ navigation }) => {
  const { loading } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: 'testuser',
      password: '123456',
    },
  });

  const onSubmit = useCallback(
    (data: loginType) => {
      dispatch(loginThunk(data));
    },
    [],
  );

  return (
    <View style={styles.container}>
      <LoginHeader navigation={navigation} textContent={'SIGN IN'} />

      <View style={styles.body}>
        <View style={styles.email}>
          <InputForm
            control={control}
            secureTextEntry={false}
            rules={{
              maxLength: {
                value: 20,
                message: 'Exceeded allowed characters',
              },
              required: { value: true, message: 'Required Information' },
            }}
            name={'username'}
            error={errors?.username?.message}
            placeholder={'NAME'}
            autofocus={true}
          />
          <InputForm
            control={control}
            secureTextEntry={true}
            rules={{
              maxLength: {
                value: 20,
                message: 'Exceeded allowed characters',
              },
              required: { value: true, message: 'Required Information' },
            }}
            name={'password'}
            error={errors?.password?.message}
            placeholder={'PASSWORD'}
          />
        </View>
        <LoginButton
          textContent={'SIGN IN'}
          backgroundColor={loading ? Colors.greyBlack : Colors.black}
          textColor={Colors.white}
          disabled={loading}
          icon={true}
          form={true}
          submit={handleSubmit(onSubmit)}
          loading={loading}
        />
      </View>
    </View>
  );
};

export default LoginInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  body: {
    paddingHorizontal: Metrics.screen.width / 25,
    flex: 1,
    justifyContent: 'space-between',
  },
  email: {
    height: 'auto',
    marginTop: Metrics.screen.height / 20,
  },
  button: {
    height: 'auto',
    marginBottom: Metrics.screen.height / 50,
  },
});
