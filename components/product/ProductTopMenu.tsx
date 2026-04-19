"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
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
      <Tooltip>
        <TooltipTrigger>
          <AddToFavourite product={product}/>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to WishList</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ProductTopMenu;
