import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "https://allhappyevents.jbservices.in/api/blogs"
        );

        setBlogs(res.data.data?.blogs || []);
        setCategories(res.data.data?.categories || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <section className="breadcrumbs-page">
        <div className="container">
          <h1>Blog List</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="javascript:"><i className="fa fa-home"></i></a></li>
              <li className="breadcrumb-item active" aria-current="page">Blog List</li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="wide-tb-90">
        <div className="container">
          <div className="row">

            {/* LEFT SIDE BLOG LIST */}
            <div className="col-lg-8 col-md-12">

              {blogs.length === 0 ? (
                <p>No blogs found</p>
              ) : (
                blogs.map((blog, index) => (
                  <div className="post-content" key={index}>
                    <div className="row align-items-center">

                      {/* IMAGE */}
                      <div className="col-md-6">
                        <div className="post-img">
                          <a href={`/blog/${blog.slug}`}>
                            <div className="img-hover">
                              <i className="fa fa-plus"></i>
                            </div>
                          </a>

                          <img src={blog.thumbnail} alt={blog.title} />
                        </div>
                      </div>

                      {/* CONTENT */}
                      <div className="col-md-6">

                        <h3 className="blog-title">
                          <a
                            href={`/blog/${blog.slug}`}
                            className="post-title"
                          >
                            {blog.title}
                          </a>
                        </h3>

                        <span className="meta-date">
                          {blog.created_at}
                        </span>

                        {/* ONLY API CATEGORY */}
                        {categories.length > 0 && (
                          <span className="post-category">
                            <a href={`/category/${categories[0].slug}`}>
                              {categories[0].name}
                            </a>
                          </span>
                        )}

                        <div className="entry-content">
                          <p>
                            {blog.short_description}
                          </p>
                        </div>

                        <div className="read-more">
                          <Link
                            to={`/blog/${blog.slug}`}
                            className="btn btn-link btn-link-primary"
                          >
                            Read More
                          </Link>
                        </div>

                      </div>

                    </div>
                  </div>
                ))
              )}

            </div>



          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;