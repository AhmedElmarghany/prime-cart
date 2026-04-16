import { RiEqualizerLine } from "@remixicon/react";
import CategoryList from "./CategoryList";
import BrandList from "./BrandList";
import PriceList from "./PriceList";
import { BRANDS_QUERYResult, Category } from "@/sanity.types";

import { Dispatch, SetStateAction } from "react";


interface SidebarProps {
    categories: Category[];
    brands: BRANDS_QUERYResult;
    selectedCategory: string | null;
    setSelectedCategory: Dispatch<SetStateAction<string | null>>;
    selectedBrand: string | null;
    setSelectedBrand: Dispatch<SetStateAction<string | null>>;
    selectedPrice: string | null;
    setSelectedPrice: Dispatch<SetStateAction<string | null>>;
    resetAll: () => void;
    hasFilters: boolean;
    setDrawerOpen: (val: boolean) => void;
}


export const SidebarContent = ({
    categories,
    brands,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    selectedPrice,
    setSelectedPrice,
    resetAll,
    hasFilters,
    setDrawerOpen,
}: SidebarProps) => {


    return (
        <div className="flex flex-col gap-1 pb-6">
            {/* Sidebar header */}
            <div className="px-4 py-3 mb-1 flex items-center gap-2 border-b border-border bg-muted">
                <RiEqualizerLine className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Filters
                </span>
                {hasFilters && (
                    <button
                        onClick={resetAll}
                        className="hoverEffect ml-auto text-xs font-semibold text-primary hover:text-primary/70 underline underline-offset-2 cursor-pointer"
                    >
                        Reset all
                    </button>
                )}
            </div>
            <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={(val) => {
                    setSelectedCategory(val);
                    setDrawerOpen(false);
                }}
            />
            <div className="mx-4 h-px bg-border" />
            <BrandList
                brands={brands}
                selectedBrand={selectedBrand}
                setSelectedBrand={(val) => {
                    setSelectedBrand(val);
                    setDrawerOpen(false);
                }}
            />
            <div className="mx-4 h-px bg-border" />
            <PriceList
                selectedPrice={selectedPrice}
                setSelectedPrice={(val) => {
                    setSelectedPrice(val);
                    setDrawerOpen(false);
                }}
            />
        </div>
    );
};