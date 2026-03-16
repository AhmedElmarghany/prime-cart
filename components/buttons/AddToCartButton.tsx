"use client";
import { Product } from "@/sanity.types";
import { Button } from "@/components/ui/button";
import { RiShoppingBag3Line as ShoppingBag } from "@remixicon/react";
import PriceFormatter from "@/components/product/PriceFormatter";
import QuantityButtons from "./QuantityButtons";
import { toast } from "sonner";

interface Props {
  product: Product;
  className?: string;
}

const AddToCartButton = ({ product }: Props) => {

  const handleAddToCart = () => {
    // Add Logic here
    toast.success(
      `${product?.name?.substring(0, 12)}... added successfully!`
    );
  };
  return (
    <div className="w-full h-12 flex items-center">
      {/* Add Logic here */}
      {false ? (
        <div className="text-sm w-full">
          <div className="flex items-center justify-between">
            <span className="text-xs text-foreground">Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className="flex items-center justify-between border-t pt-1">
            <span className="text-xs font-semibold">Subtotal</span>
            <PriceFormatter
              // Add Logic here
              amount={526}
            />
          </div>
        </div>
      ) : (
        <Button
          onClick={handleAddToCart}
          // Add Logic here
          // disabled={isOutOfStock}
          className="w-full hoverEffect"
        >
          {/* Add Logic here */}
          <ShoppingBag /> {"Add to Cart"}
        </Button>
      )}
    </div>
  );
};

export default AddToCartButton;
