import type { PopularPost } from "../../types/blog/popular-post-type";

const PopularPostItem = ({ item }: { item: PopularPost }) => {
  return (
    <li>
      <img src={item.image} alt={item.title} />
      <div>
        <h6>
          <a href="#">{item.title}</a>
        </h6>
        <small>{item.date}</small>
      </div>
    </li>
  );
};

export default PopularPostItem;