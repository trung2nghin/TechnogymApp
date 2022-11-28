import {
  Animated,
  FlatList,
  ImageBackground,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useScrollToTop } from '@react-navigation/native';

// import { Container } from '../../components';
// import { userInfo } from '../../redux/Auth/AuthRedux';
import { RootState } from '../../redux/store';
import { Metrics } from '../../assets';
import { HOME_DATA } from './data/HomeData';
// import SearchBar from '../components/SearchBar';
// import BackgroundItemView from '../components/BackgroundItemView';
import NextButton from './components/NextButton';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { deleteBag } from '../../redux/Bag/BagRedux';
import { StackNavigationProp } from '@react-navigation/stack';
// import { BottomTabStackParamList } from '../../navigation/BottomTabStack';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  BottomTabStackParamList,
  // HomeStackParamList,
} from '@src/navigation/Stacks/bottom-tab-stack';
import SearchBar from '../components/SearchBar';
import { Container } from '../components';
import BackgroundItemView from '../components/BackgroundItemView';
import { HomeStackNavigationProp } from '@src/navigation/Stacks/home-stack';

const ITEM_WIDTH = Metrics.screen.width;
const ITEM_HEIGHT = Metrics.screen.height * 0.8;

interface DataProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subTitle: string;
  desc: string;
  nextBtn: string;
}

// type HomeScreenProp = StackNavigationProp<HomeStackParamList, 'HOME'>;

const HomeScreen: FC<HomeStackNavigationProp> = ({ navigation }) => {
  // const [data, setData] = useState();
  // var user = useSelector<RootState, userInfo>(state => state.auth);
  // const navigation = useNavigation<HomeScreenProp>();
  const dispatch = useDispatch();

  const ref = useRef(null);

  useScrollToTop(ref);

  // const onNavSearch = useCallback(() => {
  //   navigation.navigate('SEARCH');
  // }, []);

  // const onNavChat = useCallback(() => {
  //   navigation.navigate('CHAT_LIST');
  // }, []);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign name="inbox" size={25} color={'#000000'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  let AnimatedHeaderValue = new Animated.Value(0);

  const HEADER_MAX_HEIGHT = 60;
  const HEADER_MIN_HEIGHT = 0;

  const animatedHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const renderItem = ({ item }: { item: DataProps; index: number }) => {
    return (
      <View style={styles.viewImg}>
        <ImageBackground source={item.image} style={styles.image} />
        <View style={styles.topViewBg}>
          <BackgroundItemView backgroundColor={'#000000'}>
            <Text numberOfLines={1} style={[styles.txtBg, styles.txtHeaderBg]}>
              {item.title}
            </Text>
          </BackgroundItemView>
        </View>
        <View style={styles.viewBg}>
          <BackgroundItemView backgroundColor={'#FFFFFF'}>
            <Text
              style={[styles.txtBg, { fontFamily: 'NotoSans-MediumItalic' }]}>
              {item.subTitle}
            </Text>
          </BackgroundItemView>
          <BackgroundItemView backgroundColor={'#FFFFFF'}>
            <Text style={styles.txtBg01}>{item.desc}</Text>
          </BackgroundItemView>
          <NextButton textButton={item.nextBtn} />
        </View>
      </View>
    );
  };

  return (
    <Container bodyColor="#FFFFFF">
      <TouchableOpacity>
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
    color: '#FFFFFF',
    fontFamily: 'NotoSans-Medium',
  },
  txtBg: {
    fontSize: 16,
    fontFamily: 'NotoSans-Medium',
    color: '#000000',
    textTransform: 'uppercase',
  },
  txtBg01: {
    fontSize: 12,
    fontFamily: 'NotoSans-Regular',
    color: '#000000',
  },
});
