"use client"

import Container from "@/components/common/Container";
import { Blog } from "@/sanity.types";
import { BlogCardSkeleton } from "@/components/skeletons/BlogCardSkeleton";
import BlogCard from "@/components/common/BlogCard";
import useSWR from "swr";
import { GET_ALL_BLOGS_QUERY } from "@/sanity/queries/query";
import { client } from "@/sanity/lib/client";

const getAllBlogs = async (quantity: number) => {
  return client.fetch(GET_ALL_BLOGS_QUERY, { quantity });
};

export default function BlogPage () {
  
  const { data: blogs, isLoading } = useSWR(
    ["blogs", 6],
    ([_, quantity]) => getAllBlogs(quantity)
  );

  return (
    <div className="pt-5 pb-10">
      <Container>

        {/* Page header */}
        <div className="mb-3 md:mb-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
            Our Blog
          </p>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            Stories & Insights
          </h1>
        </div>

        {/* Grid */}
        {!isLoading && blogs?.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {blogs.map((blog: Blog, index: number) => (<BlogCard blog={blog} key={index} />))}
          </div>
        )}
        
        {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
        )}
        

      </Container>
    </div>
  );
};