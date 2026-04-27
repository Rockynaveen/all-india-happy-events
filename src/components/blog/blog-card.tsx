import { Link } from "react-router-dom";

const BlogCard = ({ blog, category }: any) => {
  return (
    <div className="col-md-6">

      {/* IMAGE + CONTENT WRAPPER (IMPORTANT FOR DESIGN) */}
      <div className="blog-post">

        {/* IMAGE */}
        <div className="blog-img">
          <Link to={`/blogs/${blog.slug}`}>
            <img
              src={blog.thumbnail}
              alt={blog.title}
              className="img-fluid"
            />
          </Link>
        </div>

        {/* TITLE */}
        <h3 className="blog-title">
          <Link to={`/blogs/${blog.slug}`} className="post-title">
            {blog.title}
          </Link>
        </h3>

        {/* META (IMPORTANT INLINE STRUCTURE) */}
        <div className="blog-meta">
          <span className="meta-date">{blog.created_at}</span>

          <span className="post-category">
            <a href="javascript:void(0)">
              {category || "Uncategorized"}
            </a>
          </span>
        </div>

        {/* CONTENT */}
        <div className="entry-content">
          <p>
            {blog.short_description
              ?.replace(/\n/g, " ")
              .trim()
              .slice(0, 160)}
            ...
          </p>
        </div>

        {/* READ MORE */}
        <div className="read-more">
          <Link
            to={`/blogs/${blog.slug}`}
            className="btn btn-link btn-link-primary"
          >
            Read More
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;