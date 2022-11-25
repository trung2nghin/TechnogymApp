import {
  HomeStackNavigationProp,
  RootStackNavigationProp,
} from '@src/navigation/configs';
import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container } from '../components';

const SignupScreen: FC<HomeStackNavigationProp> = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ fontFamily: 'NotoSans-Black' }}>SignupScreen</Text>
      <TouchableOpacity
        style={{ marginTop: 100 }}
        onPress={() => navigation.navigate('HOME')}>
        <MaterialCommunityIcons
          name="send"
          size={24}
          style={{ marginRight: 12, marginBottom: 10 }}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
