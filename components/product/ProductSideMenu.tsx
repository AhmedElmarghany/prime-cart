"use client";
import { cn } from "@/lib/utils";
import { Product } from "@/sanity.types";
import { RiHeartLine } from "@remixicon/react";
import { toast } from "sonner";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const ProductSideMenu = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    if (product?._id) {
      toast(`${product?.name?.substring(0, 12)}... added to wishlist!`, { position: "bottom-right", icon: <RiHeartLine /> })
    }
  };
  return (
    <div
      className={cn("absolute top-2 right-2 hover:cursor-pointer", className)}
    >
      <Tooltip>
        <TooltipTrigger>
          <div
            onClick={handleFavorite}
            className={`p-2 rounded-full hover:text-foreground hoverEffect border group/heart hover:border-primary cursor-pointer`}
          >
            <RiHeartLine size={18} className="text-foreground group-hover/heart:text-primary" />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to WishList</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ProductSideMenu;
