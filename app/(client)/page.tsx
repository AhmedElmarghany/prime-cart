import Container from "@/components/common/Container";
import ProductGrid from "@/components/product/ProductGrid";
// import HomeBanner from "@/components/HomeBanner";
import { getCategories } from "@/sanity/queries";
import HomeCategories from "@/components/home/HomeCategories";
import ShopByBrands from "@/components/home/ShopByBrands";
import CustomerServices from "@/components/home/CustomerServices";
import LatestBlog from "@/components/home/LatestBlog";
import Billboard from "@/components/Billboard";

export default async function Home() {
  const categories = await getCategories(6);

  return (
    <>
      <Container>
        {/* <HomeBanner /> */}
        <Billboard />
        <ProductGrid />
        <HomeCategories categories={categories} />
        <ShopByBrands />
        <CustomerServices />
        <LatestBlog />
      </Container>
    </>
  );
}
