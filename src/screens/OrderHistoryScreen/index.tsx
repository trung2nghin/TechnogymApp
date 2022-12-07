import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import { Container, Header, ProductCount } from '../components';
import { Colors, Metrics } from '@src/assets';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { useAppDispatch, useAppSelector } from '@src/hooks/useRedux';
import { getUserOrderThunk } from '@src/redux/order/orderThunk';


const ITEM_HEIGHT = Metrics.screen.height / 5.6;


const OrderHistoryScreen = () => {
  const user = useAppSelector(state => state.auth.userInfo);
  const order = useAppSelector(state => state.order.orderData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserOrderThunk({ user }));
  }, []);

  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.card}>
        <View style={styles.item}>
          <Text style={styles.text01} numberOfLines={1}>
            ALN{item?._id}
          </Text>
          <View style={styles.wrap}>
            <Text style={styles.text03}>
              Ordered{' '}
              <Text style={styles.text02}>
                {' '}
                {new Date(item?.createdAt).toISOString().split('T')[0]}
              </Text>
            </Text>

            <Text style={styles.text03}>
              {' |'} {item?.products.length}{' '}
              <Text style={styles.text02}> ITEMS </Text>
            </Text>
            <Text style={styles.text03}>
              {' | '} $ <Text style={styles.text02}>{item?.amount}</Text>
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            disabled={
              item?.status?.toLowerCase() === 'succeeded' ? true : false
            }
          >
            <Text style={styles.text04}>{item?.status}</Text>
            <Ionicons name={'cart-outline'} size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Container
      header={
        <Header
          icon="arrow-back-outline"
          textIcon={'Order history'}
          iconSize={24}
          icColor={Colors.black}
        />
      }
      bodyColor={Colors.white}
    >
      <ProductCount isOrder productCount={order?.length} />
      <FlatList
        data={order}
        renderItem={renderItem}
        keyExtractor={item => String(item._id)}
        showsVerticalScrollIndicator={false}
      />

      {!order && (
        <View style={styles.textWrap}>
          <FeatherIcon
            name="shopping-bag"
            size={50}
            color={Colors.black}
            style={styles.icon}
          />
          <Text style={styles.headerText}>NO ORDER HISTORY</Text>
          <Text style={styles.bodyText}>You haven't placed any orders yet</Text>
          <Text style={styles.footerText}>
            Browse the shop to see what's in store. Once you've placed an order,
            a sumary with everything you need will be saved for you here
          </Text>
        </View>
      )}
    </Container>
  );
};

export default OrderHistoryScreen;

const styles = StyleSheet.create({
  textWrap: {
    flex: 1,
    paddingHorizontal: Metrics.screen.width / 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 18,
  },
  bodyText: {
    textAlign: 'center',
    fontFamily: 'NotoSans-Light',
    color: Colors.dimGray,
    fontSize: 14,
    marginBottom: Metrics.screen.height / 40,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'NotoSans-Medium',
    color: Colors.black,
    fontSize: 14,
  },
  icon: {
    marginBottom: Metrics.screen.height / 90,
  },
  card: {
    width: Metrics.screen.width,
    height: ITEM_HEIGHT,
    borderBottomWidth: 1,
    borderColor: Colors.greyZircon,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  item: {
    width: '95%',
    height: '80%',
    justifyContent: 'space-between',
  },
  wrap: {
    flexDirection: 'row',
  },
  text01: {
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    fontSize: 20,
    width: Metrics.screen.width / 3,
  },
  text02: {
    color: Colors.dimGray,
    textTransform: 'uppercase',
  },
  text03: {
    color: Colors.black,
    fontSize: 16,
    fontFamily: 'NotoSans-SemiBold',
  },
  text04: {
    color: Colors.black,
    fontSize: 14,
    fontFamily: 'NotoSans-Bold',
    textTransform: 'uppercase',
  },
  btn: {
    width: '40%',
    height: Metrics.screen.height / 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.screen.width / 60,
    borderWidth: 1.5,
    alignSelf: 'flex-start',
    backgroundColor: Colors.white,
  },
});
