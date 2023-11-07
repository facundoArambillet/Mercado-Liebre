import { ShoppingCart } from "../shopping-cart/shopping-cart";
import { ShoppingCartDTO } from "../shopping-cart/shopping-cart-dto";

export interface InvoiceDTO {
    idInvoice: number;
    total: number;
    date: Date;
    shoppingCart: ShoppingCartDTO;
}
