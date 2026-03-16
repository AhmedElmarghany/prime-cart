"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import HomeTabbar from "../home/HomeTabbar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import { motion, AnimatePresence } from "motion/react";
import { RiLoaderLine } from "@remixicon/react";
import useSWR from "swr";
import NoProductAvailable from "./NoProductAvailable";
import { Product } from "@/sanity.types";
import ProductCard from "./ProductCard";

const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;

const fetchProducts = ([, variant]: [string, string]) =>
  client.fetch(query, { variant });

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");

  const { data: products, isLoading } = useSWR(
    ["products", selectedTab.toLowerCase()],
    fetchProducts
  );



  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
      {isLoading &&
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-foreground">
            <RiLoaderLine className="w-5 h-5 animate-spin" />
            <span>Products is loading...</span>
          </motion.div>
        </div>
      }
      {products?.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
          <>
            {products?.map((product: Product) => (
              <AnimatePresence key={product?._id}>
                <motion.div
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard key={product?._id} product={product} />
                </motion.div>
              </AnimatePresence>
            ))}
          </>
        </div>) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )
      }
      {/* <NoProductAvailable selectedTab={selectedTab} /> */}
    </Container>
  );
};

export default ProductGrid;
