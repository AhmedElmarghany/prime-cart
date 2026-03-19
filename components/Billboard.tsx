import { Title } from "@/components/ui/text";
import Link from "next/link";
import Image from "next/image";
import banner_1 from "@/public/images/banner/banner_1.png";
import { Button } from "./ui/button";
 
const Billboard = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl px-10 lg:px-24 py-16 md:py-0 flex items-center justify-center md:justify-between">
 
      {/* Base gradient layer */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.555 0.163 48.998 / 0.95) 0%, oklch(0.473 0.137 46.201 / 0.9) 40%, oklch(0.214 0.009 43.1) 100%)",
        }}
      />
 
      {/* Radial glow — top-left warmth */}
      <div
        className="absolute -top-20 -left-20 w-105 h-105 rounded-full -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.879 0.169 91.605 / 0.45) 0%, transparent 70%)",
        }}
      />
 
      {/* Radial glow — bottom-right depth */}
      <div
        className="absolute -bottom-16 -right-10 w-95 h-95 rounded-full -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.666 0.179 58.318 / 0.35) 0%, transparent 65%)",
        }}
      />
 
      {/* Large decorative ring */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-105 h-105 rounded-full border -z-10 opacity-20"
        style={{ borderColor: "oklch(0.879 0.169 91.605)" }}
      />
      <div
        className="absolute -right-12 top-1/2 -translate-y-1/2 w-75 h-75 rounded-full border -z-10 opacity-15"
        style={{ borderColor: "oklch(0.879 0.169 91.605)" }}
      />
 
      {/* Subtle dot-grid texture (SVG data-uri) */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='2' cy='2' r='1.5' fill='%23fff'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
        }}
      />
 
      {/* Diagonal shine streak */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          background:
            "linear-gradient(115deg, transparent 35%, oklch(1 0 0 / 0.5) 50%, transparent 65%)",
        }}
      />
 
      {/* Content */}
      <div className="space-y-5 text-center md:text-start z-10">
        <Title className="text-[oklch(0.987_0.022_95.277)] drop-shadow-sm">
          Grab Upto 30% off on <br />
          Selected headphones
        </Title>
        <Button>
          <Link href={"/shop"} className="hoverEffect cursor-pointer">
            Buy Now
          </Link>
        </Button>
      </div>
 
      <div className="z-10">
        {/* Soft glow behind the product image */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-2xl z-0 opacity-40 hidden md:block"
          style={{
            background:
              "radial-gradient(circle, oklch(0.879 0.169 91.605 / 0.7) 0%, transparent 70%)",
          }}
        />
        <Image
          src={banner_1}
          alt="banner"
          className="hidden md:inline-flex w-96 relative drop-shadow-2xl"
        />
      </div>
    </div>
  );
};
 
export default Billboard;