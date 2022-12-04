import React, { FC, useEffect, useRef } from 'react';
import {
  Animated,
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  CompositeScreenProps,
  useNavigation,
  useScrollToTop,
} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {
  HomeStackNavigationProp,
  HomeStackParamList,
} from '@src/navigation/Stacks/home-stack';
import { Colors, Metrics } from '@src/assets';
import { HOME_DATA } from './data/HomeData';
import NextButton from './components/NextButton';
import { BackgroundItemView, Container, SearchBar } from '../components';
import { RootStackParamList } from '@src/navigation/configs';
import { StackScreenProps } from '@react-navigation/stack';

const ITEM_WIDTH = Metrics.screen.width;
const ITEM_HEIGHT = Metrics.screen.height * 0.8;
const HEADER_MAX_HEIGHT = 60;
const HEADER_MIN_HEIGHT = 0;
interface DataProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  desc: string;
  nextBtn: string;
}

export type HomeScreenProp = CompositeScreenProps<
  StackScreenProps<HomeStackParamList, 'HOME'>,
  StackScreenProps<RootStackParamList, 'SEARCH'>
>;

export type HomeNavigationProp = HomeScreenProp['navigation'];

const HomeScreen: FC = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  let AnimatedHeaderValue = new Animated.Value(0);
  const ref = useRef(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign name="inbox" size={25} color={Colors.black} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  useScrollToTop(ref);

  const renderItem = ({ item }: { item: DataProps; index: number }) => {
    return (
      <View style={styles.viewImg}>
        <ImageBackground source={item.image} style={styles.image} />
        <View style={styles.topViewBg}>
          <BackgroundItemView backgroundColor={Colors.black}>
            <Text numberOfLines={1} style={[styles.txtBg, styles.txtHeaderBg]}>
              {item.title}
            </Text>
          </BackgroundItemView>
        </View>
        <View style={styles.viewBg}>
          <BackgroundItemView backgroundColor={Colors.white}>
            <Text
              style={[styles.txtBg, { fontFamily: 'NotoSans-MediumItalic' }]}>
              {item.subTitle}
            </Text>
          </BackgroundItemView>
          <BackgroundItemView backgroundColor={Colors.white}>
            <Text style={styles.txtBg01}>{item.desc}</Text>
          </BackgroundItemView>
          <NextButton textButton={item.nextBtn} />
        </View>
      </View>
    );
  };

  return (
    <Container bodyColor="#FFFFFF">
      <TouchableOpacity onPress={() => navigation.navigate('SEARCH')}>
        <SearchBar height={animatedHeaderHeight} />
      </TouchableOpacity>
      <StatusBar animated />
      <FlatList
        data={HOME_DATA}
        keyExtractor={(_, index) => index.toString()}
        snapToInterval={ITEM_HEIGHT}
        ref={ref}
        decelerationRate="normal"
        showsVerticalScrollIndicator={false}
        bounces={false}
        renderItem={renderItem}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: AnimatedHeaderValue } } }],
          { useNativeDriver: false },
        )}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewImg: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    resizeMode: 'stretch',
  },
  topViewBg: {
    width: '100%',
    height: '40%',
    top: '2%',
    position: 'absolute',
    paddingLeft: 16,
  },
  viewBg: {
    width: '100%',
    height: '40%',
    top: '74%',
    position: 'absolute',
    paddingLeft: 16,
  },
  txtHeaderBg: {
    color: Colors.white,
    fontFamily: 'NotoSans-Medium',
  },
  txtBg: {
    fontSize: 16,
    fontFamily: 'NotoSans-Medium',
    color: Colors.black,
    textTransform: 'uppercase',
  },
  txtBg01: {
    fontSize: 12,
    fontFamily: 'NotoSans-Regular',
    color: Colors.black,
  },
});
