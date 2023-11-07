import { ProductDetailDTO } from "../product/product-detail-dto";
import { UserDTO } from "../user/user-dto";

export interface ShoppingCartDTO {
    idCart: number;
    price: number;
    user: UserDTO;
    products: ProductDetailDTO[];
}
