import type { Blog } from "../types/blog-type";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <div className="rr-project-slider-item">
      <div className="rr-project-slider-thumb">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="rr-project-slider-content text-center">
        <h3 className="rr-project-slider-title">{blog.title}</h3>
        <p>{blog.description}</p>
        <span>Updated: {blog.updated}</span>
      </div>
    </div>
  );
}