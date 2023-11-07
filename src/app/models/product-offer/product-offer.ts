import { Product } from "../product/product";

export interface ProductOffer {
    idProductOffer: number;
    discountPercentage: number;
    total: number;
    product: Product;
}
