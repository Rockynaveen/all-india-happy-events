import { blogDetailsData } from "../../../data/blogs/blog-details-data/image-data";

const BlogDetailsSection = () => {
    return (
        <section className="wide-tb-90">

            {blogDetailsData.map((item) => (
                <div key={item.id} className="post-content mb-0">

                    {/* IMAGE */}
                    <div className="post-img">
                        <div className="single-post-featured-image">
                            <img src={item.image} alt="blog" />
                        </div>
                    </div>

                </div>
            ))}

        </section>
    );
};

export default BlogDetailsSection;