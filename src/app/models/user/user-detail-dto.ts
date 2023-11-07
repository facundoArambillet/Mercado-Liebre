import { UserRolDTO } from "../user-rol/user-rol-dto";

export interface UserDetailDTO {
    idUser: number;
    email: string;
    name: string;
    lastName: string;
    creationDate: Date;
    salesMade: number;
    userRol: UserRolDTO;
}
