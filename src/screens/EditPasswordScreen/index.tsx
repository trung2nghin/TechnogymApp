import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { Container, Header, InputForm, LoginButton } from '../components';
import { Colors } from '@src/assets';

const EditPassWordScreen: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: '',
      new_password: '',
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <Container
      header={
        <Header
          icon="chevron-back"
          textIcon={'CHANGE YOUR PASSWORD'}
          iconSize={24}
          icColor={Colors.black}
        />
      }>
      <View style={styles.wrapper}>
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
          placeholder={'Current Password'}
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
          name={'new_password'}
          error={errors?.password?.message}
          placeholder={'New password'}
        />
        <LoginButton
          textContent={'SAVE'}
          backgroundColor={Colors.black}
          textColor={Colors.white}
          // navigation={() => navigation.navigate('REGISTER_INPUT')}
          // disabled={loading}
          icon={true}
          // loading={loading}
          submit={handleSubmit(onSubmit)}
          form={true}
        />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
});
export default EditPassWordScreen;
