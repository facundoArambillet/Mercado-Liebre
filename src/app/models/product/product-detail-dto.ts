import { CategoryDTO } from "../category/category-dto";
import { PaymentPlanDTO } from "../payment-plan/payment-plan-dto";
import { ProductAttributeDTO } from "../product-attribute/product-attribute-dto";
import { UserDTO } from "../user/user-dto";

export interface ProductDetailDTO {
    idProduct: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    weeklyOffer: boolean;
    category: CategoryDTO;
    user: UserDTO;
    productAttributes: ProductAttributeDTO[];
    paymentPlans: PaymentPlanDTO[];
}
