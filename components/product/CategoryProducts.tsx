"use client";

import { Category, Product } from "@/sanity.types";
import { useParams, useRouter } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { AnimatePresence, motion } from "motion/react";
import { RiLoaderLine, RiLayoutGridLine } from "@remixicon/react";
import NoProductAvailable from "./NoProductAvailable";
import ProductCard from "./ProductCard";
import useSWR from "swr";
import { CATEGORY_PRODUCTS_QUERY } from "@/sanity/queries/query";

interface Props {
  categories: Category[];
}

const fetchProducts = ([, slug]: [string, string]) => {
  return client.fetch(CATEGORY_PRODUCTS_QUERY, { categorySlug: slug });
};

const CategoryProducts = ({ categories }: Props) => {
  const params = useParams();
  const currentSlug = params.slug as string;
  const router = useRouter();

  const handleCategoryChange = (newSlug: string) => {
    if (newSlug === currentSlug) return;
    router.push(`/category/${newSlug}`, { scroll: false });
  };

  const { data: products, isLoading } = useSWR(
    currentSlug ? ["category-products", currentSlug] : null,
    fetchProducts,
    { keepPreviousData: true }
  );

  return (
    <div className="py-6 flex flex-col lg:flex-row items-start gap-6">

      {/* Sidebar */}
      <aside className="w-full lg:w-52 shrink-0">
        {/* Mobile: horizontal scrollable pill row */}
        <div className="flex lg:hidden gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {categories?.map((item) => {
            const active = item?.slug?.current === currentSlug;
            return (
              <button
                key={item?._id}
                onClick={() => handleCategoryChange(item?.slug?.current as string)}
                className={`
                  hoverEffect snap-start shrink-0 px-4 py-2 rounded-full text-sm font-semibold capitalize
                  border transition-all whitespace-nowrap cursor-pointer
                  ${active
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-muted text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }
                `}
              >
                {item?.title}
              </button>
            );
          })}
        </div>

        {/* Desktop: vertical card list */}
        <div className="hidden lg:flex flex-col rounded-2xl border border-border overflow-hidden bg-card">
          {/* Sidebar header */}
          <div className="px-4 py-3 border-b border-border bg-muted/40 flex items-center gap-2">
            <RiLayoutGridLine className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Categories
            </span>
          </div>

          {categories?.map((item, index) => {
            const active = item?.slug?.current === currentSlug;
            return (
              <button
                key={item?._id}
                onClick={() => handleCategoryChange(item?.slug?.current as string)}
                className={`
                  hoverEffect group relative flex items-center gap-3 px-4 py-3 text-sm font-medium capitalize
                  cursor-pointer text-left transition-all
                  ${index !== categories.length - 1 ? "border-b border-border" : ""}
                  ${active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:bg-muted/60 hover:text-foreground"
                  }
                `}
              >
                {/* Active indicator bar */}
                <span
                  className={`
                    absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full transition-all duration-300
                    ${active ? "bg-primary opacity-100" : "opacity-0"}
                  `}
                />
                <span className="pl-1">{item?.title}</span>
                {active && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Products panel */}
      <section className="flex-1 min-w-0">

        {/* Panel header */}
        <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground capitalize">
              {currentSlug?.replace(/-/g, " ")}
            </h2>
            {!isLoading && products?.length > 0 && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                {products.length}
              </span>
            )}
          </div>
          {!isLoading && products?.length > 0 && (
            <p className="text-xs text-muted-foreground hidden sm:block">
              Showing all {products.length} items
            </p>
          )}
        </div>

        {/* States */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-72 gap-3 rounded-2xl">
            <div className="p-3 rounded-full bg-primary/10">
              <RiLoaderLine className="w-5 h-5 animate-spin text-primary" />
            </div>
            <p className="text-sm text-muted-foreground">Loading products…</p>
          </div>
        ) : products?.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3"
          >
            <AnimatePresence mode="popLayout">
              {products?.map((product: Product, i: number) => (
                <motion.div
                  key={product._id}
                  layout
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.04, ease: "easeOut" }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <NoProductAvailable selectedTab={currentSlug} className="mt-0 w-full" />
        )}
      </section>
    </div>
  );
};

export default CategoryProducts;