import Container from "./Container";
import FooterInfo from "@/components/common/FooterInfo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "@/components/ui/text";
import { categoriesData, quickLinksData } from "@/constants/data";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <Container>
        <FooterInfo />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 flex md:block flex-col items-center text-center md:text-left">
            {/* logo */}
            <h2 className="text-2xl text-primary font-black tracking-wider uppercase hoverEffect group font-sans">
              Prime {` `}
              <span
                className="font-bold hoverEffect lowercase">
                Cart
              </span>
            </h2>

            <SubText className="max-w-2/3 text-center md:max-w-full md:text-left">
              Discover curated furniture collections at Shopcartyt, blending
              style and comfort to elevate your living spaces.
            </SubText>
            <SocialMedia
              className="text-foreground"
              iconClassName="border-border hover:border-primary hover:text-primary"
              tooltipClassName="bg-foreground text-background"
            />
          </div>
          <div>
            <SubTitle>Quick Links</SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-primary hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SubTitle>Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-primary hoverEffect font-medium"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-center md:text-left">
            <SubTitle>Newsletter</SubTitle>
            <SubText>
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-secondary-foreground">
          <div>
            © {new Date().getFullYear()} <span className="text-sm text-primary font-black tracking-wider uppercase hoverEffect group font-sans">Prime</span> <span className="text-sm text-primary font-bold tracking-wider hoverEffect group font-sans">cart </span>. All
            rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
