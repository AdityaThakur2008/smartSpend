import Logo from "@/components/shared/logo";
import NavbarActions from "./NavbarActions";
import NavbarLinks from "./NavbarLinks";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Logo */}
        <Link href="/">
          <Logo />
        </Link>
        
        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:block">
          <NavbarLinks />
        </div>
        
        {/* Desktop Actions (Hidden on Mobile) */}
        <div className="hidden md:block">
          <NavbarActions />
        </div>

        {/* Mobile Menu Toggle (Hidden on Desktop) */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

      </div>
    </header>
  );
}