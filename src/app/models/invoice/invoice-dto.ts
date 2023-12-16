import { Product } from "../product/product";
import { User } from "../user/user";

export interface InvoiceDTO {
    idInvoice: number;
    total: number;
    date: Date;
    user: User;
    products: Product[];
}
