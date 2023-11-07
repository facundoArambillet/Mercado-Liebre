import { CategoryDTO } from "../category/category-dto";
import { UserDTO } from "../user/user-dto";

export interface ProductCreateDTO {
    name: string;
    price: number;
    stock: number;
    description: string;
    isWeeklyOffer: boolean;
    category: CategoryDTO;
    user: UserDTO;
}
