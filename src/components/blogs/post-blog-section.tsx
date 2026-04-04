import BlogList from "./blog-list";
import Sidebar from "./side-bar";
import Pagination from "./pagination";

const BlogSection = () => {
  return (
    <section className="wide-tb-90">
      <div className="container">
        <div className="row">

          <div className="col-lg-8 col-md-12">
            <BlogList />
            <Pagination />
          </div>

          <div className="col-lg-4 col-md-12">
            <Sidebar />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;