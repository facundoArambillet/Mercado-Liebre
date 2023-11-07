import { Product } from "../product/product";
import { UserRol } from "../user-rol/user-rol";

export interface User {
    idUser: number;
    email: string;
    password: string;
    name: string;
    lastName: string;
    creationDate: Date;
    salesMade: number;
    userRol: UserRol;
    products: Product[];
}
