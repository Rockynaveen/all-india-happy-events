import Footer from "../components/footer"
import Breadcrumbs from "../components/blogs/bread-crumb"
import BlogSection from "../components/blogs/post-blog-section"

const BlogsPage = () => {
  return (
    <div>
      <Breadcrumbs title="Blog List" />
      <BlogSection />
      <Footer />
    </div>
  )
}
export default BlogsPage