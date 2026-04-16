import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const priceArray = [
  { title: "Under $100", value: "0-100" },
  { title: "$100 – $200", value: "100-200" },
  { title: "$200 – $300", value: "200-300" },
  { title: "$300 – $500", value: "300-500" },
  { title: "Over $500", value: "500-10000" },
];

interface Props {
  selectedPrice?: string | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string | null>>;
}

const PriceList = ({ selectedPrice, setSelectedPrice }: Props) => {
  return (
    <div className="px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Price Range
      </p>
      <RadioGroup value={selectedPrice || ""} className="space-y-0.5">
        {priceArray.map((price) => {
          const active = selectedPrice === price.value;
          return (
            <div
              key={price.value}
              onClick={() => setSelectedPrice(price.value)}
              className={`
                hoverEffect flex items-center gap-2.5 px-2 py-2 rounded-lg cursor-pointer
                ${active ? "bg-primary/10" : "hover:bg-muted/60"}
              `}
            >
              <RadioGroupItem
                value={price.value}
                id={price.value}
                className="shrink-0"
              />
              <Label
                htmlFor={price.value}
                className={`cursor-pointer text-sm ${
                  active ? "font-semibold text-primary" : "font-normal text-foreground"
                }`}
              >
                {price.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
      {selectedPrice && (
        <button
          onClick={() => setSelectedPrice(null)}
          className="hoverEffect text-xs font-medium mt-3 text-muted-foreground hover:text-primary underline underline-offset-2 cursor-pointer"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default PriceList;