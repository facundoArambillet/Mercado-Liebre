import { Product } from "../product/product";

export interface ProductOfferDTO {
    idProductOffer: number;
    discountPercentage: number;
    total: number;
    product: Product;
}
