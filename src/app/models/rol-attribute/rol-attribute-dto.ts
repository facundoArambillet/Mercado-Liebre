import { UserRolDTO } from "../user-rol/user-rol-dto";

export interface RolAttributeDTO {
    idAttribute: number,
    name: string,
    value: string,
    userRol: UserRolDTO
}
