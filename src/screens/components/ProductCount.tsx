import { Colors } from '@src/assets';
import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  productCount?: number | string;
}

const ProductCount: FC<Props> = ({ productCount }) => {
  return (
    <View style={styles.viewProduct}>
      <Text style={styles.txtProduct}>{productCount} product</Text>
    </View>
  );
};

export default ProductCount;

const styles = StyleSheet.create({
  viewProduct: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: Colors.whiteSmoke,
  },
  txtProduct: {
    fontSize: 14,
    fontFamily: 'NotoSans-Regular',
    textTransform: 'uppercase',
    color: Colors.black,
    marginLeft: 20,
  },
});