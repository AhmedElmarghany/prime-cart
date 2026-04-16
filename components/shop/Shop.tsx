"use client";

import { BRANDS_QUERYResult, Category, Product } from "@/sanity.types";
import { useState } from "react";
import Container from "@/components/common/Container";
import { useSearchParams } from "next/navigation";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "@/components/product/NoProductAvailable";
import ProductCard from "@/components/product/ProductCard";
import { RiLoaderLine, RiEqualizerLine, RiCloseLine } from "@remixicon/react";
import { FILTERED_PRODUCTS_QUERY } from "@/sanity/queries/query";
import { SidebarContent } from "./SidebarFilter";
import useSWR from "swr";

interface Props {
  categories: Category[];
  brands: BRANDS_QUERYResult;
}

const Shop = ({ categories, brands }: Props) => {
  const searchParams = useSearchParams();
  const brandParams = searchParams?.get("brand");
  const categoryParams = searchParams?.get("category");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParams || null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(brandParams || null);
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);

  const hasFilters = selectedCategory !== null || selectedBrand !== null || selectedPrice !== null;

  const resetAll = () => {
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedPrice(null);
  };

  const fetchFilteredProducts = async (
    [_key, selectedCategory, selectedBrand, selectedPrice]: [
      string,
      string | null,
      string | null,
      string | null]) => {
    let minPrice = 0;
    let maxPrice = 100_000;

    if (selectedPrice) {
      const [min, max] = selectedPrice.split("-").map(Number);
      minPrice = min;
      maxPrice = max;
    }

    return client.fetch(FILTERED_PRODUCTS_QUERY, {
      selectedCategory,
      selectedBrand,
      minPrice,
      maxPrice,
    });

  };

  const { data: products, isLoading } = useSWR(
    ["products", selectedCategory, selectedBrand, selectedPrice],
    fetchFilteredProducts,
    {
      keepPreviousData: true,
    }
  )

  return (
    <div className="border-t border-border">
      <Container className="py-6">

        {/* ── Top bar ── */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">Shop</h1>
            {!isLoading && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {products.length} product{products.length !== 1 ? "s" : ""} found
              </p>
            )}
          </div>

          {/* Mobile filter trigger */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="lg:hidden hoverEffect flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-muted/40 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5"
          >
            <RiEqualizerLine className="w-4 h-4" />
            Filters
            {hasFilters && (
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                {[selectedCategory, selectedBrand, selectedPrice].filter(Boolean).length}
              </span>
            )}
          </button>
        </div>

        {/* ── Mobile filter drawer ── */}
        {drawerOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setDrawerOpen(false)}
            />
            {/* Drawer */}
            <div className="fixed inset-y-0 left-0 z-50 w-72 bg-background border-r border-border overflow-y-auto scrollbar-hide lg:hidden">
              <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                <span className="font-semibold text-sm text-foreground">Filters</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="hoverEffect p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground"
                >
                  <RiCloseLine className="w-4 h-4" />
                </button>
              </div>
              {/* <SidebarContent /> */}
              <SidebarContent
                categories={categories}
                brands={brands}
                selectedCategory={selectedCategory}
                setSelectedCategory={(val) => {
                  setSelectedCategory(val);
                  setDrawerOpen(false);
                }}
                selectedBrand={selectedBrand}
                setSelectedBrand={(val) => {
                  setSelectedBrand(val);
                  setDrawerOpen(false);
                }}
                selectedPrice={selectedPrice}
                setSelectedPrice={(val) => {
                  setSelectedPrice(val);
                  setDrawerOpen(false);
                }}
                resetAll={resetAll}
                hasFilters={hasFilters}
                setDrawerOpen={setDrawerOpen}
              />
            </div>
          </>
        )}

        {/* ── Main layout ── */}
        <div className="flex gap-6">

          {/* Desktop sidebar */}
          <aside className="hidden lg:flex flex-col w-56 xl:w-64 shrink-0 sticky top-20 self-start max-h-[calc(100vh-120px)] overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card">
            {/* <SidebarContent /> */}
            <SidebarContent
              categories={categories}
              brands={brands}
              selectedCategory={selectedCategory}
              setSelectedCategory={(val) => {
                setSelectedCategory(val);
                setDrawerOpen(false);
              }}
              selectedBrand={selectedBrand}
              setSelectedBrand={(val) => {
                setSelectedBrand(val);
                setDrawerOpen(false);
              }}
              selectedPrice={selectedPrice}
              setSelectedPrice={(val) => {
                setSelectedPrice(val);
                setDrawerOpen(false);
              }}
              resetAll={resetAll}
              hasFilters={hasFilters}
              setDrawerOpen={setDrawerOpen}
            />
          </aside>

          {/* Products area */}
          <section className="flex-1 min-w-0">
            {/* Active filter chips */}
            {hasFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {selectedCategory.replace(/-/g, " ")}
                    <button onClick={() => setSelectedCategory(null)} className="hover:text-primary/60 hoverEffect">
                      <RiCloseLine className="w-3 h-3 cursor-pointer" />
                    </button>
                  </span>
                )}
                {selectedBrand && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    {selectedBrand.replace(/-/g, " ")}
                    <button onClick={() => setSelectedBrand(null)} className="hover:text-primary/60 hoverEffect">
                      <RiCloseLine className="w-3 h-3 cursor-pointer" />
                    </button>
                  </span>
                )}
                {selectedPrice && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    ${selectedPrice.replace("-", " – $").replace("-10000", "+")}
                    <button onClick={() => setSelectedPrice(null)} className="hover:text-primary/60 hoverEffect">
                      <RiCloseLine className="w-3 h-3 cursor-pointer" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {isLoading ? (
              <div className="flex flex-col items-center justify-center min-h-80 gap-3 rounded-2xl border border-dashed border-border bg-muted/20">
                <div className="p-3 rounded-full bg-primary/10">
                  <RiLoaderLine className="w-5 h-5 animate-spin text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">Loading products…</p>
              </div>
            ) : products?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {products.map((product: Product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            ) : (
              <NoProductAvailable className="mt-0 w-full" />
            )}
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Shop;