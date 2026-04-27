import BlogCard from "./blog-card";

const BlogList = ({ data }: any) => {
  const blogs = data?.data?.blogs || [];
  const categories = data?.data?.categories || [];

  if (!blogs.length) {
    return <p className="text-center">No blogs found</p>;
  }

  return (
    <div className="row">

      {blogs.map((blog: any, index: number) => (
        <BlogCard
          key={index}
          blog={blog}
          category={categories?.[0]?.name}
        />
      ))}

    </div>
  );
};

export default BlogList;