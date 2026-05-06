
import { useParams } from "react-router-dom";
import { useBlogDetail } from "../hooks/use-blog-details-page";
import "../assets/css/style.css";

const BlogDetailsPage = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data, isLoading, error } = useBlogDetail(slug || "");

    if (isLoading) {
        return <div className="wide-tb-90 text-center">Loading article...</div>;
    }

    if (error || !data) {
        return <div className="wide-tb-90 text-center">Blog not found</div>;
    }

    const blog = data;

    return (
        <>

            <main id="body-content">

                <section className="wide-tb-90">
                    <div className="container">
                        <div className="row">

                            {/* LEFT SIDE */}
                            <div className="row">

                                {/* LEFT SIDE */}
                                <div className="col-lg-8 col-md-12 my-5 py-5">

                                    <div className="post-content mb-0">

                                        {/* IMAGE */}
                                        <div className="post-img">
                                            <div className="single-post-featured-image">
                                                <img
                                                    src={blog.image || blog.thumbnail}
                                                    alt={blog.title}
                                                />
                                            </div>
                                        </div>


                                        {/* TITLE */}
                                        <h3 className="blog-title">
                                            {blog.title}
                                        </h3>


                                        <span className="meta-date">
                                            {blog.created_at}
                                        </span>


                                        <span className="post-category ms-3">
                                            {blog.blog_category?.name}
                                        </span>


                                        {/* CONTENT */}
                                        <div
                                            className="entry-content"
                                            dangerouslySetInnerHTML={{
                                                __html: blog.description,
                                            }}
                                        />

                                    </div>

                                </div>




                                {/* RIGHT SIDE */}
                                <div className="col-lg-4 col-md-12 my-5 py-5">

                                    <div className="widget">

                                        <h3 className="widget-title">
                                            Categories
                                        </h3>


                                        <ul className="list-unstyled icons-listing mb-0 widget-listing arrow">

                                            <li>

                                                <a
                                                    href={`/blog-category/${blog.blog_category?.slug}`}
                                                >
                                                    {blog.blog_category?.name}
                                                </a>

                                            </li>

                                        </ul>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>

            </main>


        </>
    );
};

export default BlogDetailsPage;