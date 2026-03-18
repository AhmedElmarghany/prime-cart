import Container from "@/components/common/Container";
import ProductGrid from "@/components/product/ProductGrid";
import HomeBanner from "@/components/HomeBanner";
import { getCategories } from "@/sanity/queries";
import HomeCategories from "@/components/home/HomeCategories";

export default async function Home() {
  const categories = await getCategories(6);

  return (
    <>
      <Container>
        <HomeBanner />
        <ProductGrid />
        <HomeCategories categories={categories} />
      </Container>
    </>
  );
}
