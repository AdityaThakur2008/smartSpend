import Link from "next/link";
import { navLinks } from "@/constants/navigation";

export default function NavbarLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li key={link.title}>
            <Link
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}