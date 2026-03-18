import Container from "@/components/common/Container";
import ProductGrid from "@/components/product/ProductGrid";
import HomeBanner from "@/components/HomeBanner";
import { getCategories } from "@/sanity/queries";
import HomeCategories from "@/components/home/HomeCategories";
import ShopByBrands from "@/components/home/ShopByBrands";
import CustomerServices from "@/components/home/CustomerServices";

export default async function Home() {
  const categories = await getCategories(6);

  return (
    <>
      <Container>
        <HomeBanner />
        <ProductGrid />
        <HomeCategories categories={categories} />
        <ShopByBrands />
        <CustomerServices />
      </Container>
    </>
  );
}
