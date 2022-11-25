import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LoginScreenProp } from '@src/navigation/Stacks/login-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Container } from '../components';

const LoginScreen: FC<LoginScreenProp> = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ fontFamily: 'NotoSans-Black' }}>LoginScreen</Text>
      <TouchableOpacity
        style={{ marginTop: 100 }}
        onPress={() => navigation.navigate('HOME_STACK')}>
        <MaterialCommunityIcons
          name="send"
          size={24}
          style={{ marginRight: 12, marginBottom: 10 }}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
