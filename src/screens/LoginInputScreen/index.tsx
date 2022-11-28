import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@src/assets';
import { EmailForm } from '../components';

const LoginInputScreen: FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <EmailForm
        signIn={true}
        navigation={navigation}
        headerTextContent={'SIGN IN'}
      />
    </View>
  );
};

export default LoginInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
