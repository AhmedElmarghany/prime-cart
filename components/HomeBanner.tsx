import { Title } from "@/components/ui/text";
import Link from "next/link";
import Image from "next/image";
import banner_1 from "@/public/images/banner/banner_1.png";
import { Button } from "./ui/button";

const HomeBanner = () => {
  return (
    <div className="py-16 md:py-0 bg-primary/40 rounded-2xl px-10 lg:px-24 flex items-center justify-center md:justify-between">
      <div className="space-y-5 text-center md:text-start">
        <Title>
          Grab Upto 30% off on <br />
          Selected headphones
        </Title>
        <Button>
          <Link
            href={"/shop"}
            className="hoverEffect cursor-pointer"
          >
            Buy Now
          </Link>
        </Button>
      </div>
      <div>
        <Image
          src={banner_1}
          alt="banner"
          className="hidden md:inline-flex w-96"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
