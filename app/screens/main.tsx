import React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Tile from '../components/product-tile';
import { productService } from '../services/products.service';
import { Product } from '../models/product.interface';

interface MainScreenState {
  items: Product[];
  refreshing: boolean;
}

class MainScreen extends React.Component<{}, MainScreenState> {
  state: MainScreenState = { items: [], refreshing: false };

  componentDidMount() {
    this.loadProducts();
  }

  onRefresh() {
    this.setState({ refreshing: true });
    this.loadProducts().then(() => {
      this.setState({ refreshing: false });
    });
  }

  loadProducts() {
    return productService.getProducts().then(products => {
      this.setState({
        items: products,
      });
    });
  }

  render() {
    const products = this.state.items.map(product => (
      <Tile key={product.id} product={product}></Tile>
    ));

    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
        style={styles.wrapper}>
        <View style={styles.navigationBar}></View>
        <View style={styles.searchBar}>
          <TextInput
            inlineImageLeft="search"
            inlineImagePadding={15}
            placeholder="search"
            style={styles.searchInput}
          />
        </View>
        <View style={styles.catalogue}>{products}</View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  navigationBar: {
    flex: 0.1,
    backgroundColor: '#008ACE',
  },
  searchBar: {
    height: 74,
    backgroundColor: '#fff',
    elevation: 20,
    padding: 20,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#8F8F8F',
    paddingLeft: 15,
  },
  catalogue: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tile: {
    marginRight: 20,
    marginBottom: 20,
  },
});

export default MainScreen;
