export interface Product {
  oldPrice: number;
  price: number;
  id: string;
  name: string;
  imageUri: string;
  description?: string;
  discount?: number;
  colors?: string[];
  imagesUri?: string[];
}
