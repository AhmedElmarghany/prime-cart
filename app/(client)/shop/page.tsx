import Shop from "@/components/shop/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";

const ShopPage = async () => {
  const categories = await getCategories();
  const brands = await getAllBrands();
  return (
      <Shop categories={categories} brands={brands} />
  );
};

export default ShopPage;
