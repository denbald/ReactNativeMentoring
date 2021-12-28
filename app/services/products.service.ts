import { Product } from '../models/product.interface';

const API_URI = 'https://demo.spreecommerce.org/api/v2/storefront/products';

const getImageUri = (id: string) => `https://picsum.photos/id/${id}/100/100`;

class ProductsService {
  getProducts(): Promise<Product[]> {
    return fetch(API_URI)
      .then(response => response.json())
      .then(response => {
        return this.mapDataToProductItems(response.data);
      });
  }

  private mapDataToProductItems(
    data: { id: string; attributes: any }[],
  ): Product[] {
    return data.map(({ id, attributes }) => {
      const { description, price, compare_at_price, name } = attributes;

      return {
        id,
        description,
        price,
        oldPrice: compare_at_price,
        name,
        imageUri: getImageUri(id),
      };
    });
  }
}

export const productService = new ProductsService();
