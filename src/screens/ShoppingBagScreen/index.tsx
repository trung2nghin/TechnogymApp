import React, { FC, useCallback, useEffect, useMemo } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { CompositeScreenProps, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProductCount from '../components/ProductCount';
import ProductList from './components/ProductList';
import { Colors, Metrics } from '@src/assets';
import { useAppSelector } from '@src/hooks/useRedux';
import { Container, Footer } from '../components';
import { CartStackParamList } from '@src/navigation/Stacks/cart-stack';
import { FavoriteStackParamList } from '@src/navigation/Stacks/favorite-stack';

export type ShoppingBagScreenProp = CompositeScreenProps<
  StackScreenProps<CartStackParamList, 'SHOPPING_BAG'>,
  StackScreenProps<FavoriteStackParamList, 'FAVORITE'>
>;

export type ShoppingBagNavigationProp = ShoppingBagScreenProp['navigation'];

const ShoppingBagScreen: FC = () => {
  const navigation = useNavigation<ShoppingBagNavigationProp>();
  const user = useAppSelector(state => state.auth.userInfo);
  const cart = useAppSelector(state => state.cart);

  const onNavWishList = useCallback(() => {
    navigation.navigate('FAVORITE');
  }, []);

  useEffect(() => {
    // try {
    //   requestGetUserCart({ user });
    // } catch (error) {
    //   console.log('get user cart error', error);
    // }
  }, []);

  let totalPrice = useMemo(() => {
    return cart.reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.price * currentValue.quantity,
      0,
    );
  }, [cart]);

  const onCheckout = useCallback(() => {
    navigation.navigate('MODAL_PAYMENT', {
      totalPrice,
    });
  }, [totalPrice]);

  return (
    <Container
      bodyColor={Colors.white}
      footer={
        cart.length !== 0 ? (
          <Footer
            bgColor={Colors.white}
            height={114}
            total={totalPrice}
            onCheckout={onCheckout}
          />
        ) : (
          <></>
        )
      }>
      {cart.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.txtTitle}>Your cart is empty</Text>
          <Text style={styles.txtTips}>Add items from your Wishlist</Text>
          <TouchableOpacity
            style={styles.btnNavWishlist}
            onPress={onNavWishList}>
            <View style={styles.viewMain}>
              <Ionicons name={'heart-outline'} size={24} color={Colors.black} />
              <Text style={styles.txtBtn}>Wishlist</Text>
            </View>
            <Ionicons
              name={'arrow-forward-outline'}
              size={24}
              color={Colors.black}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.existProductContainer}>
          <ProductCount productCount={cart.length} />
          <FlatList
            data={cart}
            renderItem={ProductList}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Container>
  );
};

export default ShoppingBagScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 42,
  },
  existProductContainer: {
    flex: 1,
  },
  viewMain: { flexDirection: 'row' },
  btnNavWishlist: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: Metrics.screen.height / 16.875,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.black,
  },
  txtTitle: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 18,
    color: Colors.black,
    textTransform: 'uppercase',
  },
  txtTips: {
    fontSize: 13,
    fontFamily: 'NotoSans-Regular',
    color: Colors.black,
    paddingBottom: 12,
  },
  txtBtn: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 15,
    color: Colors.black,
    textTransform: 'uppercase',
    bottom: 2,
    marginLeft: 8,
  },
  viewBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    left: 38,
  },
});
