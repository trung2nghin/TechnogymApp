import { StackScreenProps } from '@react-navigation/stack';

export const Stack = {
  loginStack: 'LOGIN_STACK',
  signupStack: 'SIGNUP_STACK',
  homeStack: 'HOME_STACK',
  chatStack: 'CHAT_STACK',
  youStack: 'YOU_STACK',
  editStack: 'EDIT_STACK',
};

export type RootStackParamList = {
  LOGIN_STACK: undefined;
  BOTTOM_TAB_STACK: undefined;
};

export type RootStackNavigationProp = StackScreenProps<RootStackParamList>;

// export type LoginStackNavigationProp = StackScreenProps<LoginStackParamList>;
