import Breadcrumbs from "../components/blogs/bread-crumb";
import Footer from "../components/footer";
import BlogDetailsSection from "../components/blogs/blog-details/image-card";
import Sidebar from "../components/blogs/side-bar";
import BlogDetailsContent from "../components/blogs/blog-details/blog-details-content";

const BlogDetailsPage = () => {
    return (
        <div>
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
    );
};

export default BlogDetailsPage;