import { popularPosts } from "../../data/blogs/popular-data";
import PopularPostItem from "./popular-post";

const PopularPostsSection = () => {
  return (
    <div className="widget">
      <h3 className="widget-title">Popular Posts</h3>

      <div className="popular-post">
        <ul className="list-unstyled">
          {popularPosts.map((item) => (
            <PopularPostItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularPostsSection;