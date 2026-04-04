import type { Category } from "../../types/blog/category-types";

const CategoryItem = ({ item }: { item: Category }) => {
    return (
        <li>
            <a href="#">{item.name}</a>
        </li>
    );
};

export default CategoryItem;