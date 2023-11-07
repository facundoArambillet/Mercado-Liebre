import { CategoryDTO } from "../category/category-dto";

export interface CategoryAttributeDTO {
    idAttribute: number;
    name: string;
    category: CategoryDTO;
}
