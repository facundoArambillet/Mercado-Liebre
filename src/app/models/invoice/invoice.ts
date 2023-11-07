import { ShoppingCart } from "../shopping-cart/shopping-cart";

export interface Invoice {
    idInvoice: number;
    total: number;
    date: Date;
    shoppingCart: ShoppingCart;
}
