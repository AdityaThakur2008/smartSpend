// components/layout/navbar.tsx
import Logo from "@/components/shared/logo";
import NavbarActions from "./NavbarActions";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        <Logo />
        <NavbarLinks />
        <NavbarActions />
      </div>
    </header>
  );
}
