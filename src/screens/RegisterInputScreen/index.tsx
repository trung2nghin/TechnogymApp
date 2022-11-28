import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { Container, EmailForm, InputForm, LoginButton } from '../components';

import { Colors, Metrics } from '@src/assets';

const RegisterInputScreen: FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EmailForm
        signIn={false}
        navigation={navigation}
        headerTextContent={'REGISTER'}
      />
    </View>
  );
};

export default RegisterInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
