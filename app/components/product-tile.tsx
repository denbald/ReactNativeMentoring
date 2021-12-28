import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import BaseText from './common/base-text';
import { Product } from '../models/product.interface';

const Tile: React.FC<{
  product: Product;
}> = ({ product }) => {
  const { oldPrice, price, discount, name, imageUri } = product;

  return (
    <View style={styles.host}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <BaseText numberOfLines={1} style={styles.name}>
        {name}
      </BaseText>
      <View style={styles.priceRow}>
        <BaseText style={[styles.priceRowItem, styles.price]}>{price}</BaseText>
        <BaseText style={[styles.priceRowItem, styles.oldPrice]}>
          {oldPrice}
        </BaseText>
        <BaseText style={[styles.priceRowItem, styles.discount]}>
          {discount}
        </BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  host: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 10,
    minWidth: 160,
    minHeight: 160,
    width: 160,
    height: 160,
    maxWidth: 160,
    maxHeight: 160,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    alignSelf: 'flex-start',
    marginTop: 5,
    fontSize: 15,
    lineHeight: 20,
    overflow: 'hidden',
  },
  priceRow: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  priceRowItem: {
    marginRight: 10,
  },
  price: {
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#8F8F8F',
    textDecorationLine: 'line-through',
  },
  discount: {
    color: '#00A8F3',
  },
});

export default Tile;
