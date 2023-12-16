import { ProductDetailDTO } from "../product/product-detail-dto";
import { UserDTO } from "../user/user-dto";

export interface ShoppingCart {
    idCart: number;
    price: number;
    user: UserDTO;
}
