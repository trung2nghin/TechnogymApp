import React, { FC, useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Container, Header, InputForm, LoginButton } from '../components';
import { useAppDispatch, useAppSelector } from '@src/hooks/useRedux';
import { Colors, Metrics } from '@src/assets';
import { useForm } from 'react-hook-form';
import { gender_data } from './gender_data';
import { getUserThunk, updateUserThunk } from '@src/redux/user/userThunk';

const MyAccountScreen: FC = () => {
  const [gender, setGender] = useState('');
  const [checked, setChecked] = useState(0);
  const user = useAppSelector(state => state.auth.userInfo);
  const { userProfile, loading } = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user?.myInfo?.username,
      password: '********',
      email: user?.myInfo?.email,
      address: user?.myInfo?.address,
      gender: user?.myInfo?.gender,
    },
  });

  useEffect(() => {
    if (user?.myInfo?.gender === 'Male') {
      setChecked(1);
    } else if (user?.myInfo?.gender === 'Female') {
      setChecked(2);
    } else if (user?.myInfo?.gender === 'Prefer not to say') {
      setChecked(3);
    }
  }, []);

  const onSubmit = useCallback(
    (data: any) => {
      if (!!user) {
        dispatch(updateUserThunk({ user: user, info: data }));
        dispatch(getUserThunk(user));
      }
    },
    [user],
  );

  return (
    <Container
      header={
        <Header
          icon="chevron-back"
          textIcon={'Edit profile info'}
          iconSize={24}
          icColor={Colors.black}
        />
      }>
      <View style={styles.wrapper}>
        <View>
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
            autofocus={false}
          />
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
            name={'email'}
            error={errors?.email?.message}
            placeholder={'EMAIL'}
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
          <InputForm
            control={control}
            secureTextEntry={false}
            rules={{
              maxLength: {
                value: 50,
                message: 'Exceeded allowed characters',
              },
              required: { value: true, message: 'Required Information' },
            }}
            name={'address'}
            error={errors?.address?.message}
            placeholder={'ADDRESS'}
          />
          <Text style={styles.text}>GENDER</Text>
          <View style={styles.viewGender}>
            {gender_data.map((e, i) => (
              <TouchableOpacity
                key={e.id}
                onPress={() => {
                  setChecked(e.id), setGender(e.desc);
                }}
                style={{ flexDirection: 'row', alignItems: 'center' }}>
                {checked === i + 1 ? (
                  <View style={styles.radioBtnChecked} />
                ) : (
                  <View style={styles.radioBtn} />
                )}
                <Text
                  style={{
                    fontFamily:
                      checked === i + 1
                        ? 'NotoSans-ExtraBold'
                        : 'NotoSans-Medium',
                    fontSize: 13,
                    color: Colors.black,
                  }}>
                  {e.desc}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <LoginButton
          textContent={'SAVE'}
          backgroundColor={Colors.black}
          textColor={Colors.white}
          // navigation={() => navigation.navigate('REGISTER_INPUT')}
          disabled={loading}
          icon={true}
          loading={loading}
          submit={handleSubmit(onSubmit)}
          form={true}
        />
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: Metrics.screen.height / 36,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 12.5,
    color: Colors.black,
    marginLeft: Metrics.screen.width / 40,
  },
  gender: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtGender: {
    color: Colors.black,
  },
  viewGender: {
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 8,
    justifyContent: 'space-between',
  },
  radioBtn: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 1.5,
    borderColor: Colors.nobelGrey,
    marginRight: 8,
  },
  radioBtnChecked: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: Colors.black,
    marginRight: 8,
  },
});

export default MyAccountScreen;
