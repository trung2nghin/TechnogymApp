import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused, useScrollToTop } from '@react-navigation/native';

import { Colors, Metrics } from '../../assets';
import BackgroundItemView from '../components/BackgroundItemView';

import { RootState } from '../../redux/store';
import { ProductList as ProductListType } from '@src/types';
// import { ProductItem as ProductItemType } from '../../domain/product';
import { useAppDispatch, useAppSelector } from '@src/hooks/useRedux';
import { getAllFavoriteProductThunk } from '@src/redux/favorite/favoriteThunk';
import { Container, ProductCount, ProductList } from '../components';
import ProductItem from './components/ProductItem';
import { getUserIdFavorite } from '@src/redux/favorite/favoriteSlice';

const ITEM_HEIGHT = Metrics.screen.height / 5.6;

const FavoriteScreen: FC = () => {
  const [products, setProducts] = useState<ProductListType>();

  const user = useAppSelector(state => state.auth.userInfo);
  // const bag = useSelector<RootState, Bag>(state => state.bag);
  const favorite = useAppSelector(state => state.favorite.product);
  const recent = useAppSelector(state => state.recent);
  const dispatch = useAppDispatch();

  const ref = useRef(null);
  const isFocused = useIsFocused();
  useScrollToTop(ref);

  useEffect(() => {
    const onFetch = async () => {
      await dispatch(getAllFavoriteProductThunk(user));
      dispatch(getUserIdFavorite(user?.myInfo?._id));
    };
    onFetch();
  }, [isFocused]);

  return (
    <Container bodyColor={Colors.white}>
      {favorite?.length === 0 ? (
        <View style={styles.container}>
          <Text style={styles.txtTitle}>Nothing saved yet</Text>
          <Text style={styles.txtTips}>
            Tap the heart icon to save items here for later.
          </Text>
          <BackgroundItemView
            width={'48%'}
            height={'4%'}
            backgroundColor={Colors.white}>
            <View style={styles.viewBtn}>
              <Text style={styles.txtBtn}>Recently viewed</Text>
              <Ionicons name={'arrow-forward'} size={20} color={Colors.black} />
            </View>
          </BackgroundItemView>
          <View style={{ marginTop: 24 }}>
            <FlatList
              data={recent}
              renderItem={(props: any) => ProductItem({ ...props, recent })}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      ) : (
        <View style={styles.existProductContainer}>
          <ProductCount productCount={favorite?.length} />
          <FlatList
            data={favorite}
            renderItem={ProductList}
            keyExtractor={item => item._id.toString()}
            ref={ref}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </Container>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  existProductContainer: {
    flex: 1,
  },
  txtTitle: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 18,
    color: Colors.black,
    textTransform: 'uppercase',
    marginLeft: 42,
  },
  txtTips: {
    fontSize: 13,
    fontFamily: 'NotoSans-Regular',
    color: Colors.black,
    paddingBottom: 12,
    marginLeft: 42,
  },
  viewBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    // right: 4,
    left: 38,
  },
  txtBtn: {
    fontSize: 13,
    fontFamily: 'NotoSans-Bold',
    color: Colors.black,
    textTransform: 'uppercase',
    bottom: 1,
  },
});
