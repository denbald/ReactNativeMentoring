import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainScreen from './app/screens/main';
// import { Product } from './app/models/product.interface';
// import ProductDetails from './app/screens/product-details';

// const PRODUCT_MOCK: Product = {
//   id: '2',
//   description: 'Some test descriptions',
//   price: 200,
//   oldPrice: 220,
//   discount: 20,
//   name: 'Some Test phone name',
//   colors: ['blue', 'yellow'],
//   imageUri: `https://picsum.photos/id/2/250/250`,
// };

const App = () => {
  return (
    <View style={styles.main}>
      <MainScreen />
      {/*<ProductDetails product={PRODUCT_MOCK} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;
