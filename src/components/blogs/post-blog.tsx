import type { Blog } from "../../types/blog-type";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }: { blog: Blog }) => {
    return (
        <div className="post-content mb-4">
            <div className="row align-items-center">

                {/* IMAGE */}
                <div className="col-md-6">
                    <div className="post-img position-relative">

                        {blog.isSticky && (
                            <span className="sticky-post">
                                <i className="fa fa-bookmark-o"></i>
                            </span>
                        )}

                        {/* ✅ Wrap image with Link */}
                        <Link to={`/blog/${blog.id}`}>
                            <div className="img-hover">
                                <i className="fa fa-plus"></i>
                            </div>

                            <img src={blog.image} alt="" className="img-fluid" />
                        </Link>

                    </div>
                </div>

                {/* CONTENT */}
                <div className="col-md-6">

                    {/* ✅ Title Link */}
                    <h3 className="blog-title">
                        <Link to={`/blog/${blog.id}`} className="post-title">
                            {blog.title}
                        </Link>
                    </h3>

                    <div className="mb-2">
                        <span className="meta-date me-2">{blog.date}</span>
                        <span className="post-category">
                            <a href="#">{blog.category}</a>
                        </span>
                    </div>

                    <div className="entry-content">
                        <p>{blog.description}</p>
                    </div>

                    {/* ✅ Read More Link */}
                    <div className="read-more mt-2">
                        <Link
                            to={`/blog/${blog.id}`}
                            className="btn btn-link btn-link-primary"
                        >
                            Read More
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BlogCard;