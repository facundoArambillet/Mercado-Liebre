import { Product } from "../product/product";

export interface ProductImage {
    idProductImage: number;
    image: Uint8Array;
    product: Product;
}
