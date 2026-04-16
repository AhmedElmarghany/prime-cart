import { BRANDS_QUERYResult } from "@/sanity.types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  brands: BRANDS_QUERYResult;
  selectedBrand?: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Brands
      </p>
      <RadioGroup value={selectedBrand || ""} className="space-y-0.5">
        {brands?.map((brand) => {
          const active = selectedBrand === brand?.slug?.current;
          return (
            <div
              key={brand?._id}
              onClick={() => setSelectedBrand(brand?.slug?.current as string)}
              className={`
                hoverEffect flex items-center gap-2.5 px-2 py-2 rounded-lg cursor-pointer
                ${active ? "bg-primary/10" : "hover:bg-muted/60"}
              `}
            >
              <RadioGroupItem
                value={brand?.slug?.current as string}
                id={brand?.slug?.current}
                className="shrink-0"
              />
              <Label
                htmlFor={brand?.slug?.current}
                className={`cursor-pointer text-sm capitalize ${
                  active ? "font-semibold text-primary" : "font-normal text-foreground"
                }`}
              >
                {brand?.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
      {selectedBrand && (
        <button
          onClick={() => setSelectedBrand(null)}
          className="hoverEffect text-xs font-medium mt-3 text-muted-foreground hover:text-primary underline underline-offset-2 cursor-pointer"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default BrandList;