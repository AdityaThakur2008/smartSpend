// components/layout/NavbarActions.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NavbarActions() {
  return (
    <div className="flex items-center gap-3">
      <Button className="rounded-lg font-medium cursor-pointer" variant="outline" asChild>
        <Link href="/login">Login</Link>
      </Button>

      <Button className="rounded-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer" asChild>
        <Link href="/register">Get Started</Link>
      </Button>
    </div>
  );
}
