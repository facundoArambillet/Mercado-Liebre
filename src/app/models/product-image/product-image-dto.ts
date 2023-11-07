import { Product } from "../product/product";

export interface ProductImageDTO {
    idProductImage: number;
    image: Uint8Array;
    product: Product;
}
