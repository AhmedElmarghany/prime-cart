import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "hidden md:block text-2xl text-primary font-black tracking-wider uppercase hoverEffect group font-sans",
          className
        )}
      >
        Prime {` `}
        <span
          className={cn(
            "font-bold hoverEffect lowercase"
          )}
        >
          Cart
        </span>
      </h2>
      <h2
        className={cn(
          "md:hidden text-2xl text-primary text-nowrap font-black tracking-wider uppercase hoverEffect group font-sans",
          className
        )}
      >
        P {` `}
        <span
          className={cn(
            "font-bold hoverEffect lowercase max-[480px]:hidden"
          )}
        >
          Cart
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
