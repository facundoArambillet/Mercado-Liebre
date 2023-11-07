import { Category } from "../category/category";
import { PaymentPlan } from "../payment-plan/payment-plan";
import { ProductAttribute } from "../product-attribute/product-attribute";
import { User } from "../user/user";

export interface Product {
    idProduct: number;
    name: string;
    price: number;
    stock: number;
    description: string;
    isWeeklyOffer: boolean;
    category: Category;
    user: User;
    users: User[];
    productAttributes: ProductAttribute[];
    paymentPlans: PaymentPlan[];
}
