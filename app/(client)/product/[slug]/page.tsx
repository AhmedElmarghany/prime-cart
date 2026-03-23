import AddToCartButton from "@/components/buttons/AddToCartButton";
import Container from "@/components/common/Container";
import FavoriteButton from "@/components/buttons/FavoriteButton";
import ImageView from "@/components/product/ImageView";
import PriceView from "@/components/product/PriceView";
import ProductCharacteristics from "@/components/product/ProductCharacteristics";
import { getProductBySlug } from "@/sanity/queries";
import {
  RiStarFill,
  RiTruckLine,
  RiCornerDownLeftLine,
  RiQuestionLine,
  RiShare2Line,
  RiSplitCellsHorizontal,
} from "@remixicon/react";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/components/product/ProductDetails";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) return notFound();

  const inStock = (product?.stock as number) > 0;

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-8 xl:gap-14 py-8 md:py-12">

        {/* ── Image panel ── */}
        {product?.images && (
          <ImageView images={product?.images} isStock={product?.stock} />
        )}

        {/* ── Info panel ── */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5">

          {/* Name + rating */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold leading-tight text-foreground">
              {product?.name}
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {product?.description}
            </p>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} size={14} className="text-primary" />
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-medium">(120 reviews)</span>
            </div>
          </div>

          {/* Price + stock */}
          <div className="flex flex-wrap items-center gap-3 py-4 border-t border-b border-border">
            <PriceView
              price={product?.price}
              discount={product?.discount}
              className="text-2xl font-bold"
            />
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                inStock
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
              }`}
            >
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3">
            <div className="flex-1">
              <AddToCartButton product={product} />
            </div>
            <FavoriteButton />
          </div>

          {/* Characteristics accordion */}
          <ProductCharacteristics product={product} />

          {/* Quick actions */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 gap-y-3 justify-between p-4 border-t border-b border-border">
            {[
              { icon: RiSplitCellsHorizontal, label: "Compare color" },
              { icon: RiQuestionLine, label: "Ask a question" },
              { icon: RiTruckLine, label: "Delivery & Return" },
              { icon: RiShare2Line, label: "Share" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                className="hoverEffect flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
              >
                <Icon size={15} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Delivery info cards */}
          <div className="rounded-2xl border border-border overflow-hidden divide-y divide-border">
            <div className="flex items-start gap-4 p-4">
              <div className="p-2 rounded-xl bg-primary/10 shrink-0">
                <RiTruckLine size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Free Delivery</p>
                <p className="text-xs text-muted-foreground mt-0.5 underline underline-offset-2 cursor-pointer hover:text-primary hoverEffect">
                  Enter your postal code for delivery availability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4">
              <div className="p-2 rounded-xl bg-primary/10 shrink-0">
                <RiCornerDownLeftLine size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Return Delivery</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Free 30-day returns.{" "}
                  <span className="underline underline-offset-2 cursor-pointer hover:text-primary hoverEffect">
                    Details
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Tabs section */}
      <ProductDetails />
    </Container>
  );
};

export default SingleProductPage;