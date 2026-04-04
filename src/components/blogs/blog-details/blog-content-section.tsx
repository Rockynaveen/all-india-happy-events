import React from "react";
import BlogCard from "../../../components/blogs/blog-details/image-card";
import { blogData } from "../../../data/blogs/blog-details-data/blog-conent-data";

const BlogSection: React.FC = () => {
  return (
    <div className="container">
      {blogData.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogSection;