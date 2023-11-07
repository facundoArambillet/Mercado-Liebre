import { UserDTO } from "../user/user-dto";

export interface UserAddressDetailDTO {
    idAddress: number;
    address: string;
    addressNumber: number;
    province: string;
    city: string;
    postalCode: number;
    contactPhone: number;
    isPrincipal: boolean;
    user: UserDTO;
}
