import Container from "@/components/common/Container";
import ProductGrid from "@/components/home/ProductGrid";
import HomeBanner from "@/components/HomeBanner";

export default function Home() {
  return (
    <>
      <Container>
        <HomeBanner />
        <ProductGrid />
      </Container>
    </>
  );
}
