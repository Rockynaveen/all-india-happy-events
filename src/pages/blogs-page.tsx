<<<<<<< HEAD
import Footer from "../components/footer"
import Breadcrumbs from "../components/blogs/bread-crumb"
import BlogSection from "../components/blogs/post-blog-section"
import Header from "../components/header"

const BlogsPage = () => {
  return (
    <div>
      <Header/>
      <Breadcrumbs title="Blog List" />
      <BlogSection />
      <Footer />
    </div>
  )
}
export default BlogsPage
=======
import BlogList from "../components/blog/blog-list"; // ✅ FIX THIS PATH
import { useBlogs } from "../hooks/use-blogs";

const BlogPage = () => {
  const { data, isLoading, error } = useBlogs();

  console.log("BLOG API DATA:", data);

  if (isLoading) {
    return (
      <>
        <p className="text-center py-5">Loading blogs...</p>
      </>
    );
  }

  if (error) {
    return (
      <>
        <p className="text-center py-5">Error loading blogs</p>
      </>
    );
  }

  return (
    <>

      <div className="container py-5">
        <h2 className="mb-4">Blogs</h2>

        {/* ✅ safe pass */}
        <BlogList data={data} />
      </div>

    </>
  );
};

export default BlogPage;
>>>>>>> cb3e55f (final commit)
