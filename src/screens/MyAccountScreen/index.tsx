import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, InputForm, LoginButton } from '../components';
import { Colors, Metrics } from '@src/assets';
import { useForm } from 'react-hook-form';
import { RadioButton } from 'react-native-paper';

const MyAccountScreen: FC = () => {
  const [gender, setGender] = useState('male');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
      email: '',
      address: '',
      gender: gender,
    },
  });
  // console.log(gender);
  const onSubmit = useCallback(data => {
    console.log(data);
  }, []);

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
                value: 20,
                message: 'Exceeded allowed characters',
              },
              required: { value: true, message: 'Required Information' },
            }}
            name={'address'}
            error={errors?.address?.message}
            placeholder={'ADDRESS'}
          />
          <View>
            <Text style={styles.text}>GENDER</Text>
            <View style={styles.gender}>
              <View style={styles.gender}>
                <RadioButton
                  value="male"
                  status={gender === 'male' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('male')}
                />
                <Text style={styles.txtGender}>Male</Text>
              </View>
              <View style={styles.gender}>
                <RadioButton
                  value="female"
                  status={gender === 'female' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('female')}
                />
                <Text style={styles.txtGender}>Female</Text>
              </View>
              <View style={styles.gender}>
                <RadioButton
                  value="third"
                  status={gender === 'third' ? 'checked' : 'unchecked'}
                  onPress={() => setGender('third')}
                />
                <Text style={styles.txtGender}>Prefer not to say</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.logButton}>
          <LoginButton
            textContent={'SAVE'}
            backgroundColor={Colors.black}
            textColor={Colors.white}
            // navigation={() => navigation.navigate('REGISTER_INPUT')}
            disabled={false}
            icon={true}
            loading={false}
            submit={handleSubmit(onSubmit)}
            form={true}
          />
        </View>
      </View>
    </Container>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 15,
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
  logButton: {
    marginTop: 20,
  },
});

export default MyAccountScreen;
