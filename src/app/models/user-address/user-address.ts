import { User } from "../user/user";

export interface UserAddress {
    idAddress: number;
    address: string;
    addressNumber: number;
    province: string;
    city: string;
    postalCode: number;
    contactPhone: number;
    isPrincipal: boolean;
    user: User;
}
