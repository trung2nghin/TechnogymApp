import { Colors, Metrics } from '@src/assets';
import { StyleSheet, View } from 'react-native';
import React, { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputForm, LoginButton, LoginHeader } from '../components';

const RegisterInputScreen: FC<any> = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = useCallback(
    (data: any) => {
      console.log(data), setLoading(true);
    },
    // let payload = {
    //   ...data,
    //   subject: subjectData,
    //   id: '',
    //   avatar: pickImg?.uri,
    [],
  );

  return (
    <View style={styles.container}>
      <LoginHeader navigation={navigation} textContent={'REGISTER'} />

      <View style={styles.body}>
        <View style={styles.email}>
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
            name={'username'}
            error={errors?.username?.message}
            placeholder={'NAME'}
            autofocus={true}
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
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: 'Invalid mail format',
              },
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
        </View>
        <LoginButton
          textContent={'SIGN UP'}
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

export default RegisterInputScreen;

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
