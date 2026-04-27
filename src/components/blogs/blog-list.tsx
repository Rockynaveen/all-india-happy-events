<<<<<<< HEAD
import { blogs } from "../../data/blogs/blog-data"; // ✅ FIXED
=======
// import { blogs } from "../../data/blogs/blog-data"; // ✅ FIXED
>>>>>>> cb3e55f (final commit)
import BlogCard from "./post-blog";

const BlogList = () => {
    return (
        <>
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </>
    );
};

export default BlogList;