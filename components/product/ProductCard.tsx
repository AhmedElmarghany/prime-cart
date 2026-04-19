import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { RiStarFill } from "@remixicon/react";
import { RiFireFill } from "@remixicon/react";
import PriceView from "./PriceView";
import Title from "../common/Title";
import ProductTopMenu from "./ProductTopMenu";
import AddToCartButton from "../buttons/AddToCartButton";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="text-sm border rounded-2xl border-border group bg-card">
      <div className="relative group overflow-hidden rounded-t-2xl bg-secondary">
        {product?.images && (
          <Link href={`/product/${product?.slug?.current}`}>
            <Image
              src={urlFor(product.images[0]).url()}
              alt="productImage"
              width={500}
              height={500}
              priority
              className={`w-full h-64 object-contain overflow-hidden transition-transform bg-accent duration-500 
              ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
            />
          </Link>
        )}
        <ProductTopMenu product={product} />
        {product?.status === "sale" ? (
          <p className="absolute top-4 leading-4 left-2 z-10 text-xs border border-border px-2 rounded-full group-hover:text-primary group-hover:border-primary hoverEffect">
            SALE
          </p>
        ) : (
          <Link
            href={"/deal"}
            className="absolute top-2 left-2 z-10 border border-border p-1 rounded-full group-hover:border-primary
             hoverEffect"
          >
            <RiFireFill
              size={18}
              className="text-primary"
            />
          </Link>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        {product?.categories && (
          <p className="uppercase line-clamp-1 text-xs font-medium text-muted-foreground">
            {product.categories.map((cat) => cat).join(", ")}
          </p>
        )}
        <Title className="text-sm line-clamp-1">{product?.name}</Title>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <RiStarFill
                key={index}
                size={16}
                className={`${index < 4 ? "text-primary" : " text-primary/20"} text-[8px]`}
              />
            ))}
          </div>
          <p className="text-foreground text-xs tracking-wide">4 Reviews</p>
        </div>

        <div className="flex items-center gap-2.5">
          <p className="font-medium">In Stock</p>
          <p
            className={`${product?.stock === 0 ? "text-destructive" : "text-foreground font-semibold"}`}
          >
            {(product?.stock as number) > 0 ? product?.stock : "unavailable"}
          </p>
        </div>

        <PriceView
          price={product?.price}
          discount={product?.discount}
          className="text-sm"
        />
        <AddToCartButton product={product} className="w-36 rounded-full" />
      </div>
    </div>
  );
};

export default ProductCard;
