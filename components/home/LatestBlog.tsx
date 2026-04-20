"use client"
import Title from "@/components/common/Title";
import { Blog } from "@/sanity.types";
import BlogCard from "../common/BlogCard";
import { LATEST_BLOG_QUERY } from "@/sanity/queries/query";
import useSWR from "swr";
import { BlogCardSkeleton } from "../skeletons/BlogCardSkeleton";
import { client } from "@/sanity/lib/client";


const fetchLatestBlogs = () => client.fetch(LATEST_BLOG_QUERY);





const LatestBlog = () => {
  const { data: blogs, isLoading } = useSWR(
    "blogs",
    fetchLatestBlogs
  );
  return (
    <>
      <div className="mb-10 lg:mb-20">
        <Title>Latest Blog</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {isLoading &&
            <>
              {Array.from({ length: 4 }).map((_, index) => (
                <BlogCardSkeleton key={index} />
              ))}
            </>
          }
          {blogs?.map((blog: Blog, index: number) => (<BlogCard blog={blog} key={index} />))}
        </div>
      </div>
    </>
  );
};

export default LatestBlog;
