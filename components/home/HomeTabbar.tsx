"use client";
import { productType } from "@/constants/data";
import Link from "next/link";
import { Button } from "../ui/button";
interface Props {
  selectedTab: string;
  onTabSelect: (tab: string) => void;
}

const HomeTabbar = ({ selectedTab, onTabSelect }: Props) => {
  return (
    <div className="flex items-center flex-wrap gap-5 justify-between">
      <div className="flex items-center gap-1.5 text-sm font-semibold">
        <div className="flex items-center gap-1.5 md:gap-3">
          {productType?.map((item) => (
            <Button
              onClick={() => onTabSelect(item?.title)}
              key={item?.title}
              variant={selectedTab === item?.title ? "default" : "outline"}
              className="cursor-pointer"
            >
              {item?.title}
            </Button>
          ))}
        </div>
      </div>
      <Link
        href={"/shop"}
      >
        <Button
          variant={"ghost"}
          className="cursor-pointer"
        >
          See all
        </Button>
      </Link>
    </div>
  );
};

export default HomeTabbar;
