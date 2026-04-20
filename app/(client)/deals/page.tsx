"use client"
import Container from "@/components/common/Container";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/sanity.types";
import { RiFireFill } from "@remixicon/react";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import { client } from "@/sanity/lib/client";
import { DEAL_PRODUCTS } from "@/sanity/queries/query";
import useSWR from "swr";


const fetchDealProducts = () => client.fetch(DEAL_PRODUCTS);


const DealPage = () => {
    const { data: products, isLoading } = useSWR(
    "deals",
    fetchDealProducts
  );

  return (
    <div className="pt-6 pb-12">
      <Container>
        <div className="flex flex-col items-center mb-5">

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs text-primary font-semibold uppercase tracking-widest border border-primary/50 bg-primary/10 leading-2">
              <RiFireFill
                size={18}
                className="text-primary"
              /> Hot deals
            </span>

            <div className="text-center">
              <h2 className="m-0 text-2xl font-medium tracking-tight leading-snug">
                of the week
              </h2>
              <span
                className="block h-0.5 mt-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, oklch(0.879 0.169 91.605), oklch(0.555 0.163 48.998), oklch(0.473 0.137 46.201), oklch(0.879 0.169 91.605))",
                  backgroundSize: "200% auto",
                  animation: "shimmer 2.2s linear infinite",
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {isLoading && (
            <>
              {Array.from({ length: 10 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </>

          )}
          {products?.map((product: Product) => (
            <ProductCard key={product?._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default DealPage;
