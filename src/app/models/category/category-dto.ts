import { CategoryFamilyDTO } from "../category-family/category-family-dto";

export interface CategoryDTO {
    idCategory: number;
    name: string;
    categoryFamily: CategoryFamilyDTO;
}
