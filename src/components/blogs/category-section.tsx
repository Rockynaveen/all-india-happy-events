import { categories } from "../../data/blogs/category-data";
import CategoryItem from "./category-card";

const CategoriesSection = () => {
    return (
        <div className="widget">
            <h3 className="widget-title">Categories</h3>

            <ul className="list-unstyled icons-listing mb-0 widget-listing arrow">
                {categories.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default CategoriesSection;