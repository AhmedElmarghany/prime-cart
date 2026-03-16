import { Product } from "@/sanity.types";
import { Button } from "@/components/ui/button";
import { RiSubtractFill, RiAddLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface Props {
  product: Product;
  className?: string;
}
const QuantityButtons = ({ className }: Props) => {

  const handleRemoveProduct = () => {
    // Add Logic here
    toast.success("Quantity Decreased");
  };

  const handleAddToCart = () => {
    // Add Logic here
    toast.success("Quantity Increased");
  };

  return (
    <div className={cn("flex items-center gap-1 pb-1 text-base", className)}>
      <Button
        onClick={handleRemoveProduct}
        variant="outline"
        size="icon"
      // Add Logic here
        className="w-6 h-6 border cursor-pointer"
      >
        <RiSubtractFill />
      </Button>
      <span className="font-semibold text-sm w-6 text-center text-foreground">
        {/* Add Logic here */}
        1
      </span>
      <Button
        onClick={handleAddToCart}
        variant="outline"
        size="icon"
        // Add Logic here
        // disabled={isOutOfStock}
        className="w-6 h-6 border cursor-pointer"
      >
        <RiAddLine />
      </Button>
    </div>
  );
};

export default QuantityButtons;
