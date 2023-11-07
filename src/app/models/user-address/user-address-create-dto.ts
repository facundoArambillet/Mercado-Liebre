import { UserDTO } from "../user/user-dto";

export interface UserAddressCreateDTO {
    address: string;
    addressNumber: number;
    province: string;
    city: string;
    postalCode: number;
    contactPhone: number;
    user: UserDTO;
}
