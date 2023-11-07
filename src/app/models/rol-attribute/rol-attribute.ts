import { UserRol } from "../user-rol/user-rol"

export interface RolAttribute {
    idAttribute: number,
    name: string,
    value: string,
    userRol: UserRol
}
