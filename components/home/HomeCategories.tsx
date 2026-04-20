"use client"
import Title from "@/components/common/Title";
import { Category } from "@/sanity.types";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { CATEGORIES_QUERY } from "@/sanity/queries/query";
import { client } from "@/sanity/lib/client";
import useSWR from "swr";
import { Skeleton } from "../ui/skeleton";


const getCategories = (quantity: number) => {
  return client.fetch(CATEGORIES_QUERY, { quantity });
};


const HomeCategories = () => {

  const { data: categories, isLoading } = useSWR(
    ["categories", 6],
    ([_, quantity]) => getCategories(quantity)
  );

  return (
    <div className="border border-border my-10 md:my-20 p-5 lg:p-7 rounded-2xl">
      <Title className="border-b pb-3">Popular Categories</Title>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {isLoading &&
          <>
            {Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="p-5 h-28 gap-3 rounded-xl" />
            ))}
          </>
        }

        {categories?.map((category: Category) => (
          <Link
            // href={`/category/${category?.slug?.current}`}
            href={{ pathname: "/shop", query: { category: category?.slug?.current } }}
            key={category?._id}
            className="hover:bg-popover p-5 flex items-center gap-3 rounded-xl group"
          >

            {category?.image && (
              <div className="overflow-hidden border border-border bg-secondary hover:border-primary hoverEffect w-20 h-20 rounded-lg">
                <Image
                  src={urlFor(category?.image).url()}
                  alt="categoryImage"
                  width={500}
                  height={500}
                  className="w-full h-full object-contain group-hover:scale-110 hoverEffect"
                />
              </div>
            )}
            <div className="space-y-1 cursor-pointer">
              <h3 className="text-base font-semibold">{category?.title}</h3>
              <p className="text-sm">
                <span className="font-bold text-primary">{`(${category?.productCount})`}</span>{" "}
                items Available
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategories;
