"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import HomeTabbar from "../home/HomeTabbar";
import { productType } from "@/constants/data";
import { client } from "@/sanity/lib/client";
import useSWR from "swr";

const query = `*[_type == "product" && variant == $variant] | order(name asc){
  ...,"categories": categories[]->title
}`;

const fetchProducts = ([_, variant]: [string, string]) =>
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
      {isLoading && <h1>Loading...</h1>}
      {products?.length ? <div>{ products.map((product: any)=>(<h2>{ product?.name }</h2>)) }</div> : <h1>No products available</h1>}
    </Container>
  );
};

export default ProductGrid;
