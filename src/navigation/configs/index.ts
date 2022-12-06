import { StackScreenProps } from '@react-navigation/stack';
import { myInfo } from '@src/types';

export type RootStackParamList = {
  LOGIN_STACK: undefined;
  BOTTOM_TAB_STACK: undefined;
  DETAIL_STACK: undefined;
  SEARCH: undefined;
  CHAT: {
    user: myInfo;
  };
};

export type RootStackNavigationProp = StackScreenProps<RootStackParamList>;
