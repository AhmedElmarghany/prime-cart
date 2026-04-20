import Container from "@/components/common/Container";
import ProductGrid from "@/components/product/ProductGrid";
// import HomeBanner from "@/components/HomeBanner";
import HomeCategories from "@/components/home/HomeCategories";
import ShopByBrands from "@/components/home/ShopByBrands";
import CustomerServices from "@/components/home/CustomerServices";
import LatestBlog from "@/components/home/LatestBlog";
import Billboard from "@/components/Billboard";

export default function Home() {

  return (
    <>
      <Container>
        {/* <HomeBanner /> */}
        <Billboard />
        <ProductGrid />
        <HomeCategories/>
        <ShopByBrands />
        <CustomerServices />
        <LatestBlog />
      </Container>
    </>
  );
}
