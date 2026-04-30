<<<<<<< HEAD
import Breadcrumbs from "../components/blogs/bread-crumb";
import Footer from "../components/footer";
import BlogDetailsSection from "../components/blogs/blog-details/image-card";
import Sidebar from "../components/blogs/side-bar";
import BlogDetailsContent from "../components/blogs/blog-details/blog-details-content";
import Header from "../components/header";

const BlogDetailsPage = () => {
    return (
        <div>
            <Header/>
            <Breadcrumbs title="Blog Details" />

            <div className="container">
                <div className="row">

                    {/* LEFT - BLOG (8 columns) */}
                    <div className="col-lg-8">
                        <BlogDetailsSection />
                        <BlogDetailsContent />
                    </div>

                    {/* RIGHT - SIDEBAR (4 columns) */}
                    <div className="col-lg-4">
                        <Sidebar />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
=======
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
                            <div className="col-lg-12 col-md-12">

                                <div className="post-content mb-0">

                                    {/* IMAGE */}
                                    <div className="post-img">
                                        <div className="single-post-featured-image">
                                            <img src={blog.image || blog.thumbnail} alt={blog.title} />
                                        </div>
                                    </div>

                                    {/* TITLE */}
                                    <h3 className="blog-title">{blog.title}</h3>

                                    <span className="meta-date">
                                        {blog.created_at}
                                    </span>

                                    <span className="post-category">
                                        <a href="#">
                                            {blog.blog_category?.name}
                                        </a>
                                    </span>

                                    {/* CONTENT */}
                                    <div
                                        className="entry-content"
                                        dangerouslySetInnerHTML={{ __html: blog.description }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>


        </>
>>>>>>> cb3e55f (final commit)
    );
};

export default BlogDetailsPage;