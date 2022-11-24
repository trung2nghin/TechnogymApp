import { RootStackNavigationProp } from '@src/navigation/configs';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from '../components';

const LoginScreen: FC<RootStackNavigationProp> = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ fontFamily: 'NotoSans-Black' }}>LoginScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('BOTTOM_TAB_STACK')}>
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
