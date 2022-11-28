import { StyleSheet, View } from 'react-native';
import React, { FC, useCallback, useState } from 'react';

import { Colors, Metrics } from '@src/assets';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container, EmailForm, InputForm, LoginButton } from '../components';

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
