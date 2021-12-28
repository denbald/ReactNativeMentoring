import React from 'react';
import { Product } from '../models/product.interface';
import { Button, Image, StyleSheet, View } from 'react-native';
import BaseText from '../components/common/base-text';

const ProductDetails: React.FC<{
  product: Product;
}> = ({ product }) => {
  const { oldPrice, price, discount, name, imageUri, colors, description } =
    product;
  const colorItems =
    colors &&
    colors.map(color => (
      <View style={styles.colorItem}>
        <BaseText>{color}</BaseText>
      </View>
    ));

  return (
    <View style={styles.host}>
      <View>
        <Image style={styles.image} source={{ uri: imageUri }} />
      </View>
      <View>
        <View style={styles.infoSection}>
          <BaseText numberOfLines={1} style={styles.name}>
            {name}
          </BaseText>
          <View style={styles.priceRow}>
            <BaseText style={[styles.priceRowItem, styles.price]}>
              {price}
            </BaseText>
            <BaseText style={[styles.priceRowItem, styles.oldPrice]}>
              {oldPrice}
            </BaseText>
            <BaseText style={[styles.priceRowItem, styles.discount]}>
              {discount}
            </BaseText>
          </View>
        </View>
      </View>
      <View style={styles.colorSection}>
        <BaseText style={styles.title}>Select Color</BaseText>
        <View style={styles.colorRow}>{colorItems}</View>
      </View>
      <View style={styles.descriptionSection}>
        <BaseText style={styles.title}>Description</BaseText>
        <BaseText>{description}</BaseText>
      </View>
      <View style={styles.cartButton}>
        <Button title="Add To Cart" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  host: {
    padding: 20,
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
  },
  infoSection: {
    height: 70,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
  },
  colorSection: {
    marginTop: 10,
    height: 90,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
  },
  colorRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  descriptionSection: {
    marginTop: 15,
  },
  colorItem: {
    height: 30,
    backgroundColor: '#F7F7F7',
    marginRight: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 25,
    fontWeight: 'bold',
  },
  name: {
    marginBottom: 15,
    fontSize: 15,
    lineHeight: 20,
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
  cartButton: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
  },
});

export default ProductDetails;
