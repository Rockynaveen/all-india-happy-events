import { blogs } from "../../data/blogs/blog-data"; // ✅ FIXED
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