import { tags } from "../../data/blogs/tag-data";
import TagItem from "./tag-card";

const TagsSection = () => {
    return (
        <div className="widget">
            <h3 className="widget-title">Tags</h3>

            <div className="tags">
                {tags.map((item) => (
                    <TagItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default TagsSection;