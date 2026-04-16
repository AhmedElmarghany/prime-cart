import { Category } from "@/sanity.types";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "../ui/label";

interface Props {
  categories: Category[];
  selectedCategory?: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategoryList = ({ categories, selectedCategory, setSelectedCategory }: Props) => {
  return (
    <div className="px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
        Categories
      </p>
      <RadioGroup value={selectedCategory || ""} className="space-y-0.5">
        {categories?.map((category) => {
          const active = selectedCategory === category?.slug?.current;
          return (
            <div
              key={category?._id}
              onClick={() => setSelectedCategory(category?.slug?.current as string)}
              className={`
                hoverEffect flex items-center gap-2.5 px-2 py-2 rounded-lg cursor-pointer
                ${active ? "bg-primary/10" : "hover:bg-muted/60"}
              `}
            >
              <RadioGroupItem
                value={category?.slug?.current as string}
                id={category?.slug?.current}
                className="shrink-0"
              />
              <Label
                htmlFor={category?.slug?.current}
                className={`cursor-pointer text-sm capitalize ${
                  active ? "font-semibold text-primary" : "font-normal text-foreground"
                }`}
              >
                {category?.title}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
      {selectedCategory && (
        <button
          onClick={() => setSelectedCategory(null)}
          className="hoverEffect text-xs font-medium mt-3 text-muted-foreground hover:text-primary underline underline-offset-2 cursor-pointer"
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default CategoryList;