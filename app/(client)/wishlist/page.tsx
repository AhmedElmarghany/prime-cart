"use client";

import useStore from "@/store";
import { Product } from "@/sanity.types";
import Container from "@/components/common/Container";
import ProductCard from "@/components/product/ProductCard";
import { ResetWishlistDialog } from "@/components/wishlist/ResetWishlistDialog";
import EmptyWishlist from "@/components/wishlist/EmptyWishlist";


const WishListProductsPage = () => {
  const { favoriteProducts } = useStore();


  if (!favoriteProducts?.length) {
    return (
      <EmptyWishlist />
    );
  }

  return (
    <Container>
      {/* Header */}
      <div className="flex items-center justify-between py-6">
        <div>
          <h1 className="text-xl font-bold text-foreground">My Wishlist</h1>
          <p className="text-xs text-muted-foreground">
            {favoriteProducts.length} saved item{favoriteProducts.length !== 1 ? "s" : ""}
          </p>
        </div>
        <ResetWishlistDialog />
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-4 pb-8">
        {favoriteProducts?.map((product: Product) => (
          <ProductCard key={product?._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default WishListProductsPage;
