import { Product } from "@/sanity.types";
import { getBrand } from "@/sanity/queries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProductCharacteristics = async ({
  product,
}: {
  product: Product | null | undefined;
}) => {
  const brand = await getBrand(product?.slug?.current as string);

  const specs = [
    { label: "Brand", value: brand?.[0]?.brandName ?? "—" },
    { label: "Collection", value: "2025" },
    { label: "Type", value: product?.variant ?? "—" },
    {
      label: "Availability",
      value: product?.stock ? "In Stock" : "Out of Stock",
      highlight: product?.stock ? "success" : "danger",
    },
  ] as const;

  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1" className="rounded-2xl px-4">
        <AccordionTrigger className="text-sm font-semibold py-3">
          {product?.name}: Specifications
        </AccordionTrigger>
        <AccordionContent className="pb-3">
          <div className="space-y-1">
            {specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
              >
                <span className="text-xs text-muted-foreground font-medium">{spec.label}</span>
                {"highlight" in spec ? (
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      spec.highlight === "success"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {spec.value}
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-foreground capitalize">
                    {spec.value as string}
                  </span>
                )}
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductCharacteristics;