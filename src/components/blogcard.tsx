type Blog = {
  id: number;
  title: string;
  description: string;
  image: string;
  updated: string;
};

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <div className="rr-project-slider-item">

      {/* Image */}
      <div className="rr-project-slider-thumb">
        <img src={blog.image} alt={blog.title} />
      </div>

      {/* Overlay Content */}
      <div className="rr-project-slider-content text-center">
        <h3 className="rr-project-slider-title">{blog.title}</h3>
        <p>{blog.description}</p>
        <span>Updated: {blog.updated}</span>
      </div>

    </div>
  );
}