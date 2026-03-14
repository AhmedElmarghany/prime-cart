import { FC } from "react";
import { RiCloseLargeFill } from "@remixicon/react";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "@/components/common/SocialMedia";
import { useOutsideClick } from "@/hooks";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full text-primary-foreground ${isOpen ? "translate-x-0" : "-translate-x-full"
        } hoverEffect`}
    >
      <div
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-primary  h-screen p-10 flex flex-col gap-6"
      >
        <div className="flex items-center justify-between gap-5">
          {/* logo */}
          <h2 className="text-2xl text-primary-foreground font-black tracking-wider uppercase hoverEffect group font-sans">
            Prime {` `}
            <span
              className="font-bold hoverEffect lowercase">
              Cart
            </span>
          </h2>
          <button
            onClick={onClose}
          >
            <RiCloseLargeFill className="text-foreground hover:text-background hover:cursor-pointer hoverEffect" />
          </button>
        </div>

        <div className="flex flex-col space-y-3.5 font-semibold tracking-wide">
          {headerData?.map((item) => (
            <Link
              href={item?.href}
              key={item?.title}
              className={`hoverEffect text-primary-foreground hover:text-foreground ${pathname === item?.href && "font-bold before:content-['•']"
                }`}
            >
              {item?.title}
            </Link>
          ))}
        </div>
        <SocialMedia
          tooltipClassName="bg-foreground text-background"
        />
      </div>
    </div>
  );
};

export default SideMenu;
