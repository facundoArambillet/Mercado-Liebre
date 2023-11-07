import { CategoryFamily } from "../category-family/category-family";

export interface Category {
    idCategory: number;
    name: string;
    categoryFamily: CategoryFamily;
}
