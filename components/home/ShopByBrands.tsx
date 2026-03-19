import Title from "@/components/common/Title";
import Link from "next/link";
import { getAllBrands } from "@/sanity/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Brand } from "@/sanity.types";
import { Button } from "../ui/button";


const ShopByBrands = async () => {
  const brands = await getAllBrands();
  return (
    <div className="mb-10 py-5 lg:py-6">
      <div className="flex items-center gap-5 justify-between mb-10">
        <Title>Shop By Brands</Title>
        <Link
          href={"/shop"}
        >
          <Button
            variant={"ghost"}
            className="cursor-pointer"
          >
            View all
          </Button>
        </Link>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-items-center gap-2.5">
        {brands?.map((brand: Brand) => (
          <Link
            key={brand?._id}
            href={{ pathname: "/shop", query: { brand: brand?.slug?.current } }}
            className="bg-white w-34 h-24 flex items-center justify-center  rounded-xl overflow-hidden hover:border-primary hoverEffect"
          >
            {brand?.image && (
              <Image
                src={urlFor(brand?.image).url()}
                alt="brandImage"
                width={250}
                height={250}
                className="w-32 h-20 object-contain scale-100 hover:scale-110 hoverEffect"
              />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopByBrands;
