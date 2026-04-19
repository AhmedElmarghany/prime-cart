"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import AddToFavourite from "../buttons/AddToFavourite";

const ProductTopMenu = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  return (
    <div
      className={cn("absolute top-2 right-2 hover:cursor-pointer", className)}
    >
      <AddToFavourite product={product}/>
    </div>
  );
};

export default ProductTopMenu;
