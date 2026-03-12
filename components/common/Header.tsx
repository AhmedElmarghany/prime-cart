import Container from "./Container";
import Logo from "./Logo";
import HeaderLinks from "@/components/common/HeaderLinks";
import SearchButton from "../buttons/SearchButton";
import CartButton from "../buttons/CartButton";
import FavoriteButton from "../buttons/FavoriteButton";
import LogInButton from "../buttons/SignInButton";
import { ModeToggle } from "../buttons/ThemeToggleButton";
import MobileMenu from "./MobileMenu";
import { Show, UserButton } from "@clerk/nextjs";

const Header = async () => {
  return (
    // <header className="sticky top-0 z-50 py-5 bg-white/70 backdrop-blur-md">
    <header className="sticky top-0 z-50 py-5 backdrop-blur-md">
      <Container className="flex items-center justify-between text-foreground">
        <div className="w-auto md:w-1/4 flex items-center gap-1.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderLinks />
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SearchButton />
          <CartButton />
          <FavoriteButton />
          <ModeToggle />
          <Show when={"signed-in"}>
            <UserButton />
          </Show>
          <Show when={"signed-out"}>
            <LogInButton />
          </Show>
        </div>
      </Container>
    </header>
  );
};

export default Header;
