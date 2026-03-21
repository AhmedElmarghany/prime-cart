import CategoryProducts from "@/components/product/CategoryProducts";
import Container from "@/components/common/Container";
import Title from "@/components/common/Title";
import { getCategories } from "@/sanity/queries";

const CategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const categories = await getCategories();
  const { slug } = await params;
  return (
    <div className="py-10">
      <Container>
        <Title>
          Products by Category:{" "}
          <span className="text-primary capitalize tracking-wide leading-snug">
            {slug && slug?.replace(/-/g, " ")}
          </span>
        </Title>
        <CategoryProducts categories={categories} />
      </Container>
    </div>
  );
};

export default CategoryPage;
