"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import HomeTabbar from "./HomeTabbar";
import { productType } from "@/constants/data";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");


  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <HomeTabbar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </Container>
  );
};

export default ProductGrid;
