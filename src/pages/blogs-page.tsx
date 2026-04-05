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