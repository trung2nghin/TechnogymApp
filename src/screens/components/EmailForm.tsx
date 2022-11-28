import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import React, { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Colors, Metrics } from '@src/assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputForm from './InputForm';
import LoginButton from './LoginButton';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

interface EmailFormProps {
  navigation: any; // check lại type navigation
  signIn: boolean;
  headerTextContent: string;
}

const EmailForm: FC<EmailFormProps> = ({
  navigation,
  signIn,
  headerTextContent,
}) => {
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <IoniconsIcons
            name="arrow-back-sharp"
            size={24}
            style={{ color: 'black' }}
          />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text style={styles.headerText}>{headerTextContent}</Text>
          <Text style={styles.text}>Let's write down your email...</Text>
        </View>
      </View>

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
        <View style={styles.button}>
          {signIn ? (
            <LoginButton
              textContent={'SIGN IN'}
              backgroundColor={loading ? Colors.greyBlack : Colors.black}
              textColor={Colors.white}
              navigation={navigation}
              disabled={loading}
              icon={true}
              form={true}
              submit={handleSubmit(onSubmit)}
              loading={loading}
            />
          ) : (
            <LoginButton
              textContent={'SIGN UP'}
              backgroundColor={loading ? Colors.greyBlack : Colors.black}
              textColor={Colors.white}
              navigation={navigation}
              disabled={loading}
              icon={true}
              form={true}
              submit={handleSubmit(onSubmit)}
              loading={loading}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default EmailForm;

const styles = StyleSheet.create({
  header: {
    height: Metrics.screen.height / 10,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.screen.width / 25,
  },
  textWrapper: {
    marginLeft: Metrics.screen.width / 15,
  },
  headerText: {
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 18,
  },
  text: {
    fontFamily: 'NotoSans-Light',
    color: Colors.black,
    fontSize: 12,
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
