import { StackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  LOGIN_STACK: undefined;
  BOTTOM_TAB_STACK: undefined;
  DETAIL_STACK: undefined;
  SEARCH: undefined;
};

export type RootStackNavigationProp = StackScreenProps<RootStackParamList>;
