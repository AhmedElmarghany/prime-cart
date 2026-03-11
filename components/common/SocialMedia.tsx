import { RiFacebookLine, RiTwitterXLine, RiLinkedinLine, RiYoutubeLine } from "@remixicon/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}
const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <RiYoutubeLine className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com",
    icon: <RiLinkedinLine className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com",
    icon: <RiFacebookLine className="w-5 h-5" />,
  },
  {
    title: "X",
    href: "https://www.x.com",
    icon: <RiTwitterXLine className="w-5 h-5" />,
  }
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-foreground hover:border-foreground hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-background text-foreground font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
