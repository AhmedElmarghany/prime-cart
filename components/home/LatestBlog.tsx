import Title from "@/components/common/Title";
import { getLatestBlogs } from "@/sanity/queries";
import { Blog } from "@/sanity.types";
import BlogCard from "../common/BlogCard";

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();
  return (
    <div className="mb-10 lg:mb-20">
      <Title>Latest Blog</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
        {blogs?.map((blog: Blog, index: number) => (<BlogCard blog={blog} key={index}/>))}
      </div>
    </div>
  );
};

export default LatestBlog;
